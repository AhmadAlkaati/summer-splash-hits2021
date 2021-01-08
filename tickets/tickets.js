// showing and hiding section for buying //
function toggleSection() {
  const section = document.querySelector('section');
  const container = document.querySelector('.container');
  const msg = document.querySelector('.msg');
  let usernameValue = sessionStorage.getItem('username');
  if (usernameValue) {
    container.style.display = 'flex';
    msg.style.display = 'none';
  } else {
    container.style.display = 'none';
    section.style.maxHeight = '700px';
    msg.style.display = 'flex';
  }
}
toggleSection();
