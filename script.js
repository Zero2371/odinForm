var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone');
const error = document.getElementById('error');



form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '' || firstName.value == null){
        messages.push('first Name is required');
    }

    if (lastName.value === '' || firstName.value == null) {
        messages.push('last Name is required');
    }

    if (email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    }
    if (messages.length >0) {
    e.preventDefault()
    error.innerText = messages.join(', ')
    }
} )

//confirms password

function validatePassword() {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("passwords dont match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
