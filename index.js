import Player from "./classes/Player.js";
import { canLock } from "./utils/menu.js";
import objectDetector from "./utils/objectDetector.js";
import createObjects from "./utils/createObjects.js";
import Level from "./classes/Level.js";

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

  const level = new Level("Labirynth", "Easy");
  const map = level.getMap();
  const coins = level.getCoins();
  const keys = level.getKeys();
  const portals = level.getPortals();

  createObjects(map, "map");
  createObjects(coins, "coin");
  createObjects(keys, "key");
  createObjects(portals, "portal");

  //Game loop
  setInterval(() => {
    player.updateMovement();
    objectDetector(coins, "coin", player, (id) => {
      const el = document.getElementById(id);
      if (el) {
        const sound = new Audio();
        sound.src = "assets/audio/diablo-2-enchanted.mp3";
        sound.play();
        el.remove();
      }
      console.log("Coin collected:", id);
    });
    objectDetector(keys, "key", player, (id) => {
      const el = document.getElementById(id);
      if (el) {
        const sound = new Audio();
        sound.src = "assets/audio/diablo-2-enchanted.mp3";
        sound.play();
        el.remove();
        console.log("Key collected:", id);
      }
    });
    objectDetector(portals, "portal", player, (id) => {
      console.log("Portal reached:", id);
    });
  }, 10);
})();
