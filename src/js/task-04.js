const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");
console.dir(valueEl);

btnDecrementEl.addEventListener("click", () => (valueEl.textContent -= 1));
btnIncrementEl.addEventListener("click", () => valueEl.textContent++);
