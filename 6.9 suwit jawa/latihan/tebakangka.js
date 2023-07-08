var tanya = confirm("Mau main TEBAK ANGKA ?");

if (tanya) {
  var ulang = true;
  while (ulang) {
    // buat angka random dulu
    var komputer = Math.floor(Math.random() * 10) + 1;
    var kes = 2;

    var pemain = prompt("Masukkan angka 1 - 10 ! \nAnda punya 3 kesempatan");

    for (kes; kes > 0; kes--) {
      if (pemain == komputer) {
        alert("Angka tebakanmu BENAR !\nAngka yang dicari adalah " + komputer);
        kes = 0;
      } else if (pemain > komputer) {
        alert("Terlalu TINGGI ! \nAyo masih ada " + kes + " kesempatan");
        pemain = prompt("Masukkan angka tebakan !");
        ulang = pemain;
      } else if (pemain < komputer) {
        alert("Terlalu RENDAH ! \nAyo masih ada " + kes + " kesempatan");
        pemain = prompt("Masukkan angka tebakan !");
        ulang = pemain;
      }
    }

    if (pemain == komputer && kes == 0) {
      alert("Angka tebakanmu BENAR !\nAngka yang dicari adalah " + komputer);
    } else if (pemain != komputer && kes == 0) {
      alert("Kamu GAGAL !\nAngka yang dicari adalah " + komputer);
    }

    ulang = confirm("Mau main lagi ?");
  }
} else {
  alert("Yaaah...");
}
