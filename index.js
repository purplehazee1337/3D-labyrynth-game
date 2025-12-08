import Player from "./classes/Player.js";
import { canLock } from "./utils/menu.js";
import objectDetector from "./utils/objectDetector.js";
import Level from "./classes/Level.js";
import fireQuestModule from "./utils/fireQuestModule.js";
import itemRotator from "./utils/itemRotator.js";

(() => {
  const world = document.getElementById("world");
  world.style.backgroundImage = "url('background.webp')";
  const player = new Player(0, 0, 0, 0, 0);
  const level = new Level();

  const container = document.getElementById("container");
  container.onclick = () => {
    if (canLock) container.requestPointerLock();
  };

  document.addEventListener("pointerlockchange", (e) => {
    player.changeLock();
  });

  //Game loop
  setInterval(() => {
    player.update();
    const coins = level.getCoins();
    const keys = level.getKeys();
    const portals = level.getPortals();
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
        level.nextLevel();
        fireQuestModule("Level: " + level.getLevel());
        player.move(0, 0, 0, 0, 0);
      }
    });
    itemRotator();
  }, 10);
})();
