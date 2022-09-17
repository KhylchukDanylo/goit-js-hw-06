const numberCateg = [...document.querySelector("#categories").children];

console.log(`Number of categories: ${numberCateg.length}`);
console.log("");
numberCateg.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
  console.log("");
});
