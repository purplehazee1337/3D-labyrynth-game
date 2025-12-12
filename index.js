import Player from "./classes/player.js";
import objectDetector from "./utils/objectDetector.js";
import Game from "./classes/Game.js";
import itemRotator from "./utils/itemRotator.js";
import playSound from "./utils/playSound.js";
import fireModal from "./utils/fireModal.js";
import StaminaBar from "./classes/StaminaBar.js";
import HealthBar from "./classes/HealthBar.js";
import { playRandomTrack } from "./utils/playRandomTrack.js";

const player = new Player(0, 0, 0, 0, 0);
const staminaBar = new StaminaBar(player);
const healthBar = new HealthBar(player);
const game = new Game(player, staminaBar, healthBar);

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
const selectSound = "assets/audio/diablo-2-select.mp3";

button1.onclick = function () {
  game.startNewLevel();
  playRandomTrack();
  playSound(selectSound);
  menu1.style.display = "none";
  console.log("button1");
};

button2.onclick = function () {
  playSound(selectSound);
  menu1.style.display = "none";
  menu2.style.display = "flex";
  console.log("pressed button2");
};

button3.onclick = function () {
  playSound(selectSound);
  menu1.style.display = "flex";
  menu2.style.display = "none";
  console.log("pressed button3");
};

button4.onclick = function () {
  playSound(selectSound);
  menu1.style.display = "none";
  menu3.style.display = "flex";
  console.log("pressed button4");
};

button5.onclick = function () {
  playSound(selectSound);
  menu1.style.display = "flex";
  menu3.style.display = "none";
  console.log("pressed button5");
};

restartButton.onclick = function () {
  playSound(selectSound);
  game.reset();
  console.log("pressed restartButton");
};

//Game loop
setInterval(() => {
  if (player.getHealth() === 0) {
    game.end();
  }

  player.update();
  staminaBar.update();
  healthBar.update();

  const coins = game.getCoins();
  const keys = game.getKeys();
  const portals = game.getPortals();
  const spikes = game.getSpikes();

  objectDetector(coins, "coin", player, (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.remove();
      game.addScore(50);
      player.addStamina(50);
      player.removeHealth(30);
      console.log("Coin collected:", id);
    }
  });

  objectDetector(keys, "key", player, (id) => {
    const el = document.getElementById(id);
    if (el) {
      playSound("assets/audio/questdon.wav");
      el.remove();
      game.spawnPortal();
      fireModal("QUEST<br>FIND THE PORTAL.");
      game.addScore(50);
      console.log("Key collected:", id);
    }
  });

  objectDetector(portals, "portal", player, (id) => {
    playSound("assets/audio/storm.wav");
    console.log("Portal reached:", id);
    game.startNewLevel();
  });

  objectDetector(spikes, "spike", player, (id) => {
    player.removeHealth(1);
    console.log("Spike", id);
  });

  itemRotator();
}, 10);
