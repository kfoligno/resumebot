//= require jquery

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(".accordion").click(function(){
      $(this).siblings('.answer').slideToggle("fast");
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
          $(".nav").addClass("scrolled");
      } else {
          $(".nav").removeClass("scrolled");
      }
  });

});
