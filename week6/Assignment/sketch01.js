let circleX, circleY
let targetX, targetY
let targetSize = 40
let circleSize = 10
let samX, samY
let samSpeed
let hit = false
let targets = []

function setup() {
  createCanvas(600, 600)
  circleX = width / 2
  circleY = height / 2
  targetX = random(width)
  targetY = random(height)
}

function draw() {
  background(255, 204, 50)
  
  fill(0, 150, 255)
  ellipse(circleX, circleY, circleSize)
  
  fill(255, 0, 0)
  ellipse(targetX, targetY, targetSize)
  
	// as of this part, I referred to ChatGPT for launching missile against the targets.
	// However, I'd like to make use of what we've learned such as constructor in a separate .js file.
	// I wanted to set a fixxed SAM missle pod(circle) in the middle of the background.
	// Then whenever I click on the screen, a circle pops up and the missle pod fires against
	//  the target then the target disappears and the missle pod scales up a little.
	
  samSpeed = random(3,10)

  if (hit) {
    let dx = targetX - samX
    let dy = targetY - samY
    let distance = sqrt(dx * dx + dy * dy) - targetSize/2
    if (distance < samSpeed) {
      hit = false;
      circleSize += 5;
      targetX = random(width)
      targetY = random(height)
    } else {
      samX += dx / distance * samSpeed
      samY += dy / distance * samSpeed
      stroke(0)
      line(circleX, circleY, samX, samY)
    }
  }
}

function mouseClicked() {
  if (!hit) {
    samX = circleX
    samY = circleY
    hit = true
  }
}
