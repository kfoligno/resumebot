//= require jquery
$(document).ready(function() {

  // Setup smooth scroll for navigation
  $('.nav a[href*="#"]:not([href="#"]), .vp a[href*="#"]:not([href="#"])').click(function() {

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
        $('.accordion .accordionTitle, .accordion h3').removeClass('active');
        $('.accordion .accordionContent').slideUp(300).removeClass('open');
    }

    $('.accordionTitle').click(function(e) {

        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
  });

  $(function() {
    $('.accordion .accordionTitle').click(function() {

        var openAccordion = $('.accordion .accordionTitle').is('.active');

        if (openAccordion) {
            $(this).siblings('.accordion h3 span').addClass('open');
        } else {
            $(this).siblings('.accordion h3 span').removeClass('open');
        }

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

  // Mouse Follow Parallax
  $('.bounce').parallaxify({
    positionProperty: 'transform',
    responsive: true,
    motionType: 'natural',
    mouseMotionType: 'natural',
    motionAngleX: 80,
    motionAngleY: 80,
    alphaFilter: 0.5,
    adjustBasePosition: true,
    alphaPosition: 0.025,
  });

});
