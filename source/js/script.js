'use strict';
var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__burger');

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

window.addEventListener('resize', function () {
  var TABLET_MEDIA_QUERY = '(max-width: 1023px)';
  var navList = document.querySelector('.nav__menu-list');
  var navListHidden = document.querySelector('.nav__menu-list--hidden');
  var navMenu = document.querySelector('.nav__menu');
  var top = document.querySelector('.nav__top');
  var logo = top.querySelector('.nav__logo');
  var initList = top.querySelector('.nav__init-list');
  var bas = document.querySelector('.nav__init-item--bas');
  var search = document.querySelector('.nav__search');
  var login = document.querySelector('.nav__init-item--login');

  if (window.matchMedia(TABLET_MEDIA_QUERY).matches) {
    navMenu.insertBefore(search, navList);
    navMenu.insertBefore(login, navListHidden);
  }
  else {
    top.insertBefore(search, logo);
    initList.insertBefore(login, bas);
  }
});
