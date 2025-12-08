import fireQuestModule from "./fireQuestModule.js";

export let canLock = false;

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

const povGif = document.getElementById("povGif");

let clickSound = new Audio();
clickSound.src = "assets/audio/diablo-2-hostile.mp3";

let clickSound2 = new Audio();
clickSound2.src = "assets/audio/diablo-2-select.mp3";

let clickSound3 = new Audio();
clickSound3.src = "assets/audio/diablo-2-select.mp3";

let clickSound4 = new Audio();
clickSound4.src = "assets/audio/diablo-2-select.mp3";

let clickSound5 = new Audio();
clickSound5.src = "assets/audio/diablo-2-select.mp3";

let levelMusic1 = new Audio();
levelMusic1.src = "assets/audio/01 - Wilderness.mp3";
levelMusic1.volume = 0.1;
levelMusic1.currentTime = 10;

button1.onclick = function () {
  clickSound.play();
  levelMusic1.play();
  fireQuestModule("Find a key.");

  menu1.style.display = "none";
  povGif.style.display = "block";
  povGif.src = "";
  void povGif.offsetWidth;
  povGif.src = "assets/pov.gif";

  const gifDuration = 4920;
  setTimeout(() => {
    povGif.src = "assets/lastpov.gif";
  }, gifDuration);

  canLock = true;
  console.log("button1");
};

button2.onclick = function () {
  clickSound2.play();
  menu1.style.display = "none";
  menu2.style.display = "flex";
  console.log("pressed button2");
};

button3.onclick = function () {
  clickSound3.play();
  menu1.style.display = "flex";
  menu2.style.display = "none";
  console.log("pressed button3");
};

button4.onclick = function () {
  clickSound4.play();
  menu1.style.display = "none";
  menu3.style.display = "flex";
  console.log("pressed button4");
};

button5.onclick = function () {
  clickSound5.play();
  menu1.style.display = "flex";
  menu3.style.display = "none";
  console.log("pressed button5");
};
