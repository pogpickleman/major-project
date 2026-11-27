// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// game state variables
const MENU = "menu";
const RUNNING = "running";

let gameState = MENU;

// placeholder for width/height
let canvasWidth = 0;
let canvasHeight = 0;

// button containers
let buttonTypes = {};
let buttons = [];

// pallete colour object
let pallete = {
  babyBlue: "#bbe0f2",
  paleBlue: "#d1eaf6",
  iceBlue: "#e7f1f6",
  lavenderBlush: "#f9e7f7",
  pastelPink: "#ffdbed",

};



// load assets
async function loadAssets() {

}


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();

  buttonTypes = {
    playButton: {
      x: width/2,
      y: height/2,
      width: 500,
      height: 250,
      radius: 20,
      colour: pallete.babyBlue,
      text: "PLAY",
      textColour: "black",
      sizeOfText: 100,
      stroke: 10,
    },
  };


}

// player class
class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.width = 100;
    this.height = 100;
    this.dim = createVector(this.width, this.height);
    this.facing;
  }
  move() {
  }
  draw () {
  }
}

// button class
class Button {
  constructor(type) {
    rectMode(CENTER);
    this.button = buttonTypes[type];
    strokeWeight(this.button.stroke);
  }

  drawButton() {
    fill(this.button.colour);

    rect(
      this.button.x,
      this.button.y,
      this.button.width,
      this.button.height,
      this.button.radius
    );

    fill(this.button.textColour);
    textSize(this.button.sizeOfText);
    textAlign(CENTER, CENTER);

    text(
      this.button.text,
      this.button.x,
      this.button.y
    );

  }
}

// draw loop
function draw() {
  background('white');

  // update all class functions
  updateObjects();

  // run menu functions
  if (gameState === MENU) {
    mainMenu();
  }
}

// main menu func
function mainMenu() {
  let button = new Button("playButton");
  buttons.push(button);

}

// update classes
function updateObjects() {
  for (let button of buttons) {
    button.drawButton();
  }
}

