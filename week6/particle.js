class Particle {
    constructor (_posX = width*0.5, _posY = height*0.5) {
    this.position = createVector(_posX, _posY)
    // this.velocity = p5.Vector.random2D()
    // this.velocity.mult(4)
    this.velocity = createVector(0,0)
    this.accel = createVector(0,0)
    
    // 컨스트럭터 내에선 같은 변수를 여러개로 정의 할 때 하나하나 다 this해줘야한다.
    // 왜 이 짓을 하는가 궁금하겠지만 생각해보면 파티클 300개의 모든 벡터를 적는 것 보단 파티클과 this.를 이용하는게 가장 짧고 편하다. 그리고 interactive이잖아!
    this.cColor = color(random(TWO_PI),random(0.3, 1),random(0.5, 1))
    this.cRadius = 15
    }

    // 기존의 스케치에다가 공식을 넣는 건 그려놓고 조작하는 건데 지금의 display는 그려놓기 전에 조작하는 거다.
    display(){
        fill(this.cColor)
        noStroke()
        circle(this.position.x, this.position.y, this.cRadius *2)
    }
    // 

    addForce(_force){
        this.accel.add(_force)

    }

    attractToMouse(){
        let mousePos = createVector(mouseX,mouseY)
        mousePos.sub(this.position)
        mousePos.setMag(1.5)

        this.accel.add(mousePos)
    }

    move() {
    
    this.velocity.add(this.accel)
    this.velocity.limit(4)
    this.position.add(this.velocity)

    // left edge
    if(this.position.x-this.cRadius <= 0){
        this.position.x = this.cRadius
        this.velocity.x *= -1
    }
    // right edge
    if(this.position.x+this.cRadius >= width){
        this.position.x = width-this.cRadius
        this.velocity.x *= -1
    }
    // top edge
    if(this.position.y-this.cRadius <= 0){
        this.position.y = this.cRadius
        this.velocity.y *= -1
    }
    // bottom edge
    if(this.position.y+this.cRadius >= height){
        this.position.y = height-this.cRadius
        this.velocity.y *= -1
    }
    }

    reachOut(_allParticles = []){
        // 언더스코어 넣는건 교수가 요게 바깥에서 왔다는 걸 표시하기 위한 것이라고함 ㅋㅋ
        _allParticles.forEach( (otherP)=> {
            if(otherP != this){
                if(this.position.dist(otherP.position) <= 150){
                    stroke(this.cColor)
                    strokeWeight(2)
                    line(this.position.x, this.position.y, otherP.position.x, otherP.position.y)
                }
            }
        })
    }
    // this.가 붙은 건 local property이고 height와 width는 global property
}