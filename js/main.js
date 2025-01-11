const hamburger = document.querySelector("#icon");
const nav = document.querySelector(".mobile-nav");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("fa-x");
    nav.classList.toggle("active")
});

document.querySelector(".currentYear").innerHTML = new Date().getFullYear();