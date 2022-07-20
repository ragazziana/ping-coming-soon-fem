const email = document.getElementById('notificaton-form__email');
const button = document.getElementById('notification-form__button');
const error = document.getElementById('notification-form__error-message');
const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



button.addEventListener("click", (event) => {
    event.preventDefault();

    if (email.value == ""){
       error.style.display='block';
       email.style.outline= '2px solid red';
       email.style.border='none';
       error.innerHTML= 'The email field cannot be empty';
    } else if (!mailRegex.test(email.value) ) {
        error.style.display='block';
        email.style.outline= '2px solid red';
        email.style.border='none';
        error.innerHTML= 'Put a valid email';
    } else{
        error.style.display='block';
        email.style.outline= 'none';
        email.style.border='1px solid #c2d3ff';
        error.style.display='none';
        email.value = '';
    }
});