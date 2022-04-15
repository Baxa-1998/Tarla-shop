let postBlock = document.querySelector(".post_code")
let input = document.querySelector(".first_header_input")
let checkBtn = document.querySelector(".first_header_btn")
let postTitle = document.querySelector(".post__title ")
let close = document.querySelector(".close")
let postCode = '1234'
checkBtn.onclick = () =>{
    if(input.value == postCode){
        postBlock.classList.add("post_active")
        input.value = ""
    }

    else{
        postTitle.innerText = "Вы не находитесь в Лондоне" 
        postBlock.classList.add("post_active")
        input.value = ""
    }
}
close.onclick = () =>{
    postBlock.classList.remove("post_active")
}


    
    

