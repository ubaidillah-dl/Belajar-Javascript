// rekursif merupakan function yang memanggil dirinya sendiri
function rekursif(a) {
  var a;
  if (a == 11) {
    return;
  }

  console.log(a);

  return rekursif(a + 1);
}

rekursif(1);
