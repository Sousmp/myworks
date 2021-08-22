"use strict"

new Swiper('.g8-design__swiper', {
   simulateTouch: false,
   breakpoints: {
      0: {
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

new Swiper('.g8-info__swiper', {
   simulateTouch: false,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
   },
   pagination: {
      el: ".g8-info__pagination",
      clickable: true,
   },
   loop: true,
});

new Swiper('.g8-adapt__swiper', {
   simulateTouch: false,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 3,
      },
   },
   pagination: {
      el: ".g8-adapt__pagination",
      clickable: true,
   },
   loop: true,
});

