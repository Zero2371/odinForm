
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  // Validation logic for each field
  // ...

  // Example for checking if firstName is empty
  if (firstName.trim() === '') {
    firstNameError.textContent = 'First Name cannot be blank';
  } else {
    firstNameError.textContent = '';
    // Continue similar validation for other fields
    // ...

    // Example for checking if passwords match
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
    } else {
      confirmPasswordError.textContent = '';
      // Proceed with form submission or other actions
    }
  }
});
















//this is code from the main branch

/*
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
const validatePassword = () => {
    if (password.value === '' || confirmPassword === '') {
      password.parentElement.classList.add('errorMsg');
      error[4].textContent = 'This field is required';
      return false;
    }
    // display an error message if passwords do not match.
    else if (password.value !== confirmPassword.value) {
      confirmPassword.parentElement.classList.add('errorMsg');
      error[4].textContent = 'Passwords do not match';
      error[5].textContent = 'Passwords do not match';
      return false;
    } 
    else if (password.value === confirmPassword.value) {
    // return styling to normal if passwords match
      password.parentElement.classList.remove('error');
      confirmPassword.parentElement.classList.remove('errorMsg');
      error[4].textContent = '';
      error[5].textContent = '';
      return true
    }
  }
  

 //old validate password
function validatePassword() {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("passwords dont match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

function validateRequired(e) {
    if (e.target.value === '') {
      e.target.parentElement.classList.add('errorMsg');
      e.target.nextElementSibling.textContent = 'This field is required';
      return false;
    } else if (e.target.value !== '') {
      e.target.parentElement.classList.remove('errorMsg');
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

*/