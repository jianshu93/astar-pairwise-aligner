use std::collections::hash_map::DefaultHasher;

pub use crate::prelude::*;

fn unordered_matches_exact_fixed_hashmap<'a>(
    a: &'a Sequence,
    b: &'a Sequence,
    alph: &Alphabet,
    k: I,
) -> SeedMatches {
    type Key = u64;

    let rank_transform = RankTransform::new(alph);

    // Count number of occurrences for each key, and only keep seeds that match at most once.
    let mut m = HashMap::<Key, u8>::default();
    m.reserve(a.len() / k as usize + 1);

    // TODO: Instead of only counting relevant seeds, we could also just count all of them.
    for (_, w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        m.insert(w as Key, 0);
    }

    for w in rank_transform.qgrams(k, b) {
        m.get_mut(&(w as Key)).map(|x| *x = x.saturating_add(1));
    }

    // NOTE: We don't iterate the hashmap, since future iterations may not store
    // seeds in the hashmap at all.
    let mut seeds = Vec::<Seed>::new();
    for (i, w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        let num_matches = m[&(w as Key)];
        if num_matches <= 1 {
            seeds.push(Seed {
                start: i as I,
                end: i as I + k,
                seed_potential: 1,
                has_matches: num_matches > 0,
                qgram: 0,
            })
        }
    }

    // println!("Size: {} bits", m.capacity() * 2 * 8);

    SeedMatches::new(a, seeds, Vec::default())
}

fn unordered_matches_exact_fixed_hashset<'a>(
    a: &'a Sequence,
    b: &'a Sequence,
    alph: &Alphabet,
    k: I,
) -> SeedMatches {
    type Key = usize;

    let rank_transform = RankTransform::new(alph);

    assert!((2 * k as usize) < 8 * std::mem::size_of::<Key>());

    let mut bf = HashSet::<Key>::default();
    bf.reserve(2 * a.len() / k as usize);
    // println!(
    //     "size: {}, k: {}",
    //     bf.number_of_bits(),
    //     bf.number_of_hash_functions()
    // );

    let bit = (1 as Key) << (Key::BITS - 1);

    // First set all elements of a that will be considered.
    // This makes for a factor k smaller datastructure.
    for (_, w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        bf.insert(w);
    }

    for mut w in rank_transform.qgrams(k, b) {
        if bf.contains(&w) {
            w ^= bit;
            // We insert qgrams of b. If a qgram is already present, we also insert the
            // negated qgram to indicate a count of at least 2.
            if !bf.insert(w) {
                bf.insert(!w);
            }
        }
    }

    // NOTE: We don't iterate the hashmap, since future iterations may not store
    // seeds in the hashmap at all.
    let mut seeds = Vec::<Seed>::new();
    for (i, mut w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        w ^= bit;
        let num_matches = if !bf.contains(&w) {
            0
        } else if !bf.contains(&!w) {
            1
        } else {
            2
        };

        if num_matches <= 1 {
            seeds.push(Seed {
                start: i as I,
                end: i as I + k,
                seed_potential: 1,
                has_matches: num_matches > 0,
                qgram: 0,
            })
        }
    }

    SeedMatches::new(a, seeds, Vec::default())
}

fn unordered_matches_exact_fixed_cuckoofilter<'a>(
    a: &'a Sequence,
    b: &'a Sequence,
    alph: &Alphabet,
    k: I,
) -> SeedMatches {
    type Key = usize;

    let rank_transform = RankTransform::new(alph);

    assert!((2 * k as usize) < 8 * std::mem::size_of::<Key>());

    let mut bf: cuckoofilter::CuckooFilter<DefaultHasher> =
        cuckoofilter::CuckooFilter::with_capacity(2 * a.len() / k as usize);
    // println!(
    //     "size: {}, k: {}",
    //     bf.number_of_bits(),
    //     bf.number_of_hash_functions()
    // );

    let bit = (1 as Key) << (Key::BITS - 1);

    // First set all elements of a that will be considered.
    // This makes for a factor k smaller datastructure.
    for (_, w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        bf.add(&w).unwrap();
    }

    for mut w in rank_transform.qgrams(k, b) {
        if bf.contains(&w) {
            w ^= bit;
            // We insert qgrams of b. If a qgram is already present, we also insert the
            // negated qgram to indicate a count of at least 2.
            if !bf.test_and_add(&w).unwrap() {
                bf.add(&!w).unwrap();
            }
        }
    }

    // NOTE: We don't iterate the hashmap, since future iterations may not store
    // seeds in the hashmap at all.
    let mut seeds = Vec::<Seed>::new();
    for (i, mut w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        w ^= bit;
        let num_matches = if !bf.contains(&w) {
            0
        } else if !bf.contains(&!w) {
            1
        } else {
            2
        };

        if num_matches <= 1 {
            seeds.push(Seed {
                start: i as I,
                end: i as I + k,
                seed_potential: 1,
                has_matches: num_matches > 0,
                qgram: 0,
            })
        }
    }

    SeedMatches::new(a, seeds, Vec::default())
}

