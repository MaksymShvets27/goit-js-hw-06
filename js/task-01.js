const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
    const itemTitle = item.querySelector("h2");
    console.log(`Category: ${itemTitle.textContent}`);
    const itemUnits = item.querySelectorAll("li");
    console.log(`Elements: ${itemUnits.length}`);

}
);
