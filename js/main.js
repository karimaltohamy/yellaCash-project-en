// menu
const iconMenu = document.querySelector(".icon_menu");
const overflow = document.querySelector(".overflow");
const menuMobile = document.querySelector(".menu_mobile");
const btnCloseMenu = document.querySelector(".btn_close_menu");

iconMenu.addEventListener("click", () => {
  overflow.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

btnCloseMenu.addEventListener("click", () => {
  overflow.classList.remove("active");
  menuMobile.classList.remove("active");
});
