function hitungVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

var sisiKubusA = prompt("Masukkan sisi kubus A : ");
var sisiKubusB = prompt("Masukkan sisi kubus B : ");

alert("Jumlah volume dua kubus adalah " + hitungVolumeDuaKubus(sisiKubusA, sisiKubusB));
