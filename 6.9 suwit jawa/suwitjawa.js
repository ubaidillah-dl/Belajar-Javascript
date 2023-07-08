var tanya = confirm("Mau main SUWIT JAWA ?");

if (tanya == true) {
  var ulang = true;

  while (ulang == true) {
    //   tangkap pilihan pemain
    var pemain = prompt("Kamu pilih gajah, semut atau orang ?");

    //   tangkap pilihan komputer
    var komputer = Math.random();
    if (komputer < 0.34) {
      komputer = "gajah";
    } else if (komputer >= 0.34 && komputer < 0.67) {
      komputer = "orang";
    } else {
      komputer = "semut";
    }
    var hasil = "";

    // tentukan jalannya
    if (pemain == komputer) {
      hasil = " hasilnya SERI";
    } else if (pemain == "gajah") {
      // ini pake operator ternary
      hasil = komputer == "orang" ? " kamu MENANG" : " kamu KALAH";
    } else if (pemain == "orang") {
      if (komputer == "gajah") {
        hasil = " kamu KALAH";
      } else {
        hasil = " kamu MENANG";
      }
    } else if (pemain == "semut") {
      if (komputer == "orang") {
        hasil = " kamu KALAH";
      } else {
        hasil = " kamu MENANG";
      }
    }
    ulang = confirm(pemain + " melawan " + komputer + hasil + " ! \n\nmau main lagi ?");
  }
  alert("Yaaah...");
} else {
  alert("Yaaah...");
}
