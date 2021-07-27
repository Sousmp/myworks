"use strict"

new Swiper('.trust__slider', {
   slidesPerView: 1,
   spaceBetween: 50,
   navigation: {
      nextEl: '.trust__next',
      prevEl: '.trust__prev'
   },
   pagination: {
      el: '.trust__pagination',
      clickable: true,
   },
   breakpoints: {
      767: {
         slidesPerView: 2,
      }
   }
});


