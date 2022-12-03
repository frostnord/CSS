$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        // centerMode: true,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 418,
            settings: {
                slidesToShow: 1,
            },
        }

        ]
    });
});