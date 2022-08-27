var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('sticky');
    }

    else {
          $('nav').removeClass('sticky');
    }
})