var noAngkot = 1;
var jumlahAngkot = 10;
var beroperasiDenganBaik = 6;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= beroperasiDenganBaik) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == 8) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
  }
}
