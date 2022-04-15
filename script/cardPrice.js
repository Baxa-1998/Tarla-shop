function calcPrice(){
    let cardItem = document.querySelectorAll(".card_item")
    let totalPrice = document.querySelector(".card__total") 
    let totalCounter = 0
   cardItem.forEach(item => {
       let counter = item.querySelector("[data-counter]")
       let cardPrice = item.querySelector(".card__price") 
     
       let result = parseInt(counter.innerText) * parseInt(cardPrice.innerText)
       totalCounter += result 
      
     

       
       
      
 
      
   });
   totalPrice.innerText = " Total " + totalCounter


  

   
   


    
}


