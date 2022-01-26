window.BENCHMARK_DATA = {
  "lastUpdate": 1643195100651,
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
          "id": "9306d6c49adedb7d141b070f2df04973259b889a",
          "message": "Fix table for tool comparison and add it",
          "timestamp": "2022-01-25T18:04:13+01:00",
          "tree_id": "d3dd73f5b779cc54b6e8cfa4bf5552767c067917",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/9306d6c49adedb7d141b070f2df04973259b889a"
        },
        "date": 1643130633458,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 45549,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1062512,
            "range": "± 7501",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17235821,
            "range": "± 541870",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 16134860,
            "range": "± 356269",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 59861575,
            "range": "± 1839400",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 48022,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 924562,
            "range": "± 3953",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13580407,
            "range": "± 514355",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12579659,
            "range": "± 432319",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 56774110,
            "range": "± 2319636",
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
          "id": "98279b0f4b7319728f27afcda33d5a8d1c8b94eb",
          "message": "polyfit fixed",
          "timestamp": "2022-01-25T19:44:06+01:00",
          "tree_id": "b5ace4f77ffc6ac2742fdb40127cadcc6aa06681",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/98279b0f4b7319728f27afcda33d5a8d1c8b94eb"
        },
        "date": 1643136544662,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 45792,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1061590,
            "range": "± 9146",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17323279,
            "range": "± 379781",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 16160580,
            "range": "± 527261",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 59873160,
            "range": "± 2244264",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 48122,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 925730,
            "range": "± 3940",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13422174,
            "range": "± 661401",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12265376,
            "range": "± 445132",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 56083661,
            "range": "± 3804531",
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
          "id": "9db2ff6abe8662f662ff3fdb7edd050948d12c95",
          "message": "Add Repeats to Snakemake benchmarks",
          "timestamp": "2022-01-26T11:59:28+01:00",
          "tree_id": "5404807898e01b9f051978b85ef0fd1b6b9f88fb",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/9db2ff6abe8662f662ff3fdb7edd050948d12c95"
        },
        "date": 1643195099862,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38267,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 936863,
            "range": "± 8799",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17719878,
            "range": "± 128450",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17212354,
            "range": "± 73575",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 163520712,
            "range": "± 2879440",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40150,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 777552,
            "range": "± 8500",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 14481339,
            "range": "± 172241",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 14085694,
            "range": "± 43168",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 178469600,
            "range": "± 1773977",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}