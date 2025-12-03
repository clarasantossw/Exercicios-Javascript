const Texto = document.getElementsByClassName("Texto");
const btnDestaque = document.getElementById("btnDestaque");

btnDestaque.addEventListener("click", function(){
    for(let item of Texto){
        item.classList.toggle("highLight");
    }


});