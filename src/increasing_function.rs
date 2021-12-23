use std::cmp::{Ord, Reverse};
use std::collections::BTreeMap;
use std::hash;
use std::ops::Bound::{Excluded, Included, Unbounded};
use std::ops::RangeFull;

use crate::seeds::Match;
use crate::util::*;

pub struct IncreasingFunction<K, V> {
    pub m: BTreeMap<K, V>,
}

impl<K: Ord + Copy + std::fmt::Debug, V: Ord + Copy + std::fmt::Debug> IncreasingFunction<K, V> {
    pub fn new() -> Self {
        IncreasingFunction { m: BTreeMap::new() }
    }

    /// Set f(x) = y.
    /// Only inserts if y is larger than the current value at x.
    /// Returns whether insertion took place.
    pub fn set(&mut self, x: K, y: V) -> bool {
        //println!("Set {:?} to {:?}", x, y);
        let cur_val = self.get(x);
        if cur_val.map_or(false, |c| y <= c) {
            //println!("Set {:?} to {:?} -> SKIP", x, y);
            return false;
        }
        // Delete elements right of x at most y.
        let to_remove = self
            .m
            .range((Excluded(x), Unbounded))
            .take_while(|&(_, &value)| value <= y)
            .map(|(&key, _)| key)
            .collect::<Vec<_>>();
        for key in to_remove {
            self.m.remove(&key);
        }
        self.m.insert(x, y);
        true
    }

    /// Get the largest value in the map.
    pub fn max(&self) -> Option<V> {
        self.m.range(RangeFull).next_back().map(|(_, y)| *y)
    }

    /// Get f(x): the y for the largest key <= x inserted into the map.
    pub fn get(&self, x: K) -> Option<V> {
        let v = self
            .m
            .range((Unbounded, Included(x)))
            .next_back()
            .map(|(_, y)| *y);
        //println!("Get {:?} = {:?}", x, v);
        v
    }

    /// f(x') for the largest x' < x inserted into the map.
    pub fn get_smaller(&self, x: K) -> Option<V> {
        self.m
            .range((Unbounded, Excluded(x)))
            .next_back()
            .map(|(_, y)| *y)
    }

    /// f(x') for the smallest x' > x inserted into the map.
    pub fn get_larger(&self, x: K) -> Option<V> {
        self.m
            .range((Excluded(x), Unbounded))
            .next()
            .map(|(_, y)| *y)
    }
}

pub type NodeIndex = usize;

// We guarantee that the function always contains (0,0), so lookup will always succeed.
#[derive(Default)]
pub struct IncreasingFunction2D<T: Copy + hash::Hash + Eq> {
    nodes: Vec<Node<T>>,
    root: NodeIndex,
    leftover_at_end: bool,
}

#[derive(Clone, Copy, Hash, PartialEq, Eq, Debug)]
pub struct Node<T: Copy + hash::Hash + Eq> {
    pub pos: Pos,
    pub val: T,
    parent: Option<NodeIndex>,
    prev: Option<NodeIndex>,
    next: Option<NodeIndex>,
}

// (value, nodeindex). Orders only by increasing value.
#[derive(Clone, Copy, Debug, Eq, Ord)]
struct Value(usize, usize);
impl PartialEq for Value {
    fn eq(&self, other: &Self) -> bool {
        self.0 == other.0
    }
}
impl PartialOrd for Value {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        self.0.partial_cmp(&other.0)
    }
}

impl IncreasingFunction2D<usize> {
    pub fn val(&self, idx: NodeIndex) -> usize {
        self.nodes[idx].val
    }

    // TODO: Support max_match_cost > 0
    /// Build the increasing function over the given points. `l` must be at least 1.
    /// `ps` must be sorted increasing by (x,y), first on x and then on y.
    pub fn new(target: Pos, max_match_cost: usize, leftover_at_end: bool, ps: Vec<Match>) -> Self {
        let mut s = Self {
            nodes: Vec::new(),
            // Placeholder until properly set in build.
            root: 0,
            leftover_at_end,
        };
        s.build(target, max_match_cost, ps);
        s
    }