fn unordered_matches_exact_fixed_bloomfilter<'a>(
    a: &'a Sequence,
    b: &'a Sequence,
    alph: &Alphabet,
    k: I,
) -> SeedMatches {
    type Key = usize;

    let rank_transform = RankTransform::new(alph);

    assert!((2 * k as usize) < 8 * std::mem::size_of::<Key>());

    let mut bf = bloomfilter::Bloom::new_for_fp_rate(2 * a.len() / k as usize, 0.01);
    // println!(
    //     "size: {}, k: {}",
    //     bf.number_of_bits(),
    //     bf.number_of_hash_functions()
    // );

    let bit = (1 as Key) << (Key::BITS - 1);

    // First set all elements of a that will be considered.
    // This makes for a factor k smaller datastructure.
    for (_, w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        bf.set(&w);
    }

    for mut w in rank_transform.qgrams(k, b) {
        if bf.check(&w) {
            w ^= bit;
            // We insert qgrams of b. If a qgram is already present, we also insert the
            // negated qgram to indicate a count of at least 2.
            if bf.check_and_set(&w) {
                bf.set(&!w);
            }
        }
    }

    // NOTE: We don't iterate the hashmap, since future iterations may not store
    // seeds in the hashmap at all.
    let mut seeds = Vec::<Seed>::new();
    for (i, mut w) in iterate_fixed_qgrams(&rank_transform, a, k) {
        w ^= bit;
        let num_matches = if !bf.check(&w) {
            0
        } else if !bf.check(&!w) {
            1
        } else {
            2
        };

        if num_matches <= 1 {
            seeds.push(Seed {
                start: i as I,
                end: i as I + k,
                seed_potential: 1,
                has_matches: num_matches > 0,
                qgram: 0,
            })
        }
    }

    SeedMatches::new(a, seeds, Vec::default())
}

fn unordered_matches_exact_dynamic<'a>(
    a: &'a Sequence,
    b: &'a Sequence,
    alph: &Alphabet,
    MaxMatches {
        max_matches,
        k_min,
        k_max,
    }: MaxMatches,
) -> SeedMatches {
    assert!(k_min <= k_max);
    assert!(max_matches <= 1);
    type Key = usize;

    let rank_transform = RankTransform::new(alph);

    // Number of occurrences of each kmer of b.
    // TODO: Try a bloomfilter instead.
    let mut m = HashMap::<Key, (u8, I)>::default();
    m.reserve(b.len() * (k_max - k_min + 1) as usize);

    for k in k_min..=k_max {
        for (j, qgram) in rank_transform.qgrams(k, b).enumerate() {
            let (x, pos) = m.entry(key_for_sized_qgram(k, qgram)).or_default();
            *x = x.saturating_add(1);
            *pos = j as I;
        }
    }

    let band = (a.len() as f32).sqrt() as usize;
    //let band = a.len();

    let mut seeds = Vec::<Seed>::new();
    let mut start = 0;
    while ((start + k_min) as usize) <= a.len() {
        // Find the minimal end that gives at most 1 match.
        let mut end = start + k_min;
        let mut qgram = to_qgram(&rank_transform, 2, &a[start as usize..end as usize]);
        loop {
            let (num_matches, j) = m
                .get(&key_for_sized_qgram(end - start, qgram))
                .copied()
                .unwrap_or((0, 0));

            let take = if num_matches == 0 {
                true
            } else if (num_matches as usize) > max_matches {
                false
            } else {
                // Take if sufficiently close to the main diagonal.
                (abs_diff(start, j) as usize) < band
            };

            if take {
                seeds.push(Seed {
                    start,
                    end,
                    seed_potential: 1,
                    has_matches: num_matches > 0,
                    qgram: 0,
                });
                start = end;
                break;
            } else {
                if end as usize == a.len() {
                    start = end;
                    break;
                }
                qgram = (qgram << 2) | rank_transform.get(a[end as usize]) as usize;
                end += 1;
                if end == start + k_max + 1 {
                    // TODO: Start += 1 or start += k_max here?
                    start += 1;
                    break;
                }
            }
        }
    }

    SeedMatches::new(a, seeds, Vec::default())
}

/// Initialize a counter to 0 for all seeds in a.
/// Then count these kmers in b.
/// Keep only seeds for which the counter is at most 1.
pub fn unordered_matches<'a>(
    a: &'a Sequence,
    b: &'a Sequence,
    alph: &Alphabet,
    MatchConfig {
        length,
        max_match_cost,
        algorithm,
    }: MatchConfig,
) -> SeedMatches {
    if max_match_cost > 0 {
        unimplemented!("max_match_cost for unordered matches must be 0 for now");
    }
    match length {
        Fixed(k) => match algorithm {
            MatchAlgorithm::Hash => unordered_matches_exact_fixed_hashmap(a, b, alph, k),
            MatchAlgorithm::HashSet => unordered_matches_exact_fixed_hashset(a, b, alph, k),
            MatchAlgorithm::Bloom => unordered_matches_exact_fixed_bloomfilter(a, b, alph, k),
            MatchAlgorithm::Cuckoo => unordered_matches_exact_fixed_cuckoofilter(a, b, alph, k),
        },
        LengthConfig::Max(length) => unordered_matches_exact_dynamic(a, b, alph, length),
        LengthConfig::Min(_) => {
            unimplemented!("MinMatches does not make sense here.")
        }
    }
}
