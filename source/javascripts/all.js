//= require jquery
$(document).ready(function() {

  // Setup smooth scroll for navigation
  $('.navLinks a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        // Scroll to target
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);

        return false;
      }
    }
  });

  // Fixed Header
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
          $('.nav').addClass('scrolled');
      } else {
          $('.nav').removeClass('scrolled');
      }
  });

  // Accordion
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

  // Testimonials Slider
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infitine:true,
    autoplay: true,
    autoplaySpeed: 9000
  });

  // Dots

  $.parallaxify({
    positionProperty: 'transform',
    responsive: true,
    motionType: 'natural',
    mouseMotionType: 'gaussian',
    motionAngleX: 80,
    motionAngleY: 80,
    alphaFilter: 0.5,
    adjustBasePosition: true,
    alphaPosition: 0.025,
  });

});
