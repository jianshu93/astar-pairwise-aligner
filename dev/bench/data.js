window.BENCHMARK_DATA = {
  "lastUpdate": 1643837592670,
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
          "id": "e49fa6b9046385d7498cc9dbd11cb47765615d87",
          "message": "Fix bugs in HintContours",
          "timestamp": "2022-01-19T12:19:13+01:00",
          "tree_id": "5f20d7ede40ef1fa88fea282e2788054e4e4a6a9",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/e49fa6b9046385d7498cc9dbd11cb47765615d87"
        },
        "date": 1642591544994,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 219418,
            "range": "± 45057",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1486158,
            "range": "± 469150",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 20120253,
            "range": "± 3241458",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 19571416,
            "range": "± 2346998",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 162663622,
            "range": "± 26486946",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 111662,
            "range": "± 23595",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1213361,
            "range": "± 242879",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 14221885,
            "range": "± 2236253",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 13662568,
            "range": "± 3356401",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 143641123,
            "range": "± 11292087",
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
          "id": "e53b814baad5937933578eaad65a912d989268ff",
          "message": "Find seeds using Trie, both stack and dfs searching",
          "timestamp": "2022-01-19T12:43:09+01:00",
          "tree_id": "7cdd2a3992a22fd77aec0371a21d6ba20bc73db4",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/e53b814baad5937933578eaad65a912d989268ff"
        },
        "date": 1642592942218,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 178944,
            "range": "± 1794",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1293704,
            "range": "± 9488",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 21879137,
            "range": "± 483433",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20656451,
            "range": "± 863789",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 154183659,
            "range": "± 6189672",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 94180,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1118719,
            "range": "± 23604",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13808667,
            "range": "± 125836",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12989236,
            "range": "± 185857",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 147746163,
            "range": "± 6539672",
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
          "id": "0ba29339532113f5f22d657cd7b16d743c619037",
          "message": "Optimize greedy matching in A*",
          "timestamp": "2022-01-21T02:46:21+01:00",
          "tree_id": "77b5f4ffdafc06c4c0ef82f4ca828cdb1527200a",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/0ba29339532113f5f22d657cd7b16d743c619037"
        },
        "date": 1642729905124,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 236025,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1179755,
            "range": "± 10480",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 20433955,
            "range": "± 2286263",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 19584117,
            "range": "± 2463252",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 141691068,
            "range": "± 4218761",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 91349,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1066663,
            "range": "± 7167",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13515650,
            "range": "± 312224",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12711504,
            "range": "± 195187",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 136215671,
            "range": "± 4894405",
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
          "id": "b574bc52ac3471d649c7f0842ac4578abc52a4fe",
          "message": "Remove DFS Trie search; a stack based approach is simpler",
          "timestamp": "2022-01-21T02:47:43+01:00",
          "tree_id": "d6c573d49217691f8fc2e900e9cdc22e65e2d659",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/b574bc52ac3471d649c7f0842ac4578abc52a4fe"
        },
        "date": 1642730021256,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 77033,
            "range": "± 9720",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1278367,
            "range": "± 158319",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 19696761,
            "range": "± 2450862",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 19943702,
            "range": "± 4481697",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 82699861,
            "range": "± 32147382",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 72098,
            "range": "± 16191",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1180625,
            "range": "± 152086",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 17688311,
            "range": "± 3179276",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 16424506,
            "range": "± 1860119",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 78649572,
            "range": "± 10080526",
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
          "id": "144ef9659585014d72c98ef51132187e7f139db6",
          "message": "Remove f from State",
          "timestamp": "2022-01-21T03:22:03+01:00",
          "tree_id": "7b4678d8a52eaaea5828d5dff1f0ede272cad23f",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/144ef9659585014d72c98ef51132187e7f139db6"
        },
        "date": 1642732023358,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 80548,
            "range": "± 22965",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1406809,
            "range": "± 70162",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 20611101,
            "range": "± 287607",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 19840138,
            "range": "± 571871",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 89565849,
            "range": "± 9297214",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 77241,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1273735,
            "range": "± 10348",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 17271229,
            "range": "± 270098",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 16489408,
            "range": "± 256979",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 86469718,
            "range": "± 13175191",
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
          "id": "945473542ea038dbbf2f30aeac87a075d8e78d4f",
          "message": "Resize CostModel::MatchCost type",
          "timestamp": "2022-01-21T11:00:04+01:00",
          "tree_id": "ddd30a1bcde51dbaef0625a935b3d99b7821b43e",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/945473542ea038dbbf2f30aeac87a075d8e78d4f"
        },
        "date": 1642759759481,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 96201,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1681120,
            "range": "± 19043",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 24915557,
            "range": "± 599739",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 23976658,
            "range": "± 1028787",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 105136253,
            "range": "± 4310097",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 90695,
            "range": "± 1505",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1517016,
            "range": "± 11956",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 20752469,
            "range": "± 343681",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 19676274,
            "range": "± 419835",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 102128170,
            "range": "± 5514330",
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
          "id": "fe3867417d71850e661b1cec5e8d6c916449936a",
          "message": "Add find_matches benchmarks",
          "timestamp": "2022-01-21T11:17:49+01:00",
          "tree_id": "972b696bca9e34920b391ac8628ea7269e7e61bb",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/fe3867417d71850e661b1cec5e8d6c916449936a"
        },
        "date": 1642760689168,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 81632,
            "range": "± 22937",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1414419,
            "range": "± 260152",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 22171862,
            "range": "± 3760666",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 21255935,
            "range": "± 4135931",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 97048902,
            "range": "± 7731949",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 84153,
            "range": "± 13527",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1333140,
            "range": "± 239544",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 18966815,
            "range": "± 3860096",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 19031615,
            "range": "± 2757869",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 90097740,
            "range": "± 18483783",
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
          "id": "d14c10d2cb7b1ef5b479dc0dfe1d6ad05b8833f8",
          "message": "Add installation instructions to snakemake",
          "timestamp": "2022-01-21T15:18:08+01:00",
          "tree_id": "9a69a6c6e869fdef3b9da0d20edff187bf390027",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/d14c10d2cb7b1ef5b479dc0dfe1d6ad05b8833f8"
        },
        "date": 1642775040087,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 81684,
            "range": "± 2547",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1403547,
            "range": "± 7227",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 20913553,
            "range": "± 511793",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 20245025,
            "range": "± 822113",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 99059625,
            "range": "± 5385899",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 77972,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1272385,
            "range": "± 7736",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 17598803,
            "range": "± 320956",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 16793154,
            "range": "± 290927",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 80439989,
            "range": "± 4901958",
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
          "id": "8b87e8fe2f218b3f56157ef7534901cb7d97b18c",
          "message": "Move double expand check into A* to save a hashmap insert/lookup",
          "timestamp": "2022-01-21T15:50:42+01:00",
          "tree_id": "330f33efc8e75338ea5886905d2a8deb65f213f8",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/8b87e8fe2f218b3f56157ef7534901cb7d97b18c"
        },
        "date": 1642776969702,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 67014,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1208747,
            "range": "± 9136",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17897963,
            "range": "± 175539",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17125188,
            "range": "± 142756",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 78537877,
            "range": "± 4669690",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 62137,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1096984,
            "range": "± 8825",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 15188667,
            "range": "± 95052",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 14410443,
            "range": "± 87554",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 73667332,
            "range": "± 3024711",
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
          "id": "dfddb5a610d1cd568053fa7898e2152b0bd6792e",
          "message": "Fix test: Add is_start_of_seed, prune_with_hint to EqualHeuristic",
          "timestamp": "2022-01-21T16:12:52+01:00",
          "tree_id": "1bbfe5cbee6ca948cdccefde2903e2b909290708",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/dfddb5a610d1cd568053fa7898e2152b0bd6792e"
        },
        "date": 1642778452159,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 81145,
            "range": "± 13631",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1611309,
            "range": "± 425335",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 24903118,
            "range": "± 3982243",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 23795035,
            "range": "± 4726035",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 110434019,
            "range": "± 16113209",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 83181,
            "range": "± 22242",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1355339,
            "range": "± 198545",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 19924457,
            "range": "± 2559695",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 19453511,
            "range": "± 2165194",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 106459620,
            "range": "± 11491207",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pesho@inf.ethz.ch",
            "name": "Pesho Ivanov",
            "username": "pesho-ivanov"
          },
          "committer": {
            "email": "pesho@inf.ethz.ch",
            "name": "Pesho Ivanov",
            "username": "pesho-ivanov"
          },
          "distinct": true,
          "id": "f992883a725ccf9372caea0bb65e7c8fb4b5c5db",
          "message": "refactor snakemake",
          "timestamp": "2022-01-21T17:46:59+01:00",
          "tree_id": "205e38def27ef2adb0a89ee3dbd54f7c69e9fa73",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/f992883a725ccf9372caea0bb65e7c8fb4b5c5db"
        },
        "date": 1642783963187,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 73665,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1409858,
            "range": "± 8900",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 20516285,
            "range": "± 521239",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 19723864,
            "range": "± 558203",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 95095337,
            "range": "± 7284123",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 71300,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1257956,
            "range": "± 6602",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 17614945,
            "range": "± 381692",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 16897056,
            "range": "± 619974",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 91536064,
            "range": "± 10472023",
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
          "id": "2b2ed2364fafeda6008bd84e33881a2f8dc73f10",
          "message": "Pre-allocate more in DiagonalMap",
          "timestamp": "2022-01-21T18:10:03+01:00",
          "tree_id": "c46803a25ab0bcc24350fd4df8f841e32cb13aa7",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/2b2ed2364fafeda6008bd84e33881a2f8dc73f10"
        },
        "date": 1642785343929,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 74828,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1354452,
            "range": "± 5139",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 20316941,
            "range": "± 293025",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 19423835,
            "range": "± 482115",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 88871755,
            "range": "± 4521001",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 67523,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1235376,
            "range": "± 5690",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 17132974,
            "range": "± 148102",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 16299390,
            "range": "± 201779",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 84398338,
            "range": "± 8243661",
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
          "id": "d7080b6a5e102a79f6dcd5e5f73672e82a79b2d3",
          "message": "Rename l -> k everywhere",
          "timestamp": "2022-01-21T19:31:43+01:00",
          "tree_id": "41e081d3a6e7514215eb39fc10a0fbc4785e83e7",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/d7080b6a5e102a79f6dcd5e5f73672e82a79b2d3"
        },
        "date": 1642790222721,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 65326,
            "range": "± 1098",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1196292,
            "range": "± 8042",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17808838,
            "range": "± 73267",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17066944,
            "range": "± 708206",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 73695089,
            "range": "± 4497507",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 60791,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 1085293,
            "range": "± 46748",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 15011165,
            "range": "± 238076",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 14249730,
            "range": "± 192159",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 69964883,
            "range": "± 3406757",
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
          "id": "7f96dde0f7a04ed2468abe5637cf5627ff9e0d89",
          "message": "INEXACT MATCHES USING HASHING",
          "timestamp": "2022-01-22T15:36:21+01:00",
          "tree_id": "205de937a487d95c3cd7984dd90cb704e668486c",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/7f96dde0f7a04ed2468abe5637cf5627ff9e0d89"
        },
        "date": 1642862750134,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 40109,
            "range": "± 6255",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 891594,
            "range": "± 161246",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 14117260,
            "range": "± 1195298",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 13037864,
            "range": "± 1670132",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 45033217,
            "range": "± 5798440",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 41545,
            "range": "± 6860",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 824450,
            "range": "± 117156",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10661646,
            "range": "± 1383252",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9855657,
            "range": "± 1435415",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 42029163,
            "range": "± 5208692",
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
          "id": "6863f625aac55a010c2161efa90563cbbdab4214",
          "message": "New tables; update notebook",
          "timestamp": "2022-01-29T02:39:43+01:00",
          "tree_id": "d3c285b912b9753f2ddca9f1e8a42bee21c2af13",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/6863f625aac55a010c2161efa90563cbbdab4214"
        },
        "date": 1643420675405,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 36391,
            "range": "± 7304",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 782891,
            "range": "± 89493",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 12620394,
            "range": "± 1672316",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 12420034,
            "range": "± 2231998",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 45725454,
            "range": "± 4863069",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 39726,
            "range": "± 3952",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 700424,
            "range": "± 149811",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10359522,
            "range": "± 2149128",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9408995,
            "range": "± 1837242",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 45071009,
            "range": "± 7234586",
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
          "id": "2c2bff8922c9d58ae8e58e4dea3c1cd73e89ca6a",
          "message": "Use SPLIT VEC",
          "timestamp": "2022-01-30T13:46:26+01:00",
          "tree_id": "6c7f5ff1b3318cc5115c96b3811504e29e345394",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/2c2bff8922c9d58ae8e58e4dea3c1cd73e89ca6a"
        },
        "date": 1643559739235,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 45989,
            "range": "± 3374",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1058419,
            "range": "± 39408",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 16653553,
            "range": "± 515402",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 15507628,
            "range": "± 451549",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 56093836,
            "range": "± 2757356",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 50709,
            "range": "± 1092",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 936159,
            "range": "± 21938",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13042824,
            "range": "± 396058",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 11793408,
            "range": "± 294140",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 42323069,
            "range": "± 3618792",
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
          "id": "8367ce54fc12db1cd8763a32ddcac1f26a4e5a59",
          "message": "not yet there",
          "timestamp": "2022-01-31T12:01:47+01:00",
          "tree_id": "1e770ef5d5884e2f715cd1a5f9537c99ce570e45",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/8367ce54fc12db1cd8763a32ddcac1f26a4e5a59"
        },
        "date": 1643627205751,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38558,
            "range": "± 14463",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 782580,
            "range": "± 6769",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 14954453,
            "range": "± 161972",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 14095762,
            "range": "± 283318",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 62043375,
            "range": "± 682106",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 41230,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 782560,
            "range": "± 3143",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13654770,
            "range": "± 353095",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12496789,
            "range": "± 278648",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 54201911,
            "range": "± 981364",
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
          "id": "01b66cd9a6f80a1f83fc7e0c54e62136ff0308f9",
          "message": "Fix bugs in snakemake; scale up to 100M",
          "timestamp": "2022-01-31T16:38:19+01:00",
          "tree_id": "9c5c489676c80d64d8dbafd09f1f9eccf94fa288",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/01b66cd9a6f80a1f83fc7e0c54e62136ff0308f9"
        },
        "date": 1643643800016,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 43238,
            "range": "± 3339",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1000978,
            "range": "± 91867",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 15961868,
            "range": "± 1380243",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 14518412,
            "range": "± 1369332",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 51131031,
            "range": "± 5273436",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 46398,
            "range": "± 4504",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 892403,
            "range": "± 94160",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 12502494,
            "range": "± 844551",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 11320164,
            "range": "± 826630",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 40007570,
            "range": "± 3043596",
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
          "id": "abb5937a43708b6abdefbd6f656a0dc4e3ff0ae0",
          "message": "Update e0.05-k14 table with astar stats",
          "timestamp": "2022-01-31T18:09:09+01:00",
          "tree_id": "9b76e4312f083ed237c6f9f35268273e9d9a142b",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/abb5937a43708b6abdefbd6f656a0dc4e3ff0ae0"
        },
        "date": 1643649210192,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 33511,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 784040,
            "range": "± 3947",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 12556452,
            "range": "± 330668",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 11696758,
            "range": "± 639163",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 46426008,
            "range": "± 3207604",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 36005,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 689709,
            "range": "± 2604",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 9661581,
            "range": "± 178570",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 8730568,
            "range": "± 132814",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 36259136,
            "range": "± 4482501",
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
          "id": "c455957672074f224dca05724f3a78973fe4efe4",
          "message": "Put astar stats in .stats file and .tsv files",
          "timestamp": "2022-01-31T18:15:10+01:00",
          "tree_id": "641b093d0646a6d63d5cea3a37ef404763b4db6d",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/c455957672074f224dca05724f3a78973fe4efe4"
        },
        "date": 1643649717455,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 45230,
            "range": "± 8639",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1017225,
            "range": "± 81200",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 16861228,
            "range": "± 1384221",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 15448185,
            "range": "± 1020637",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 63743122,
            "range": "± 5752382",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 50284,
            "range": "± 12357",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 921571,
            "range": "± 156935",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13007036,
            "range": "± 820793",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 11897489,
            "range": "± 859207",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 48158902,
            "range": "± 6676594",
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
          "id": "88161e3d4d3285c658d8de1b226f3f11594f3222",
          "message": "Use own generate_dataset in snakemake instead of WFA binary",
          "timestamp": "2022-02-01T22:02:11+01:00",
          "tree_id": "68ff188a30acf1bc83961b4d83c1bf55c3665e72",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/88161e3d4d3285c658d8de1b226f3f11594f3222"
        },
        "date": 1643749645902,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38052,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 931835,
            "range": "± 13165",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17673062,
            "range": "± 331420",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17228781,
            "range": "± 404547",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 165852605,
            "range": "± 1337270",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40901,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 808486,
            "range": "± 7878",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 11477556,
            "range": "± 307316",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 10345198,
            "range": "± 260568",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 37392680,
            "range": "± 2565468",
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
          "id": "76aca167ef77d6de08abf84ea74f7ca09f81b274",
          "message": "Add table showing log linear growth",
          "timestamp": "2022-02-02T12:31:35+01:00",
          "tree_id": "125b07b316905b92dcf1c4e7b51324f4dd669ede",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/76aca167ef77d6de08abf84ea74f7ca09f81b274"
        },
        "date": 1643801795995,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 37848,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 921152,
            "range": "± 8435",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17451659,
            "range": "± 428645",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17172623,
            "range": "± 495901",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 165398328,
            "range": "± 1084575",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40268,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 790075,
            "range": "± 12319",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 11295188,
            "range": "± 57798",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 10221244,
            "range": "± 44951",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 35115366,
            "range": "± 1412905",
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
          "id": "6c0bc9fbe3968a4417e07a95db1d714373548a2e",
          "message": "Latest version of notebook",
          "timestamp": "2022-02-02T16:08:03+01:00",
          "tree_id": "379831938716fda38522f70749e313a72cc05814",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/6c0bc9fbe3968a4417e07a95db1d714373548a2e"
        },
        "date": 1643814757267,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38223,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 887811,
            "range": "± 5607",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 13967924,
            "range": "± 206793",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 13045051,
            "range": "± 77203",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 48615952,
            "range": "± 2848807",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 41103,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 779400,
            "range": "± 2698",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10835772,
            "range": "± 150162",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9794859,
            "range": "± 93105",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 38571978,
            "range": "± 4293525",
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
          "id": "b61cb19844737c67566c519f0043fa0c6182d6c9",
          "message": "Move data/* to evals/",
          "timestamp": "2022-02-02T16:15:18+01:00",
          "tree_id": "92fac38b0afe8d16105d02d7309d47037a56b953",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/b61cb19844737c67566c519f0043fa0c6182d6c9"
        },
        "date": 1643815240466,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 45853,
            "range": "± 1544",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 1050519,
            "range": "± 60465",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 16797031,
            "range": "± 955322",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 15762993,
            "range": "± 584576",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 62536349,
            "range": "± 3194091",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 49573,
            "range": "± 1753",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 939031,
            "range": "± 7441",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13090561,
            "range": "± 520512",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 11697656,
            "range": "± 729126",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 46063039,
            "range": "± 5725420",
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
          "id": "ae597d7f73db4ac0391ca557e83f53c62e47cfd8",
          "message": "Move snakefile into evals/",
          "timestamp": "2022-02-02T16:22:55+01:00",
          "tree_id": "67286bfe0ae5990e2638183139d24e9f4f7f885a",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/ae597d7f73db4ac0391ca557e83f53c62e47cfd8"
        },
        "date": 1643815619486,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 33743,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 782760,
            "range": "± 3114",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 13942676,
            "range": "± 224054",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 13020914,
            "range": "± 55902",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 44459405,
            "range": "± 934588",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 41096,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 781820,
            "range": "± 2834",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10809344,
            "range": "± 21806",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9781961,
            "range": "± 34828",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 34005683,
            "range": "± 751247",
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
          "id": "8cfdc3c4c8c3e0b39347845ffcdeea9d2aaab823",
          "message": "notebooks cleanup",
          "timestamp": "2022-02-02T16:42:49+01:00",
          "tree_id": "86ffd127e891b51883afd115e65536c0a0878372",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/8cfdc3c4c8c3e0b39347845ffcdeea9d2aaab823"
        },
        "date": 1643816839035,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 33784,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 786079,
            "range": "± 5252",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 13530743,
            "range": "± 614665",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 12618326,
            "range": "± 640998",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 51791393,
            "range": "± 3705946",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 36499,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 690778,
            "range": "± 4046",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 11238787,
            "range": "± 1647144",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9109492,
            "range": "± 595568",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 43446745,
            "range": "± 5734326",
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
          "id": "4ef107a4c6e1188a92d5d7cdb8258a3c9078ba96",
          "message": "Add a new N=1M params table",
          "timestamp": "2022-02-02T17:03:02+01:00",
          "tree_id": "41d30ae8bbda1e18f42ebf1db492dde51b60eae5",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/4ef107a4c6e1188a92d5d7cdb8258a3c9078ba96"
        },
        "date": 1643818088975,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38069,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 921663,
            "range": "± 11463",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17550113,
            "range": "± 414895",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17180723,
            "range": "± 347181",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 165398832,
            "range": "± 1276041",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40554,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 792158,
            "range": "± 9125",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 11391516,
            "range": "± 206367",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 10310068,
            "range": "± 232823",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 36082654,
            "range": "± 1830551",
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
          "id": "3ce329309d75bbf12725477a494ce33614e70106",
          "message": "-evals/stats/",
          "timestamp": "2022-02-02T17:33:15+01:00",
          "tree_id": "b5321576ac7a4e7293b22ca9af39172ad6b50046",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/3ce329309d75bbf12725477a494ce33614e70106"
        },
        "date": 1643819858403,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38321,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 891267,
            "range": "± 5249",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 14427533,
            "range": "± 392086",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 13387922,
            "range": "± 494772",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 51098212,
            "range": "± 3136971",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 41258,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 782884,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10959227,
            "range": "± 180200",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9926548,
            "range": "± 310465",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 41191821,
            "range": "± 3567697",
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
          "id": "5a1d0d3a4f6563941932588ab72b44340f9ee63b",
          "message": "Better filtering for m=1, change k=32 to k=31; push new table",
          "timestamp": "2022-02-02T19:05:54+01:00",
          "tree_id": "39d8b9483e672992d174eb36fa03c61779bffc49",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/5a1d0d3a4f6563941932588ab72b44340f9ee63b"
        },
        "date": 1643825461598,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 37964,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 924181,
            "range": "± 8122",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 17975545,
            "range": "± 512513",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 17476785,
            "range": "± 413815",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 166961228,
            "range": "± 1270007",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40027,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 786100,
            "range": "± 9923",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 11509546,
            "range": "± 609010",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 10336027,
            "range": "± 246850",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 37593051,
            "range": "± 2592421",
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
          "id": "408f51b28224c4ae127dc095759b5febda58069b",
          "message": "adding back the notebooks",
          "timestamp": "2022-02-02T22:26:54+01:00",
          "tree_id": "93035407ef2bc167e587563c47d2e39f3563c741",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/408f51b28224c4ae127dc095759b5febda58069b"
        },
        "date": 1643837464522,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 38173,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 880385,
            "range": "± 2592",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 14260414,
            "range": "± 670072",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 13249085,
            "range": "± 584206",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 51468680,
            "range": "± 5948537",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 40434,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 772838,
            "range": "± 4337",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 10931751,
            "range": "± 315384",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 9891036,
            "range": "± 345476",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 37358447,
            "range": "± 6439555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pesho-ivanov@users.noreply.github.com",
            "name": "Pesho Ivanov",
            "username": "pesho-ivanov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4653004cdd77e3aee32ae496ece5f2c6f12ad666",
          "message": "capitalization :\"p",
          "timestamp": "2022-02-02T22:27:46+01:00",
          "tree_id": "99d73c822f8bec11eddfb94935d38cf39217b190",
          "url": "https://github.com/RagnarGrootKoerkamp/astar-pairwise-aligner/commit/4653004cdd77e3aee32ae496ece5f2c6f12ad666"
        },
        "date": 1643837591744,
        "tool": "cargo",
        "benches": [
          {
            "name": "base_100",
            "value": 43394,
            "range": "± 7472",
            "unit": "ns/iter"
          },
          {
            "name": "base_1000",
            "value": 939231,
            "range": "± 174992",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000",
            "value": 15410792,
            "range": "± 2346462",
            "unit": "ns/iter"
          },
          {
            "name": "base_10000_prune_less",
            "value": 14850566,
            "range": "± 2443112",
            "unit": "ns/iter"
          },
          {
            "name": "base_50000_similar",
            "value": 63197340,
            "range": "± 9078097",
            "unit": "ns/iter"
          },
          {
            "name": "fast_100",
            "value": 51542,
            "range": "± 8132",
            "unit": "ns/iter"
          },
          {
            "name": "fast_1000",
            "value": 965213,
            "range": "± 109928",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000",
            "value": 13723454,
            "range": "± 2836603",
            "unit": "ns/iter"
          },
          {
            "name": "fast_10000_prune_less",
            "value": 12053394,
            "range": "± 1711708",
            "unit": "ns/iter"
          },
          {
            "name": "fast_50000_similar",
            "value": 43955508,
            "range": "± 7486246",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}