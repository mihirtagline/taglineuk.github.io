$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('.header').addClass('bg-dark');

    } else {
        $('.header').removeClass('bg-dark');
    }
})


if (window.innerWidth < 991) {
    $('.mega_menu_item .nav-link').click(function() {
        $('.main_mega_wrap').slideToggle();
    });
    $('.navbar-toggler').click(function() {
        $('.navbar-menu').addClass('show');
    });
    $('.menu_close_btn').click(function() {
        $('.navbar-menu').removeClass('show');
    })
    $('.navbar-toggler').click(function() {
        $('body').addClass('overflow-hidden');
    })
    $('.menu_close_btn').click(function() {
        $('body').removeClass('overflow-hidden');
    })

    $(function() {
        $('.mega_menu').find('.menu_title').on('click', function() {
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.mega_menu_content').not($(this).next()).slideUp('fast');
        });
    });
}

var swiper = new Swiper(".testimonial_slider", {
    grabCursor: true,
    effect: "cards",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// $(document).ready(function () {
//     $('select').niceSelect();
// });


if ($('select').length) {
    // Traverse through all dropdowns
    $.each($('select'), function(i, val) {
        var $el = $(val);

        if (!$el.val()) {
            $el.addClass('not_chosen');
        }

        $el.on('change', function() {
            if (!$el.val())
                $el.addClass('not_chosen');
            else
                $el.removeClass('not_chosen');
        });

    });
}


$(document).ready(function() {
    $('.social_dropdown_wrap .open_drop_button').click(function() {
        $(this).next('.social_dropdown').toggleClass('social_dropdown_wrap--animate');
    })
})

$("html").click(function(e) {
    if ($(e.target).closest('.social_dropdown_wrap').length == 0)
        $(".social_dropdown").removeClass('social_dropdown_wrap--animate');
});


$(function() {
    $('.accordion').find('.accordion-title').on('click', function() {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });
});


AOS.init({
    easing: 'ease-out-back'
});


// json file js
$(document).ready(function() {
    if ($(window).innerWidth > 768) {
        $(".full_height").css('height', '')
    } else {
        $(".full_height").height($(window).innerHeight())
    }
})

// Blogging = document.getElementById("Blogging");
// Blogging_animation = bodymovin.loadAnimation({
//     wrapper: Blogging,
//     animType: "svg",
//     loop: true,
//     autoplay: true,
//     path: 'animation/Blogging.json'
// });


$('.counter_wrap').counterUp({
    delay: 20,
    time: 2000
});



// slick slider synchrinize js

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite: true,
    prevArrow: '<img src="image/icons/arrow-forward-left.svg">',
    nextArrow: '<img src="image/icons/arrow-forward-right.svg">',
    centerMode: true,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
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
        autoplay: false,
        arrows: true,
        prevArrow: '<img src="image/icons/reverse arrow.svg" class="slick_left_arrow">',
        nextArrow: '<img src="image/icons/forward arrow.svg" class="slick_right_arrow">',
        slidesToShow: 1,
        slidesToScroll: 1
    });
};



// slicks slider stories js
$('.slick-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [{
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]

});


// slick slider portfolio js


var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});