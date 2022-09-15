const input = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

input.addEventListener("input", addName);

function addName() {
  spanName.textContent = input.value;

  if (spanName.textContent === "") {
    spanName.textContent = "Anonymous";
  }
}
