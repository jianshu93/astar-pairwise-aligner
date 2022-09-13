//! This generates the visualizations used in the limitations section of the paper.
#[cfg(not(feature = "sdl2"))]
fn main() {}

#[cfg(feature = "sdl2")]
fn main() {
    use astar_pairwise_aligner::{
        aligners::{astar::AStar, Aligner},
        prelude::*,
        visualizer::{Gradient, Visualizer, When},
    };
    use rand::SeedableRng;
    use sdl2::pixels::Color;

    let mut config = visualizer::Config::default();
    config.draw = When::None;
    config.save = When::None;
    config.save_last = true;
    config.delay = 0.0001;
    config.style.bg_color = Color::RGBA(255, 255, 255, 128);
    config.style.expanded = Gradient::TurboGradient(0.25..0.9);
    config.style.path_width = None;
    config.draw_old_on_top = false;
    config.layer_drawing = false;
    config.transparent_bmp = false;
    let scale = 2;
    //config.downscaler = scale as u32;
    config.downscaler = 1;
    config.cell_size = 1;
    config.style.path = None;
    config.style.draw_matches = true;
    config.style.match_width = 4;
    config.style.match_shrink = 0;
    config.style.pruned_match = Color::BLACK;

    {
        let (mut a, mut b) = setup_sequences_with_seed(6, 250 * scale, 0.08);
        let (mut a2, mut b2) = setup_sequences_with_seed(2, 200 * scale, 0.60);
        let (mut a3, mut b3) = setup_sequences_with_seed(3, 50 * scale, 0.08);
        a.append(&mut a2);
        b.append(&mut b2);
        a.append(&mut a3);
        b.append(&mut b3);
        let ref a = a;
        let ref b = b;

        config.filepath = "imgs/fig8/high-error-rate".to_string();
        let mut a_star = AStar {
            diagonal_transition: false,
            greedy_edge_matching: true,
            h: CSH {
                match_config: MatchConfig::inexact(10),
                pruning: Pruning::enabled(),
                use_gap_cost: false,
                c: PhantomData::<HintContours<BruteForceContour>>::default(),
            },
            v: Visualizer::new(config.clone(), a, b),
        };
        let cost = a_star.align(a, b).0;
        println!("cost {cost}");
    }

    {
        let (mut a, mut b) = setup_sequences_with_seed(5, 350 * scale, 0.08);
        let (mut a2, _) = setup_sequences_with_seed(8, 50 * scale, 0.08);
        let (mut a3, mut b3) = setup_sequences_with_seed(9, 100 * scale, 0.08);
        a.append(&mut a2);
        //b.append(&mut b2);
        a.append(&mut a3);
        b.append(&mut b3);
        let ref a = a;
        let ref b = b;

        config.filepath = "imgs/fig8/deletion".to_string();
        let mut a_star = AStar {
            diagonal_transition: false,
            greedy_edge_matching: true,
            h: CSH {
                match_config: MatchConfig::inexact(10),
                pruning: Pruning::enabled(),
                use_gap_cost: false,
                c: PhantomData::<HintContours<BruteForceContour>>::default(),
            },
            v: Visualizer::new(config.clone(), a, b),
        };
        let cost = a_star.align(a, b).0;
        println!("cost {cost}");
    }

    {
        //config.style.match_width = 1;
        let (mut a, mut b) = setup_sequences_with_seed(1, 100 * scale, 0.08);
        let mut rng = rand_chacha::ChaCha8Rng::seed_from_u64(2 as u64);
        let (mut a2, mut b2) = generate_pair(
            &GenerateOptions {
                length: 300 * scale,
                error_rate: 0.08,
                error_model: ErrorModel::DoubleMutatedRepeat,
                pattern_length: 10 * scale,
                m: None,
            },
            &mut rng,
        );
        // b2.truncate(b2.len() - 100);
        let (mut a3, mut b3) = setup_sequences_with_seed(3, 100 * scale, 0.08);
        a.append(&mut a2);
        b.append(&mut b2);
        a.append(&mut a3);
        b.append(&mut b3);
        let ref a = a;
        let ref b = b;

        config.filepath = "imgs/fig8/repeats".to_string();
        let mut a_star = AStar {
            diagonal_transition: false,
            greedy_edge_matching: true,
            h: CSH {
                match_config: MatchConfig::inexact(10),
                pruning: Pruning::enabled(),
                use_gap_cost: false,
                c: PhantomData::<HintContours<BruteForceContour>>::default(),
            },
            v: Visualizer::new(config.clone(), a, b),
        };
        let cost = a_star.align(a, b).0;
        println!("cost {cost}");
    }
}