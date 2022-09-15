const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkSumbols);

function checkSumbols() {
  if (input.value.length === 6) {
    input.classList = "valid";
  } else {
    input.classList = "invalid";
  }
}
