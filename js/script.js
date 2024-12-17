//validacion del campo nombre y correo electronico
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const errorNombre = document.querySelector("#errorNombre");
    const errorEmail = document.querySelector("#errorEmail");

    let hasError = false;

    if (nombre.value.trim() === "") {
        nombre.style.border = "1px solid red";
        errorNombre.textContent = "El nombre no puede estar vacío";
        hasError = true;
    } else {
        nombre.style.border = "";
        errorNombre.textContent = "";
    }

    const emailValue = email.value.trim();
    
    if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.', emailValue.indexOf('@')) === -1) {
        email.style.border = "1px solid red";
        errorEmail.textContent = "Por favor, ingresa un correo electrónico válido";
        hasError = true;
    } else {
        email.style.border = "";
        errorEmail.textContent = "";
    }

    if (!hasError) {
        form.submit();
    }
});


