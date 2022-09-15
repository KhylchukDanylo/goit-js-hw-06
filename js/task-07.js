const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onAddFont);

function onAddFont() {
  text.style.fontSize = `${input.value}px`;
}
