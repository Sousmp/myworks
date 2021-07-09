"use strict"

let pageSlider = new Swiper('.page', {
   //Свои классы
   wrapperClass: 'page__wrapper',
   slideClass: "page__screen",

   // Вертикальный слайдер
   direction: 'vertical',

   // Количество слайдов для показа
   slidesPerView: 'auto',

   // Включаем параллакс
   parallax: true,


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
   }
});


const ua = document.querySelector('.lang-ua');
const ru = document.querySelector('.lang-ru');
const en = document.querySelector('.lang-en');

if (ua) {
   ua.addEventListener("click", function (e) {
      ru.classList.remove('current');
      en.classList.remove('current');
      ua.classList.add('current');
   })
}
if (ru) {
   ru.addEventListener("click", function (e) {
      ru.classList.add('current');
      en.classList.remove('current');
      ua.classList.remove('current');
   })
}
if (en) {
   en.addEventListener("click", function (e) {
      ru.classList.remove('current');
      en.classList.add('current');
      ua.classList.remove('current');
   })
}