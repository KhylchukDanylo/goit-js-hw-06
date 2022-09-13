const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs"];
const arrayListIngredient = [];
for (let i = 0; i < ingredients.length; i++) {
  const listIngredient = document.createElement("li");
  listIngredient.classList = "item";
  listIngredient.textContent = `${ingredients[i]}`;
  arrayListIngredient.push(listIngredient);
}
const listItem = document.querySelector("#ingredients");
listItem.append(...arrayListIngredient);
