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
window.addEventListener('resize', function () {
  const TABLET_MEDIA_QUERY = '(max-width: 1023px)';
  let navList = document.querySelector('.nav__menu-list');
  let navListHidden = document.querySelector('.nav__menu-list--hidden');
  let navMenu = document.querySelector('.nav__menu');
  let top = document.querySelector('.nav__top');
  let logo = top.querySelector('.nav__logo');
  let initList = top.querySelector('.nav__init-list');
  let bas = document.querySelector('.nav__init-item--bas');
  let search = document.querySelector('.nav__search');
  let login = document.querySelector('.nav__init-item--login');

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

// Popap - login
let body = document.querySelector('body');
let popupLogin = body.querySelector('.popup-login');
let popupLinks = body.querySelector('.nav__init-link--login');
let closePopup = body.querySelector('.popup-login__close-btn');

popupLinks.onclick = function (e) {
  e.preventDefault();
  popupLogin.classList.add('popup-login--active');
  document.body.style.overflow = 'hidden';
};

closePopup.onclick = function (e) {
  e.preventDefault();
  popupLogin.classList.remove('popup-login--active');
  document.body.style.overflow = 'auto';
};

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popupLogin.classList.remove('popup-login--active');
    document.body.style.overflow = 'auto';
  }
};
document.addEventListener('keydown', onPopupEscPress);

// modal add
let modalLogin = body.querySelector('.modal-add');
let modalLink = body.querySelector('.js-product__modal');
let modalClose = body.querySelector('.js-modal-close');

modalLink.onclick = function (e) {
  e.preventDefault();
  modalLogin.classList.add('modal-add--active');
  document.body.style.overflow = 'hidden';
};
modalClose.onclick = function (e) {
  e.preventDefault();
  modalLogin.classList.remove('modal-add--active');
  document.body.style.overflow = 'auto';
};
// const getScrollbarWidth = function () {
//   const item = document.createElement('div');

//   item.style.position = 'absolute';
//   item.style.top = '-9999px';
//   item.style.width = '50px';
//   item.style.height = '50px';
//   item.style.overflow = 'scroll';
//   item.style.visibility = 'hidden';

//   document.body.appendChild(item);
//   const scrollBarWidth = item.offsetWidth - item.clientWidth
//   document.body.removeChild(item);
//   return scrollBarWidth;
// };
