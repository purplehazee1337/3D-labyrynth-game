const dev = true
const wallTexture = dev ? "wall.jpg" : "";

const column1 = [
    //Modules
  [-800, 0, -950, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-800, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, -650, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-600, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 2
  [-400, 0, -950, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-400, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, -650, 0, 0, 0, 400, 200, "red", wallTexture],
  [-400, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-600, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-200, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 3
  [0, 0, -950, 0, 0, 0, 400, 200, "blue", wallTexture],
  [0, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, -650, 0, 0, 0, 400, 200, "red", wallTexture],
  [0, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-200, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [150, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [200, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 4
  [400, 0, -950, 0, 0, 0, 400, 200, "blue", wallTexture],
  [400, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, -650, 0, 0, 0, 400, 200, "red", wallTexture],
  [400, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [250, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [200, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [550, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [600, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  //moudle 5
  [800, 0, -950, 0, 0, 0, 400, 200, "blue", wallTexture],
  [800, 0, -1000, 0, 0, 0, 400, 200, "blue", wallTexture],

  [800, 0, -650, 0, 0, 0, 400, 200, "red", wallTexture],
  [800, 0, -600, 0, 0, 0, 400, 200, "red", wallTexture],

  [650, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],
  [600, 0, -800, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [1000, 0, -800, 0, -90, 0, 400, 200, "yellow", wallTexture],
]

const column2 = [
  // Modules
  [-800, 0, -550, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-800, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, -250, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-600, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  [-400, 0, -550, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-400, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, -250, 0, 0, 0, 400, 200, "red", wallTexture],
  [-400, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],
  [-600, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-200, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, -550, 0, 0, 0, 400, 200, "blue", wallTexture],
  [0, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, -250, 0, 0, 0, 400, 200, "red", wallTexture],
  [0, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],
  [-200, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  [150, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [200, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, -550, 0, 0, 0, 400, 200, "blue", wallTexture],
  [400, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, -250, 0, 0, 0, 400, 200, "red", wallTexture],
  [400, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  [250, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],
  [200, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  [550, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [600, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  [800, 0, -550, 0, 0, 0, 400, 200, "blue", wallTexture],
  [800, 0, -600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [800, 0, -250, 0, 0, 0, 400, 200, "red", wallTexture],
  [800, 0, -200, 0, 0, 0, 400, 200, "red", wallTexture],

  [650, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],
  [600, 0, -400, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [1000, 0, -400, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column3 = [
  // Modules
  [-800, 0, -150, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-800, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, 150, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-600, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  [-400, 0, -150, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-400, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, 150, 0, 0, 0, 400, 200, "red", wallTexture],
  [-400, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],
  [-600, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-200, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, -150, 0, 0, 0, 400, 200, "blue", wallTexture],
  [0, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, 150, 0, 0, 0, 400, 200, "red", wallTexture],
  [0, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],
  [-200, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [150, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [200, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, -150, 0, 0, 0, 400, 200, "blue", wallTexture],
  [400, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, 150, 0, 0, 0, 400, 200, "red", wallTexture],
  [400, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [250, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],
  [200, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [550, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [600, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  [800, 0, -150, 0, 0, 0, 400, 200, "blue", wallTexture],
  [800, 0, -200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [800, 0, 150, 0, 0, 0, 400, 200, "red", wallTexture],
  [800, 0, 200, 0, 0, 0, 400, 200, "red", wallTexture],

  [650, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],
  [600, 0, 0, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [1000, 0, 0, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column4 = [
  // Modules
  [-800, 0, 250, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-800, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, 550, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-600, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  [-400, 0, 250, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-400, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, 550, 0, 0, 0, 400, 200, "red", wallTexture],
  [-400, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],
  [-600, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-200, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, 250, 0, 0, 0, 400, 200, "blue", wallTexture],
  [0, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, 550, 0, 0, 0, 400, 200, "red", wallTexture],
  [0, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],
  [-200, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [150, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [200, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, 250, 0, 0, 0, 400, 200, "blue", wallTexture],
  [400, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, 550, 0, 0, 0, 400, 200, "red", wallTexture],
  [400, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [250, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],
  [200, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [550, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [600, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  [800, 0, 250, 0, 0, 0, 400, 200, "blue", wallTexture],
  [800, 0, 200, 0, 0, 0, 400, 200, "blue", wallTexture],

  [800, 0, 550, 0, 0, 0, 400, 200, "red", wallTexture],
  [800, 0, 600, 0, 0, 0, 400, 200, "red", wallTexture],

  [650, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],
  [600, 0, 400, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [1000, 0, 400, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

const column5 = [
  // Modules
  [-800, 0, 650, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-800, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-800, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [-800, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  [-950, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-1000, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  [-650, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-600, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 2
  [-400, 0, 650, 0, 0, 0, 400, 200, "blue", wallTexture],
  [-400, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [-400, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [-400, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  [-550, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-600, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  [-250, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [-200, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 3
  [0, 0, 650, 0, 0, 0, 400, 200, "blue", wallTexture],
  [0, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [0, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [0, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  [-150, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],
  [-200, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  [150, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [200, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 4
  [400, 0, 650, 0, 0, 0, 400, 200, "blue", wallTexture],
  [400, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [400, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [400, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  [250, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],
  [200, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  [550, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [600, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],

  // Module 5
  [800, 0, 650, 0, 0, 0, 400, 200, "blue", wallTexture],
  [800, 0, 600, 0, 0, 0, 400, 200, "blue", wallTexture],

  [800, 0, 950, 0, 0, 0, 400, 200, "red", wallTexture],
  [800, 0, 1000, 0, 0, 0, 400, 200, "red", wallTexture],

  [650, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],
  [600, 0, 800, 0, -90, 0, 400, 200, "green", wallTexture],

  [950, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
  [1000, 0, 800, 0, -90, 0, 400, 200, "yellow", wallTexture],
];

 export const labirynth = [
  ...column1,
  ...column2,
  ...column3,
  ...column4,
  ...column5
]