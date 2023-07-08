// beberapa cara untuk membuat objek, yaitu objek literal, function declaration, dan constructer

// Objek literal
var mhs1 = {
  nama: "ubaidillah",
  nim: 203999210,
  jurusan: "teknik mekatronika",
};

// function declaration
function buatObjek(nama, nim, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.jurusan = jurusan;
  return mhs;
}
var mhs2 = buatObjek("ubaidillah", 2003999343, "teknik mekatronika");

// constructer
function Mahasiswa(nama, nim, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
}
var mhs3 = new Mahasiswa("ubaidillah", 3287248343, "teknik");
