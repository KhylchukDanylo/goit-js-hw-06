const numberCateg = categories.querySelectorAll(".item");
console.log(`Number of categories: ${numberCateg.length}`);
const nameCateg = categories.querySelectorAll(".item h2");
console.log("");

for (let i = 0; i < nameCateg.length; i++) {
  const numberElmCateg = numberCateg[i].querySelectorAll("li");
  console.log(`Category: ${nameCateg[i].textContent}`);
  console.log(`Elements: ${numberElmCateg.length}`);
  console.log("");
}
