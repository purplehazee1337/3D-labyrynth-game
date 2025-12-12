import createLabirynth from "../maps/labirynth1.js";
import createObjects from "../utils/createObjects.js";
import createSpikes from "../utils/createSpikes.js";
import fireModal from "../utils/fireModal.js";
import { stopMusic } from "../utils/playRandomTrack.js";
import playSound from "../utils/playSound.js";
import { displayPov, hidePov } from "../utils/pov.js";

const variants = createLabirynth();
const counter = document.getElementById("counter");
const container = document.getElementById("container");

let canLock = false;

container.onclick = () => {
  if (canLock) container.requestPointerLock();
};

export default class Game {
  constructor(player, staminaBar, healthBar) {
    this.player = player;
    this.staminaBar = staminaBar;
    this.healthBar = healthBar;
    this.interval = null;
    this.init();

    document.addEventListener("pointerlockchange", (e) => {
      this.player.changeLock();
    });
  }

  init() {
    this.level = 0;
    this.score = 0;
    this.timeLeft = 300; // 5 minutes
    this.labyrinth = variants[0];
    this.player.init(0, 0, 0, 0, 0, true);
    this.player.setCollisionAreas(this.labyrinth.collisionAreas);

    this.coins = [];
    this.keys = [];
    this.portals = [];
    this.spikes = [];

    createObjects(this.labyrinth.map, "map");
  }

  startNewLevel() {
    if (this.level === 0) {
      this.startTimer();
    }
    canLock = true;
    document.getElementById("world").innerHTML = "";
    this.level += 1;
    this.score += this.level * 10;
    this.coinsNumber = 2;
    this.keysNumber = 1;
    this.spikesNumber = 10;
    this.freeSpace = this.copyFreeSpace();
    this.labyrinth = variants[Math.floor(Math.random() * variants.length)];
    this.player.move(0, 0, 0, 0, 0);
    this.player.setCollisionAreas(this.labyrinth.collisionAreas);
    this.coins = [];
    this.keys = [];
    this.spikes = [];
    this.portals = [];

    this.placeKeys();
    this.placeCoins();
    this.placeSpikes();

    createObjects(this.labyrinth.map, "map");
    createObjects(this.coins, "coin");
    createObjects(this.keys, "key");
    createSpikes(this.spikes, "spike");

    displayPov();
    this.staminaBar.show();
    this.healthBar.show();

    fireModal(`LEVEL ${this.level}<br>QUEST<br>FIND THE KEY.`);
    playSound("assets/audio/cast9.wav");
  }

  end() {
    document.exitPointerLock();

    document.getElementById("world").innerHTML = "";
    document.getElementById("game-over").style.display = "block";
    document.getElementById("level-reached").textContent = this.level;
    document.getElementById("final-score").textContent = this.score;
    canLock = false;
    clearInterval(this.interval);
    this.interval = null;

    counter.style.display = "none";
    hidePov();
    this.staminaBar.hide();
    this.healthBar.hide();

    playSound("assets/audio/elementl.wav");
    stopMusic();
  }

  reset() {
    document.getElementById("world").innerHTML = "";
    document.getElementById("game-over").style.display = "none";
    document.getElementById("menu1").style.display = "flex";

    clearInterval(this.interval);
    this.init();
    canLock = false;
  }

  startTimer() {
    if (!counter) return;
    counter.style.display = "block";

    this.interval = setInterval(() => {
      this.timeLeft--;

      // Format mm:ss
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      counter.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      if (this.timeLeft <= 0) {
        clearInterval(this.interval);
        counter.textContent = "";
        this.end();
      }
    }, 1000);
  }

  placeKeys() {
    for (let i = 0; i < this.keysNumber; i++) {
      if (this.freeSpace.length <= 1) return;

      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.keys.push([
        pos.x,
        30,
        pos.z,
        0,
        0,
        0,
        80,
        100,
        "",
        "assets/textures/key.png",
      ]);
      this.freeSpace.splice(index, 1);
    }
  }

  placeCoins() {
    for (let i = 0; i < this.coinsNumber; i++) {
      if (this.freeSpace.length <= 1) return;

      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.coins.push([
        pos.x,
        30,
        pos.z,
        0,
        90,
        0,
        40,
        80,
        "",
        "assets/textures/redbull.png",
      ]);
      this.freeSpace.splice(index, 1);
    }
  }

  placeSpikes() {
    for (let i = 0; i < this.spikesNumber; i++) {
      if (this.freeSpace.length <= 1) return;

      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.spikes.push([
        pos.x,
        80,
        pos.z,
        0,
        90,
        0,
        100,
        50,
        "",
        "assets/textures/spikes.png",
      ]);
      this.freeSpace.splice(index, 1);
    }
  }

  spawnPortal() {
    if (this.freeSpace.length === 0) return;

    const index = Math.floor(Math.random() * this.freeSpace.length);
    const pos = this.freeSpace[index];

    this.portals.push([
      pos.x,
      0,
      pos.z,
      0,
      90,
      0,
      200,
      295,
      "",
      "assets/portal.gif",
    ]);

    this.freeSpace.splice(index, 1);
    createObjects(this.portals, "portal");
  }

  addScore(points) {
    this.score += points;
  }

  getLevel() {
    return this.level;
  }
  getMap() {
    return this.map;
  }
  getCoins() {
    return this.coins;
  }
  getKeys() {
    return this.keys;
  }
  getPortals() {
    return this.portals;
  }
  getSpikes() {
    return this.spikes;
  }
  copyFreeSpace() {
    return this.labyrinth.defaultFreeSpace.map((area) => ({ ...area }));
  }
}
