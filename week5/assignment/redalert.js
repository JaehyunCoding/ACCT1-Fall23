// Create an animation with at least two moving shapes - one moving in a repeated motion (e.g. a pendulum or a rotating planet) and the other performing a movement after a predetermined interval of time has passed. You can add more than 2 shapes if you like.

// use trigonometric function to describe repeated motion
// use time function to calculate the interval
// de-synchronize the to movements from each other to create complex motion rhythm
// Try to use randomness and/or Perlin noise to create organic shapes.

// Documentation:

// In the process of your work capture the images of the iterations - at least 6 in total. Create a webpage and write a sentence or two for each image explaining the evolution of work. Embed your sketch from openProcessing or P5js to the webpage.

let bgImage
let y=0
let yOff = 0

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

    // Center Yellow Pie
    strokeWeight(0)
    stroke(PI*1/3, 1, 0.8)

    let alert = fill(PI*1/3, 0.5, 1)
    alert
    // alert.setAlpha(PI + PI*cos(millis()*0.001))
    // I want to make the Pie shape to have changes on transparency. That's why I used setAlpha but I'm confused how to setAlpha with HSB.

    push()
    translate(width*0.5, height*0.5)
    let angle = millis()*0.001*(1*0.25 + 1)
    rotate(sin(angle)*TWO_PI*2)
    arc(0,0,400,400,PI,PI*1.5)
    pop()


    // Center Red
    strokeWeight(5)
    stroke(0, 1, 0.8)
    noFill()

    push()
    translate(width*0.5, height*0.5)
    let angle1 = millis()*0.001*(3*0.25 + 1)
    rotate(cos(angle1)*TWO_PI*2)
    arc(0,0,50,50,PI*0.1,PI*1.9)
    pop()

    // Random Noise
    strokeWeight(3)
    stroke(PI*0.8, 1, 0.8)

    push()
    yOff += 0.01
    let angle2 = millis()*0.001*(1*0.25 + 1)
    let yCoord = noise(yOff) * height/2 * (sin(angle2) + 1)
    line(0, yCoord, width, yCoord)
    pop()



    // stroke(TWO_PI,0,1)
    // strokeWeight(5)
    // line(0, y, width, y);
    // y++;
    // if (y > height) {
    // y = 0;
    // }

    
}