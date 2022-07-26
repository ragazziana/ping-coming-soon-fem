const email = document.getElementById("notificaton-form__email");
const button = document.getElementById("notification-form__button");
const error = document.getElementById("notification-form__error-message");
const success = document.getElementById("notification-form__success-message");
const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", (event) => {
    event.preventDefault();

    if (email.value == "") {
        error.style.display = "block";
        error.style.margin = "1rem 0 1rem 2rem";
        error.innerHTML = " This field is required.";
        email.style.outline = "1px solid red";
        email.style.border = "none";
    } else if (!mailRegex.test(email.value)) {
        error.style.display = "block";
        error.style.margin = "1rem 0 1rem 2rem";
        email.style.outline = "1px solid red";
        email.style.border = "none";
        error.innerHTML = "Please provide a valid email address.";
    } else {
        clearErrorMessage();
        email.value = "";
        success.style.display = "block";
        success.innerHTML = "Submited";  
        setTimeout(clearConfirmation, 3000);
    }
});

function clearErrorMessage() {
    if (mailRegex.test(email.value)) {
        error.style.display = "none";
        email.style.border = "1px solid #c2d3ff";
        email.style.outline = "none";
    }
}

function clearConfirmation(){
    success.style.display = "none";
}




        



        