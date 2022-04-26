const productsBtn = document.querySelector(".products");
const ddMenuul = document.querySelector(".dd_menu_ul");
const arrow = document.querySelector(".fa-caret-down");

productsBtn.addEventListener("click", function () {
  ddMenuul.classList.toggle("active_dd");
  arrow.classList.toggle("rotateArrow");
});
