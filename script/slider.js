
let offset = 0
let sliderLine = document.querySelector(".slider_line")
let nextBtn = document.querySelector(".next__btn")
let prevBtn = document.querySelector(".prev__btn")
// кнопка след слайдер 
prevBtn.onclick = () =>{
    offset += 336 
    sliderLine.style.left = -offset + "px"
    if(offset > 1200 ){
        offset = -336
    }
}
// кнопка пред слайдер 
nextBtn.onclick = () =>{
    offset -= 336 
    if(offset < 0){
        offset = 0
    }

    sliderLine.style.left = -offset + "px"

}
//слайдер для главного блока 

// селектим все катринки
let sliders = document.querySelectorAll(".offer_slide")
// селектим кнопки пред и след 
    prev = document.querySelector(".arrow_left")
    next = document.querySelector(".arrow_right")
// задаем индекс 
let slideIndex = 1
show(slideIndex)
// функция скрытие картинок
function show (n) {
    if(n > sliders.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = sliders.length
    
    }

    sliders.forEach(item=> item.style.display = "none")
    sliders[slideIndex-1].style.display = "block"


}

function plusSlide (n){
    show(slideIndex +=1)
}

prev.onclick = () =>{
   plusSlide(-1)
 
}
next.onclick = () =>{
    plusSlide(1)
 }








