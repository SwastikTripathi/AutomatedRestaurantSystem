(function ($) {
    "use strict";
    console.log('hello');
    new WOW().init();
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').addClass('fixed-top shadow-sm');
            console.log('down');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);