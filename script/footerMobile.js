let subtitle = document.querySelectorAll(".mobile__subtitle")
function showSubtitle () {
    subtitle.forEach(item =>{
        item.classList.toggle("show_counter")
    })

}

let openBtn = document.querySelectorAll(".open__summary")

for(let item of openBtn){
    item.onclick = () =>{
        showSubtitle()
    }
}


