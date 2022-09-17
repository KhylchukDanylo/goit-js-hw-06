const counterValue = document.querySelector("#value");

const addBtn = document.querySelector(`button[data-action="increment"]`);
const minusBtn = document.querySelector(`button[data-action="decrement"]`);

addBtn.addEventListener("click", onAddClick);
minusBtn.addEventListener("click", onMinusClick);

let num = 0;

function onAddClick() {
  num += 1;
  counterValue.textContent = Number(num);
}
function onMinusClick() {
  num -= 1;
  counterValue.textContent = Number(num);
}
