const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
 toggleMenu.classList.toggle("open");
 headerNav.classList.toggle("open");
});

const drop = document.querySelectorAll(".header__nav ul.nav li");
drop.forEach((link) => {
 link.addEventListener("click", () => {
  link.nextElementSibling.classList.toggle("open");
  link.querySelector("i").classList.toggle("open");
 });
});

const kamote = document.querySelector(".header");
window.addEventListener("scroll", () => {
 console.log(window.scrollY);
 if (window.scrollY >= 500) {
  kamote.classList.add("white");
 } else {
  kamote.classList.remove("white");
 }
});