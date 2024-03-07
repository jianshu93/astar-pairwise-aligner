
codecoverage:
   CARGO_INCREMENTAL=0 RUSTFLAGS='-Cinstrument-coverage' LLVM_PROFILE_FILE='cargo-test-%p-%m.profraw' \
       cargo test -p astarpa2
   grcov . --binary-path ./target/debug/deps/ -s . -t html --branch --ignore-not-existing --ignore '../*' --ignore "/*" -o target/coverage
   rm *.profraw **/*.profraw
   open target/coverage/html/index.html

vis:
   cargo run -r --example aligners_vis --features sdl

fig name:
  rm imgs/astarpa2-paper/{{name}}/*png
  cargo run -r --example fig-{{name}}-2 --features sdl
  mogrify -format png imgs/astarpa2-paper/{{name}}/*bmp
  rm imgs/astarpa2-paper/{{name}}/*bmp
  feh imgs/astarpa2-paper/{{name}}/*png &

fig-intro: (fig "intro")
fig-limitations: (fig "limitations")
fig-prepruning: (fig "prepruning")
