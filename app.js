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
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-200%', duration: 1 }, '-=1');
tl.fromTo('.navbar *', { opacity: 0.1 }, { opacity: 1, duration: 1 });
tl.fromTo(
  '.section .container *',
  { opacity: 0.1 },
  { opacity: 1, duration: 0.5 },
  '-=1'
);
