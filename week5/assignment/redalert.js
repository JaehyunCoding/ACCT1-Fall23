// Create an animation with at least two moving shapes - one moving in a repeated motion (e.g. a pendulum or a rotating planet) and the other performing a movement after a predetermined interval of time has passed. You can add more than 2 shapes if you like.

// use trigonometric function to describe repeated motion
// use time function to calculate the interval
// de-synchronize the to movements from each other to create complex motion rhythm
// Try to use randomness and/or Perlin noise to create organic shapes.

// Documentation:

// In the process of your work capture the images of the iterations - at least 6 in total. Create a webpage and write a sentence or two for each image explaining the evolution of work. Embed your sketch from openProcessing or P5js to the webpage.

let bgImage
let y=0

function preload(){
    bgImage = loadImage("https://static1.squarespace.com/static/5cb8811d5239585cb782f0e0/t/5d053fc790be8d0001694450/1560625096234/VG-cnc-ra2.jpg?format=1500w")
}

function setup() {
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent("RedAlertHolder")
    colorMode(HSB, TWO_PI, 1, 1)
    imageMode=(CENTER)
}

function draw(){

    background(bgImage)

    stroke(PI*0.25,1,1)
    strokeWeight(5)
    line(0, y, width, y);
    y++;
    if (y > height) {
    y = 0;
    }

    
}