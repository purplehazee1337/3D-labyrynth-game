import createLabirynth from "../maps/labirynth1.js";
import createObjects from "../utils/createObjects.js";
import fireModal from "../utils/fireModal.js";
import { displayPov, hidePov } from "../utils/pov.js";

const variants = createLabirynth();
const counter = document.getElementById("counter");
const container = document.getElementById("container");

let canLock = false;

container.onclick = () => {
  if (canLock) container.requestPointerLock();
};

export default class Game {
  constructor(player) {
    this.player = player;
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
    this.player.move(0, 0, 0, 0, 0);
    this.player.setCollisionAreas(this.labyrinth.collisionAreas);

    this.coins = [];
    this.keys = [];
    this.portals = [];

    createObjects(this.labyrinth.map, "map");
  }

  startNewLevel() {
    if (this.level === 0) {
      this.startTimer();
    }
    canLock = true;
    document.getElementById("world").innerHTML = "";
    this.level += 1;
    this.coinsNumber = 1;
    this.keysNumber = 1;
    this.freeSpace = this.copyFreeSpace();
    this.labyrinth = variants[Math.floor(Math.random() * variants.length)];
    this.player.move(0, 0, 0, 0, 0);
    this.player.setCollisionAreas(this.labyrinth.collisionAreas);
    this.coins = [];
    this.keys = [];
    this.portals = [];

    this.placeKeys();
    this.placeCoins();

    createObjects(this.labyrinth.map, "map");
    createObjects(this.coins, "coin");
    createObjects(this.keys, "key");

    displayPov();

    fireModal(`LEVEL ${this.level}<br>QUEST<br>FIND THE KEY.`);
  }

  end() {
    document.exitPointerLock();

    document.getElementById("world").innerHTML = "";
    document.getElementById("game-over").style.display = "block";
    canLock = false;
    clearInterval(this.interval);
    this.interval = null;
    hidePov();
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
  copyFreeSpace() {
    return this.labyrinth.defaultFreeSpace.map((area) => ({ ...area }));
  }
}
