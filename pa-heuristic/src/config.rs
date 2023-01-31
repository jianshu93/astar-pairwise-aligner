//! This module contains constants used throughout the code, that may eventually
//! be turned into configurable options.

// ========= FLAGS IN THE PAPER (default true) =========

/// Use a HashMap to find matches. Only works with exact matches and fixed k.
/// Default: true, use a hashmap.
/// When false, use a qgramindex.
pub const FIND_MATCHES_HASH: bool = true;

// ========= FLAGS NOT IN THE PAPER (default false) =========

/// Whether to use a sliding window approach for finding exact matches for fixed k.
/// This reduces the size of the hashmap by a factor k.
/// Only for CSH with gap-cost.
pub const SLIDING_WINDOW_MATCHES: bool = false;

/// Whether to check for consistency before pruning for SH and CSH.
/// NOTE: For CSH+gaps consistency is always checked.
pub const CHECK_MATCH_CONSISTENCY: bool = false;

/// When true, inexact matches with an insertion at the start/end are skipped.
pub const SKIP_INEXACT_INSERT_START_END: bool = false;

/// Explicitly mark matches as pruned in SH.
/// Used for fig3 viz.
pub const SH_MARK_MATCH_AS_PRUNED: bool = cfg!(feature = "example");
