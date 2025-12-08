import Player from "./classes/Player.js";
import { canLock } from "./utils/menu.js";
import objectDetector from "./utils/objectDetector.js";
import Level from "./classes/Level.js";
import fireQuestModule from "./utils/fireQuestModule.js";

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
  const coins = level.getCoins();
  const keys = level.getKeys();
  const portals = level.getPortals();

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
        level.spawnPortal();
        fireQuestModule("Find the portal!");
        console.log("Key collected:", id);
      }
    });
    objectDetector(portals, "portal", player, (id) => {
      const el = document.getElementById(id);
      if (el) {
        const sound = new Audio();
        sound.src = "assets/audio/diablo-2-enchanted.mp3";
        sound.play();
        el.remove();
        console.log("Portal reached:", id);
        fireQuestModule("You won!");
      }
    });
  }, 10);
})();
