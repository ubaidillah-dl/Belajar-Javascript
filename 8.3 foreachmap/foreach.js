// menampilkan setiap elemen atau mengeluarkan elemen dari array menggunakan method forEach yang cara hampir sama dengan menggunakan for biasa tapi lebih simple
var arr1 = ["ubed", "sahal", "ulum", "febrian"];
arr1.forEach(function (e, f) {
  console.log("Mahasiswa dengan indek ke " + (f + 1) + " bernama " + e);
});

// map hampir sama dengan forEach tapi map mengembalikan array
var arr2 = ["ubed", "sahal", "ulum", "febrian"];
var arrBaru = arr2.map(function (e, f) {
  var hasil = "Indek ke " + f + " adalah " + e;
  return hasil;
});
console.log(arrBaru);

// sort untuk mengurutkan nilainya
var arr3 = [1, 3, 4, 2, 6, 8, 9, 8, 20, 10, 100, 300, 30, 200];
var urut = arr3.join(" - ");
arr3.sort(function (a, b) {
  // function ini berfungsi untuk mengurutkan sesuai dengan angka berdasarkan nilainya bukan berdasarkan angka pertama
  return a - b;
});
console.log("Ini adalah angka yang belum diurutkan : " + urut);
console.log("Ini adalah angka yang sudah diurutkan : " + arr3.join(" - "));
