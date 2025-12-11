const dev = false;
const wallTexture = dev ? "" : "assets/textures/wall.jpg";

const column1 = [
  //Modules
  [-800, 0, -950, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-800, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [-800, 0, -650, 0, 0, 0, 500, 200, "red", wallTexture],
  // [-800, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, -775, 0, -90, 0, 450, 200, "yellow", wallTexture],
  [-600, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 2
  [-400, 0, -950, 0, 0, 0, 500, 200, "blue", wallTexture],
  [-400, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [-400, 0, -650, 0, 0, 0, 500, 200, "red", wallTexture],
  // [-400, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, -775, 0, -90, 0, 450, 200, "green", wallTexture],
  [-600, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, -775, 0, -90, 0, 450, 200, "yellow", wallTexture],
  [-200, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 3
  [0, 0, -950, 0, 0, 0, 500, 200, "blue", wallTexture],
  [0, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, -650, 0, 0, 0, 500, 200, "red", wallTexture],
  [0, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-200, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  // [150, 0, -800, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [200, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 4
  [400, 0, -950, 0, 0, 0, 500, 200, "blue", wallTexture],
  [400, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, -650, 0, 0, 0, 500, 200, "red", wallTexture],
  [400, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  // [250, 0, -800, 0, -90, 0, 500, 200, "green", wallTexture],
  // [200, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  // [550, 0, -800, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [600, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 5
  [775, 0, -950, 0, 0, 0, 450, 200, "blue", wallTexture],
  [800, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [800, 0, -650, 0, 0, 0, 500, 200, "red", wallTexture],
  // [800, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  // [650, 0, -800, 0, -90, 0, 500, 200, "green", wallTexture],
  // [600, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, -775, 0, -90, 0, 450, 200, "yellow", wallTexture],
  [1000, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column2 = [
  // Modules
  // [-800, 0, -550, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [-800, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [-800, 0, -250, 0, 0, 0, 500, 200, "red", wallTexture],
  // [-800, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, -400, 0, -90, 0, 500, 200, "green", wallTexture],
  [-1000, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [-650, 0, -400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [-600, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  // [-400, 0, -550, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [-400, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, -250, 0, 0, 0, 500, 200, "red", wallTexture],
  [-400, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  // [-550, 0, -400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [-600, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [-250, 0, -400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [-200, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, -550, 0, 0, 0, 500, 200, "blue", wallTexture],
  [0, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [0, 0, -250, 0, 0, 0, 500, 200, "red", wallTexture],
  // [0, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  // [-150, 0, -400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [-200, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [150, 0, -400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [200, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, -550, 0, 0, 0, 500, 200, "blue", wallTexture],
  [400, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, -250, 0, 0, 0, 500, 200, "red", wallTexture],
  [400, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  // [250, 0, -400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [200, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [550, 0, -400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [600, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  //

  // [800, 0, -250, 0, 0, 0, 500, 200, "red", wallTexture],
  // [800, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  // [650, 0, -400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [600, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, -400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [1000, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column3 = [
  // Modules
  // [-800, 0, -150, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [-800, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [-800, 0, 150, 0, 0, 0, 500, 200, "red", wallTexture],
  // [-800, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, 0, 0, -90, 0, 500, 200, "green", wallTexture],
  [-1000, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, 0, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [-600, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  [-400, 0, -150, 0, 0, 0, 500, 200, "blue", wallTexture],
  [-400, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [-400, 0, 150, 0, 0, 0, 500, 200, "red", wallTexture],
  // [-400, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, 0, 0, -90, 0, 500, 200, "green", wallTexture],
  [-600, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, 0, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [-200, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  // [0, 0, -150, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [0, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, 150, 0, 0, 0, 500, 200, "red", wallTexture],
  [0, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, 0, 0, -90, 0, 500, 200, "green", wallTexture],
  [-200, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [150, 0, 0, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [200, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, -150, 0, 0, 0, 500, 200, "blue", wallTexture],
  [400, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [400, 0, 150, 0, 0, 0, 500, 200, "red", wallTexture],
  // [400, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [250, 0, 0, 0, -90, 0, 500, 200, "green", wallTexture],
  [200, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [550, 0, 0, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [600, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  // [800, 0, -150, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [800, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [800, 0, 150, 0, 0, 0, 500, 200, "red", wallTexture],
  // [800, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [650, 0, 0, 0, -90, 0, 500, 200, "green", wallTexture],
  [600, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, 0, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [1000, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column4 = [
  // Modules
  // [-800, 0, 250, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [-800, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, 550, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, 400, 0, -90, 0, 500, 200, "green", wallTexture],
  [-1000, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, 400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [-600, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  // [-400, 0, 250, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [-400, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  // [-400, 0, 550, 0, 0, 0, 500, 200, "red", wallTexture],
  // [-400, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, 400, 0, -90, 0, 500, 200, "green", wallTexture],
  [-600, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [-250, 0, 400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [-200, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, 250, 0, 0, 0, 500, 200, "blue", wallTexture],
  [0, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, 550, 0, 0, 0, 500, 200, "red", wallTexture],
  [0, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  // [-150, 0, 400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [-200, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [150, 0, 400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [200, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  // [400, 0, 250, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [400, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, 550, 0, 0, 0, 500, 200, "red", wallTexture],
  [400, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  // [250, 0, 400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [200, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  // [550, 0, 400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [600, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  // [800, 0, 250, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [800, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [775, 0, 550, 0, 0, 0, 450, 200, "red", wallTexture],
  [800, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  // [650, 0, 400, 0, -90, 0, 500, 200, "green", wallTexture],
  // [600, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, 400, 0, -90, 0, 500, 200, "yellow", wallTexture],
  [1000, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column5 = [
  // Modules
  [-775, 0, 650, 0, 0, 0, 450, 200, "blue", wallTexture],
  [-800, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  // [-650, 0, 800, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [-600, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  // [-400, 0, 650, 0, 0, 0, 500, 200, "blue", wallTexture],
  // [-400, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, 950, 0, 0, 0, 500, 200, "red", wallTexture],
  [-400, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  // [-550, 0, 800, 0, -90, 0, 500, 200, "green", wallTexture],
  // [-600, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  // [-250, 0, 800, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [-200, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, 650, 0, 0, 0, 500, 200, "blue", wallTexture],
  [0, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, 950, 0, 0, 0, 500, 200, "red", wallTexture],
  [0, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  // [-150, 0, 800, 0, -90, 0, 500, 200, "green", wallTexture],
  // [-200, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  // [150, 0, 800, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [200, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, 650, 0, 0, 0, 500, 200, "blue", wallTexture],
  [400, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, 950, 0, 0, 0, 500, 200, "red", wallTexture],
  [400, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  // [250, 0, 800, 0, -90, 0, 500, 200, "green", wallTexture],
  // [200, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  // [550, 0, 800, 0, -90, 0, 500, 200, "yellow", wallTexture],
  // [600, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  [800, 0, 650, 0, 0, 0, 400, 200, "blue", wallTexture],
  [800, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [800, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [800, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  // [650, 0, 800, 0, -90, 0, 500, 200, "green", wallTexture],
  // [600, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [1000, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const missingWalls = [
  [-600, 0, -550, 0, 0, 0, 100, 200, "purple", wallTexture],
  [650, 0, -600, 0, 90, 0, 100, 200, "purple", wallTexture],
  [600, 0, 250, 0, 0, 0, 100, 200, "purple", wallTexture],
  [-250, 0, 600, 0, 90, 0, 100, 200, "purple", wallTexture],
];

const verticalWalls = [
  [-600, -100, -775, 90, 0, 0, 100, 450, "orange", wallTexture],
  [-600, -100, 200, 90, 0, 0, 100, 900, "orange", wallTexture],
  [-400, -100, -200, 90, 0, 90, 100, 500, "orange", wallTexture],
  [400, -100, -200, 90, 0, 90, 100, 500, "orange", wallTexture],
  [200, -100, -600, 90, 0, 90, 100, 900, "orange", wallTexture],
  [-200, -100, -800, 90, 0, 0, 100, 400, "orange", wallTexture],
  [-200, -100, 0, 90, 0, 0, 100, 500, "orange", wallTexture],
  [200, -100, 0, 90, 0, 0, 100, 500, "orange", wallTexture],
  [600, -100, 0, 90, 0, 0, 100, 500, "orange", wallTexture],
  [0, -100, 200, 90, 0, 90, 100, 500, "orange", wallTexture],
  [375, -100, 600, 90, 0, 90, 100, 1250, "orange", wallTexture],
  [-825, -100, 600, 90, 0, 90, 100, 350, "orange", wallTexture],

  [0, -100, -975, 90, 0, 90, 50, 2000, "orange", wallTexture],
  [0, -100, 975, 90, 0, 90, 50, 2000, "orange", wallTexture],
  [975, -100, 0, 90, 0, 0, 50, 2000, "orange", wallTexture],
  [-975, -100, 0, 90, 0, 0, 50, 2000, "orange", wallTexture],
];

const defaultFreeSpace = [
  //z: -800
  { x: -800, z: -800 },
  { x: -400, z: -800 },
  { x: 0, z: -800 },
  { x: 400, z: -800 },
  { x: 800, z: -800 },

  //z: -400
  { x: -800, z: -400 },
  { x: -400, z: -400 },
  { x: 0, z: -400 },
  { x: 400, z: -400 },
  { x: 800, z: -400 },

  //z: 0
  { x: -800, z: 0 },
  { x: -400, z: 0 },
  // { x: 0, z: 0 },
  { x: 400, z: 0 },
  { x: 800, z: 0 },

  //z: 400
  { x: -800, z: 400 },
  { x: -400, z: 400 },
  { x: 0, z: 400 },
  { x: 400, z: 400 },
  { x: 800, z: 400 },

  //z: 800
  { x: -800, z: 800 },
  { x: -400, z: 800 },
  { x: 0, z: 800 },
  { x: 400, z: 800 },
  { x: 800, z: 800 },
];

const map = [
  //Floor
  [0, 100, 0, 90, 0, 0, 2000, 2000, "gray", "assets/textures/floor.webp"],
  //Walls
  ...column1,
  ...column2,
  ...column3,
  ...column4,
  ...column5,
  ...missingWalls,
  ...verticalWalls,
];

const collisionAreas = [
  // TOP wall (z = -1000 to -950)
  { x1: -1000, x2: 1000, z1: -1000, z2: -950 },

  // BOTTOM wall (z = +950 to +1000)
  { x1: -1000, x2: 1000, z1: 950, z2: 1000 },

  // LEFT wall (x = -1000 to -950)
  { x1: -1000, x2: -950, z1: -1000, z2: 1000 },

  // RIGHT wall (x = +950 to +1000)
  { x1: 950, x2: 1000, z1: -1000, z2: 1000 },

  //Inner walls
  { x1: -650, x2: -550, z1: -1000, z2: -525 },
  { x1: -250, x2: -150, z1: -1000, z2: -525 },
  { x1: -250, x2: 675, z1: -650, z2: -525 },
  { x1: -650, x2: -150, z1: -250, z2: -150 },
  { x1: 150, x2: 650, z1: -250, z2: -150 },
  { x1: -250, x2: 250, z1: 150, z2: 250 },
  { x1: -650, x2: -550, z1: -250, z2: 650 },
  { x1: -250, x2: 1000, z1: 550, z2: 650 },
  { x1: -1000, x2: -550, z1: 550, z2: 650 },
  { x1: -250, x2: -150, z1: -150, z2: 250 },
  { x1: 150, x2: 250, z1: -150, z2: 250 },
  { x1: 550, x2: 650, z1: -150, z2: 250 },
];

const original = {
  map: map,
  collisionAreas: collisionAreas,
  defaultFreeSpace: defaultFreeSpace,
};

// Flip through Z axis (mirror X)
const flipZ = {
  map: original.map.map(([x, y, z, ...rest]) => [-x, y, z, ...rest]),
  collisionAreas: original.collisionAreas.map(({ x1, x2, z1, z2 }) => ({
    x1: -x2,
    x2: -x1,
    z1,
    z2,
  })),
  defaultFreeSpace: defaultFreeSpace,
};

// Flip through X axis (mirror Y)
const flipX = {
  map: original.map.map(([x, y, z, ...rest]) => [x, y, -z, ...rest]),
  collisionAreas: original.collisionAreas.map(({ x1, x2, z1, z2 }) => ({
    x1,
    x2,
    z1: -z2,
    z2: -z1,
  })),
  defaultFreeSpace: defaultFreeSpace,
};

// Flip through both X and Z (mirror X and Y)
const flipXZ = {
  map: original.map.map(([x, y, z, ...rest]) => [-x, y, -z, ...rest]),
  collisionAreas: original.collisionAreas.map(({ x1, x2, z1, z2 }) => ({
    x1: -x2,
    x2: -x1,
    z1: -z2,
    z2: -z1,
  })),
  defaultFreeSpace: defaultFreeSpace,
};

// All variants
const variants = [original, flipZ, flipX, flipXZ];

export default function createLabirynth() {
  return variants;
}
