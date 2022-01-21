use crate::diagonal_map::DiagonalMapTrait;
use crate::prelude::*;
use crate::scored::MinScored;

#[derive(Clone, Copy, Debug)]
enum Status {
    Unvisited,
    Explored,
    Expanded,
}
use Status::*;

#[derive(Clone, Copy, Debug)]
struct State<Parent, Hint> {
    status: Status,
    // TODO: Do we really need f?
    f: Cost,
    g: Cost,
    parent: Parent,
    hint: Hint,
}

impl<Parent: Default, Hint: Default> Default for State<Parent, Hint> {
    fn default() -> Self {
        Self {
            status: Unvisited,
            f: Cost::MAX,
            g: Cost::MAX,
            parent: Parent::default(),
            hint: Hint::default(),
        }
    }
}

#[derive(Serialize, Default)]
pub struct AStarStats<Pos> {
    pub expanded: usize,
    pub explored: usize,
    // Number of times an already expanded node was expanded again with a lower value of f.
    pub double_expanded: usize,
    // Number of times a node was popped and found to have an outdated value of h after pruning.
    pub retries: usize,
    #[serde(skip_serializing)]
    pub explored_states: Vec<Pos>,
    #[serde(skip_serializing)]
    pub expanded_states: Vec<Pos>,
}

// h: heuristic = lower bound on cost from node to end
// g: computed cost to reach node from the start
// f: g+h
// TODO: Inline on_expand and on_explore functions by direct calls to h.
pub fn astar<'a, G, H>(
    graph: &G,
    start: G::Pos,
    target: G::Pos,
    h: &mut H,
) -> Option<(Cost, Vec<G::Pos>, AStarStats<G::Pos>)>
where
    G: ImplicitGraph,
    H: HeuristicInstance<'a, Pos = G::Pos>,
{
    let mut stats = AStarStats {
        expanded: 0,
        explored: 0,
        double_expanded: 0,
        retries: 0,
        explored_states: Vec::default(),
        expanded_states: Vec::default(),
    };

    let mut queue = heap::Heap::<G::Pos>::default(); // f
    let mut states = G::DiagonalMap::<State<G::Parent, H::Hint>>::new(target);

    {
        let (hroot, hint) = h.h_with_hint(start, H::Hint::default());
        queue.push(MinScored(hroot, start));
        states.insert(
            start,
            State {
                status: Explored,
                f: 0,
                g: 0,
                parent: Default::default(),
                hint,
            },
        );
    }

    while let Some(MinScored(f, mut pos)) = queue.pop() {
        // This lookup can be unwrapped without fear of panic since the node was necessarily scored
        // before adding it to `visit_next`.
        //let g = gs[pos];
        let state = &mut states[pos];
        let g = state.g;
        let hint = state.hint;

        // If the heuristic value is outdated, skip the node and re-push it with the updated value.
        if RETRY_OUDATED_HEURISTIC_VALUE {
            let (current_h, new_hint) = h.h_with_hint(pos, state.hint);
            state.hint = new_hint;
            let current_f = g + current_h;
            if current_f > f {
                stats.retries += 1;
                queue.push(MinScored(current_f, pos));
                continue;
            }
        }

        // Expand the state.
        match state.status {
            Unvisited => {
                unreachable!("Cannot explore an unvisited node")
            }
            // Expand the currently explored state.
            Explored => {
                state.status = Expanded;
                state.f = f;
            }
            Expanded => {
                if f < state.f {
                    state.f = f;
                    stats.double_expanded += 1;
                } else {
                    // Skip if f is not better than the previous best f.
                    // FIXME: Does this skipping break consistency if f has
                    // jumped up from pruning in between the first and the
                    // second time visiting this node?
                    // Could be fixed by checking g instead.
                    continue;
                }
            }
        };

        // Store the state for copying to matching states.
        let mut state = *state;
        // Matching states will need a match parent.
        state.parent = G::Parent::match_value();

        // Keep expanding states while we are on a matching diagonal edge.
        // This gives a ~2x speedup on highly similar sequences.
        if loop {
            stats.expanded += 1;
            if DEBUG {
                stats.expanded_states.push(pos);
            }

            // Prune expanded states.
            // TODO: Make this return a new hint?
            // Or just call h manually for a new hint.
            h.prune_with_hint(pos, hint);

            // Retrace path to root and return.
            if pos == target {
                let last = pos;
                let mut path = vec![last];

                let mut current = last;
                // TODO
                while let Some(previous) = states[current].parent.parent(&current) {
                    path.push(previous);
                    current = previous;
                }

                path.reverse();
                return Some((g, path, stats));
            }

            if !GREEDY_EDGE_MATCHING_IN_ASTAR {
                break false;
            }

            if let Some(next) = graph.is_match(pos) {
                // Directly expand the next pos, by copying over the current state to there.
                let new_state = states.get_mut(next);
                //assert!(state.g < new_state.g);
                if new_state.g <= state.g {
                    // Continue to the next state in the queue.
                    break true;
                }
                *new_state = state;
                pos = next;
            } else {
                break false;
            }
        } {
            continue;
        }

        graph.iterate_outgoing_edges(pos, |next, cost, parent| {
            let next_g = g + cost;

            // Explore next
            let next_state = states.get_mut(next);
            if let Unvisited = next_state.status {
                next_state.status = Explored;
            } else if next_g >= next_state.g {
                return;
            };

            let (next_h, next_hint) = h.h_with_hint(next, hint);
            let next_f = next_g + next_h;

            next_state.g = next_g;
            next_state.parent = parent;
            next_state.hint = next_hint;
            queue.push(MinScored(next_f, next));

            stats.explored += 1;
            if DEBUG {
                stats.explored_states.push(pos);
            }
        });
    }

    None
}
