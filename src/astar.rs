use crate::{
    aligners::cigar::Cigar,
    alignment_graph::EditGraph,
    prelude::*,
    visualizer::{VisualizerConfig, VisualizerT},
};

const D: bool = false;

#[derive(Clone, Copy, Debug)]
struct State<Hint> {
    g: Cost,
    /// NOTE: `hint` could also be passed via the priority queue.
    hint: Hint,
}

impl<Hint: Default> Default for State<Hint> {
    fn default() -> Self {
        Self {
            g: Cost::MAX,
            hint: Hint::default(),
        }
    }
}

impl<P: PosOrderT> ShiftOrderT<(Pos, Cost)> for P {
    fn from_t(t: &(Pos, Cost)) -> Self {
        P::from_pos(t.0)
    }
}

#[derive(Default, Clone)]
pub struct AstarStats {
    pub expanded: usize,
    pub explored: usize,
    pub greedy_expanded: usize,
    /// Number of times a node was popped and found to have an outdated value of h after pruning.
    pub retries: usize,
    /// Total priority queue shift after pruning.
    pub pq_shifts: usize,
    /// Number of states allocated in the DiagonalMap
    pub diagonalmap_capacity: usize,

    pub traceback_duration: f32,
    pub retries_duration: f64,
}

pub fn astar_wrap(
    a: Seq,
    b: Seq,
    h: &impl Heuristic,
    v: &impl VisualizerConfig,
) -> ((Cost, Cigar), AstarStats) {
    let ref graph = EditGraph::new(a, b, true);
    let ref mut h = h.build(a, b);
    let ref mut v = v.build(a, b);
    let ((d, path), stats) = astar(graph, h, v);
    ((d, Cigar::from_path(a, b, &path)), stats)
}

