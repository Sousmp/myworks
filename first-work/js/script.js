
$(document).ready(function () {
   $('.burger').click(function () {
      $(this).toggleClass('active');
      $('body').toggleClass('lock');
      $('.burger__plate').toggleClass('active');
   })
   $('.slider').slick({
      arrows: false,
      dots: true,
   });
});                                                                                                                                                         
