const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval = '';

const nextSlide = () => {
  const current = document.querySelector('.current');
  // removes current class from first element
  current.classList.remove('current');
  // check for next slide
  if (current.nextElementSibling) {
    // add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // add current to first element
    slides[0].classList.add('current');
  }
  setTimeout(() => {
    current.classList.remove('current');
  }, 200);
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  // removes current class from first element
  current.classList.remove('current');
  // check for previous slide
  if (current.previousElementSibling) {
    // add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // add current to last element
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => {
    current.classList.remove('current');
  }, 200);
};

// button events
nextBtn.addEventListener('click', function () {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prevBtn.addEventListener('click', function () {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time //
  slideInterval = setInterval(nextSlide, intervalTime);
}
