// menampilkan isi array dengan method join
var arr1 = ["ubed", 1, false];
console.log("menampilkan isi array dengan method 'join' : " + arr1.join(" - "));

// menambah isi array pada bagian terakhir dengan method push
var arr2 = ["ubed", 1, false];
arr2.push("ubaidillah", "dillah");
console.log("menambah isi array pada bagian terakhir dengan method 'push' : " + arr2.join(" - "));

// menghapus isi array pada bagian terakhir dengan method pop
var arr3 = ["ubed", 1, false, "ubaidillah", "dillah"];
arr3.pop();
arr3.pop();
console.log("menghapus isi array pada bagian terakhir dengan method 'pop' : " + arr3.join(" - "));

// menambah isi array pada bagian awal dengan method unshift
var arr4 = ["ubed", 1, false];
arr4.unshift("dillah");
console.log("menambah isi array pada bagian awal dengan method 'unshift' : " + arr4.join(" - "));

// menghapus isi array pada bagian awal dengan method shift
var arr5 = ["ubed", 1, false, "ubaidillah", "dillah"];
arr5.shift();
console.log("menghapus isi array pada bagian awal dengan method 'shift' : " + arr5.join(" - "));
