function setup(){
    // createCanvas(windowWidth, windowHeight)
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent("sketchHolder")
    background(200, 230, 60)

    // 지금 우린 vs에서 p5js작업을 하고 있다는 걸 기억하자.
    // Radians <- 얘가 개입한다는 건 PI를 써야한다는 뜻!
    rotate(QUARTER_PI)
    // drawGrid()
    drawGrid(60)
    fill(0,0,0)
    rect(100, 100, 100, 150)
}

function drawGrid(numSegments = 10){
    let interval = width/numSegments
    for(let x=0; x<=numSegments; x++){
        line(x*interval, 0, x*interval, height)
    }
    interval = height/numSegments
    for(let y=0; y <=numSegments; y++){
        line(0, y*interval, width, y*interval)
    }
}