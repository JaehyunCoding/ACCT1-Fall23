let posX, posY, velX, velY
let position, velocity
let diameter = 40

let logo

function preload(){
  logo = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/800px-DVD_logo.svg.png")
}

function setup() {
  createCanvas(600, 600)
  colorMode(HSB, TWO_PI, 1, 1)
  imageMode(CENTER)
  background(HALF_PI+QUARTER_PI,0.5,0.5)
  
  fill(TWO_PI*0.65, 0.6, 0.7)
  circle(100,150,120)
  
  // fill(PI*0.1, 0.6, 0.6)
  // fill("chartreuse")
  // circle(350,300,100)
  
  fill("plum")
  rect(300,300,75,90)
  
  for(let x=0; x<width; x++){
    let thisHue = map(x,0,width,0,TWO_PI)
    stroke(thisHue,0.7,0.7)
    line(x,0,x, height)
  }
  
  posX = width * 0.5
  posY = height * 0.5
  
  velX=-3
  velY=2
  
  position = createVector(width * 0.5, height * 0.5)
  velocity = createVector(random(-5,5), random(-4,4))
  
}

function draw(){
  
  for(let x=0; x<width; x++){
    let thisHue = map(x,0,width,0,TWO_PI)
    stroke(thisHue,0.7,0.7)
    line(x,0,x, height)
  }
  
  image(logo,position.x,position.y, diameter, diameter)

  // noStroke()
  // fill(PI*0.75, 0.75, 0.2)
  // circle(position.x, position.y, 40)
  
  position.add(velocity)
  // posX = posX + velX
  // posY = posY + velY
  
  if(position.x - diameter*0.5 <= 0 || position.x + diameter*0.5 >= width){
    velocity.x  *= -1
  }
  
  if(position.y - diameter*0.5 <= 0 || position.y + diameter*0.5 >= width){
    velocity.y  *= -1
  }
  
}