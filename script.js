const body = document.querySelector("body");
const menuBars = document.querySelector(".menu-bars");
const navList = document.querySelector(".nav-list");
const themeSwitch = document.querySelector(".switch");
const logIn = document.querySelector(".log-in");

themeSwitch.addEventListener("change", () => {
  console.log(themeSwitch);
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
});

menuBars.addEventListener("click", () => {
  navList.classList.toggle("hidden-slidebar");
  navList.classList.toggle("nav-list");
  menuBars.classList.toggle("change");
  // navList.classList.toggle("nav-list");
});
