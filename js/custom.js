(function ($) {
    'use-strict';

    $(window).on('load', function () {
        initPreloaderFade();
    });


    function initPreloaderFade() {
        $('.preloader').fadeOut();
    }

})(jQuery);
