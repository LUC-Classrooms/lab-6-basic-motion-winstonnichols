/**
 * Lab 6 - Basic Motion
 * Change a variable in each frame of draw() to make an image move
 */

//global variables:
//these will define the location of our spaceship
var x = 160; //horizontal location
var y = 120; // vertical location
var d = 100; // diameter
var r = 0; // rotation
var bodyColor = 200;
var portholeColor = 0;

function setup() {
  createCanvas(320, 240);
}

function draw() {
  // background is drawn first
  background(0, 0, 50); // deep blue
  
  ufo(x, y, d, r); // call the ufo() function (see below)
  
  // add code here to change the ship location each frame
  
  
}

function ufo(tempX, tempY, tempD, tempR){
  // this custom function takes care of drawing a complex shape
  let r = tempR; // rotation value
  let d = tempD; // diameter of the ship
  let grey = color(200);
  let black = color(0);
  let green = color(0, 255, 0);
  
  push(); // create a layer
  translate(tempX, tempY); // use the first two arguments to determing location
  rotate(r);
  
  //UFO's canopy
  noFill();
  stroke(grey);
  strokeWeight(2);
  ellipse(0, 0-d/6, d/2, d/2);
  
  //Pilot
  noStroke();
  fill(green);
  ellipse(0, 0-d/4, d/6, d/4);
  fill(black);
  ellipse(0-d/20, 0-d/3.5, d/18, d/10);
  ellipse(0+d/20, 0-d/3.5, d/18, d/10);
  stroke(black);
  line(0 - d/50, 0 - d/5, 0 + d/50, 0 - d/5);

  // UFO's hull
  noStroke();
  fill(grey);
  ellipse(0, 0, d, d/3);
  
  //Port holes
  fill(black);
  ellipse(0 - d * 1/3, 0, d/12, d/8);
  ellipse(0, 0, d/12, d/8);
  ellipse(0 + d * 1/3, 0, d/12, d/8);
  
  pop(); // dispose of the layer
}
