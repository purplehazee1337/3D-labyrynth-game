import { labirynth } from "../utils/labirynth.js";
//Objects data
// x y z rx ry rz w h c

export default class Level {
  constructor(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.coins = [
      [0, 30, -800, 0, 90, 0, 50, 50, "yellow"],
      [-800, 30, 800, 0, 90, 0, 50, 50, "yellow"],
      [-400, 30, -800, 0, 0, 0, 50, 50, "yellow"],
    ];
    this.keys = [[-800, 30, 400, 0, 0, 0, 50, 50, "grey"]];
    this.map = [
      //Floor
      [0, 100, 0, 90, 0, 0, 2000, 2000, "gray", "assets/textures/floor.webp"],
      //Walls
      ...labirynth,
    ];
    this.portals = [[800, 0, 800, 0, 90, 0, 200, 295, "", "assets/portal.gif"]];
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
