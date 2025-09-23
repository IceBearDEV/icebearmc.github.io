const toggle = document.getElementById("toggleDark");
const header = document.querySelector("header");
const audio = new Audio();
audio src = "./sound.ogg";

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")){
        header.style.background = "white";
        header.style.color = "black";
        header.style.transition = "2s";
    }else{
        header.style.background = "black";
        header.style.color = "white";
        header.style.transition = "2s";
    }
});