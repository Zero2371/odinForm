const inputFields = document.querySelectorAll('input');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone');
const error = document.getElementById('error');

let allFieldsValidity = new Array(6).fill(false);
/*
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
*/
//confirms password

function validatePassword() {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("passwords dont match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

function validateRequired(e) {
    if (e.target.value === '') {
      e.target.parentElement.classList.add('error');
      e.target.nextElementSibling.textContent = 'This field is required';
      return false;
    } else if (e.target.value !== '') {
      e.target.parentElement.classList.remove('error');
      e.target.nextElementSibling.textContent = '';
      return true 
    }  
  }

  firstName.addEventListener('change', (e) => {
    allFieldsValidity[0] = validateRequired(e);
  })
  
  lastName.addEventListener('change', (e) => {
    allFieldsValidity[1] = validateRequired(e);
  })
  
  email.addEventListener('change', (e) => {
    allFieldsValidity[2] = validateRequired(e);
  })
  
  phoneNum.addEventListener('change', (e) => {
    allFieldsValidity[3] = validateRequired(e);
  })
  
  password.addEventListener('change', (e) => {
    allFieldsValidity[4] = validatePassword()
  });
  
  confirmPassword.addEventListener('change', (e) => {
    allFieldsValidity[5] = validatePassword();
  });

  function validateAllFields() {
    inputFields.forEach(el => {
      const event = new InputEvent('change');
      el.dispatchEvent(event);
    });
    let allValid = allFieldsValidity.reduce(
      (acc, curr) => curr && acc,
      true
    );
    return allValid;
  }
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
