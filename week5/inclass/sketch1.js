let angle = 0.67

function setup(){
    // createCanvas(windowWidth, windowHeight)
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent("sketchHolder")

    setInterval(function(){
        drawGrid(20)
    },2000)
    // trigonometry
    // 지금 우린 vs에서 p5js작업을 하고 있다는 걸 기억하자.
    // Radians <- 얘가 개입한다는 건 PI를 써야한다는 뜻!
    // drawGrid()
}

function draw(){
    background(200, 230, 60)    
    // rotate(QUARTER_PI)

    push()
    translate(100, 100)
    rotate(angle)
    drawGrid(60)
    fill(0,0,0)
    rect(0, 0, 100, 150)
    pop()
    // pop은 새로운 곳으로 빵하고 이사간다고 생각하심. 다시 제로부터 시작한다는 거임

    circle(150,150,100)
    
    angle+=0.01
    // angle은 pop의 영향 안받음. 왜냐면 pop은 드로잉에만 영향주기 때문이지롱.
    // hsb야 2PI가 끝이지만 앵글의 경우 2000이든 100이든 계속 돌면 끝. 마치 400도가 한바퀴 다돈 360 + 40 이듯이...
    console.info(angle)
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
// 요거 왜 만든 거임? 체크무늬만들려고 한 거 아님?