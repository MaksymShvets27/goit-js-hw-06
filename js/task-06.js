const inputRef = document.getElementById("validation-input");
const dataLengthRef = inputRef.getAttribute("data-length");
inputRef.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == dataLengthRef) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    }
    else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
});