    fn build<'a>(&'a mut self, target: Pos, max_match_cost: usize, ps: Vec<Match>) {
        // j -> (max gain, nodeindex ps).
        let mut front = IncreasingFunction::<Reverse<usize>, Value>::new();
        let mut lagging_front = IncreasingFunction::<Reverse<usize>, Value>::new();

        // Index into self.nodes.
        let mut lagging_index = 0;

        // Push the root.
        /*
        self.nodes.push(Node {
            pos: target,
            val: 0,
            parent: None,
            prev: None,
            next: None,
        });
        front.set(Reverse(0), Value(0, 0));
        */

        // Sort by end, the order in which we will process them
        let ps_by_end = {
            let mut ps = ps;
            ps.sort_by_key(|Match { start, end, .. }| Reverse((end.0, end.1, start.0, start.1)));
            ps
        };
        // Sort by start, the order in which we will add them to the front.
        let ps_by_start = {
            let mut ps = ps.clone();
            ps.sort_by_key(|Match { start, end, .. }| Reverse((start.0, start.1, end.0, end.1)));
            ps
        };
        for m @ Match {
            start,
            end,
            match_cost,
        } in ps_by_end
        {
            println!("Match: {:?}", m);
            // Update lagging front.
            //println!("Update lagging front");
            while let Some(node) = self.nodes.get(lagging_index) {
                println!("Next lagging node index {} {:?}", lagging_index, node);
                if node.pos.0 >= end.0 {
                    println!("ADD");
                    lagging_front.set(Reverse(node.pos.1), Value(node.val, lagging_index));
                    lagging_index += 1;
                } else {
                    break;
                }
            }
            //println!("DONE");

            // Get the value for the position.
            let (val, parent) = match lagging_front.get(Reverse(end.1)) {
                // For matches to the end, also subtract the gap when needed.
                None => (
                    ((max_match_cost + 1) - match_cost).saturating_sub({
                        // gap cost between `end` and `target`
                        // This will only have effect when leftover_at_end is true
                        let di = target.0 - end.0;
                        let dj = target.1 - end.1;
                        let pot = (di + dj) / (max_match_cost + 1)
                            - (if self.leftover_at_end {
                                max_match_cost + 1
                            } else {
                                0
                            });
                        let g = abs_diff(di, dj) / 2;
                        // println!(
                        //     "{:?} {:?} -> {} {} -> subtract: ({} - {} = {})",
                        //     end,
                        //     target,
                        //     di,
                        //     dj,
                        //     g,
                        //     pot,
                        //     g.saturating_sub(pot)
                        // );
                        g.saturating_sub(pot)
                    }),
                    None,
                ),
                Some(Value(val, p)) => (val + (max_match_cost + 1) - match_cost, Some(p)),
            };
            //println!("{:?} val {:>5} parent {:>8}", pos, val, parent.unwrap_or(0));

            let id = self.nodes.len();

            //println!("Try to set {:?} to {} with parent {:?}", start, val, parent);

            // Only continue if the value is larger than existing.
            //println!("Set front");
            if val == 0 || !front.set(Reverse(start.1), Value(val, id)) {
                //println!("Skip");
                continue;
            }

            let next = front
                .get_larger(Reverse(start.1))
                .and_then(
                    |Value(nextval, idx)| {
                        if nextval != val {
                            None
                        } else {
                            Some(idx)
                        }
                    },
                );

            if let Some(next_idx) = next {
                assert!(self.nodes[next_idx].prev.is_none());
                self.nodes[next_idx].prev = Some(id);
            }

            self.nodes.push(Node {
                pos: start,
                val,
                parent,
                prev: None,
                next,
            });
        }
        //dbg!(&self.nodes);
        // The root is the now largest value in the front.
        // Need to handle the case where pruning has removed all points from the front
        self.root = front.max().map(|x| x.1).unwrap_or(0)
    }

    pub fn root<'a>(&'a self) -> NodeIndex {
        self.root
    }

    /// hint: Node index of the heuristic value at the direct predecessor of `pos`.
    /// If Pos(x,y) is where hint was obtained, pos should be one of Pos(x-1,y-1), Pos(x-1,y), Pos(x,y-1).
    /// Use `get_jump` if `pos` is _somewhere_ below the previous position.
    pub fn get<'a>(&'a self, pos: Pos, hint: NodeIndex) -> Option<NodeIndex> {
        let hint_node = self.nodes[hint];
        if pos >= hint_node.pos {
            return Some(hint);
        } else {
            // Maybe we can keep the same hint value, by moving to hint.next or hint.prev.
            for node in [hint_node.next, hint_node.prev, hint_node.parent]
                .iter()
                .filter_map(|&x| x)
            {
                if pos >= self.nodes[node].pos {
                    return Some(node);
                }
            }
            None
        }
    }

    /// Same as get, but can handle larger jumps of position.
    /// Moves to the next/prev neighbour as long as needed, and then goes to parents.
    pub fn get_jump<'a>(
        &'a self,
        pos @ Pos(i, j): Pos,
        mut hint_idx: NodeIndex,
    ) -> Option<NodeIndex> {
        //println!("GET JUMP {:?} {}", pos, hint_idx);
        loop {
            //println!("HINT: {}", hint_idx);
            let hint = &self.nodes[hint_idx];
            if pos >= hint.pos {
                //println!("GET JUMP {:?} {:?}", pos, Some(hint_idx));
                return Some(hint_idx);
            }
            if let Some(next_idx) = hint.next {
                if j >= self.nodes[next_idx].pos.1 {
                    hint_idx = next_idx;
                    continue;
                }
            }
            if let Some(prev_idx) = hint.prev {
                if i >= self.nodes[prev_idx].pos.0 {
                    hint_idx = prev_idx;
                    continue;
                }
            }
            if let Some(prev_idx) = hint.parent {
                hint_idx = prev_idx;
                continue;
            }
            //println!("GET JUMP {:?} {:?}", pos, None::<()>);
            return None;
        }
    }

    pub fn to_map(&self) -> HashMap<Pos, usize> {
        self.nodes
            .iter()
            .map(|&Node { pos, val, .. }| (pos, val))
            .collect()
    }
}
