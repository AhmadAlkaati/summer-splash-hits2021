let usernameStorage = sessionStorage.getItem('username');
let loginBtn = document.querySelector('.login-btn');
let logoutBtn = document.querySelector('.logout-btn');
let username = document.querySelector('.username');
if (usernameStorage) {
  logoutBtn.style.display = 'block';
  username.innerHTML = usernameStorage + ' <i class="fas fa-user"></i>';
  username.style.display = 'block';
  loginBtn.style.display = 'none';
}

logoutBtn.onclick = (e) => {
  e.preventDefault();
  sessionStorage.removeItem('username');
  // stay in current page //
  window.open(location, '_self');
};
