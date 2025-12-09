import createLabirynth from "../maps/labirynth1.js";
import createObjects from "../utils/createObjects.js";

const defaultFreeSpace = [
  //z: -800
  { x: -800, z: -800 },
  { x: -400, z: -800 },
  { x: 0, z: -800 },
  { x: 400, z: -800 },
  { x: 800, z: -800 },

  //z: -400
  { x: -800, z: -400 },
  { x: -400, z: -400 },
  { x: 0, z: -400 },
  { x: 400, z: -400 },
  { x: 800, z: -400 },

  //z: 0
  { x: -800, z: 0 },
  { x: -400, z: 0 },
  // { x: 0, z: 0 },
  { x: 400, z: 0 },
  { x: 800, z: 0 },

  //z: 400
  { x: -800, z: 400 },
  { x: -400, z: 400 },
  { x: 0, z: 400 },
  { x: 400, z: 400 },
  { x: 800, z: 400 },

  //z: 800
  { x: -800, z: 800 },
  { x: -400, z: 800 },
  { x: 0, z: 800 },
  { x: 400, z: 800 },
  { x: 800, z: 800 },
];
const variants = createLabirynth();

export default class Level {
  constructor(player) {
    this.player = player;
    this.level = 1;
    this.initLevel();
  }

  // Deep-copy free positions
  copyFreeSpace() {
    return defaultFreeSpace.map((pos) => ({ ...pos }));
  }

  // Common code for level creation
  initLevel() {
    this.coinsNumber = Math.floor(this.level * 1.2);
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
  }

  nextLevel() {
    document.getElementById("world").innerHTML = "";
    this.level += 1;
    this.initLevel();
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
}
