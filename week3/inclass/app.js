// document object modelsx`
let firstSection = document.getElementById("sectionOne")
let firstImage = document.getElementById("imageOne")
let buttonChangeColor = document.getElementById("colorChangeBTN")
let buttonGenColor = document.getElementById("colorGenBTN")
let buttonChangeImage = document.getElementById("imageChangeBTN")
let buttonAddText = document.getElementById("addTextBTN")

// console.log(firstSection)
console.log(buttonChangeColor)
// log나 info나 딱히 상관 없음.

let changeColor = function(){
    firstSection.style.backgroundColor = "rgb(170,250,170)"
}

let generateColor = function(){
    let redComp = Math.random()*255
    let greenComp = Math.random()*255
    let blueComp = Math.random()*255
    firstSection.style.backgroundColor = "rgb("+redComp+","+greenComp+","+blueComp+")"
}

let changeImage = function(){
    // firstImage.classList.add("image-2")
    firstImage.classList.toggle("image-2")
    // toggle은 지정한 클래스 네임을 없을 때 넣어주고 있을 땐 빼준다.
    // let myArray = [el1, el2, el3] --> myArray[1] = el2
    console.log(firstImage.classList[0])
    if(firstImage.classList[0]=="image-2"){
        firstImage.src="Clara1.png"
    }
    else{
        firstImage.src = "Clara2.webp"
    }
    }
    
// variables have many scopes
// 없던 곳에 새 것을 만들기 위해 함수 내에 변수를 넣어서 창조한다.
let addText = function(){
    let myPara = document.createElement("p")
    myPara.innerText = "Clara gonna be brave!"
    myPara.style.fontWeight = "900" // "bolder"라고 적을 수도 있음
    firstSection.appendChild(myPara)
}

// firstSection.removeChild(firstSection.children[firstSection.childre.length-1])
// 과제: remove children in Java, How to figure out the last child of the array then erase it. 구글링 스킬 늘여라. 맨 위의 네비게이션은 잊어라. 이미지 4개를 가져와서 하나를 큰 버젼으로 만들어라.


// Math.random()
// Math.random()*255 0부터 255까지 숫자

// 2. Fat Arrow Function
// let changeColor => (){

// }

firstSection.style.backgroundColor = "rgb(250,170,170)"
// css에선 -를 넣었다면 스크립트에서는 대문자를 활용.

buttonChangeColor.addEventListener("click", changeColor)
buttonGenColor.addEventListener("click", generateColor)
buttonChangeImage.addEventListener("click", changeImage)
buttonAddText.addEventListener("click",addText)
// (클릭의 목소리를 들어라, 그 다음 함수를 실행하라.)
// function is the collection of actions. brush your teeth 속에 수많은 액션이 들어있지만 다 싸잡아서 이 닦으라고 하듯.




