const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector("ul");
const ulArr = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ingredient;
  return liRef;
}
);

ulRef.append(...ulArr);
console.log(ulRef);

