$(document).ready(function () {
   $('.burger').click(function (event) {
      $(this).toggleClass('active');
      $('body').toggleClass('lock');
      $('.burger__plate').toggleClass('active');
   });
});

$('.love__slider').slick({
});

function backToTop() {
   let button = $('.footer__back');

   $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 50) {
         button.fadeIn();
      } else {
         button.fadeOut();
      }
   });

   button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 1000);
   })
}

backToTop();