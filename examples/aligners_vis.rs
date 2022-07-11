#[cfg(not(feature = "sdl2"))]
fn main() {}

#[cfg(feature = "sdl2")]
fn main() {
    use pairwise_aligner::{
        aligners::{
            diagonal_transition::{DiagonalTransition, GapCostHeuristic},
            nw::NW,
            Aligner,
        },
        prelude::*,
        visualizer::{Draw, Gradient, Save, Visualizer},
    };
    use sdl2::pixels::Color;
    let n = 500;
    let e = 0.20;
    let (ref a, ref b) = setup_sequences(n, e);
    println!("{}\n{}\n", to_string(a), to_string(b));

    let cm = LinearCost::new_unit();
    let mut config = visualizer::Config::default();
    config.draw = Draw::All;
    config.save = Save::Last;
    config.delay = 0.0001;
    config.cell_size = 2;
    config.style.bg_color = Color::RGBA(255, 255, 255, 128);
    config.style.gradient = Gradient::TurboGradient(0.25..0.90);
    config.draw_old_on_top = true;
    let mut vis = |name: &str| {
        config.filepath = "imgs/".to_string() + name;
        Visualizer::new(config.clone(), a, b)
    };

    let sh = SH {
        match_config: MatchConfig::exact(4),
        pruning: false,
    };
    let csh = CSH {
        match_config: MatchConfig::exact(4),
        pruning: false,
        use_gap_cost: false,
        c: PhantomData::<BruteForceContours>,
    };

    {
        let mut nw = NW {
            cm: cm.clone(),
            use_gap_cost_heuristic: false,
            h: ZeroCost,
            v: vis("nw"),
        };
        nw.align(a, b);
    }

    {
        let mut nw = NW {
            cm: cm.clone(),
            use_gap_cost_heuristic: true,
            h: ZeroCost,
            v: vis("nw_gapcost"),
        };
        nw.align(a, b);
    }

    {
        let mut nw = NW {
            cm: cm.clone(),
            use_gap_cost_heuristic: false,
            h: GapCost,
            v: vis("nw_gapcost_h"),
        };

        nw.align(a, b);
    }

    {
        let mut nw = NW {
            cm: cm.clone(),
            use_gap_cost_heuristic: false,
            h: sh,
            v: vis("nw_sh"),
        };

        nw.align(a, b);
    }

    {
        let mut nw = NW {
            cm: cm.clone(),
            use_gap_cost_heuristic: false,
            h: csh,
            v: vis("nw_csh"),
        };

        nw.align(a, b);
    }

    {
        let mut dt = DiagonalTransition::new(
            cm.clone(),
            GapCostHeuristic::Disable,
            ZeroCost,
            false,
            vis("dt"),
        );
        dt.align(a, b);
    }

    {
        let mut dt = DiagonalTransition::new(
            cm.clone(),
            GapCostHeuristic::Disable,
            ZeroCost,
            true,
            vis("dt_dc"),
        );
        dt.align(a, b);
    }

    {
        let mut dt = DiagonalTransition::new(
            cm.clone(),
            GapCostHeuristic::Enable,
            ZeroCost,
            false,
            vis("dt_gapcost"),
        );
        dt.align(a, b);
    }

    {
        let mut dt = DiagonalTransition::new(
            cm.clone(),
            GapCostHeuristic::Disable,
            GapCost,
            false,
            vis("dt_gapcost_h"),
        );
        dt.align(a, b);
    }

    {
        let mut dt = DiagonalTransition::new(
            cm.clone(),
            GapCostHeuristic::Disable,
            sh,
            false,
            vis("dt_sh"),
        );
        dt.align(a, b);
    }

    {
        let mut dt = DiagonalTransition::new(
            cm.clone(),
            GapCostHeuristic::Disable,
            csh,
            false,
            vis("dt_csh"),
        );
        dt.align(a, b);
    }
}
