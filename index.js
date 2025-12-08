import { labirynth } from "./utils/labirynth.js";
import Player from "./classes/player.js";
import { canLock } from "./utils/menu.js";

const container = document.getElementById("container");

container.onclick = () => {
  if (canLock) container.requestPointerLock();
};

document.addEventListener("pointerlockchange", (e) => {
  pawn.changeLock();
});

const pawn = new Player(0, 0, 0, 0, 0);
const world = document.getElementById("world");
world.style.backgroundImage = "background.webp";

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

function createNewWorld() {
  createSquares(map, "map");
  createSquares(coins, "coin");
  createSquares(keys, "key");
}
createNewWorld();

function createSquares(map, type) {
  for (let i = 0; i < map.length; i++) {
    const [x, y, z, rx, ry, rz, w, h, color, texture] = map[i];
    const newElement = document.createElement("div");
    newElement.className = `square ${type}`;
    newElement.id = type + i;
    newElement.style.width = `${w}px`;
    newElement.style.height = `${h}px`;
    newElement.style.background = color;
    newElement.style.backgroundImage = `url(${texture})`;
    newElement.style.transform = `translate3d(
    ${600 - w / 2 + x}px, 
    ${400 - h / 2 + y}px,
    ${z}px) 
    rotateX(${rx}deg)
    rotateY(${ry}deg)
    rotateZ(${rz}deg)`;

    world.append(newElement);
  }
}

function itemCollectDetector(squares, type) {
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    let r =
      (square[0] - pawn.x) ** 2 +
      (square[1] - pawn.y) ** 2 +
      (square[2] - pawn.z) ** 2;
    let r1 = square[6] ** 2;

    if (r < r1) {
      const el = document.getElementById(type + i);
      if (el) {
        const sound = new Audio();
        sound.src = "assets/audio/diablo-2-enchanted.mp3";
        sound.play();
        el.remove();
      }
    }
  }
}

const interwals = setInterval(() => {
  pawn.updateMovement();
  itemCollectDetector(coins, "coin");
  itemCollectDetector(keys, "key");
}, 10);
