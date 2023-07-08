var noAngkot = 1;
var jumlahAngkot = 12;
var beroperasiDenganBaik = 6;

while (noAngkot <= beroperasiDenganBaik) {
  console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

for (beroperasiDenganBaik += 1; beroperasiDenganBaik <= 10; beroperasiDenganBaik++) {
  console.log("Angkot No. " + beroperasiDenganBaik + " sedang tidak beroperasi");
}
