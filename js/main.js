// json file js
$(document).ready(function() {
    if ($(window).innerWidth > 768) {
        $(".full_height").css('height', '')
    } else {
        $(".full_height").height($(window).innerHeight())
    }
})

Blogging = document.getElementById("Blogging");
Blogging_animation = bodymovin.loadAnimation({
    wrapper: Blogging,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/Blogging.json'
});


// counterwrap js

$('.counter_wrap').counterUp({
    delay: 20,
    time: 2000
});



// slick slider synchronize js

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 1000,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite: true,
    prevArrow: '<a href="" class="slider_arrow"><i class="fal fa-arrow-left"></i></a>',
    nextArrow: '<a href="" class="slider_arrow slide"><i class="fal fa-arrow-right"></i></a>',
    centerMode: false,
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    focusOnSelect: true
});



// slick slider apart js

window.onload = function() {
    $slideshow = $('.slider').slick({
        dots: false,
        autoplay: true,
        arrows: true,
        prevArrow: '<img src="image/icons/reverse arrow.svg" class="slick_left_arrow">',
        nextArrow: '<img src="image/icons/forward arrow.svg" class="slick_right_arrow">',
        slidesToShow: 1,
        slidesToScroll: 1
    });
};

// slick slider portfolio js

$('.portfolio_slider').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    autoplaySpeed: 1500,
    autoplay: false,
    infinite: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// --------------------

// $("#dropdown01, #dropdown02, #dropdown03").hover(function() {
//     if ($(this).parent().hasClass('show')) {
//         $('.overlay12').fadeOut(500);
//     } else {
//         $('.overlay12').fadeIn(500);
//     }
// });


// HEADER MENU JS

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $('header').addClass('nav-fixed');
        // $('navbar-toggler-icon1').css('background-image', 'url(img/img_two.jpg)')
    } else {
        $('header').removeClass('nav-fixed');
    }
});

$('.checkbtn').on('click', function() {
    $('body').toggleClass('menu-open');
});


// FAQ JS

$('.panel-collapse').on('show.bs.collapse', function() {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function() {
    $(this).siblings('.panel-heading').removeClass('active');
});


// aos js

AOS.init({
    duration: 1000,
    once: true
})