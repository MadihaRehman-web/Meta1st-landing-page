const body = document.querySelector("body");
const navBars = document.querySelector(".fa-bars");
const navList = document.querySelector(".nav-list");
const themeSwitch = document.querySelector(".switch");
const logIn = document.querySelector(".log-in");

themeSwitch.addEventListener("change", () => {
  console.log(themeSwitch);
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
});

navBars.addEventListener("click", () => {
  navList.classList.toggle("hamburger");
  navList.classList.toggle("nav-list");
});
