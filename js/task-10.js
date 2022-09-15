function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector(`button[data-create]`);
const boxs = document.querySelector("#boxes");
const btnDestroy = document.querySelector(`button[data-destroy]`);

let amounts;

function onNumberBox() {
  amounts = input.value;
  console.log(amounts);
}
let size = 30;
const box = [];
function createBoxes() {
  for (let i = 0; i <= 10; i++) {
    boxs.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size = size + 10;
  }
  boxs.append(...box);
}
function destroyBoxes() {
  const removeElem = document.querySelectorAll(".color");
  for (let i = 0; i < removeElem.length; i++) {
    removeElem[i].remove();
  }
  size = 30;
}

input.addEventListener("input", onNumberBox);
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
