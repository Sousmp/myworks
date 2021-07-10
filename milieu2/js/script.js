"use strict"


// ОБОЛОЧКА САЙТА

let wrapper = document.querySelector('.wrapper');

//БУРГЕР

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector(".menu__body");
const menuPlate = document.querySelector(".menu__plate");
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      menuPlate.classList.toggle('_active');
   })
}

const phone = document.querySelector('.page__phone');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');
if (phone) {
   phone.addEventListener("click", function (e) {
      popup.classList.add('_active');
   })
}
if (close) {
   close.addEventListener("click", function (e) {
      popup.classList.remove('_active');
   })
}


// СЛАЙДЕР

let pageSlider = new Swiper('.page', {
   //Свои классы
   wrapperClass: 'page__wrapper',
   slideClass: "page__screen",

   // Вертикальный слайдер
   direction: 'vertical',

   // Количество слайдов для показа
   slidesPerView: 'auto',

   // Включаем параллакс


   // Управление клавиатурой
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pegeUpDown: true,
   },


   // Управление колесом мыши
   mousewheel: {
      sensitivity: 1,
   },


   // Отключит слайдер, если мало слайдов
   wathOverflow: true,


   // Скорость
   speed: 800,


   // Обновить слайдер
   observer: true,
   observeParents: true,
   observeSlideChildren: true,

   // Навигация
   // Точки, текущее положение, прогрессбар
   pagination: {
      el: '.page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'page__bullet',
      bulletActiveClass: "page__bullet_active",
   },
   // Скролл
   scrollbar: {
      el: '.page__scroll',
      dragClass: 'page__drag-scroll',
      // Возможность перетаскивать скролл
      draggable: true
   },
   //прокрутка по пунктам меню и другое
   init: false,

   on: {
      init: function () {
         setScrollType();
         menuSlider();
      },

      slideChange: function () {
         menuSliderRemove();
         menuLinks[pageSlider.realIndex].classList.add('_active');
      },
      resize: function () {
         setScrollType();
      }
   },
});

function setScrollType() {
   const pageWidth = wrapper.offsetWidth;
   if (wrapper.classList.contains('_free')) {
      wrapper.classList.remove('_free');
      pageSlider.params.freeMode = false;
   }
   if (pageWidth < 991) {
      wrapper.classList.add('_free');
      pageSlider.params.freeMode = true;
   }
}

//ПРОКРУТКА ПО ПУНКТАМ МЕНЮ
let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
   if (menuLinks.length > 0) {
      menuLinks[pageSlider.realIndex].classList.add('_active');
      for (let index = 0; index < menuLinks.length; index++) {
         const menuLink = menuLinks[index];
         menuLink.addEventListener('click', function (e) {
            menuSliderRemove();
            pageSlider.slideTo(index, 800);
            menuLink.classList.add('_active');
            e.preventDefault();
         });
      }
   }
}


function menuSliderRemove() {
   let menuLinkActive = document.querySelector('.menu__link._active');
   if (menuLinkActive) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
   }
}
pageSlider.init();


//ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ

const ua = document.querySelector('.lang-ua');
const ru = document.querySelector('.lang-ru');
const en = document.querySelector('.lang-en');

if (ua) {
   ua.addEventListener("click", function (e) {
      ru.classList.remove('current');
      en.classList.remove('current');
      ua.classList.add('current');
   })
};
if (ru) {
   ru.addEventListener("click", function (e) {
      ru.classList.add('current');
      en.classList.remove('current');
      ua.classList.remove('current');
   })
};
if (en) {
   en.addEventListener("click", function (e) {
      ru.classList.remove('current');
      en.classList.add('current');
      ua.classList.remove('current');
   })
};

