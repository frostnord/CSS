//
$(document).ready(function () {
    let a = $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        responsive:[{
                breakpoint: 500,
                settings:{
                    arrows: false
                }
            }]
    })

    $('.menu__btn').on('click',function (){
        $('.menu__list').slideToggle();
    })

});

// document.addEventListener("DOMContentLoaded", function() {
//     // console.log('ss')
//     let slider = document.querySelector('.photo__slider')
//     console.log(slider)
// });

