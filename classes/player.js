const deg = Math.PI / 180;
const world = document.getElementById("world");

//Player configuration constants
const maxJumpHeight = 200;
const gravityStrength = 0.2;
const speedMultiplier = 5;
const jumpStrength = 10;
const jumpStaminaCost = 20;
const staminaRegenRate = 0.02;
const healthRegenRate = 0.02;

export default class Player {
  constructor(x, y, z, rx, ry, lock = true) {
    //Position and rotation
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.vy = 0;
    this.lock = lock;
    this.lockJump = false;

    //Key press states
    this.pressLeft = 0;
    this.pressRight = 0;
    this.pressForward = 0;
    this.pressBack = 0;
    this.pressUp = 0;
    this.mouseX = 0;
    this.mouseY = 0;

    //Hitboxes for collision detection
    this.collisionAreas = [];

    //Player stats
    this.stamina = 100;
    this.health = 100;

    //Event listeners for key presses and mouse movement
    this.initEventListeners();
  }

  initEventListeners() {
    //if the key is pressed
    document.addEventListener("keydown", (e) => {
      if (!this.lock) {
        switch (e.key) {
          case "w":
          case "ArrowUp":
            this.pressForward = 1;
            break;
          case "s":
          case "ArrowDown":
            this.pressBack = 1;
            break;
          case "d":
          case "ArrowRight":
            this.pressRight = 1;
            break;
          case "a":
          case "ArrowLeft":
            this.pressLeft = 1;
            break;
          case " ":
            this.jump();
            break;
        }
      }
    });

    //if the key is released
    document.addEventListener("keyup", (e) => {
      if (!this.lock) {
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
        }
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

  jump() {
    if (this.stamina <= jumpStaminaCost || this.lockJump) return;

    this.lockJump = true;
    this.vy = -jumpStrength; // jump strength
    this.stamina -= jumpStaminaCost;
  }

  isColliding(nx, nz) {
    for (const r of this.collisionAreas) {
      if (nx >= r.x1 && nx <= r.x2 && nz >= r.z1 && nz <= r.z2) {
        return true;
      }
    }
    return false;
  }

  setCollisionAreas(areas) {
    this.collisionAreas = areas;
  }

  update() {
    // Staima and health regeneration
    this.stamina = Math.min(this.stamina + staminaRegenRate, 100);
    this.health = Math.min(this.health + healthRegenRate, 100);

    // Movment x, z
    const dx =
      Math.cos(this.ry * deg) * (this.pressRight - this.pressLeft) -
      Math.sin(this.ry * deg) *
        (this.pressForward - this.pressBack) *
        speedMultiplier;

    const dz =
      -(
        Math.sin(this.ry * deg) * (this.pressRight - this.pressLeft) +
        Math.cos(this.ry * deg) * (this.pressForward - this.pressBack)
      ) * speedMultiplier;

    const drx = this.mouseY / 4;
    const dry = -this.mouseX / 4;

    // predicted positions
    const nx = this.x + dx;
    const nz = this.z + dz;

    // AABB collision checks
    if (!this.isColliding(nx, this.z)) {
      this.x = nx;
    }
    if (!this.isColliding(this.x, nz)) {
      this.z = nz;
    }

    // Movment y
    this.vy += gravityStrength; // gravity strength
    this.y += this.vy;

    // Landing on ground
    if (this.y > 0) {
      this.y = 0;
      this.vy = 0;
      this.lockJump = false;
    }

    // Maximum jump height limit
    if (this.y < -maxJumpHeight) {
      this.y = -maxJumpHeight;
      this.vy = 0;
    }

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
