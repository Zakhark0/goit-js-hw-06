const formtEl = document.querySelector(".login-form");

formtEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Fill in all registration fields");
  } else {
    const formData = { email, password };

    console.log(formData);
    event.currentTarget.reset();
  }
}
