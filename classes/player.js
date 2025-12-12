const deg = Math.PI / 180;
const world = document.getElementById("world");

//Player configuration constants
const maxJumpHeight = 200;
const gravityStrength = 0.2;
const jumpStrength = 10;
const jumpStaminaCost = 10;
const staminaRegenRate = 0.03;
const healthRegenRate = 0.02;
const baseSpeed = 5;

export default class Player {
  constructor(x, y, z, rx, ry, lock = true) {
    //Event listeners for key presses and mouse movement
    this.init(x, y, z, rx, ry, lock);
    this.initEventListeners();
  }

  init(x, y, z, rx, ry, lock) {
    //Position and rotation
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.vy = 0;
    this.lock = lock;
    this.lockJump = false;
    this.isSprinting = false;

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
    this.maxStamina = 100;
    this.health = 100;
    this.maxHealth = 100;
  }

  initEventListeners() {
    //if the key is pressed
    document.addEventListener("keydown", (e) => {
      if (!this.lock) {
        switch (e.key) {
          case "w":
          case "W":
          case "ArrowUp":
            this.pressForward = 1;
            break;
          case "s":
          case "S":
          case "ArrowDown":
            this.pressBack = 1;
            break;
          case "d":
          case "D":
          case "ArrowRight":
            this.pressRight = 1;
            break;
          case "a":
          case "A":
          case "ArrowLeft":
            this.pressLeft = 1;
            break;
          case " ":
            this.jump();
            break;
          case "Shift":
            this.isSprinting = true;
            break;
        }
      }
    });

    //if the key is released
    document.addEventListener("keyup", (e) => {
      if (!this.lock) {
        switch (e.key) {
          case "w":
          case "W":
          case "ArrowUp":
            this.pressForward = 0;
            break;
          case "s":
          case "S":
          case "ArrowDown":
            this.pressBack = 0;
            break;
          case "d":
          case "D":
          case "ArrowRight":
            this.pressRight = 0;
            break;
          case "a":
          case "A":
          case "ArrowLeft":
            this.pressLeft = 0;
            break;
          case "Shift":
            this.isSprinting = false;
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

  isColliding(nx, nz, additionalDistance = 10) {
    for (const r of this.collisionAreas) {
      if (
        nx >= r.x1 - additionalDistance &&
        nx <= r.x2 + additionalDistance &&
        nz >= r.z1 - additionalDistance &&
        nz <= r.z2 + additionalDistance
      ) {
        return true;
      }
    }
    return false;
  }

  addStamina(amount) {
    this.stamina = Math.min(this.stamina + amount, 100);
  }

  removeStamina(amount) {
    this.stamina = Math.max(this.stamina - amount, 0);
  }

  getHealth() {
    return this.health;
  }

  addHealth(amount) {
    this.health = Math.min(this.health + amount, 100);
  }

  removeHealth(amount) {
    this.health = Math.max(this.health - amount, 0);
  }

  setCollisionAreas(areas) {
    this.collisionAreas = areas;
  }

  update() {
    // Staima and health regeneration
    this.stamina = Math.min(this.stamina + staminaRegenRate, 100);
    this.health = Math.min(this.health + healthRegenRate, 100);

    // Movement speed
    let speed = baseSpeed;

    if (this.isSprinting && this.stamina > 0) {
      speed *= 2;
      this.stamina -= 0.5;
    }

    // Movment x, z
    let dx =
      Math.cos(this.ry * deg) * (this.pressRight - this.pressLeft) -
      Math.sin(this.ry * deg) * (this.pressForward - this.pressBack) * speed;

    let dz =
      -(
        Math.sin(this.ry * deg) * (this.pressRight - this.pressLeft) +
        Math.cos(this.ry * deg) * (this.pressForward - this.pressBack)
      ) * speed;

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
