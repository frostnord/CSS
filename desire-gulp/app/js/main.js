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
