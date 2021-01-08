const loginBtn = document.querySelector('.login--btn');

loginBtn.addEventListener('click', loginValidation);
function loginValidation(e) {
  e.preventDefault;

  const username = document.querySelector('[type = text]');
  const password = document.querySelector('[type = password]');
  const msg = document.createElement('p');
  msg.className = 'error-msg';
  if (
    (username.value == '' && password.value == '') ||
    username.value == '' ||
    password.value == ''
  ) {
    const msgText = document.createTextNode('Please fill in all spaces');
    msg.append(msgText);
    password.after(msg);
  } else {
    sessionStorage.setItem('username', username.value);
    window.open('../homepage/index.html', '_self');
  }
  /// clear inputs and error msg //
  setTimeout(() => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.value = '';
    });
    msg.remove();
  }, 1000);
}
const goToSignUp = document.querySelector('.go-to-sign-up');
goToSignUp.addEventListener('click', showSignUp);

function showSignUp(e) {
  const loginForm = document.querySelector('form');
  const signUpForm = document.querySelector('.sign-up-form');
  loginForm.style.display = 'none';
  signUpForm.style.display = 'flex';
  e.preventDefault();
}

const goToLogin = document.querySelector('.go-to-login');
goToLogin.addEventListener('click', showLogin);

function showLogin(e) {
  const loginForm = document.querySelector('form');
  const signUpForm = document.querySelector('.sign-up-form');
  loginForm.style.display = 'flex';
  signUpForm.style.display = 'none';
  e.preventDefault();
}

const signupBtn = document.querySelector('.sign-up-btn');
signupBtn.addEventListener('click', signupValidation);

function signupValidation(e) {
  e.preventDefault();

  const username = document.querySelector('.sign-up-form [type = text]');
  const password = document.querySelector(' .sign-up-form [type = password]');
  const email = document.querySelector('.sign-up-form [type = email]');
  const msg = document.createElement('p');
  msg.className = 'error-msg';
  if (
    (username.value == '' && password.value == '' && email.value == '') ||
    username.value == '' ||
    password.value == '' ||
    email.value == ''
  ) {
    const msgText = document.createTextNode('Please fill in all spaces');
    msg.append(msgText);
    password.after(msg);
  } else {
    sessionStorage.setItem('username', username.value);
  }

  // clear inputs and error msg //
  setTimeout(() => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.value = '';
    });
    msg.remove();
  }, 1000);
}
