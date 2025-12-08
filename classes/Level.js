import { labirynth } from "../utils/labirynth.js";
import createObjects from "../utils/createObjects.js";
//Objects data
// x y z rx ry rz w h c

export default class Level {
  constructor(name, difficulty, coinsNumber = 3, keysNumber = 1) {
    this.name = name;
    this.difficulty = difficulty;
    this.freeSpace = [
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
      { x: 0, z: 0 },
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
    this.map = [
      //Floor
      [0, 100, 0, 90, 0, 0, 2000, 2000, "gray", "assets/textures/floor.webp"],
      //Walls
      ...labirynth,
    ];
    this.coins = [];
    this.keys = [];
    this.portals = [];

    //Randomly place coins
    for (let i = 0; i < coinsNumber; i++) {
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];
      this.coins.push([pos.x, 30, pos.z, 0, 90, 0, 50, 50, "yellow"]);
      this.freeSpace.splice(index, 1);
    }

    //Randomly place keys
    for (let i = 0; i < keysNumber; i++) {
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];
      this.keys.push([pos.x, 30, pos.z, 0, 0, 0, 50, 50, "grey"]);
      this.freeSpace.splice(index, 1);
    }

    createObjects(this.map, "map");
    createObjects(this.coins, "coin");
    createObjects(this.keys, "key");
  }

  spawnPortal() {
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
