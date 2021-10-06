//==============JS HW - 6================================
//==============------1------=============================
const searchCategories = document.querySelectorAll('.item');
const numberOfCategories = searchCategories.length;
let messageNumberOfCategories = `Number of categories: ` + numberOfCategories;
console.log(messageNumberOfCategories);

function Category(a, b) { 
const nameOfCategoriesAll = document.querySelectorAll("li.item");
const nameOfCategories = document.querySelectorAll("h2");
let positionOfFirstCategorie = nameOfCategories[0];
let nameOfFirstCategorie = positionOfFirstCategorie.textContent;
let massageCategory = "Category: " + nameOfFirstCategorie;


//console.log(nameOfCategories);
//console.log(positionOfFirstCategorie);
console.log(massageCategory);}