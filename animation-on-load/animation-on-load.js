/* Intro And Other Elements Animation */
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
tl.fromTo(
  '.navbar:not(.navbar-links)',
  { opacity: 0.1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo('section  *', { opacity: 0.1 }, { opacity: 1, duration: 1 }, '-=1');
