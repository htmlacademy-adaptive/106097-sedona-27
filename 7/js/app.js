let nav = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.page-header__toggle');
let logo = document.querySelector('.page-header__logo');

nav.classList.remove('main-navigation--nojs');
logo.classList.remove('page-header__logo--nojs');
navToggle.classList.remove('page-header__toggle--nojs');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('main-navigation--closed');
  navToggle.classList.toggle('page-header__toggle--opened');
});
