const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs"];

const itemList = document.querySelector("#ingredients");

const htmlItems = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  return newItem;
});

itemList.append(...htmlItems);
