let nav = document.querySelector('.main-navigation');
let siteList = document.querySelector('.site-list');
let navToggle = document.querySelector('.page-header__toggle');
let logo = document.querySelector('.page-header__logo');
let mapImage = document.querySelector('.map__image');
let header = document.querySelector('.page-header');
let mapInteractive = document.querySelector('.map__interactive');
let hero = document.querySelector('.hero');

nav.classList.remove('main-navigation--nojs');
logo.classList.remove('page-header__logo--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
siteList.classList.remove('site-list--opened');
header.classList.remove('page-header--nojs');
hero.classList.remove('hero--nojs');

if (mapImage) {
  mapImage.classList.remove('map__image--nojs');
}

if (mapInteractive) {
  mapInteractive.classList.remove('map__interactive--nojs');
}

navToggle.addEventListener('click', () => {
  nav.classList.toggle('main-navigation--closed');
  navToggle.classList.toggle('page-header__toggle--opened');
  siteList.classList.toggle('site-list--opened');
});
