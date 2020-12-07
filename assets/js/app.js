(function($) {
    "use strict";

    $(document).ready(function($) {

        //add sticky menu
        $(".header-area").sticky({ topSpacing: 0 });

        //for smooth scroll
        $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '65';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });

        //jquery scrollspy
        $('body').scrollspy({
            target: '.navbar',
            offset: 100
        });

        // Parallax background
        $('.parallax-bg').jarallax({
            speed: 0.5,
        })

    });


    $(window).on('load', function() {

        //preloader
        $('#preloader').delay(350).fadeOut('slow');


    });



}(jQuery));