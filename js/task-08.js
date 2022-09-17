const user = {};
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(ev) {
  ev.preventDefault();
  if (form.elements.password.value === "" || form.elements.email.value === "") {
    alert("NANI!!!!!?????");
    return;
  }
  user.email = form.elements.email.value;
  user.password = form.elements.password.value;
  console.log(user);
  form.reset();
}
