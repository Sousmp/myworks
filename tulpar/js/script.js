// ANIMATION HEADER

$('.header__item-right').hover(
   function (event) {
      $('.header__item-left').toggleClass('hover');
   }
);

// DOWN

$("body").on('click', '[href*="#down"]', function (e) {
   var fixed_offset = 100;
   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
   e.preventDefault();
});


//BURGER AND DPRODOWN

$(document).ready(function () {
   $('.burger').click(function (event) {
      $(this).toggleClass("active");
      $('.burger__plate').toggleClass("active");
   });
   $('.header__dropdown1').click(function (event) {
      $(this).toggleClass("active");
      $('.header__dropdown_ul1').toggleClass("active");
   });
   $('.header__dropdown2').click(function (event) {
      $(this).toggleClass("active");
      $('.header__dropdown_ul2').toggleClass("active");
   });
});

// FILTER VIDEO & PHOTO
filterSelection("all")
function filterSelection(c) {
   var x, i;
   x = document.getElementsByClassName("gallery__item");
   if (c == "all") c = "";
   for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
   }
}

function w3AddClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
   }
}

function w3RemoveClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
   }
   element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("gallery__btn");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("gallery__btn_active");
      current[0].className = current[0].className.replace(" gallery__btn_active", "");
      this.className += " gallery__btn_active";
   });
};

function backToTop() {
   let button = $('.footer__back');
   button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 1000);
   })
}

backToTop();