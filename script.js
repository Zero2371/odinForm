/*
const inputFields = document.querySelectorAll('input');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone');
const errorMsgs = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit');

let allFieldsValidity = new Array(6).fill(false);

const validatePassword = () => {
  if (password.value === '' || confirmPassword === '') {
    password.parentElement.classList.add('error');
    errorMsgs[4].textContent = 'This field is required';
    return false;
  }
  // display an error message if passwords do not match.
  else if (password.value !== confirmPassword.value) {
    confirmPassword.parentElement.classList.add('error');
    errorMsgs[4].textContent = 'Passwords do not match';
    errorMsgs[5].textContent = 'Passwords do not match';
    return false;
  } 
  else if (password.value === confirmPassword.value) {
  // return styling to normal if passwords match
    password.parentElement.classList.remove('error');
    confirmPassword.parentElement.classList.remove('error');
    errorMsgs[4].textContent = '';
    errorMsgs[5].textContent = '';
    return true
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


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateAllFields()){
    myForm.reset();
  }
});

*/


//--------




const inputFields = document.querySelectorAll('input');
const errorMsgs = document.querySelectorAll('.error-msg');

const myForm = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');


const submitBtn = document.querySelector('button');

let allFieldsValidity = new Array(6).fill(false);

/*
  Focused input label animation
*/
const onFocus = (e) => {
  e.target.parentElement.classList.add('focused');
}

const onBlur = (e) => {
  if (e.target.value === '') {
    e.target.parentElement.classList.remove('focused');
  }
}

inputFields.forEach(el => {
  el.addEventListener('focus', onFocus)
  el.addEventListener('blur', onBlur)
})

/*
  Password matching logic
*/
const validatePassword = () => {
  if(password.value === '' || confirmPassword === '') {
    password.parentElement.classList.add('error');
    errorMsgs[4].textContent = 'This field is required';
    return false;
  }
  // display an error message if passwords do not match.
  else if (password.value !== confirmPassword.value) {
    confirmPassword.parentElement.classList.add('error');
    errorMsgs[4].textContent = 'Passwords do not match';
    errorMsgs[5].textContent = 'Passwords do not match';
    return false;
  } 
  else if (password.value === confirmPassword.value) {
  // return styling to normal if passwords match
    password.parentElement.classList.remove('error');
    confirmPassword.parentElement.classList.remove('error');
    errorMsgs[4].textContent = '';
    errorMsgs[5].textContent = '';
    return true
  }
}

/*
  Required inputs logic
*/
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

/*
  Input event listeners
*/
firstName.addEventListener('change', (e) => {
  allFieldsValidity[0] = validateRequired(e);
})

lastName.addEventListener('change', (e) => {
  allFieldsValidity[1] = validateRequired(e);
})

email.addEventListener('change', (e) => {
  allFieldsValidity[2] = validateRequired(e);
})

phone.addEventListener('change', (e) => {
  allFieldsValidity[3] = validateRequired(e);
})

password.addEventListener('change', (e) => {
  allFieldsValidity[4] = validatePassword()
});

confirmPassword.addEventListener('change', (e) => {
  allFieldsValidity[5] = validatePassword();
});

/*
  Form submit button logic
*/
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

// Give user feedback if form submitted successfully
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateAllFields()) {
    myForm.reset();
  };
})
