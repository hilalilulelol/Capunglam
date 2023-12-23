(function ($) {
    ('use strict');

/*
Check if element exists
/*----------------------------------------*/
    $.fn.elExists = function () {
        return this.length > 0;
    };

/*--
Custom script to call Background
image from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });

/*
WOW
/*----------------------------------------*/
    new WOW().init();

/*
Header Sticky
---------------------------------*/
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $('.header-sticky');
    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass('is-active');
            } else {
                sticky.addClass('is-active');
            }
        }
    });


/*  OnePage Nav
/*----------------------------------------*/

    var top_offset = $('.onepage-nav').height() - 60;
    $('.onepage-nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    var top_offset_mobile = $('.onepage-offcanvas-nav').height() - 60;
    $('.onepage-offcanvas-nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset_mobile,
        end: function () {
            var header = $('.header');
            var offcanvasModal = $('#offcanvasWithBothOptions');
            offcanvasModal.removeClass('show');
            offcanvasModal.css({ visibility: 'hidden' });
            header[0].lastChild.classList.remove('show');
        },
    });

/*
Advantage Slider
---------------------------------*/
    if ($('.advantage-slider').elExists()) {
        var mySwiper = new Swiper('.advantage-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                    centeredSlides: true,
                },
            },
        });
    }

/*
advantage Slider 
---------------------------------*/
    if ($('.advantage-slider-2').elExists()) {
        var mySwiper = new Swiper('.advantage-slider-2', {
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
                576: {
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
                992: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
            },
        });
    }

/*
Partner Slider 
---------------------------------*/
    if ($('.partner-slider-3').elExists()) {
        var mySwiper = new Swiper('.partner-slider-3', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
            },
        });
    }

/*
Testimonial Slider 
---------------------------------*/
    if ($('.testimonial-slider-3').elExists()) {
        var mySwiper = new Swiper('.testimonial-slider-3', {
            slidesPerView: 3,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1600: {
                    slidesPerView: 3,
                },
            },
        });
    }

/*
MailChimp
-------------------------------- */
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        url: 'https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef',
    });
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').addClass('active');
            $('.mailchimp-success')
                .html('' + resp.msg)
                .fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error')
                .html('' + resp.msg)
                .fadeIn(900);
        }
    }
    
/*
Magnific Popup
	    ------------------------------------- */
        if ($('.popup-vimeo').elExists()) {
            $('.popup-vimeo').magnificPopup({
                type: 'iframe',
                disableOn: function () {
                    if ($(window).width() < 600) {
                        return false;
                    }
                    return true;
                },
            });
        }

/*
Scroll To Top
-------------------------------- */

    function scrollToTop() {
        var $scrollUp = $('.scroll-to-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var topPos = $(this).scrollTop();
            if (topPos > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = topPos;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate(
                {
                    scrollTop: 0,
                },
                600
            );
            evt.preventDefault();
        });
    }

    scrollToTop();
})(jQuery);
