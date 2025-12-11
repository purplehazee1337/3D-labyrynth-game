import Player from "./classes/player.js";
import objectDetector from "./utils/objectDetector.js";
import Game from "./classes/Game.js";
import itemRotator from "./utils/itemRotator.js";
import playSound from "./utils/playSound.js";
import fireModal from "./utils/fireModal.js";

const player = new Player(0, 0, 0, 0, 0);
const game = new Game(player);

//Menu and UI elements
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const restartButton = document.getElementById("restart-button");

//Sounds
const sound1 = "assets/audio/diablo-2-select.mp3";
const sound2 = "assets/audio/diablo-2-hostile.mp3";
const sound3 = "assets/audio/diablo-2-identify.mp3";
const sound4 = "assets/audio/diablo-2-enchanted.mp3";
const levelMusic1 = "assets/audio/01 - Wilderness.mp3";

button1.onclick = function () {
  game.startNewLevel();
  playSound(sound1);
  //playSound(levelMusic1);
  menu1.style.display = "none";
  console.log("button1");
};

button2.onclick = function () {
  playSound(sound1);
  menu1.style.display = "none";
  menu2.style.display = "flex";
  console.log("pressed button2");
};

button3.onclick = function () {
  playSound(sound1);
  menu1.style.display = "flex";
  menu2.style.display = "none";
  console.log("pressed button3");
};

button4.onclick = function () {
  playSound(sound1);
  menu1.style.display = "none";
  menu3.style.display = "flex";
  console.log("pressed button4");
};

button5.onclick = function () {
  playSound(sound1);
  menu1.style.display = "flex";
  menu3.style.display = "none";
  console.log("pressed button5");
};

restartButton.onclick = function () {
  playSound(sound1);
  game.reset();
  console.log("pressed restartButton");
};

//Game loop
setInterval(() => {
  player.update();
  const coins = game.getCoins();
  const keys = game.getKeys();
  const portals = game.getPortals();

  objectDetector(coins, "coin", player, (id) => {
    const el = document.getElementById(id);
    if (el) {
      playSound(sound1);
      el.remove();
    }
    console.log("Coin collected:", id);
  });

  objectDetector(keys, "key", player, (id) => {
    const el = document.getElementById(id);
    if (el) {
      playSound(sound1);
      el.remove();
      game.spawnPortal();
      fireModal("QUEST<br>FIND THE PORTAL.");
      console.log("Key collected:", id);
    }
  });

  objectDetector(portals, "portal", player, (id) => {
    playSound(sound1);
    console.log("Portal reached:", id);
    game.startNewLevel();
  });
  itemRotator();
}, 10);
