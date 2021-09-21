$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('.header').addClass('bg-dark');

    }
    else {
        $('.header').removeClass('bg-dark');
    }
})


if (window.innerWidth < 991) {
    $('.mega_menu_item .nav-link').click(function () {
        $('.main_mega_wrap').slideToggle();
    });
    $('.navbar-toggler').click(function () {
        $('.navbar-menu').addClass('show');
    });
    $('.menu_close_btn').click(function () {
        $('.navbar-menu').removeClass('show');
    })
    $('.navbar-toggler').click(function () {
        $('body').addClass('overflow-hidden');
    })
    $('.menu_close_btn').click(function () {
        $('body').removeClass('overflow-hidden');
    })

    $(function () {
        $('.mega_menu').find('.menu_title').on('click', function () {
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
    $.each($('select'), function (i, val) {
        var $el = $(val);

        if (!$el.val()) {
            $el.addClass('not_chosen');
        }

        $el.on('change', function () {
            if (!$el.val())
                $el.addClass('not_chosen');
            else
                $el.removeClass('not_chosen');
        });

    });
}


$(document).ready(function () {
    $('.social_dropdown_wrap .open_drop_button').click(function () {
        $(this).next('.social_dropdown').toggleClass('social_dropdown_wrap--animate');
    })
})

$("html").click(function (e) {
    if ($(e.target).closest('.social_dropdown_wrap').length == 0)
        $(".social_dropdown").removeClass('social_dropdown_wrap--animate');
});


$(function () {
    $('.accordion').find('.accordion-title').on('click', function () {
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
