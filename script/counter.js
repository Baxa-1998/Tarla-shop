window.addEventListener("click", function (event) {
  //Обьявляем счетчик внутри товара
  let counter;
  let counterItems = document.querySelector('.counter_items')

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим отца кнопок
    const itemWrapper = event.target.closest(".item_counter_wrapper");
    const counter = itemWrapper.querySelector("[data-counter]");

    if (event.target.dataset.action === "plus") {
      counter.innerText = ++counter.innerText;
    }
    //Кнопка минус
    if (event.target.dataset.action === "minus") {
      if (parseInt(counter.innerText) > 0) {
        counter.innerText = --counter.innerText;
      }
      if (
        event.target.closest(".card_wrapper") &&
        parseInt(counter.innerText) === 0
      ) {
        event.target.closest(".card_item").remove();
        counterItems.innerText = --counterItems.innerText
        if(parseInt(counterItems.innerText) === 0 ){
          counterItems.classList.remove("show_counter")
        }
        
        calcPrice();
      }
    }
  }
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".card_wrapper")
  ) {
    calcPrice();
  }
});
