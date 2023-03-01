const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
  return `<li class="item">${ingredient}</li>`;
});

ulIngredients.innerHTML = liElements.join('');