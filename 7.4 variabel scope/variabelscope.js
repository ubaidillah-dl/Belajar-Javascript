// tidak bisa memanggil variabel didalam function
var a = 1;
function fa() {
  var a = 2;
  return a;
}
console.log("javascript tidak dapat memanggil variabel di dalam function, jadi hasilnya " + a);

// bisa memanggil variabel di luar function tapi tidak bisa sebaliknya
var b = 2;
function fb() {
  return b;
}

console.log("javascript dapat memanggil variabel global jadi hasilnya " + fb());

// ketika 2 nama variabel global dan variabel function yang sama maka variabel di dalam function yang diambil
var c = 3;
function fc() {
  var c = 2;
  return c;
}
console.log("ketika 2 nama variabel global dan variabel function yang sama maka variabel di dalam function yang diambil " + fc());

// ketika 2 nama variabel global dan variabel function yang sama maka variabel di dalam function yang diambil, tapi ketika harus mengambil variabel global maka tambahkan 'window.namaVariabel'
var d = 1;
function fd() {
  var d = 2;
  return window.d;
}
console.log("ketika harus mengambil variabel global maka tambahkan 'window.namaVariabel', maka yang diambil adalah " + fd() + " dari variabel global");

// ketika lupa menambahkan var pada variabel didalam function maka secara otomatis akan dibuatkan deklarasi pada lingkup global
function fe() {
  e = 2;
  return e;
}
console.log("ketika lupa menambahkan 'var' pada variabel didalam function maka secara otomatis akan dibuatkan deklarasi pada lingkup global, jadi hasil '" + fe() + "' ini merupakan variabel global");

// ini adalah 2 lingkup variabel yang berbeda
var f = 2;
function ff(f) {
  var f;
  return f;
}
console.log("ini adalah contoh 2 lingkup variabel yang berbeda " + ff(f));
