const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector("ul");
ingredients.forEach((ingredient) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ingredient;
  ulRef.append(liRef);
  console.log(liRef);
}
);
