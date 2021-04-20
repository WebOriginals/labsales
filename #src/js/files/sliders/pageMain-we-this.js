var galleryThumbs = new Swiper('.description-container', {
    spaceBetween: 10,
    effect: 'fade',
    lazy: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.main-container', {
    spaceBetween: 10,
    slidesPerView: 1,
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    },
    pagination: {
        el: '.main-pagination',
        clickable: true,
    },
});