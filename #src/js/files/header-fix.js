$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.header').addClass('stickytop');
        } else {
            $('.header').removeClass('stickytop');
        }
    });
});