window.BENCHMARK_DATA = {
  "lastUpdate": 1643129768442,
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
      },
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
          "id": "5b489d41e8cb285992e336adbe87586529d411bc",
          "message": "Add table comparing all parameters",
          "timestamp": "2022-01-25T17:40:34+01:00",
          "tree_id": "015027e5ba3539e41f2a9040f37de64c674409aa",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/5b489d41e8cb285992e336adbe87586529d411bc"
        },
        "date": 1643129163065,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38044,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 883581,
            "range": "± 5159",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 14596602,
            "range": "± 451090",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 13624859,
            "range": "± 528330",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 52345140,
            "range": "± 3715091",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40596,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 772669,
            "range": "± 2597",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 11512613,
            "range": "± 764171",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 10420969,
            "range": "± 901343",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 50992754,
            "range": "± 3129465",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "c02a9c6223fc1c382427c8685dce85aac93bf7bd",
          "message": "Add table comparing all parameters",
          "timestamp": "2022-01-25T17:51:07+01:00",
          "tree_id": "22205eb97da8c32fd37b6576098b7c2b4b64e2c9",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/c02a9c6223fc1c382427c8685dce85aac93bf7bd"
        },
        "date": 1643129767484,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 45218,
            "range": "± 513",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1060704,
            "range": "± 7617",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 16892511,
            "range": "± 157749",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 15823536,
            "range": "± 278486",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 57774907,
            "range": "± 2100287",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 48011,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 924682,
            "range": "± 3828",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13094737,
            "range": "± 436648",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12089353,
            "range": "± 312017",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 54576409,
            "range": "± 3761599",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}