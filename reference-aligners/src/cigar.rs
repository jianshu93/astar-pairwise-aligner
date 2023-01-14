use std::{fmt::Write, slice};

use itertools::Itertools;
use triple_accel::Edit;

use crate::{
    cost_model::{AffineCost, AffineLayerType, Cost},
    prelude::Pos,
};

use super::{Path, Seq};

#[derive(PartialEq, Eq, Clone, Copy, Debug)]
pub enum CigarOp {
    Match,
    Sub,
    /// Linear cost insertion.
    Ins,
    /// Linear cost deletion.
    Del,
    /// Affine cost insertion in given layer.
    AffineIns(usize),
    /// Affine cost deletion in given layer.
    AffineDel(usize),
    // Extra markers that do not translate to commands.
    /// Set when entering an affine layer.
    AffineOpen(usize),
    /// Set when leaving an affine layer.
    AffineClose(usize),
}

impl CigarOp {
    /// Not all operations have an actual cigar character.
    fn to_char(&self) -> Option<char> {
        match self {
            CigarOp::Match => Some('='),
            CigarOp::Sub => Some('X'),
            CigarOp::Ins => Some('I'),
            CigarOp::Del => Some('D'),
            CigarOp::AffineIns(_) => Some('I'),
            CigarOp::AffineDel(_) => Some('D'),
            _ => None,
        }
    }

    fn delta(&self) -> Option<Pos> {
        match self {
            CigarOp::Match => Some(Pos(1, 1)),
            CigarOp::Sub => Some(Pos(1, 1)),
            CigarOp::Ins | CigarOp::AffineIns(_) => Some(Pos(0, 1)),
            CigarOp::Del | CigarOp::AffineDel(_) => Some(Pos(1, 0)),
            _ => None,
        }
    }

    fn new(self) -> CigarElement {
        let cnt = match &self {
            CigarOp::AffineOpen(_) | CigarOp::AffineClose(_) => 0,
            _ => 1,
        };
        CigarElement { op: self, cnt }
    }
}

#[derive(Debug, Eq, PartialEq)]
pub struct CigarElement {
    pub op: CigarOp,
    pub cnt: usize,
}

#[derive(Default, Debug, PartialEq, Eq)]
pub struct Cigar {
    ops: Vec<CigarElement>,
}

impl ToString for Cigar {
    fn to_string(&self) -> String {
        let mut s = String::new();
        for op in &self.ops {
            if let Some(c) = op.op.to_char() {
                write!(&mut s, "{}{}", op.cnt, c).unwrap();
            }
        }
        s
    }
}

pub fn append_paths(left: &mut Path, offset: Pos, mut right: Path) {
    for p in &mut right {
        *p = *p + offset;
    }
    let Some(first) = right.first_mut() else { return; };
    if let Some(s) = left.last_mut() && s == first {
        left.pop().unwrap();
    }
    left.append(&mut right);
}

impl Cigar {
    pub fn from_triple_accel_edits(edits: &Vec<Edit>) -> Self {
        Self {
            ops: edits
                .iter()
                .map(|edit| CigarElement {
                    op: match edit.edit {
                        triple_accel::EditType::Match => CigarOp::Match,
                        triple_accel::EditType::Mismatch => CigarOp::Sub,
                        triple_accel::EditType::AGap => CigarOp::Ins,
                        triple_accel::EditType::BGap => CigarOp::Del,
                        triple_accel::EditType::Transpose => todo!(),
                    },
                    cnt: edit.count,
                })
                .collect(),
        }
    }

    fn match_pos(delta: Pos, pos: Pos, a: Seq, b: Seq) -> CigarOp {
        match delta {
            Pos(1, 1) => {
                assert!(pos.0 > 0 && pos.1 > 0);
                if a[(pos.0 - 1) as usize] == b[(pos.1 - 1) as usize] {
                    CigarOp::Match
                } else {
                    CigarOp::Sub
                }
            }
            Pos(0, 1) => CigarOp::Ins,
            Pos(1, 0) => CigarOp::Del,
            _ => panic!("Offset is not correct"),
        }
    }

    pub fn from_path(a: Seq, b: Seq, path: &Path) -> Cigar {
        if path[0] != Pos(0, 0) {
            panic!("Path must start at (0,0)!");
        }
        let mut cigar = Cigar::default();
        for (&prev, &cur) in path.iter().tuple_windows() {
            cigar.push(Self::match_pos(cur - prev, cur, a, b));
        }
        cigar
    }

    pub fn push(&mut self, command: CigarOp) {
        // TODO: Make sure that Affine{Insert,Delete} can only come after an Open/Close.
        if let Some(s) = self.ops.last_mut() && s.op == command {
            s.cnt += 1;
            return;
        }
        self.ops.push(command.new());
    }

    pub fn match_push(&mut self, num: usize) {
        if let Some(s) = self.ops.last_mut() {
            if s.op == CigarOp::Match {
                s.cnt += num;
                return;
            }
        }
        self.ops.push(CigarElement {
            op: CigarOp::Match,
            cnt: num,
        });
    }

    pub fn print(&self) {
        println!("CIGAR: {}", self.to_string());
    }

    pub fn reverse(&mut self) {
        self.ops.reverse()
    }

