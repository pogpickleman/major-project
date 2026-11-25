// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const MENU = "menu";
const RUNNING = "running";

let gameState = MENU;

async function loadAssets() {

}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();

}

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

function draw() {
  background(220);
  if (gameState === MENU) {
    mainMenu();
  }
}

function mainMenu() {

}