const slides = document.querySelectorAll(".polaroid")

let index = 0

function changePhoto(){

slides[index].classList.remove("active")

index++

if(index >= slides.length){
index = 0
}

slides[index].classList.add("active")

}

setInterval(changePhoto,3000)