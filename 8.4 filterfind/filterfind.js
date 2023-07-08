// mencari nilai di dalam sebuah array dan mengembalikan dalam bentuk array menggunakan method filter
var arr1 = [1, 3, 4, 2, 6, 8, 9, 8, 20, 10, 100, 300, 30, 200];
var filter = arr1.filter(function (e) {
  return e > 20;
});
filter.sort(function (a, b) {
  return a - b;
});
console.log(filter.join(" - "));

// mencari nilai tertentu di dalam sebuah array dan mengembalikan satu nilai saja, dia akan mencari atau mengecek dari indek pertama
var arr2 = [1, 3, 4, 2, 6, 8, 30, 9, 8, 20, 10, 100, 300, 200];
var find = arr2.find(function (e) {
  return e > 20;
});
console.log(find);
