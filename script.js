// DARKMODE
let darkMode = document.querySelector("header");
let buttonDarkMode = document.querySelector(".dark-mode");

buttonDarkMode.onclick = function () {
    darkMode.classList.toggle("darkMode");
    if(darkMode.classList.contains("darkMode")) {
        localStorage.setItem("tema", "terang");
    } else {
        localStorage.setItem("tema", "gelap");
    }
}
if(localStorage.getItem("tema") == "terang") {
    darkMode.classList.add("darkMode");
}



// MENU MOBILE
let menuMobile = document.querySelector(".hamburger-menu");

menuMobile.onclick = function () {
    menuMobile.classList.toggle("hamburgerMenuAnimation");
    document.querySelector(".menu-mobile").classList.toggle("menuMobileScript");
}

let submitButton = document.querySelector(".submit");

submitButton.onclick = function() {
    submitButton.textContent = "Thank You ! :)";
}

// 
