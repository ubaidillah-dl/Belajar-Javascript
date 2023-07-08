// cara 1 - function declaration
function halo() {
  console.log(this);
  console.log("object menggunakan function declaration");
}
halo();
// thisnya mengembalikan object global

// cara 2 - object literal
var halo1 = {};
halo1.halo = function () {
  console.log(this);
  console.log("object menggunakan object literal");
};
halo1.halo();
// thisnya mengembalikan object yang bersangkutan

// cara 2 - constructor
function Halo() {
  console.log(this);
  console.log("object menggunakan constructor");
}
new Halo();
// thisnya mengembalikan object yang baru dibuat
