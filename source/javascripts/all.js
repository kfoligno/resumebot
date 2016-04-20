//= require jquery
$(document).ready(function() {
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

  $(function() {
    function close_accordion_section() {
        $('.accordion .accordionTitle').removeClass('active');
        $('.accordion .accordionContent').slideUp(300).removeClass('open');
    }

    $('.accordionTitle').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
  });

  $(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
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
