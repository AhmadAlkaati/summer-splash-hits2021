document.write(`   <nav>
<div class="navbar">
  <h1>
    <a href="../index.html" class="title"> Summer Splash Hits 2021</a>
  </h1>
  <a href="../index.html">
  <img class="logo" src="../images/logo.png" alt=""
/></a>
  <div class="links">
  <a href="../tickets/tickets.html">
    <i class="fas fa-ticket-alt"></i> Tickets</a
  >
  <a href="../event-dates/event-dates.html"
    ><i class="fas fa-calendar-week"></i>Events Dates</a
  >
  <a href="../gallery/gallery.html"
  ><i class="fas fa-calendar-week"></i>Gallery</a
>
  <a href="../about-us/about-us.html">
    <i class="fas fa-info-circle"></i>About Us</a
  >
  <a href="../contact/contact.html">
    <i class="fa fa-fw fa-envelope"></i>Contact</a
  >
 </div>

 
  <button class="login-btn">
    <a href="../login/login.html">
      Login <i class="fas fa-sign-out-alt"></i>
    </a>
  </button>
  <h3 class="username"></h3>
  <button class="logout-btn">
    logout <i class="fas fa-sign-out-alt"></i>
  </button>
  <button class="burger" 
  ><i class="fas fa-bars"></i
></button>

</div>
</nav>`);

/* Adding class 'active-link' to current link page */
const currentLocation = location.href;
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach((link) => {
  if (link.href == currentLocation) {
    link.classList.add('active-link');
  }
});

/* Side Bar */
function sideBar() {
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.links');
  burger.addEventListener('click', showLinks);
  function showLinks(e) {
    links.classList.toggle('show-links');
    e.preventDefault();
  }
}

sideBar();
