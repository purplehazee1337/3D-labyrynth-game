const labirynthVariants = createLabirynth();
const counter = document.getElementById("counter");
const container = document.getElementById("container");

let canLock = false;

container.onclick = () => {
  if (canLock) container.requestPointerLock();
};

class Game {
  constructor(player, staminaBar, healthBar) {
    this.player = player;
    this.staminaBar = staminaBar;
    this.healthBar = healthBar;
    this.interval = null;
    this.init();

    document.addEventListener("pointerlockchange", () => {
      this.player.changeLock();
    });
  }

  init() {
    this.level = 0;
    this.score = 0;
    this.timeLeft = 300;
    this.labyrinth = labirynthVariants[0];
    this.player.init(0, 0, 0, 0, 0, true);
    this.player.setCollisionAreas(this.labyrinth.collisionAreas);

    this.blueRedbulls = [];
    this.redRedbulls = [];
    this.yellowRedbulls = [];
    this.greenRedbulls = [];
    this.purpleRedbulls = [];

    this.keys = [];
    this.portals = [];
    this.spikes = [];

    createObjects(this.labyrinth.map, "map");
  }

  startNewLevel() {
    if (this.level === 0) {
      this.startTimer();
    }

    canLock = true;
    document.getElementById("world").innerHTML = "";
    this.level += 1;
    this.score += this.level * 100;

    this.itemsNumber = 1;
    this.keysNumber = 1;
    this.spikesNumber = this.level * 5;

    this.freeSpace = this.copyFreeSpace();
    this.labyrinth =
      labirynthVariants[Math.floor(Math.random() * labirynthVariants.length)];

    this.player.move(0, 0, 0, 0, 0);
    this.player.setCollisionAreas(this.labyrinth.collisionAreas);

    this.blueRedbulls = [];
    this.redRedbulls = [];
    this.yellowRedbulls = [];
    this.greenRedbulls = [];
    this.purpleRedbulls = [];

    this.keys = [];
    this.spikes = [];
    this.portals = [];

    this.placeBlueRedbulls();
    this.placeRedRedbulls();
    this.placeGreenRedbulls();
    this.placeYellowRedbulls();
    this.placePurpleRedbulls();

    this.placeKeys();
    this.placeSpikes();

    createObjects(this.labyrinth.map, "map");
    createObjects(this.blueRedbulls, "blueRedbull");
    createObjects(this.redRedbulls, "redRedbull");
    createObjects(this.greenRedbulls, "greenRedbull");
    createObjects(this.yellowRedbulls, "yellowRedbull");
    createObjects(this.purpleRedbulls, "purpleRedbull");
    createObjects(this.keys, "key");
    createSpikes(this.spikes, "spike");

    displayPov();
    this.staminaBar.show();
    this.healthBar.show();

    fireModal(`LEVEL ${this.level}<br>QUEST<br>FIND THE KEY.`);
    playSound("assets/audio/cast9.wav");
  }

  end() {
    document.exitPointerLock();

    document.getElementById("world").innerHTML = "";
    document.getElementById("game-over").style.display = "flex";
    document.getElementById("level-reached").textContent = this.level;
    document.getElementById("final-score").textContent = this.score;
    canLock = false;
    clearInterval(this.interval);
    this.interval = null;

    counter.style.display = "none";
    hidePov();
    this.staminaBar.hide();
    this.healthBar.hide();

    playSound("assets/audio/elementl.wav");
    stopMusic();
  }

  reset() {
    document.getElementById("world").innerHTML = "";
    document.getElementById("game-over").style.display = "none";
    document.getElementById("menu1").style.display = "flex";

    clearInterval(this.interval);
    this.init();
    canLock = false;
  }

  startTimer() {
    if (!counter) return;
    counter.style.display = "block";

    this.interval = setInterval(() => {
      this.timeLeft--;

      // Format mm:ss
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      counter.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      if (this.timeLeft <= 0) {
        clearInterval(this.interval);
        counter.textContent = "";
        this.end();
      }
    }, 1000);
  }

  addTime(amount) {
    this.timeLeft += amount;
    playSound("assets/audio/gshrine.wav");
  }

  placeBlueRedbulls() {
    for (let i = 0; i < this.itemsNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.blueRedbulls.push([
        pos.x,
        30,
        pos.z,
        0,
        90,
        0,
        38,
        100,
        "",
        "assets/textures/blue-redbull.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  placeRedRedbulls() {
    for (let i = 0; i < this.itemsNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.redRedbulls.push([
        pos.x,
        30,
        pos.z,
        0,
        90,
        0,
        41,
        100,
        "",
        "assets/textures/red-redbull.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  placeGreenRedbulls() {
    for (let i = 0; i < this.itemsNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.greenRedbulls.push([
        pos.x,
        30,
        pos.z,
        0,
        90,
        0,
        41,
        100,
        "",
        "assets/textures/green-redbull.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  placeYellowRedbulls() {
    for (let i = 0; i < this.itemsNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.yellowRedbulls.push([
        pos.x,
        30,
        pos.z,
        0,
        90,
        0,
        40,
        80,
        "",
        "assets/textures/yellow-redbull.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  placePurpleRedbulls() {
    for (let i = 0; i < this.itemsNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.purpleRedbulls.push([
        pos.x,
        30,
        pos.z,
        0,
        90,
        0,
        39,
        100,
        "",
        "assets/textures/purple-redbull.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  placeKeys() {
    for (let i = 0; i < this.keysNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.keys.push([
        pos.x,
        30,
        pos.z,
        0,
        0,
        0,
        80,
        100,
        "",
        "assets/textures/key.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  placeSpikes() {
    for (let i = 0; i < this.spikesNumber; i++) {
      if (this.freeSpace.length <= 1) return;
      const index = Math.floor(Math.random() * this.freeSpace.length);
      const pos = this.freeSpace[index];

      this.spikes.push([
        pos.x,
        80,
        pos.z,
        0,
        90,
        0,
        100,
        50,
        "",
        "assets/textures/spikes.png",
      ]);

      this.freeSpace.splice(index, 1);
    }
  }

  spawnPortal() {
    if (this.freeSpace.length === 0) return;

    const index = Math.floor(Math.random() * this.freeSpace.length);
    const pos = this.freeSpace[index];

    this.portals.push([
      pos.x,
      0,
      pos.z,
      0,
      90,
      0,
      200,
      295,
      "",
      "assets/portal.gif",
    ]);

    this.freeSpace.splice(index, 1);
    createObjects(this.portals, "portal");
  }

  addScore(points) {
    this.score += points;
  }

  getLevel() {
    return this.level;
  }
  getRedRedbulls() {
    return this.redRedbulls;
  }
  getGreenRedbulls() {
    return this.greenRedbulls;
  }
  getYellowRedbulls() {
    return this.yellowRedbulls;
  }
  getPurpleRedbulls() {
    return this.purpleRedbulls;
  }
  getBlueRedbulls() {
    return this.blueRedbulls;
  }
  getKeys() {
    return this.keys;
  }
  getPortals() {
    return this.portals;
  }
  getSpikes() {
    return this.spikes;
  }
  copyFreeSpace() {
    return this.labyrinth.defaultFreeSpace.map((a) => ({ ...a }));
  }
}
