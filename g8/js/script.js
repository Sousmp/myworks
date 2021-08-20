"use strict"

new Swiper('.g8-design__swiper', {
   simulateTouch: false,
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 3,
      }
   },
   pagination: {
      el: ".g8-design__pagination",
      clickable: true,
   },
   loop: true,
});