// ===============================
// AMBIL SEMUA ELEMENT
// ===============================

const cokelatImg = document.getElementById("cokelatImg");
const surat = document.getElementById("surat");

const cameraIcon = document.getElementById("cameraIcon");
const flash = document.getElementById("flash");
const foto = document.getElementById("foto");

const cameraSound = document.getElementById("cameraSound");
const paperOpenSound = document.getElementById("paperOpenSound");
const paperCloseSound = document.getElementById("paperCloseSound");


// ===============================
// STATE
// ===============================

let clickState = 0;
/*
0 = cokelat utuh
1 = cokelat digigit
2 = newspaper tampil
*/


// ===============================
// COKELAT CLICK
// ===============================

cokelatImg.addEventListener("click", () => {

  // 0 → jadi digigit
  if (clickState === 0) {
    cokelatImg.src = "cokelat2.png";
    clickState = 1;
  }

  // 1 → muncul newspaper + sound
  else if (clickState === 1) {

    // pastikan sound bisa diputar ulang
    paperOpenSound.pause();
    paperOpenSound.currentTime = 0;
    paperOpenSound.play();

    // kasih delay biar natural
    setTimeout(() => {
      surat.classList.add("active");
    }, 150);

    clickState = 2;
  }

});


// ===============================
// TUTUP NEWS
// ===============================

surat.addEventListener("click", () => {

  paperCloseSound.pause();
  paperCloseSound.currentTime = 0;
  paperCloseSound.play();

  surat.classList.remove("active");

  // reset ke awal
  cokelatImg.src = "cokelat1.png";
  clickState = 0;
});


// ===============================
// CAMERA EFFECT
// ===============================

cameraIcon.addEventListener("click", () => {

  cameraSound.pause();
  cameraSound.currentTime = 0;
  cameraSound.play();

  // flash effect
  flash.style.opacity = "1";

  setTimeout(() => {
    flash.style.opacity = "0";
  }, 150);

  setTimeout(() => {
    foto.classList.add("active");
  }, 200);

});


// ===============================
// TUTUP FOTO
// ===============================

foto.addEventListener("click", () => {
  foto.classList.remove("active");
});
