var st = "";

for (var i = 1; i < 7; i++) {
  for (var b = 0; b < i; b++) {
    st += "*";
  }
  st += "\n";
}
for (var c = 7; c > 0; c--) {
  for (var d = 0; d < c; d++) {
    st += "*";
  }
  st += "\n";
}
console.log(st);
