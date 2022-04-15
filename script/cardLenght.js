function cardLenght () {
    let cardWrapper = document.querySelector(".card_wrapper")
    let menuTitle = document.querySelector(".menu__title");
    console.log(cardWrapper.children.length);
    if(cardWrapper.children.length === 4){
        cardWrapper.classList.add("scroll_active")
    }
 
  
}
cardLenght()
