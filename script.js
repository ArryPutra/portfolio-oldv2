// DARKMODE
let darkMode = document.querySelector("header");
let buttonDarkMode = document.querySelector(".dark-mode");

buttonDarkMode.onclick = function() {
    darkMode.classList.toggle("darkMode");
}

// MENU MOBILE
let menuMobile = document.querySelector(".menu-mobile");

menuMobile.onclick = function() {
    menuMobile.classList.toggle("menuMobileScript");
    alert("kamu nanya");
}
