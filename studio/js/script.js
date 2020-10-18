function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();

$(document).ready(function () {
   $('.burger').click(function (event) {
      $(this).toggleClass('active');
      $('.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
      $('.header__links').toggleClass('active');
      $('.header__btn').toggleClass('active');
   });
   $('.people__slider_s').slick({
      adaptiveHeight: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 4,
      touchThresgold: 50,
      asNavFor: ".people__slider_b",
      responsive: [
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 2
            }
         },
      ]
   });
   $('.people__slider_b').slick({
      fade: true,
      arrows: false,
      asNavFor: ".people__slider_s"
   });
   $('.slider2').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      responsive: [
         {
            breakpoint: 1150,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 850,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   });
});



