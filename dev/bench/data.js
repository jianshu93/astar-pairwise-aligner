window.BENCHMARK_DATA = {
  "lastUpdate": 1642508018715,
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
          "id": "c572355db8c19bc2cfc1f0a3a02d162e97816f44",
          "message": "Fix compile error\u0016",
          "timestamp": "2022-01-18T12:59:43+01:00",
          "tree_id": "addbc526d91d08e1ff008e02137a56ede33476b9",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/c572355db8c19bc2cfc1f0a3a02d162e97816f44"
        },
        "date": 1642507465658,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 181617,
            "range": "± 2597",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 2105044,
            "range": "± 28355",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 24080830,
            "range": "± 530726",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 23057149,
            "range": "± 350792",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 157777502,
            "range": "± 4905900",
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
          "id": "61bd63399041d3747187778e669b815f59e628e6",
          "message": "More efficient Pos/LexPos comparisons",
          "timestamp": "2022-01-18T13:08:31+01:00",
          "tree_id": "5c3d0a72a7ebb98f2facca237e4454dc2c5a1a99",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/61bd63399041d3747187778e669b815f59e628e6"
        },
        "date": 1642508017725,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 159209,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 2033910,
            "range": "± 172851",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 26034366,
            "range": "± 111643",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 25308849,
            "range": "± 95536",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 244217692,
            "range": "± 4803278",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}