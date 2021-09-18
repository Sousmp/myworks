"use strict"



new Swiper('.hm-private__swiper', {
   slidesPerView: 2,
   centeredSlides: true,
   pagination: {
      el: ".hm-private__bullets",
      clickable: true,
   },
   loop: true,
   breakpoints: {
      0: {
         slidesPerView: 1.14,
      },
      480: {
         slidesPerView: 1.2,
      },
      1150: {
         slidesPerView: 1.3,
      },
      1320: {
         slidesPerView: 1.5,
      },
      1750: {
         slidesPerView: 2,
      }
   },
});

new Swiper('.hm-admin__swiper', {
   slidesPerView: 2,
   centeredSlides: true,
   pagination: {
      el: ".hm-admin__bullets",
      clickable: true,
   },
   loop: true,
   breakpoints: {
      0: {
         slidesPerView: 1.14,
      },
      480: {
         slidesPerView: 1.2,
      },
      1150: {
         slidesPerView: 1.3,
      },
      1320: {
         slidesPerView: 1.5,
      },
      1750: {
         slidesPerView: 2,
      }
   },
});

new Swiper('.hm-category__swiper', {
   breakpoints: {
      0: {
         slidesPerView: 1.3,
      },
      400: {
         slidesPerView: 1.5,
      },
      550: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
   freeMode: true,
   scrollbar: {
      el: '.hm-category__scrollbar',
      draggable: true,
   }

});

new Swiper('.hm-mobile__swiper', {
   breakpoints: {
      0: {
         slidesPerView: 1.3,
      },
      420: {
         slidesPerView: 1.6,
      },
      540: {
         slidesPerView: 2,
      },
   },
   freeMode: true,
   scrollbar: {
      el: '.hm-mobile__scrollbar',
      draggable: true,
   }

});

