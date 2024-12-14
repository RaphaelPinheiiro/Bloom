const OPENBUTTON = document.querySelector(".js-open");
const CLOSEBUTTON = document.querySelector(".js-close");
const SIDEBAR = document.querySelector(".js-sidebar");
const MAIN = document.querySelector(".js-main");
const BODY = document.querySelector(".js-body");

OPENBUTTON.addEventListener("click", () => {
  SIDEBAR.classList.add("c-sidebar--visible");
  MAIN.classList.add("main--opacity");
  BODY.classList.add("body--hidden");
});

CLOSEBUTTON.addEventListener("click", () => {
  SIDEBAR.classList.remove("c-sidebar--visible");
  MAIN.classList.remove("main--opacity");
  BODY.classList.remove("body--hidden");
});

MAIN.addEventListener("click", () => {
  SIDEBAR.classList.remove("c-sidebar--visible");
  MAIN.classList.remove("main--opacity");
  BODY.classList.remove("body--hidden");
});

console.log(BODY);
