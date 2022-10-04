const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const { password } = event.target.elements;
    if (email.value == "") {
        alert("you forget email");
        formRef.reset();
    } else
        if (password.value == "") {
            alert("you forget password");
            formRef.reset();
        }
        else {
            const data = {
                email: email.value,
                password: password.value
            }

            console.log(data);
        }
});