    pub fn append(&mut self, other: &mut Self) {
        let Some(first) = other.ops.first_mut() else {return;};
        if let Some(s) = self.ops.last_mut() && s.op == first.op{
            first.cnt += s.cnt;
            self.ops.pop().unwrap();
        }
        self.ops.append(&mut other.ops);
    }

    pub fn to_path(&self) -> Path {
        let mut position = Pos(0, 0);
        let mut path = vec![position];
        for el in &self.ops {
            for _ in 0..el.cnt {
                if let Some(offset) = el.op.delta() {
                    position = position + offset;
                    path.push(position);
                }
            }
        }
        path
    }

    pub fn to_path_with_cost<const N: usize>(&self, cm: AffineCost<N>) -> Vec<(Pos, Cost)> {
        let mut pos = Pos(0, 0);
        let mut layer = None;
        let mut cost = 0;
        let mut path = vec![(pos, cost)];

        for el in &self.ops {
            let length = el.cnt as Cost;
            match el.op {
                CigarOp::Match => {
                    assert!(layer == None);
                    for _ in 0..length {
                        pos.0 += 1;
                        pos.1 += 1;
                        path.push((pos, cost));
                    }
                }
                CigarOp::Sub => {
                    assert!(layer == None);
                    for _ in 0..length {
                        pos.0 += 1;
                        pos.1 += 1;
                        cost += cm.sub.unwrap();
                        path.push((pos, cost));
                    }
                }
                CigarOp::Ins => {
                    assert!(layer == None);
                    for _ in 0..length {
                        pos.1 += 1;
                        cost += cm.ins.unwrap();
                        path.push((pos, cost));
                    }
                }
                CigarOp::Del => {
                    assert!(layer == None);
                    for _ in 0..length {
                        pos.0 += 1;
                        cost += cm.del.unwrap();
                        path.push((pos, cost));
                    }
                }
                CigarOp::AffineIns(l) => {
                    assert_eq!(layer, Some(l));
                    assert_eq!(
                        cm.affine[l].affine_type.base(),
                        AffineLayerType::InsertLayer
                    );
                    for _ in 0..length {
                        pos.1 += 1;
                        cost += cm.affine[l].extend;
                        path.push((pos, cost));
                    }
                }
                CigarOp::AffineDel(l) => {
                    assert_eq!(layer, Some(l));
                    assert_eq!(
                        cm.affine[l].affine_type.base(),
                        AffineLayerType::DeleteLayer
                    );
                    for _ in 0..length {
                        pos.0 += 1;
                        cost += cm.affine[l].extend;
                        path.push((pos, cost));
                    }
                }
                CigarOp::AffineOpen(l) => {
                    assert_eq!(layer, None);
                    cost += cm.affine[l].open;
                    layer = Some(l)
                }
                CigarOp::AffineClose(l) => {
                    assert_eq!(layer, Some(l));
                    layer = None;
                }
            }
        }
        path
    }
}

impl<'a> IntoIterator for &'a Cigar {
    type Item = &'a CigarElement;

    type IntoIter = slice::Iter<'a, CigarElement>;

    fn into_iter(self) -> Self::IntoIter {
        self.ops.iter()
    }
}

#[cfg(test)]
pub mod test {
    use super::*;
    use crate::{
        aligners::Seq,
        prelude::{AffineCost, AffineLayerType, Cost},
    };

    pub fn verify_cigar<const N: usize>(cm: &AffineCost<N>, a: Seq, b: Seq, cigar: &Cigar) -> Cost {
        let mut pos = (0, 0);
        let mut layer = None;
        let mut cost = 0;

        for &CigarElement {
            op: command,
            cnt: length,
        } in cigar
        {
            match command {
                CigarOp::Match => {
                    assert!(layer == None);
                    for _ in 0..length {
                        assert_eq!(a.get(pos.0), b.get(pos.1));
                        pos.0 += 1;
                        pos.1 += 1;
                    }
                }
                CigarOp::Sub => {
                    assert!(layer == None);
                    for _ in 0..length {
                        assert_ne!(a.get(pos.0), b.get(pos.1));
                        pos.0 += 1;
                        pos.1 += 1;
                        cost += cm.sub.unwrap();
                    }
                }
                CigarOp::Ins => {
                    assert!(layer == None);
                    pos.1 += length;
                    cost += cm.ins.unwrap() * length as Cost;
                }
                CigarOp::Del => {
                    assert!(layer == None);
                    pos.0 += length;
                    cost += cm.del.unwrap() * length as Cost;
                }
                CigarOp::AffineIns(l) => {
                    assert_eq!(layer, Some(l));
                    assert_eq!(
                        cm.affine[l].affine_type.base(),
                        AffineLayerType::InsertLayer
                    );
                    pos.1 += length;
                    cost += cm.affine[l].extend * length as Cost;
                }
                CigarOp::AffineDel(l) => {
                    assert_eq!(layer, Some(l));
                    assert_eq!(
                        cm.affine[l].affine_type.base(),
                        AffineLayerType::DeleteLayer
                    );
                    pos.0 += length;
                    cost += cm.affine[l].extend * length as Cost;
                }
                CigarOp::AffineOpen(l) => {
                    assert_eq!(layer, None);
                    cost += cm.affine[l].open;
                    layer = Some(l)
                }
                CigarOp::AffineClose(l) => {
                    assert_eq!(layer, Some(l));
                    layer = None;
                }
            }
        }

        cost
    }
}