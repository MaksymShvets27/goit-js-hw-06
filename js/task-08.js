const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const { password } = event.target.elements;
    if (email.value == "" || password.value == "") {
        alert("full all inputs");
    } else {
        const data = {
            email: email.value,
            password: password.value
        }

        formRef.reset();
        console.log(data);
    }
});
