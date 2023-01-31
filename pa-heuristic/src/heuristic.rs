pub mod bruteforce_csh;
pub mod chained_seed;
pub mod distances;
pub mod seed;
pub mod wrappers;

use crate::prelude::*;
use crate::{contour::Arrow, matches::*};
use derive_more::AddAssign;

// internal/helper heuristics
use bruteforce_csh::*;
use distances::*;

pub use chained_seed::*;
pub use distances::{GapCost, NoCost, NoCostI, ZeroCost};
pub use seed::*;

#[derive(Copy, Clone, Debug)]
pub struct Pruning {
    pub enabled: bool,
    /// Skip pruning one in N.
    pub skip_prune: Option<usize>,
}

impl Default for Pruning {
    fn default() -> Self {
        Self::enabled()
    }
}

impl Pruning {
    pub fn new(enabled: bool) -> Self {
        Self {
            enabled,
            skip_prune: None,
        }
    }
    pub fn disabled() -> Self {
        Pruning {
            enabled: false,
            skip_prune: None,
        }
    }
    pub fn enabled() -> Self {
        Pruning {
            enabled: true,
            skip_prune: None,
        }
    }
}

#[derive(Default, Clone, Debug)]
pub struct HeuristicParams {
    pub name: String,
    pub distance_function: String,
    pub k: I,
    pub max_match_cost: MatchCost,
    pub pruning: Pruning,
}

impl std::ops::AddAssign<HeuristicParams> for HeuristicParams {
    /// This does nothing; parameters can't be added.
    fn add_assign(&mut self, _rhs: HeuristicParams) {}
}

#[derive(Clone, AddAssign, Default, Copy, Debug)]
pub struct HeuristicStats {
    pub num_seeds: I,
    pub num_matches: usize,
    pub num_filtered_matches: usize,
    pub pruning_duration: f32,
    pub num_pruned: usize,
    pub h0: Cost,
    pub h0_end: Cost,
    pub prune_count: usize,
}

/// An object containing the settings for a heuristic.
pub trait Heuristic: std::fmt::Debug + Copy {
    type Instance<'a>: HeuristicInstance<'a>;
    const IS_DEFAULT: bool = false;

    fn build<'a>(&self, a: Seq<'a>, b: Seq<'a>) -> Self::Instance<'a>;

    // Heuristic properties.
    fn name(&self) -> String;

    fn params(&self) -> HeuristicParams {
        HeuristicParams {
            name: self.name(),
            ..Default::default()
        }
    }
}

pub trait PosOrderT: PartialOrd + Default + Copy + std::fmt::Debug {
    fn from_pos(p: Pos) -> Self;
    fn max(p: Self, q: Self) -> Self;
    type D: std::fmt::Debug;
    fn tip_start(s: usize, p: Self) -> Self;
}

impl PosOrderT for () {
    fn from_pos(_: Pos) -> Self {}
    fn max(_: Self, _: Self) -> Self {}
    type D = ();
    fn tip_start(_: usize, _: Self) -> Self {}
}

/// The order for CSH
impl PosOrderT for Pos {
    fn from_pos(p: Pos) -> Self {
        p
    }
    fn max(p: Self, q: Self) -> Self {
        Pos(max(p.0, q.0), max(p.1, q.1))
    }
    type D = (i32, i32);
    fn tip_start(s: usize, p: Self) -> Self {
        Pos(p.0.saturating_sub(s as I), p.1.saturating_sub(s as I))
    }
}

/// The order of SH.
impl PosOrderT for I {
    fn from_pos(p: Pos) -> Self {
        p.0
    }
    fn max(p: Self, q: Self) -> Self {
        max(p, q)
    }
    type D = i32;
    fn tip_start(s: usize, p: Self) -> Self {
        p.saturating_sub(s as I)
    }
}

/// An instantiation of a heuristic for a specific pair of sequences.
pub trait HeuristicInstance<'a> {
    fn h(&self, pos: Pos) -> Cost;

    /// The internal contour value at the given position, if available.
    fn layer(&self, _pos: Pos) -> Option<Cost> {
        None
    }

    /// The internal contour value at the given position, if available.
    fn layer_with_hint(&self, _pos: Pos, _hint: Self::Hint) -> Option<(Cost, Self::Hint)> {
        None
    }

    fn h_with_parent(&self, pos: Pos) -> (Cost, Pos) {
        (self.h(pos), Pos::default())
    }

    type Hint: Copy + Default + std::fmt::Debug = ();
    fn h_with_hint(&self, pos: Pos, _hint: Self::Hint) -> (Cost, Self::Hint) {
        (self.h(pos), Default::default())
    }

    fn root_potential(&self) -> Cost {
        0
    }

    /// The seed matches used by the heuristic.
    fn seed_matches(&self) -> Option<&SeedMatches> {
        None
    }

    /// A* will checked for consistency whenever this returns true.
    fn is_seed_start_or_end(&self, pos: Pos) -> bool {
        self.seed_matches()
            .map_or(false, |sm| sm.is_seed_start_or_end(pos))
    }

    type Order: PosOrderT = ();

    /// Returns the offset by which all expanded states in the priority queue can be shifted.
    ///
    /// `seed_cost`: The cost made in the seed ending at pos.
    fn prune(&mut self, _pos: Pos, _hint: Self::Hint) -> (Cost, Self::Order) {
        (0, Default::default())
    }

    /// Tells the heuristic that the position was explored, so it knows which
    /// positions need to be updated when propagating the pruning to the
    /// priority queue.
    fn explore(&mut self, _pos: Pos) {}

    fn stats(&mut self) -> HeuristicStats {
        Default::default()
    }

    fn matches(&self) -> Option<Vec<Match>> {
        None
    }

    fn seeds(&self) -> Option<&Vec<Seed>> {
        None
    }

    fn params_string(&self) -> String {
        "".into()
    }
}