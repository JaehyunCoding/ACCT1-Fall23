// let posX, posY, velX, velY
// let position, velocity
// let cColor
// let cRadius = 40
let particles = []
let wind
let gravity

function setup() {
    createCanvas(700, 600)
    colorMode(HSB, TWO_PI, 1,1)
    particles[0] = new Particle()
    wind = createVector(-0.05, 0)
    gravity = createVector(0, 0.01)
    // John = new Particle()
    // position = createVector(width*0.5, height*0.5)
    // vector = createVector(random(-4, 4), random(-4, 4))
    // velocity = p5.Vector.random2D()
    // velocity.mult(4)

    // cColor = color(0,1,1)
    
}

function draw() {

    background(0,0,1)
    particles.forEach((part)=>{
        part.display()
        part.addForce(wind)
        part.addForce(gravity)
        part.attractToMouse()
        part.move()
        part.reachOut(particles)
    })
    // fill(0,1,1)
    // circle(position.x, position.y, cRadius *2)

    // position.add(velocity)

    // // left edge
    // if(position.x-cRadius <= 0){
    //     position.x = cRadius
    //     velocity.x *= -1
    // }
    // // right edge
    // if(position.x+cRadius >= width){
    //     position.x = width-cRadius
    //     velocity.x *= -1
    // }
    // // top edge
    // if(position.y-cRadius <= 0){
    //     position.y = cRadius
    //     velocity.y *= -1
    // }
    // // bottom edge
    // if(position.y+cRadius >= height){
    //     position.y = height-cRadius
    //     velocity.y *= -1
    // }
    // John.display()
    // John.move()

}

function mouseReleased() {
    // John.position.set(mouseX, mouseY)
    particles.push(new Particle(mouseX, mouseY))
}

function keyReleased () {
    if(keyCode == RIGHT_ARROW){
        wind.x += 0.01
    }
    else if (keyCode == LEFT_ARROW){
        wind.x -= 0.01
    }
}