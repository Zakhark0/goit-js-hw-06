function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const chengeColorBtnEl = document.querySelector(".change-color");
const colorEl = getRandomHexColor();
const textEl = document.querySelector(".color");
chengeColorBtnEl.addEventListener(
  "click",
  () => (bodyEl.style.backgroundColor = colorEl)
);
textEl.textContent = colorEl;
