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

Blogging = document.getElementById("Blogging");
Blogging_animation = bodymovin.loadAnimation({
    wrapper: Blogging,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/Blogging.json'
});

// ios json file
ios = document.getElementById("ios");
ios_animation = bodymovin.loadAnimation({
    wrapper: ios,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/ios.json'
});

// react json file
react = document.getElementById("react");
react_animation = bodymovin.loadAnimation({
    wrapper: react,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/react.json'
});


// nodejs json file
nodejs = document.getElementById("nodejs");
nodejs_animation = bodymovin.loadAnimation({
    wrapper: nodejs,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/nodejs.json'
});

// flutter json file
flutter = document.getElementById("flutter");
flutter_animation = bodymovin.loadAnimation({
    wrapper: flutter,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/flutter.json'
});

// android json file
android = document.getElementById("android");
android_animation = bodymovin.loadAnimation({
    wrapper: android,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/android.json'
});

// seo json file
seo = document.getElementById("seo");
seo_animation = bodymovin.loadAnimation({
    wrapper: seo,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/seo.json'
});

// smm json file
smm = document.getElementById("smm");
smm_animation = bodymovin.loadAnimation({
    wrapper: smm,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/smm.json'
});

// cross platform json file
crossplatform = document.getElementById("crossplatform");
crossplatform_animation = bodymovin.loadAnimation({
    wrapper: crossplatform,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/crossplatform.json'
});

// cross platform json file
aso = document.getElementById("aso");
aso_animation = bodymovin.loadAnimation({
    wrapper: aso,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/aso.json'
});

// digital marketing json file
digitalmarketing = document.getElementById("digitalmarketing");
digtalmarketing_animation = bodymovin.loadAnimation({
    wrapper: digitalmarketing,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/digitalmarketing.json'
});

// ui json file
ui = document.getElementById("ui");
ui_animation = bodymovin.loadAnimation({
    wrapper: ui,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/ui.json'
});

// web json file
web = document.getElementById("web");
web_animation = bodymovin.loadAnimation({
    wrapper: web,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/web.json'
});

// web json file
mobile = document.getElementById("mobile");
mobile_animation = bodymovin.loadAnimation({
    wrapper: mobile,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/mobile.json'
});

// ppc json file
ppc = document.getElementById("ppc");
ppc_animation = bodymovin.loadAnimation({
    wrapper: ppc,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/ppc.json'
});

// jquery json file
jquery = document.getElementById("jquery");
jquery_animation = bodymovin.loadAnimation({
    wrapper: jquery,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/jquery.json'
});

// testing json file
testing = document.getElementById("testing");
testing_animation = bodymovin.loadAnimation({
    wrapper: testing,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/testing.json'
});

// ror json file
ror = document.getElementById("ror");
ror_animation = bodymovin.loadAnimation({
    wrapper: ror,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/ror.json'
});

// django json file
django = document.getElementById("django");
django_animation = bodymovin.loadAnimation({
    wrapper: django,
    animType: "svg",
    loop: true,
    autoplay: true,
    path: 'animation/django.json'
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
    autoplay: false,
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

// // ==============

var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
    // centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    // pauseOnHover: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        },
        // {
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }
    ]
});