const itemsEl = document.querySelectorAll(`.item`);
console.log("Number of categories:", itemsEl.length);

itemsEl.forEach((el) =>
  console.log(
    "Category :",
    el.firstElementChild.textContent,
    "Elements :",
    el.lastElementChild.children.length
  )
);
