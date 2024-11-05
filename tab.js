let botton = document.querySelectorAll(".btn")
let content = document.querySelectorAll(".tab-content")


for(let i=0; i<botton.length ; i++){

    botton[i].addEventListener("click", function(){

        for(let j=0;  j<content.length; j++){
            content[j].classList.remove("active")
            botton[j].classList.remove("active")
        }

        // able[i].style.display = "block"
        content[i].classList.add("active")
        botton[i].classList.add("active")

    })
}



