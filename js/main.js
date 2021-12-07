// HEADER MENU JS

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $('header').addClass('nav-fixed');
    } else {
        $('header').removeClass('nav-fixed');
    }
});

$('.checkbtn').on('click', function() {
    $('body').toggleClass('menu-open');
});

// json file js
$(document).ready(function() {
    if ($(window).innerWidth > 768) {
        $(".full_height").css('height', '')
    } else {
        $(".full_height").height($(window).innerHeight())
    }
})

Blogging = document.getElementById("ios");
Blogging_animation = bodymovin.loadAnimation({
    wrapper: Blogging,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/ios.json'
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
    // speed: 800,
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

// FAQ JS

$('.panel-collapse').on('show.bs.collapse', function() {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function() {
    $(this).siblings('.panel-heading').removeClass('active');
});


// aos js

AOS.init({
    duration: 1700,
    once: true
})