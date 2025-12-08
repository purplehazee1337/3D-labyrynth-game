import { labirynth } from "./utils/labirynth.js";
import { canLock } from "./utils/menu.js";
import Player from "./classes/player.js";

//world constant
const deg = Math.PI / 180;
const pawn = new Player(0, 0, 0, 0, 0);
const world = document.getElementById("world");
const container = document.getElementById("container");

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

//variables for movement
let pressLeft = 0;
let pressRight = 0;
let pressForward = 0;
let pressBack = 0;
let pressUp = 0;
let mouseX = 0;
let mouseY = 0;
let lock = false;

container.onclick = () => {
  if (canLock) container.requestPointerLock();
};

//if the key is pressed
document.addEventListener("keydown", (e) => {
  console.log("clicked", e.key);
  switch (e.key) {
    case "w":
    case "ArrowUp":
      if (lock) pressForward = 1;
      break;
    case "s":
    case "ArrowDown":
      if (lock) pressBack = 1;
      break;
    case "d":
    case "ArrowRight":
      if (lock) pressRight = 1;
      break;
    case "a":
    case "ArrowLeft":
      if (lock) pressLeft = 1;
      break;
    case " ":
      if (lock) pressUp = 1;
      break;
    default:
  }
});

//if the key is released
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      pressForward = 0;
      break;
    case "s":
    case "ArrowDown":
      pressBack = 0;
      break;
    case "d":
    case "ArrowRight":
      pressRight = 0;
      break;
    case "a":
    case "ArrowLeft":
      pressLeft = 0;
      break;
    case " ":
      pressUp = 0;
      break;
    default:
  }
});

document.addEventListener("pointerlockchange", (e) => {
  lock = !lock;
});

//if the mouse is moved
document.addEventListener("mousemove", (e) => {
  mouseX = e.movementX;
  mouseY = e.movementY;
});

function createNewWorld() {
  createSquares(map, "map");
  createSquares(coins, "coin");
  createSquares(keys, "key");
}
createNewWorld();

function createSquares(map, type) {
  world.style.backgroundImage = "background.webp";

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

function update() {
  //count movement
  const dx =
    Math.cos(pawn.ry * deg) * (pressRight - pressLeft) -
    Math.sin(pawn.ry * deg) * (pressForward - pressBack) * 2;

  const dz =
    -(
      Math.sin(pawn.ry * deg) * (pressRight - pressLeft) +
      Math.cos(pawn.ry * deg) * (pressForward - pressBack)
    ) * 2;

  const dy = -pressUp * 5;

  const drx = mouseY / 4;
  const dry = -mouseX / 4;

  //add movement to the coordinates
  pawn.x = pawn.x + dx;
  pawn.y = Math.max(Math.min(pawn.y + dy + 2, 0), -150);
  pawn.z = pawn.z + dz;
  if (lock) {
    pawn.rx = pawn.rx + drx;
    pawn.ry = pawn.ry + dry;
  }

  //change coordinate of the world
  world.style.transform =
    `translateZ(600px) ` +
    `rotateX(${-pawn.rx}deg) ` +
    `rotateY(${-pawn.ry}deg) ` +
    `translate3d(${-pawn.x}px,${-pawn.y}px,${-pawn.z}px)`;

  mouseX = 0;
  mouseY = 0;
  itemCollectDetector(coins, "coin");
  itemCollectDetector(keys, "key");
}

const TimerGame = setInterval(update, 10);
