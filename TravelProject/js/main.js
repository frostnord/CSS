$(document).ready(function () {

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        // items: 3,
        responsive: {
            0:{
              items:1
            },
            500: {
                items: 3,
                margin: 15
            },
            850: {
                margin: 30,
            },
            1200: {
            }
        }
    });
    $('.slider__btn-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.slider__btn-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.header .nav').toggleClass('nav--mobile');
        $('body').toggleClass('no-scroll');
    });
});

