// penulisan function declaration, bisa buat function dulu baru dipanggil
function namaFunction(parameterOptional) {
  return parameterOptional;
}
console.log(namaFunction("Ini function declaration \n" + 8));

// atau bisa buat dipanggil dulu baru buat function, karna javascript menerapkan konsep 'hoisting', yaitu menyimpan semua function dulu kedalam memori
console.log(namaFunctionA(10));
function namaFunctionA(params) {
  return params;
}

// penulisan function expression, harus membuat function dulu baru dipanggil
var fungsi = function namaFunctionOptional(parameterJugaOptional) {
  return parameterJugaOptional;
};

console.log(fungsi("\n\nIni function expression \n" + 11));
