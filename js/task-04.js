const btnMin = document.querySelectorAll("button")[0];
const btnPls = document.querySelectorAll("button")[1];
let counterValu = 0;
btnMin.addEventListener("click", () => {
    counterValu -= 1;
    const valueTotal = document.querySelector("span");
    valueTotal.textContent = counterValu;
    console.log(valueTotal.textContent)
});
btnPls.addEventListener("click", () => {
    counterValu += 1;
    const valueTotal = document.querySelector("span");
    valueTotal.textContent = counterValu;
    console.log(valueTotal.textContent)
});

