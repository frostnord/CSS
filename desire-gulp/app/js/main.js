$(function () {
    $('.top__slider').slick({
        dots: true ,
        arrows: false,
        slidesToShow: 1,
        autoplay: 3
    });

    $('.contact-slider').slick({
        dots: true ,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: 3
    });
    $('.blog__item-slider').slick({
        dots: false ,
        arrows: true,
        slidesToShow: 1,
        autoplay: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/left-arrow.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/right-arrow.svg" alt="right"></button>',
    });

    $('a.bla2').YouTubePopUp( { autoplay: 0 } );
})



const open =  document.querySelector('.header__btn');
const rightsideMenu =  document.querySelector('.rightside-menu');
const close =  document.querySelector('.rightside-menu__close-btn');
console.log(open)

open.addEventListener('click', () => {
    rightsideMenu.classList.toggle('rightside-menu__close');
});

close.addEventListener('click', () => {
    rightsideMenu.classList.toggle('rightside-menu__close');
});

var mixer = mixitup('.gallery__inner',{
    load:{
        filter: '.living'
    }
});
// var mixer2 = mixitup('.gallery__inner-box',{
//     load:{
//         filter: '.living'
//     }
// });