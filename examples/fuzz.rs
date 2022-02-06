use pairwise_aligner::prelude::*;

fn main() {
    for n in 10.. {
        for r in 0..100 {
            let (k, m, n, e, pruning, prune_fraction) = (4, 0, n, 0.2, true, 1.0);
            let h = GapSeedHeuristic {
                match_config: MatchConfig {
                    length: Fixed(k),
                    max_match_cost: m,
                    ..MatchConfig::default()
                },
                pruning,
                prune_fraction,
                c: PhantomData::<HintContours<CentralContour>>,
                ..GapSeedHeuristic::default()
            }
            .equal_to_seed_heuristic();

            println!("n={} r={} k={}", n, r, k);
            let (a, b, alphabet, stats) = setup_with_seed(n, e, r);
            println!("{}\n{}", to_string(&a), to_string(&b));
            let result = align(&a, &b, &alphabet, stats, h);
            result.print();
        }
    }
}
