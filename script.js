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

const speakersCard = [
  {
    name: 'Mr.Anurag Kashap',
    backImage: 'images/tablecloth.png',
    mainImage: 'images/Businessmen-Who-Believed--Invested-In-Start-Ups-740x500-3_5eb569b691d71.jpeg',
    designation: 'Top Industrialist from India',
    description: 'Mr.Anurag is one of the leading industrialists in India who started from scatch.',
  },
  {
    name: 'Mr.Malik Riaz',
    backImage: 'images/tablecloth.png',
    mainImage: 'images/man-01.jpg',
    designation: 'C.E.O of Bahria Town Pvt Ltd',
    description: 'Mr.Malik Riaz is one of the leading industrialists in India who started from scatch.',
  },
  {
    name: 'Mr.Hafeez Butt',
    backImage: 'images/tablecloth.png',
    mainImage: 'images/man-02.jpg',
    designation: 'C.E.O of Orient Group Of Companies',
    description: 'Mr.Hafeez Butt is one of the leading industrialists in India who started from scatch.',
  },
  {
    name: 'Mr.Adeel Iqbal',
    backImage: 'images/tablecloth.png',
    mainImage: 'images/man-03.jpg',
    designation: 'C.E.O of Chase depratmental store',
    description: 'Mr.Adeel Iqbal is one of the leading industrialists in India who started from scatch.',
  },
  {
    name: 'Mr.Faraz Iqbal',
    backImage: 'images/tablecloth.png',
    mainImage: 'images/man-04.jpg',
    designation: 'Managing Director of Chase depratmental store',
    description: 'Mr.Faraz Iqbal is one of the leading industrialists in India who started from scatch.',
  },
  {
    name: 'Mr.Synny Ali',
    backImage: 'images/tablecloth.png',
    mainImage: 'images/man-05.jpg',
    designation: 'Founder of Extreme-Commerce pvt ltd',
    description: 'Mr. Sunny ALi is one of the leading industrialists in India who started from scatch.',
  },
];

// eslint-disable-next-line no-return-assign
speakersCard.map((card, index) => document
  .getElementById('Motivational-speakers').innerHTML += `
  <section class="speaker-wrapper">
  <article class="speakers-image-container speakers-container-${index}">
  <img class="images-speaker speaker-image-${index}" src="${card.mainImage}" alt="A persons picture">
  </article>
  <article class="speaker-info-container">
  <h3 class="speaker-name speaker-name-${index}">${card.name}</h3>
  <h4 class="speaker-designation speaker-designation-${index}">${card.designation}</h4>
  <hr class="speaker-underline-02">
  <p class="speaker-description speaker-description-${index}">${card.description}</p>
  </article>
  </section>`);