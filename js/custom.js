(function ($) {
    'use-strict';

    $(window).on('load', function () {
        initPreloaderFade();
    });

    $(window).on('resize', function () {
        initHeroHeight();
        initPortfolioResize();
    });

    $(window).on('scroll', function () {
        initHeaderAnimation();
    });

    initHeroHeight();
    initParallax();
    initSectionHighlight();
    initImageBackground();
    initAnimateScroll();
    initMagnificPopup();
    initPortfolio();
    initMasonry();
    initProgressBar();
    initCarousel();
    initWowAnimation();

    function initPreloaderFade() {
        $('.preloader').fadeOut();
    }

    function initSectionHighlight() {
        $('section').each(function () {
            $(this).waypoint(function (direction) {
                if (direction === 'down') {
                    var sec_id = $(this).attr('id');
                    var current_section_link = '.' + sec_id + '-nav';
                    $('.main-nav > ul > li > a').removeClass('active-nav');
                    $(current_section_link).addClass('active-nav');
                }
            }, { offset: '130px' });
            $(this).waypoint(function (direction) {
                if (direction === 'up') {
                    var sec_id = $(this).attr('id');
                    var current_section_link = '.' + sec_id + '-nav';
                    $('.main-nav > ul > li > a').removeClass('active-nav');
                    $(current_section_link).addClass('active-nav');
                }
            }, {
                offset: function () {
                    return -$(this).height() + 130;
                }
            });
        });
    }

    function initHeroHeight() {
        $('.hero-height').height($(window).height());
    }

    function initParallax() {
        if (!device.tablet() && !device.mobile()) {
            $('.parallax-section').each(function () {
                $('.parallax-section').parallaxScroll("50%", 0.3);
            });
            $('.parallax-layer').parallax();
        }
    }

    function initImageBackground() {
        $(".image-bg").each(function () {
            if ($(this).attr("data-image-bg")) {
                $(this).css({
                    "background": "url(" + $(this).data("image-bg") + ")",
                    'background-position': 'center top',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                });
            }
        });
    }

    function initAnimateScroll() {
        $('.animatescroll-link').on('click', function (e) {
            e.preventDefault();
        });
    }

    function initHeaderAnimation() {
        var scroll_top = $(document).scrollTop();
        if (scroll_top >= 100) {
            $('.header').removeClass('header-hidden');
            $('.header').addClass('header-visible');
        } else {
            $('.header').removeClass('header-visible');
            $('.header').addClass('header-hidden');
        }
    }

    function initMagnificPopup() {
        $('.portrait-mfp').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.portfolio-mfp').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $(".video-mfp").magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
    }

    function initMasonry() {
        $(".masonry").imagesLoaded(function () {
            $(".masonry").masonry();
        });
    }

    function initPortfolio() {
        $('.portfolio-items').imagesLoaded(function () {
            $('.portfolio-items').show();
            $('.portfolio-items').isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
        });

        $('.filter').find('a').on('click', function () {
            $('.portfolio-items').isotope({
                filter: $(this).attr('data-filter'),
                animationOptions: {
                    duration: 750,
                    queue: false
                }
            });
            return false;
        });

        $('.filter a').on('click', function () {
            if (!$(this).hasClass('active')) {
                $('.filter a').removeClass('active');
                $(this).addClass('active');
            }
        });
    }

    function initPortfolioResize() {
        $('.portfolio-items').isotope({
            filter: $('.filter').find('a.active').attr('data-filter'),
            animationOptions: {
                duration: 750,
                queue: false
            }
        });
        return false;
    }

    function initProgressBar() {
        $('.progress-bar > span').each(function () {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition': 'width 1.5s'
            });

            setTimeout(function () {
                $this.filter(':visible').waypoint(function (direction) {
                    if (direction === 'down') {
                        $this.css('width', width + '%');
                    }
                }, { offset: '100%' });
            }, 500);
        });
    }

    function initCarousel() {

        $('.reference-carousel').owlCarousel({
            pagination: true,
            navigation: false,
            autoPlay: true,
            slideSpeed: 500,
            items: 1
        });
    }

    function initWowAnimation() {
        var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 150,
                mobile: false,
                live: true
            }
        );
        wow.init();
    }

})(jQuery);
