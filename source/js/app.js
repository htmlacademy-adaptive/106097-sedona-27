let nav = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.page-header__toggle');

navToggle.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('main-navigation--closed');
  navToggle.classList.toggle('page-header__toggle--opened');
});
