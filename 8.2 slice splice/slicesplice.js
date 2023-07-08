// menambahkan atau menghapus elemen dibagian tengah array menggunakan method splice
var arr1 = ["ubed", "sahal", "ulum", "febrian"];
// sintaks : namaArray.splice(dimulaiDariIndekBerapa, berapaYangMauDihapus-optional, mauMenambahkanApa)
arr1.splice(2, 1, "sahal");
console.log("menambahkan atau menghapus elemen dibagian tengah array menggunakan method 'splice' : " + arr1.join(" - "));

// mengiris atau memisah isi array dan ditampung ke dalam array baru mengggunakan method slice
var arr2 = ["ubed", "sahal", "ulum", "febrian"];
// sintaks : var namaArrayBaru.slice(indekAwal, IndekAkhir), indek awal akan dicetak tapi indek akhir tidak
var arrBaru = arr2.slice(1, 3);
console.log("mengiris atau memisah isi array dan ditampung ke dalam array baru mengggunakan method 'slice' : " + arrBaru.join(" - "));
