const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value != "") {
    userNameEl.textContent = event.currentTarget.value;
    return;
  }
  return (userNameEl.textContent = "Anonymous");
});
