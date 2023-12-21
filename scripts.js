const navbar = document.querySelector("nav");
const openMenu = document.querySelector(".menu-button");
const closeMenu = document.querySelector(".menu-close");

openMenu.addEventListener("click", () => {
  navbar.classList.add("open");
  console.log(navbar)
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("open");
});