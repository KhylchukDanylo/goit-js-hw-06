const counterValue = document.querySelector("#value");

const addBtn = document.querySelector(`button[data-action="increment"]`);
const minusBtn = document.querySelector(`button[data-action="decrement"]`);

addBtn.addEventListener("click", onAddClick);
minusBtn.addEventListener("click", onMinusClick);

function onAddClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
function onMinusClick() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
