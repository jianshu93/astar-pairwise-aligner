use super::Aligner;
use crate::prelude::*;
use std::mem::swap;

struct NWAffine;

const INF: Cost = Cost::MAX;

impl Aligner for NWAffine {
    type Params = ();
    type CostModel = AffineCost;

    /// The cost-only version uses linear memory.
    fn cost(cm: Self::CostModel, a: &Sequence, b: &Sequence, _params: Self::Params) -> Cost {
        // TODO: Make this a single 2D vec of structs instead?
        // NOTE: Index 0 and 1 correspond to `prev` and `next` in the non-affine `NW`.
        // End with an insertion.
        let mut ins = [vec![INF; b.len() + 1], vec![INF; b.len() + 1]];
        // End with a deletion.
        let mut del = [vec![INF; b.len() + 1], vec![INF; b.len() + 1]];
        // End with anything.
        let mut m = [vec![INF; b.len() + 1], vec![INF; b.len() + 1]];
        m[1][0] = 0;
        ins[1][0] = 0;
        del[1][0] = 0;
        for j in 1..=b.len() {
            del[1][j] = cm.del_open() + j as Cost * cm.del();
            m[1][j] = del[0][j];
        }
        for (i, &ca) in a.iter().enumerate() {
            let i = i + 1;
            swap(&mut ins[0], &mut ins[1]);
            swap(&mut del[0], &mut del[1]);
            swap(&mut m[0], &mut m[1]);
            ins[1][0] = cm.ins_open() + i as Cost * cm.ins();
            m[1][0] = ins[i][0];
            for (j, &cb) in b.iter().enumerate() {
                let j = j + 1;
                ins[1][j] = min(ins[0][j] + cm.ins(), m[0][j] + cm.ins_open() + cm.ins());
                del[1][j] = min(
                    del[1][j - 1] + cm.del(),
                    m[1][j - 1] + cm.del_open() + cm.del(),
                );
                m[1][j] = min(
                    // Convert sub_cost to INF when substitutions are not allowed.
                    m[0][j - 1].saturating_add(cm.sub_cost(ca, cb).unwrap_or(INF)),
                    min(ins[1][j], del[1][j]),
                );
            }
        }

        return m[1][b.len()];
    }

    fn visualize(
        cm: Self::CostModel,
        a: &Sequence,
        b: &Sequence,
        _params: Self::Params,
        visualizer: &mut impl aligners::Visualizer,
    ) -> Cost {
        // TODO: Make this a single 2D vec of structs instead?
        // End with an insertion.
        let mut ins = vec![vec![INF; b.len() + 1]; a.len() + 1];
        // End with a deletion.
        let mut del = vec![vec![INF; b.len() + 1]; a.len() + 1];
        // End with anything.
        let mut m = vec![vec![INF; b.len() + 1]; a.len() + 1];
        visualizer.expand(Pos(0, 0));
        m[0][0] = 0;
        ins[0][0] = 0;
        del[0][0] = 0;
        for j in 1..=b.len() {
            visualizer.expand(Pos(0, j as I));
            del[0][j] = cm.del_open() + j as Cost * cm.del();
            m[0][j] = del[0][j];
        }
        for i in 1..=a.len() {
            visualizer.expand(Pos(i as I, 0));
            ins[i][0] = cm.ins_open() + i as Cost * cm.ins();
            m[i][0] = ins[i][0];
        }
        for (i, &ca) in a.iter().enumerate() {
            let i = i + 1;
            for (j, &cb) in b.iter().enumerate() {
                let j = j + 1;
                visualizer.expand(Pos(i as I, j as I));
                ins[i][j] = min(
                    ins[i - 1][j] + cm.ins(),
                    m[i - 1][j] + cm.ins_open() + cm.ins(),
                );
                del[i][j] = min(
                    del[i][j - 1] + cm.del(),
                    m[i][j - 1] + cm.del_open() + cm.del(),
                );
                m[i][j] = min(
                    // Convert sub_cost to INF when substitutions are not allowed.
                    m[i - 1][j - 1].saturating_add(cm.sub_cost(ca, cb).unwrap_or(INF)),
                    min(ins[i][j], del[i][j]),
                );
            }
        }

        return m[a.len()][b.len()];
    }
}