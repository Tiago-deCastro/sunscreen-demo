/* dropdown menu */
const productsBtn = document.querySelector(".products");
const ddMenuul = document.querySelector(".dd_menu_ul");
const arrow = document.querySelector(".fa-caret-down");

/* burger menu */

const hamburgerBtn = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar-menu");

productsBtn.addEventListener("click", function () {
  ddMenuul.classList.toggle("active_dd");
  arrow.classList.toggle("rotateArrow");
});

hamburgerBtn.addEventListener("click", function () {
  navbarMenu.classList.toggle("open");
});
