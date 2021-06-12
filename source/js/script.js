'use strict';
// Popap
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

// Jump element
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

// Swiper
new Swiper('.new-in__slider', {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
      //Кол-во пролистываемых слайдов
      slidesPerGroup: 4
    },
  },

  navigation: {
    nextEl: '.new-in__slider-btn--next',
    prevEl: '.new-in__slider-btn--prev'
  },

  pagination: {
    el: '.new-in__slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

// Accordion

var items = document.querySelectorAll('.questions__accordion-trigger');
var item = document.querySelectorAll('.questions__accordion-item');

items.forEach(function (item) {
  item.addEventListener('click', function () {
    var parent = item.parentNode;
    if (parent.classList.contains('questions__accordion-item--active')) {
      parent.classList.remove('questions__accordion-item--active');
    }
    else {
      document.querySelectorAll('.questions__accordion-item')
        .forEach((child) => child.classList.remove('questions__accordion-item--active'))
      parent.classList.add('questions__accordion-item--active');
    }
  })
})
