// STOIC'S JAVASCRIPT
let whatsapp = document.querySelector("#whatsapp")
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}));

window.addEventListener('scroll', function(){

    var scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active", window.scrollY > 500)
});

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
};

// STOIC'S JAVASCRIPT END