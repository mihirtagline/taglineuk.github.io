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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$(document).ready(function () {
    $('select').niceSelect();
});
