const OPENBUTTON = document.querySelector(".js-open");
const SIDEBAR = document.querySelector(".js-sidebar");
const MAIN = document.querySelector(".js-main");

OPENBUTTON.addEventListener("click", () => {
  SIDEBAR.classList.add("c-sidebar--visible");
  MAIN.classList.add("main--opacity");
});

MAIN.addEventListener("click", () => {
  SIDEBAR.classList.remove("c-sidebar--visible");
  MAIN.classList.remove("main--opacity");
});
