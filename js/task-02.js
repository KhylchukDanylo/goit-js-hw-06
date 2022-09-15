const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs"];
const listItem = document.querySelector("#ingredients");
ingredients.forEach((element) =>
  listItem.insertAdjacentHTML("beforeend", `<li class="item">${element}</li>`)
);
