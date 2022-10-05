const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");
inputRef.addEventListener("input", (event) => {
    const rangeRef = event.currentTarget.value;
    spanRef.style.fontSize = `${rangeRef}px`;
    console.log(spanRef.style);
});