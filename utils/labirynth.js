const dev = true
const wallTexture = dev ? "assets/textures/wall.jpg" : "";

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
]

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
  [-250, 0, 600, 0, 90, 0, 100, 200, "purple", wallTexture]
]

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
   [-825, -100, 600, 90, 0, 90, 100, 350 , "orange", wallTexture],

   [0, -100, -975, 90, 0, 90, 50, 2000 , "orange", wallTexture],
    [0, -100, 975, 90, 0, 90, 50, 2000 , "orange", wallTexture],
    [975, -100, 0, 90, 0, 0, 50, 2000 , "orange", wallTexture],
    [-975, -100, 0, 90, 0, 0, 50, 2000 , "orange", wallTexture],
]

 export const labirynth = [
  ...column1,
  ...column2,
  ...column3,
  ...column4,
  ...column5,
  ...missingWalls,
  ...verticalWalls
]