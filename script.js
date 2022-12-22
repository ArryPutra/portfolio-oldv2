// DARKMODE
let darkMode = document.querySelector("header");
let buttonDarkMode = document.querySelector(".dark-mode");

buttonDarkMode.onclick = function () {
    darkMode.classList.toggle("darkMode");
}


// MENU MOBILE
let menuMobile = document.querySelector(".hamburger-menu");

menuMobile.onclick = function () {
    menuMobile.classList.toggle("hamburgerMenuAnimation");
    document.querySelector(".menu-mobile").classList.toggle("menuMobileScript");
}
