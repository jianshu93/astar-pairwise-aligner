window.BENCHMARK_DATA = {
  "lastUpdate": 1642591415248,
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
          "id": "1c32d31f29b97187a66bd9b00f72ab03ae1145d2",
          "message": "Move LogQueryContour and NaiveContours to their own files",
          "timestamp": "2022-01-18T13:09:36+01:00",
          "tree_id": "163a921ba6d11e908c7a9a668922f48fdfa83bd0",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/1c32d31f29b97187a66bd9b00f72ab03ae1145d2"
        },
        "date": 1642508072912,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 179186,
            "range": "± 6136",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1964523,
            "range": "± 22952",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 22619897,
            "range": "± 825959",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 22300826,
            "range": "± 754930",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 150650036,
            "range": "± 5867846",
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
          "id": "87db30b3b70e245382a11bfaa8a4e258772498fb",
          "message": "Add CentralContour, using caching of the last relevant dominant point",
          "timestamp": "2022-01-18T13:13:47+01:00",
          "tree_id": "10853eb81db935cbf3611a4ad13b709554e5c21f",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/87db30b3b70e245382a11bfaa8a4e258772498fb"
        },
        "date": 1642508467101,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 210171,
            "range": "± 6976",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 2278028,
            "range": "± 51183",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 26481742,
            "range": "± 1496123",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 26004968,
            "range": "± 1436831",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 166582766,
            "range": "± 9119355",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 115443,
            "range": "± 5065",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1512224,
            "range": "± 39296",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 20215836,
            "range": "± 819477",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 21278341,
            "range": "± 1051461",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 168801332,
            "range": "± 9140881",
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
          "id": "e858886669507094908a885d3877e67d8b411d0e",
          "message": "Fix bug with USE_SHADOW_POINTS in NaiveContours\n\nWe must prune the point from multiple layers, not just the current one.",
          "timestamp": "2022-01-18T14:52:09+01:00",
          "tree_id": "b21a548407c3a9463f248aa1e715afb72bd5af5c",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/e858886669507094908a885d3877e67d8b411d0e"
        },
        "date": 1642514286240,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 176232,
            "range": "± 1920",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1302257,
            "range": "± 506770",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 18928007,
            "range": "± 341981",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 18014253,
            "range": "± 249004",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 149384938,
            "range": "± 7919950",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 96756,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1272317,
            "range": "± 14097",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 17096245,
            "range": "± 153319",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 17636009,
            "range": "± 150206",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 153628955,
            "range": "± 15238683",
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
          "id": "28b23774b69893137a544d6da4c70c73b6d183d9",
          "message": "Add HintContours and remove hints from NaiveContours",
          "timestamp": "2022-01-18T15:10:29+01:00",
          "tree_id": "9c20f56937a3d76a7285f521814a22662a345415",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/28b23774b69893137a544d6da4c70c73b6d183d9"
        },
        "date": 1642515429634,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 154441,
            "range": "± 2112",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1367262,
            "range": "± 18945",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 24141808,
            "range": "± 653102",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 23749614,
            "range": "± 495227",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 244281774,
            "range": "± 6237471",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 82839,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1252945,
            "range": "± 12372",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 19462091,
            "range": "± 336609",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 19692011,
            "range": "± 305533",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 261031816,
            "range": "± 5982214",
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
          "id": "1d0c4c00da62eb8877d5231c424ff03969105e44",
          "message": "Increase threshold for failed benchmarks -- sadly it's not very accurate",
          "timestamp": "2022-01-18T15:19:02+01:00",
          "tree_id": "34cf8510918913975ab02a6cea2fbbdf55510a18",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/1d0c4c00da62eb8877d5231c424ff03969105e44"
        },
        "date": 1642515885880,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 175240,
            "range": "± 1986",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1282924,
            "range": "± 20045",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 21258615,
            "range": "± 2780930",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20534278,
            "range": "± 272172",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 142892716,
            "range": "± 4320801",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 92902,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1191112,
            "range": "± 8169",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 15567837,
            "range": "± 122390",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 15412024,
            "range": "± 135254",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 141868976,
            "range": "± 2499342",
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
          "id": "470fef49db9f09f4596cc7fe373e249ef846f278",
          "message": "Implement Hint & Stats for HintContours",
          "timestamp": "2022-01-18T19:17:56+01:00",
          "tree_id": "01c792abdce5ba4ebb167696daea9754f375022a",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/470fef49db9f09f4596cc7fe373e249ef846f278"
        },
        "date": 1642530223270,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 175424,
            "range": "± 2742",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1287385,
            "range": "± 11546",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 21237200,
            "range": "± 2708208",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20574700,
            "range": "± 376298",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 143627101,
            "range": "± 4365549",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 92955,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1192044,
            "range": "± 8671",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 15586749,
            "range": "± 178292",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 15445992,
            "range": "± 117703",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 143719382,
            "range": "± 2788283",
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
          "id": "713a12e7f7d81ab380322bc562e3a7f60095506b",
          "message": "Update benchmark to use faster HintContours",
          "timestamp": "2022-01-18T19:18:48+01:00",
          "tree_id": "31d37afa0bd45fdd17046aea073421fd64db421c",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/713a12e7f7d81ab380322bc562e3a7f60095506b"
        },
        "date": 1642530269155,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 177324,
            "range": "± 2192",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1261747,
            "range": "± 11641",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 21425477,
            "range": "± 942124",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20418213,
            "range": "± 829392",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 145737582,
            "range": "± 4449097",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 93279,
            "range": "± 1461",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1105464,
            "range": "± 8836",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13838361,
            "range": "± 193541",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 13141115,
            "range": "± 292231",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 137848398,
            "range": "± 4502256",
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
          "id": "8f5666ea604f40a58a773afa14fbce465a28f474",
          "message": "Add config setting to disable sorting of BucketQueue elements",
          "timestamp": "2022-01-18T19:41:20+01:00",
          "tree_id": "ed7c67a2d812a23c5ee1b2fe436d471cfa899c39",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/8f5666ea604f40a58a773afa14fbce465a28f474"
        },
        "date": 1642531705582,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 228809,
            "range": "± 30376",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1583698,
            "range": "± 1393339",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 21021962,
            "range": "± 2325325",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20407469,
            "range": "± 2202980",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 160553353,
            "range": "± 8440284",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 119125,
            "range": "± 16210",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1384703,
            "range": "± 188088",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 16223117,
            "range": "± 1356837",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 15448643,
            "range": "± 1785031",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 153110982,
            "range": "± 6697735",
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
          "id": "78d0134d5f5ddcdcb20eb9b8ad66863f26f56725",
          "message": "Add more stats to HintContours and some cleanup",
          "timestamp": "2022-01-18T21:14:07+01:00",
          "tree_id": "d73512cfd71d8dda57a0d5fc889aeb4b5e0dd86f",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/78d0134d5f5ddcdcb20eb9b8ad66863f26f56725"
        },
        "date": 1642537232553,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 155392,
            "range": "± 2440",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1127500,
            "range": "± 13785",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 19720936,
            "range": "± 1538807",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 18388068,
            "range": "± 735298",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 144422318,
            "range": "± 5732686",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 79376,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 973907,
            "range": "± 9049",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 12367601,
            "range": "± 586338",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 11767331,
            "range": "± 561358",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 141599718,
            "range": "± 6473778",
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
          "id": "49919a537e0062c6a151629157d3d3f217c8aafb",
          "message": "Replace HintContours::value_in_slice by binary search again",
          "timestamp": "2022-01-18T22:15:54+01:00",
          "tree_id": "54cbb2b264fb8814b4e76326492593e5f80fdd15",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/49919a537e0062c6a151629157d3d3f217c8aafb"
        },
        "date": 1642540901474,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 175248,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1267634,
            "range": "± 4882",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 21624635,
            "range": "± 1128397",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20601625,
            "range": "± 933421",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 151465417,
            "range": "± 6804980",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 92193,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1099571,
            "range": "± 11536",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13547608,
            "range": "± 233718",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12809901,
            "range": "± 511098",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 146027424,
            "range": "± 6354262",
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
          "id": "11cc158661e52ff20b4e2806a0bb477adbc0b198",
          "message": "Replace calls to h by h_with_hint in pruning",
          "timestamp": "2022-01-19T12:18:42+01:00",
          "tree_id": "5f37756a8b04aebdccdd29ac7810cee3ed4f1061",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/11cc158661e52ff20b4e2806a0bb477adbc0b198"
        },
        "date": 1642591414193,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 171718,
            "range": "± 1736",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1265789,
            "range": "± 18134",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 22234317,
            "range": "± 2466494",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 21057266,
            "range": "± 3224066",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 152614362,
            "range": "± 8236778",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}