//Якорь
const scroll = document.querySelectorAll("a");
for (let item of scroll) {
  item.onclick = (event) => {
    event.preventDefault();
    const blockID = item.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}

// модальное окно корзины 
let cardBtn = document.querySelector(".header_shop_block")
let cardBlock = document.querySelector(".card_block")
let closeBtn = document.querySelector(".close__btn")
let body = document.querySelector("body")

cardBtn.onclick = () =>{
  cardBlock.classList.add("card_active")
  body.style.overflow = "hidden"

 

  
}
closeBtn.onclick = () =>{
  cardBlock.classList.toggle("card_active")
  body.style.overflow = ""
 
 
  
}
//Бургер меню
let burgerBtn = document.querySelector(".burger_icon")
let burgerBlock = document.querySelector(".burger_block")
let burgerClose = document.querySelector(".close_burger")

burgerBtn.onclick = () =>{
  burgerBlock.classList.toggle("card_active")
 
}
burgerClose.onclick = () =>{
  burgerBlock.classList.remove("card_active")
}

// preloader











