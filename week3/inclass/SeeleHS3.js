let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let bgColor = document.getElementById("bgColor")
let largeImage = document.getElementById("largeImage")
let chName = document.getElementById("chName")

let change01 = function () {
    largeImage.src = "SwallowtailPhantasm.webp"
    chName.innerText = "Swallowtail Phantasm"
    bgColor.className = ""
    bgColor.classList.add("sw")
}
let change02 = function () {
    largeImage.src = "Stygian_Nymph.webp"
    chName.innerText = "Stygian Nymph"
    bgColor.className = ""
    bgColor.classList.add("sn")
}
let change03 = function () {
    largeImage.src = "Starchasm_Nyx.webp"
    chName.innerText = "Starchasm Nyx"
    bgColor.className = ""
    bgColor.classList.add("sx")
}
let change04 = function () {
    largeImage.src = "Herrscher_of_Rebirth.webp"
    chName.innerText = "Herrscher of Rebirth"
    bgColor.className = ""
    bgColor.classList.add("hr")
}
// I tried to change the background-color by characters but once clicking the colors, the color doesn't change according to the characters...

btn1.addEventListener("click", change01)
btn2.addEventListener("click", change02)
btn3.addEventListener("click", change03)
btn4.addEventListener("click", change04)