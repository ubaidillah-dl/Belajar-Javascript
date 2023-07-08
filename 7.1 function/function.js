function hitungVolumeDuaKubus(a, b) {
  var volumeA, volumeB, hasil;

  volumeA = a * a * a;
  volumeB = b * b * b;

  hasil = volumeA + volumeB;

  return hasil;
}

var sisiKubusA = prompt("Masukkan sisi kubus A : ");
var sisiKubusB = prompt("Masukkan sisi kubus B : ");

alert("Jumlah volume dua kubus adalah " + hitungVolumeDuaKubus(sisiKubusA, sisiKubusB));
