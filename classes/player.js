const deg = Math.PI / 180;
const world = document.getElementById("world");

const collisionRects = [
  // TOP wall (z = -1000 to -950)
  { x1: -1000, x2: 1000, z1: -1000, z2: -950 },

  // BOTTOM wall (z = +950 to +1000)
  { x1: -1000, x2: 1000, z1: 950, z2: 1000 },

  // LEFT wall (x = -1000 to -950)
  { x1: -1000, x2: -950, z1: -1000, z2: 1000 },

  // RIGHT wall (x = +950 to +1000)
  { x1: 950, x2: 1000, z1: -1000, z2: 1000 },
];

function isColliding(nx, nz) {
  for (const r of collisionRects) {
    if (nx >= r.x1 && nx <= r.x2 && nz >= r.z1 && nz <= r.z2) {
      return true;
    }
  }
  return false;
}

export default class Player {
  constructor(x, y, z, rx, ry, lock = true) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.lock = lock;

    this.pressLeft = 0;
    this.pressRight = 0;
    this.pressForward = 0;
    this.pressBack = 0;
    this.pressUp = 0;
    this.mouseX = 0;
    this.mouseY = 0;

    //if the key is pressed
    document.addEventListener("keydown", (e) => {
      console.log("clicked", e.key);
      switch (e.key) {
        case "w":
        case "ArrowUp":
          if (!this.lock) this.pressForward = 1;
          break;
        case "s":
        case "ArrowDown":
          if (!this.lock) this.pressBack = 1;
          break;
        case "d":
        case "ArrowRight":
          if (!this.lock) this.pressRight = 1;
          break;
        case "a":
        case "ArrowLeft":
          if (!this.lock) this.pressLeft = 1;
          break;
        case " ":
          if (!this.lock) this.pressUp = 1;
          break;
        default:
      }
    });

    //if the key is released
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
        case "ArrowUp":
          this.pressForward = 0;
          break;
        case "s":
        case "ArrowDown":
          this.pressBack = 0;
          break;
        case "d":
        case "ArrowRight":
          this.pressRight = 0;
          break;
        case "a":
        case "ArrowLeft":
          this.pressLeft = 0;
          break;
        case " ":
          this.pressUp = 0;
          break;
        default:
      }
    });

    //if the mouse is moved
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.movementX;
      this.mouseY = e.movementY;
    });
  }

  changeLock() {
    this.lock = !this.lock;
  }

  move(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
  }

  update() {
    const dx =
      Math.cos(this.ry * deg) * (this.pressRight - this.pressLeft) -
      Math.sin(this.ry * deg) * (this.pressForward - this.pressBack) * 5;

    const dz =
      -(
        Math.sin(this.ry * deg) * (this.pressRight - this.pressLeft) +
        Math.cos(this.ry * deg) * (this.pressForward - this.pressBack)
      ) * 5;

    const dy = -this.pressUp * 5;
    const drx = this.mouseY / 4;
    const dry = -this.mouseX / 4;

    /////////////////////
    // predicted positions
    const nx = this.x + dx;
    const nz = this.z + dz;

    // AABB collision checks
    if (!isColliding(nx, this.z)) {
      this.x = nx;
    }
    if (!isColliding(this.x, nz)) {
      this.z = nz;
    }
    /////////////////////

    this.y = Math.max(Math.min(this.y + dy + 2, 0), -150);

    if (!this.lock) {
      this.rx = Math.max(Math.min(this.rx + drx, 90), -90);
      this.ry = this.ry + dry;
    }

    //change coordinate of the world
    world.style.transform =
      `translateZ(600px) ` +
      `rotateX(${-this.rx}deg) ` +
      `rotateY(${-this.ry}deg) ` +
      `translate3d(${-this.x}px,${-this.y}px,${-this.z}px)`;

    this.mouseX = 0;
    this.mouseY = 0;
  }
}
