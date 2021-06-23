'use strict';
// Mobile menu
let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__burger');

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
const TABLET_MEDIA_QUERY = 1023;

if (window.screen.width < TABLET_MEDIA_QUERY) {
  let navList = document.querySelector('.nav__menu-list');
  let navListHidden = document.querySelector('.nav__menu-list--hidden');
  let navMenu = document.querySelector('.nav__menu');
  let search = document.querySelector('.nav__search');
  let login = document.querySelector('.nav__init-item--login');

  navMenu.insertBefore(search, navList);
  navMenu.insertBefore(login, navListHidden);
}

// Swiper
new Swiper('.new-in__slider', {
  navigation: {
    nextEl: '.new-in__slider-btn--next',
    prevEl: '.new-in__slider-btn--prev'
  },

  breakpoints: {
    320: {
      pagination: {
        el: '.new-in__slider-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
        },
      },
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    768: {
      pagination: {
        el: '.new-in__slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    1024: {
      pagination: {
        el: '.new-in__slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      slidesPerView: 4,
      spaceBetween: 30,
      //Кол-во пролистываемых слайдов
      slidesPerGroup: 4
    },
  },
});

// Accordion index.html
let items = document.querySelectorAll('.questions__accordion-trigger');
let item = document.querySelectorAll('.questions__accordion-item');
items.forEach(function (item) {
  item.addEventListener('click', function () {
    let parent = item.parentNode;
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

// Accordion catalog.html
let filterTrigger = document.querySelectorAll('.filter__accordion-trigger');
// var filterItem = document.querySelectorAll('.filter__accordion-item');

filterTrigger.forEach(function (item) {
  item.addEventListener('click', function () {
    let parent = item.parentNode;
    parent.classList.toggle('filter__accordion-item--active');
  })
})
// Modals
let body = document.querySelector('body');

let loginPopup = document.querySelector('.popup-login');
let loginPopupOpen = document.querySelector('.nav__init-link--login');
let loginPopupClose = loginPopup.querySelector('.popup-login__close-btn');

const getOpenPopup = (openPopup, popup) => {
  openPopup.onclick = (evt) => {
    evt.preventDefault();
    popup.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
};

const getClosePopup = (closePopup, popup) => {
  closePopup.onclick = (evt) => {
    evt.preventDefault();
    popup.classList.remove('open');
    document.body.style.overflow = 'auto';
  };

  let onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      popup.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  };
  document.addEventListener('keydown', onPopupEscPress);
};

getOpenPopup(loginPopupOpen, loginPopup);
getClosePopup(loginPopupClose, loginPopup);

if (window.location == 'http://localhost:3000/catalog.html') {
  let filterPopup = document.querySelector('.filter');
  let filterPopupOpen = document.querySelector('.filter__open-btn');
  let filterPopupClose = document.querySelector('.filter__close-btn');

  getOpenPopup(filterPopupOpen, filterPopup);
  getClosePopup(filterPopupClose, filterPopup);
};

if (window.location == 'http://localhost:3000/product-card.html') {
  let addPopup = document.querySelector('.modal-add');
  let addPopupClose = document.querySelector('.modal-add__btn-close');
  let addPopupOpen = document.querySelector('.product__btn-open');

  getOpenPopup(addPopupOpen, addPopup);
  getClosePopup(addPopupClose, addPopup);
};
