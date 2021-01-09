/* Animation On Scroll */
const animated = document.querySelectorAll('.animated');
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim  2s forwards ease-out `;
    } else {
      entry.target.style.animation = 'none';
    }
  });
});

animated.forEach((anim) => {
  observer.observe(anim);
});

/* Intro And Other Elements Animation */
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.intro', { y: '-100%', duration: 1 });
tl.fromTo(
  '.navbar:not(.navbar-links)',
  { opacity: 0.1 },
  { opacity: 1, duration: 1 }
);
tl.fromTo(
  '.section .container *',
  { opacity: 0.1 },
  { opacity: 1, duration: 0.5 },
  '-=1'
);

/* Side Bar */
function sideBar() {
  const burger = document.querySelector('.burger');
  const navbarLinks = document.querySelector('.navbar-links');
  const links = document.querySelectorAll('.navbar-links a');
  burger.addEventListener('click', showNavbar);
  function showNavbar(e) {
    navbarLinks.classList.toggle('show-navbar');
    links.forEach((link) => {
      link.classList.toggle('show-links');
    });
    e.preventDefault();
  }
}
sideBar();

/* Logging out and removing data from session storage */
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
  window.open('index.html', '_self');
};
