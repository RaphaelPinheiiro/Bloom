const TABLIST = document.querySelector("[role='tablist']");
const TABS = TABLIST.querySelectorAll("[role='tab']");
const SLIDER = document.querySelector(".js-slider");

let tabFocus = 0;

TABLIST.addEventListener("keydown", (e) => {
  const KEYDOWNLEFT = 37;
  const KEYDOWNRIGHT = 39;

  if (e.keyCode === KEYDOWNLEFT || e.keyCode === KEYDOWNRIGHT) {
    TABS[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === KEYDOWNRIGHT) {
      tabFocus++;
      if (tabFocus >= TABS.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === KEYDOWNLEFT) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = TABS.length - 1;
      }
    }
  }

  TABS[tabFocus].setAttribute("tabindex", 0);
  TABS[tabFocus].focus();
});
