const navBars = document.querySelector(".fa-bars");
const navList = document.querySelector(".nav-list");
const logIn = document.querySelector(".log-in");
console.log(navList);

navBars.addEventListener("click", () => {
  navList.classList.toggle("hamburger");
  navList.classList.toggle("nav-list");
});
