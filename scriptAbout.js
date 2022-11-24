/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.desktop-navigation');
const body = document.querySelector('body');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('full-screen');
  body.classList.toggle('no-scroll');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  header.classList.remove('full-screen');
  body.classList.remove('no-scroll');
}));