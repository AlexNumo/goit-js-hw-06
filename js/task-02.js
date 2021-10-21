const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// let ingredientsNew = document.getElementById("ingredients");
// console.log(ingredientsNew);
// let ingredientsNewElement = ingredients.forEach((ingredient) => {
//   let vegetables = document.createElement("li");
//   vegetables.innerText = ingredient;
//   vegetables.classList.add("item");
//   ingredientsNew.append(vegetables);
// });

let ingredientsNew = document.getElementById("ingredients");
console.log(ingredientsNew);

let ingredientsNewElement = [];
ingredients.forEach((ingredient) => {
  const liItems = document.createElement("li");
  liItems.classList.add("item");
  liItems.textContent = ingredient;
  ingredientsNewElement.push(liItems);
});
ingredientsNew.append(...ingredientsNewElement);
