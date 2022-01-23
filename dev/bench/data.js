window.BENCHMARK_DATA = {
  "lastUpdate": 1642965430363,
  "repoUrl": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ragnar.grootkoerkamp@gmail.com",
            "name": "Ragnar Groot Koerkamp",
            "username": "RagnarGrootKoerkamp"
          },
          "committer": {
            "email": "ragnar.grootkoerkamp@gmail.com",
            "name": "Ragnar Groot Koerkamp",
            "username": "RagnarGrootKoerkamp"
          },
          "distinct": true,
          "id": "067fb53a8fda725a3ca60066a320c248767203f2",
          "message": "DiagonalMap: indexing after grow can be unchecked",
          "timestamp": "2022-01-23T01:22:09+01:00",
          "tree_id": "c78ec7c9357ff93e18e44689c8c8e257144a325b",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/067fb53a8fda725a3ca60066a320c248767203f2"
        },
        "date": 1642897608875,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 34365,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 770204,
            "range": "± 18454",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 12170832,
            "range": "± 238586",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 11410406,
            "range": "± 190898",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 41829816,
            "range": "± 4180457",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 34922,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 669663,
            "range": "± 9994",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 9340637,
            "range": "± 43116",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 8601018,
            "range": "± 169645",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 39463888,
            "range": "± 7641731",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ivanov@pesho.info",
            "name": "Pesho Ivanov",
            "username": "pesho-ivanov"
          },
          "committer": {
            "email": "ivanov@pesho.info",
            "name": "Pesho Ivanov",
            "username": "pesho-ivanov"
          },
          "distinct": true,
          "id": "4a881a20bf208e1954c6d229f3816d151b5bd184",
          "message": "bench",
          "timestamp": "2022-01-23T20:12:56+01:00",
          "tree_id": "11aee598787b39c54fc6e359a06bbb1dff43c816",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/4a881a20bf208e1954c6d229f3816d151b5bd184"
        },
        "date": 1642965428849,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 37965,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 877275,
            "range": "± 7486",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 13905158,
            "range": "± 59761",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 12928141,
            "range": "± 90466",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 44871009,
            "range": "± 1844551",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 39950,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 768073,
            "range": "± 2864",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10709560,
            "range": "± 22060",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9823336,
            "range": "± 15364",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 41023593,
            "range": "± 2195065",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}