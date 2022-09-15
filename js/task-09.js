function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
btn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const backgroundColor = getRandomHexColor();
  span.textContent = backgroundColor;
  document.querySelector("body").style.backgroundColor = backgroundColor;
}
