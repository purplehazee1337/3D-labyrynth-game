import { labirynth } from "./utils/labirynth.js";
import Player from "./classes/player.js";
import { canLock } from "./utils/menu.js";
import objectDetector from "./utils/objectDetector.js";
import createObjects from "./utils/createObjects.js";

(() => {
  const world = document.getElementById("world");
  world.style.backgroundImage = "background.webp";
  const player = new Player(0, 0, 0, 0, 0);

  const container = document.getElementById("container");
  container.onclick = () => {
    if (canLock) container.requestPointerLock();
  };

  document.addEventListener("pointerlockchange", (e) => {
    player.changeLock();
  });

  //Objects data
  // x y z rx ry rz w h c
  const map = [
    //Floor
    [0, 100, 0, 90, 0, 0, 2000, 2000, "gray", "assets/textures/floor.webp"],
    //Sprites
    [400, -40, -50, 0, 0, 0, 500, 295, "", "assets/textures/sprite.gif"],
    //Portal
    [800, 0, 800, 0, 90, 0, 200, 295, "", "assets/portal.gif"],
    ...labirynth,
  ];

  const coins = [
    [0, 30, -800, 0, 90, 0, 50, 50, "yellow"],
    [-800, 30, 800, 0, 90, 0, 50, 50, "yellow"],
    [-400, 30, -800, 0, 0, 0, 50, 50, "yellow"],
  ];

  const keys = [[-800, 30, 400, 0, 0, 0, 50, 50, "grey"]];

  createObjects(map, "map");
  createObjects(coins, "coin");
  createObjects(keys, "key");

  //Game loop
  setInterval(() => {
    player.updateMovement();
    objectDetector(coins, "coin", player);
    objectDetector(keys, "key", player);
  }, 10);
})();
