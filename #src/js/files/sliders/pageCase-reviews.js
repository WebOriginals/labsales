if ($('.reviews-container').length > 0) {
    var reviews = new Swiper('.reviews-container', {
        autoHeight: true,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev',
        },

    });
}