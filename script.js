const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('open');
  });
});

// Close nav when scrolling
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll + 30) {
    siteNav?.classList.remove('open');
  }
  lastScroll = current;
});