pub fn astar<'a, H>(
    graph: &EditGraph,
    h: &mut H,
    v: &mut impl VisualizerT,
) -> ((Cost, Vec<Pos>), AstarStats)
where
    H: HeuristicInstance<'a>,
{
    let mut stats = AstarStats::default();

    // f -> (pos, g)
    let mut queue = ShiftQueue::<(Pos, Cost), H::Order>::new(if REDUCE_RETRIES {
        h.root_potential()
    } else {
        0
    });

    //let mut states = DiagonalMap::<State<H::Hint>>::new(graph.target());
    let mut states = HashMap::<Pos, State<H::Hint>>::default();

    let mut max_f = 0;
    v.new_layer_with_h(Some(h));

    // Initialization with the root state.
    {
        let start = Pos(0, 0);
        let (hroot, hint) = h.h_with_hint(start, H::Hint::default());
        queue.push(QueueElement {
            f: hroot,
            data: (start, 0),
        });
        stats.explored += 1;
        states.insert(start, State { g: 0, hint });
    }

    let mut retry_cnt = 0;

    let _dist = loop {
        let Some(QueueElement {f: queue_f, data: (pos, queue_g),}) = queue.pop() else {
            panic!("priority queue is empty before the end is reached.");
        };

        // Time the duration of retrying once in this many iterations.
        const TIME_EACH: i32 = 64;
        let expand_start = if retry_cnt % TIME_EACH == 0 {
            Some(instant::Instant::now())
        } else {
            None
        };

        let state = &mut states[pos];

        if queue_g > state.g {
            continue;
        }

        assert!(queue_g == state.g);

        // Whenever A* pops a position, if the value of h and f is outdated, the point is pushed and not expanded.
        // Must be true for correctness.
        {
            let (current_h, new_hint) = h.h_with_hint(pos, state.hint);
            state.hint = new_hint;
            let current_f = state.g + current_h;
            assert!(
                current_f >= queue_f && current_h >= queue_f - queue_g,
                "Retry {pos} Current_f {current_f} smaller than queue_f {queue_f}! state.g={} queue_g={} queue_h={} current_h={}", state.g, queue_g, queue_f-queue_g, current_h
            );
            if current_f > queue_f {
                stats.retries += 1;
                queue.push(QueueElement {
                    f: current_f,
                    data: (pos, queue_g),
                });
                retry_cnt += 1;
                if let Some(expand_start) = expand_start {
                    stats.retries_duration +=
                        TIME_EACH as f64 * expand_start.elapsed().as_secs_f64();
                }
                continue;
            }
            assert!(current_f == queue_f);
            if D {
                println!(
                    "Expand {pos} at \tg={queue_g} \tf={queue_f} \th={current_h}\tqueue_h={}",
                    queue_f - queue_g
                );
            }
        }

        // Expand u
        if D {
            println!("Expand {pos} {}", state.g);
        }

        stats.expanded += 1;
        v.expand_with_h(pos, queue_g, queue_f, Some(h));

        if queue_f > max_f {
            max_f = queue_f;
            v.new_layer_with_h(Some(h));
        }

        // Copy for local usage.
        let state = *state;

        // Retrace path to root and return.
        if pos == graph.target() {
            if D {
                println!("Reached target {pos} with state {state:?}");
            }
            break state.g;
        }

        // Prune is needed
        if h.is_seed_start_or_end(pos) {
            let (shift, pos) = h.prune(pos, state.hint);
            if REDUCE_RETRIES {
                stats.pq_shifts += queue.shift(shift, pos) as usize;
            }
        }

        graph.iterate_outgoing_edges(pos, |mut next, edge| {
            // Explore next
            let next_g = state.g + edge.cost() as Cost;

            // Do greedy matching within the current seed.
            if graph.greedy_matching {
                while let Some(n) = graph.is_match(next) {
                    // Never greedy expand the start of a seed.
                    // Doing so may cause problems when h is not consistent and is
                    // larger at the start of seed than at the position where the
                    // greedy run started.
                    if h.is_seed_start_or_end(next) {
                        break;
                    }

                    // Explore & expand `next`
                    stats.explored += 1;
                    stats.expanded += 1;
                    stats.greedy_expanded += 1;
                    v.explore_with_h(next, queue_g, queue_f, Some(h));
                    v.expand_with_h(next, queue_g, queue_f, Some(h));
                    if D {
                        println!("Greedy expand {next} {}", state.g);
                    }

                    // Move to the next state.
                    next = n;
                }
            }

            let cur_next = DiagonalMapTrait::get_mut(&mut states, next);

            // If the next state was already visited with smaller g, skip exploring again.
            if cur_next.g <= next_g {
                return;
            };

            // Open next
            if D {
                println!("Open {next} from {pos} g {next_g}");
            }

            cur_next.g = next_g;

            let (next_h, next_hint) = h.h_with_hint(next, state.hint);
            cur_next.hint = next_hint;
            let next_f = next_g + next_h;

            queue.push(QueueElement {
                f: next_f,
                data: (next, next_g),
            });

            h.explore(next);
            stats.explored += 1;
            v.explore_with_h(next, next_g, next_f, Some(h));
        });
    };

    stats.diagonalmap_capacity = states.dm_capacity();
    let traceback_start = instant::Instant::now();
    let path = traceback::<H>(&states, graph.target());
    stats.traceback_duration = traceback_start.elapsed().as_secs_f32();
    v.last_frame_with_h(
        Some(&Cigar::from_path(graph.a, graph.b, &path.1)),
        None,
        Some(h),
    );
    (path, stats)
}

fn parent<'a, H>(states: &HashMap<Pos, State<H::Hint>>, pos: Pos, g: Cost) -> Edge
where
    H: HeuristicInstance<'a>,
{
    for edge in [Edge::Substitution, Edge::Right, Edge::Down] {
        if let Some(p) = edge.back(&pos) {
            if let Some(state) = DiagonalMapTrait::get(states, p) {
                if state.g + edge.cost() == g {
                    return edge;
                }
            }
        }
    }
    Edge::Match
}

// TODO: Make this return Cigar instead.
fn traceback<'a, H>(states: &HashMap<Pos, State<H::Hint>>, target: Pos) -> (u32, Vec<Pos>)
where
    H: HeuristicInstance<'a>,
{
    let Some(state) = DiagonalMapTrait::get(states, target) else {
        panic!();
    };
    let g = state.g;
    let mut path = vec![target];
    let mut cost = 0;
    let mut current = target;
    // If the state is not in the map, it was found via a match.
    while current != Pos(0, 0) {
        let e = parent::<H>(states, current, g - cost);
        cost += e.cost();
        current = e.back(&current).expect("No parent found for position!");
        path.push(current);
    }
    path.reverse();
    assert_eq!(
        cost, g,
        "Traceback cost {cost} does not equal distance to end {g}!"
    );
    (g, path)
}
