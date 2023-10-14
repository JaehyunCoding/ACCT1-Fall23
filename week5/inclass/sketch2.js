function setup(){
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent("sketchHolder2")
    colorMode(HSB, TWO_PI, 1, 1)
}

function draw(){
    background(0,0,0)

    strokeWeight(10)
    // stroke(0,0.8,0.8)
    noFill()
    for(let i=0; i<10; i++){
        // let diam = (i+1)*100
        // 이렇게 하면 얇은 선이 넓게 배치될거임
        let diam = 150 + i*20
        // 이렇게 해야 넓은 선 하나가 생김.
        let thisHue = (TWO_PI/10)*i
        stroke(thisHue, 0.8, 0.8)

        push()
        translate(width*0.5, height*0.5)
        let angle = millis()*0.001 * (i*0.5+6)
        // i*0.5의 0.5는 파동, 6은 빈도
        rotate(sin(angle)*0.5)
        arc(0, 0, diam, diam, PI*0.75, TWO_PI*1.125)
        pop()
        // diam, diam 높이랑 넓이의 파라미터

    }
    stroke(0, 0.8, 0.8)
    arc(width*0.5, height*0.5, 200, 200, PI*0.75, TWO_PI*1.125)
    // angle은 시계방향으로 증가한다는 걸 명심하라.
}