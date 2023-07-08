var angka = prompt("masukkan angka : ");

switch (angka) {
  case "1":
    alert("Anda memasukkan angka " + angka);
    break;
  case "2":
    alert("Anda memasukkan angka " + angka);
    break;
  case "3":
    alert("Anda memasukkan angka " + angka);
    break;
  case "3":
    alert("Anda memasukkan angka " + angka);
    break;
  case "4":
    alert("Anda memasukkan angka " + angka);
    break;
  default:
    alert("Angka yang anda masukkan salah");
    break;
}

var contoh = prompt("masukkan nama minuman ! (cth : nasi, daging, susu, humberger, softdrink)");
switch (contoh) {
  case "nasi":
  case "daging":
  case "susu":
    alert(contoh + " adala makanan/minuman SEHAT");
    break;
  case "humberger":
  case "softdrink":
    alert(contoh + " adala makanan/minuman tidak SEHAT");
    break;
  default:
    alert(contoh + " tidak ada dalam list");
    break;
}
