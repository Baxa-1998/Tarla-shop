// Корзина
window.addEventListener("click", function (event) {
  let cardWrapper = document.querySelector(".card_wrapper");
  let menuTitle = document.querySelector(".menu__title");
  let cardItem = document.querySelectorAll(".card_item");
  let counterMinus = document.querySelectorAll(".counter__minus");
  let counterPrice = document.querySelector(".card__total");
  let cardTotal = document.querySelector(".card__total")
  let itemWrapper = document.querySelectorAll(".item_counter_wrapper")
  let counterItems = document.querySelector('.counter_items')
 

  

  //Находим кнопку
  if (event.target.hasAttribute("data-cart")) {
    menuTitle.classList.add("hide");
    cardLenght()
    counterItems.classList.add("show_counter")
    counterItems.innerText = ++counterItems.innerText

    
    
    

    //Находим отцовский элемент
    let card = event.target.closest(".grid_items");
    //Собираем ифнормацию из карты
    let cardInfo = {
      id: card.id,
      title: card.querySelector(".item__name").innerText,
      price: card.querySelector(".item__price").innerText,
      imgSrc: card.querySelector(".grid_img").getAttribute("src"),
      counter: card.querySelector("[data-counter]").innerText,
      
    };
    // Проверяем есть ли товар в корзине 
    const itemInCard = cardWrapper.querySelector(`[id ="${cardInfo.id}"]`)
    // если товар есть в корзине 
    if(itemInCard){
      const counterEl = itemInCard.querySelector("[data-counter]")
      counterEl.innerText = parseInt(counterEl.innerText) + parseInt(cardInfo.counter)
    }else{
    
    
 

    cardItem = `
    <div class="card_item" id="${cardInfo.id}">
     <p class="card__price">${cardInfo.price}</p>
     <img class="card_photo" src="${cardInfo.imgSrc}" alt="" ">
     <h2 class="card_title">${cardInfo.title}</h2>
      <div class="item_counter_wrapper">
        <div data-action="plus" class="counter__plus">+</div>
         <div data-counter="" class="counter_number">${cardInfo.counter}</div>
         <div data-action="minus" class="counter__minus">-</div>
      </div>

   </div>     
     `;
    //Добавляем разметку в корзину
    cardWrapper.insertAdjacentHTML("beforeend", cardItem);

    
    }
  card.querySelector("[data-counter]").innerText = "1"
  calcPrice()
 


    

  }



  // // Счетчик корзины
  // let counter;
  // if (
  //   event.target.dataset.action === "plus" ||
  //   event.target.dataset.action === "minus"
  // ) {
  //   let counterWrapper = event.target.closest(".card_item");
  //   counter = counterWrapper.querySelector("[data-counter]");
  // }
  // // кнопка плюс
  // if (event.target.dataset.action === "plus") {
  //   counter.innerText = ++counter.innerText;




  // }

  // // // кнопка минус
  // if (event.target.dataset.action === "minus") {
  //   //Если счетчик больше единицы
  //   if (parseInt(counter.innerText) > 0) {
  //     counter.innerText == --counter.innerText;
  
  //   }
  //   if (
  //     event.target.closest(".card_wrapper") &&
  //     parseInt(counter.innerText) === 0){
  //     event.target.closest(".card_item").remove();
    
      
  //   }
    
  // }
  // if(event.target.hasAttribute("data-action") && event.target.closest(".card_counter")){
  //   calcPrice()
  // }

});

