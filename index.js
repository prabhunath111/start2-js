let r = 7;
let pattern = "";
for (let i = 1; i <= r; i++) {
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);