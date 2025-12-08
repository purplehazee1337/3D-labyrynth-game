const deg = Math.PI / 180;
const world = document.getElementById("world");

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

  movePlayer(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
  }

  updateMovement() {
    //count movement
    const dx =
      Math.cos(this.ry * deg) * (this.pressRight - this.pressLeft) -
      Math.sin(this.ry * deg) * (this.pressForward - this.pressBack) * 2;

    const dz =
      -(
        Math.sin(this.ry * deg) * (this.pressRight - this.pressLeft) +
        Math.cos(this.ry * deg) * (this.pressForward - this.pressBack)
      ) * 2;

    const dy = -this.pressUp * 5;
    const drx = this.mouseY / 4;
    const dry = -this.mouseX / 4;

    //add movement to the coordinates
    this.x = this.x + dx;
    this.y = Math.max(Math.min(this.y + dy + 2, 0), -150);
    this.z = this.z + dz;
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
