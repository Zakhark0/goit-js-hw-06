const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (event) => {
  if (event.target.value.length !== Number(inputLength)) {
    return inputEl.classList.add("invalid");
  }
  return inputEl.classList.remove("invalid"), inputEl.classList.add("valid");
});
