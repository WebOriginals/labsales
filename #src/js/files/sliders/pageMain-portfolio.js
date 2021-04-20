if ($('.portfolio-container').length > 0) {
    var portfolio = new Swiper('.portfolio-container', {
        spaceBetween: 10,
        lazy: true,
        navigation: {
            nextEl: '.portfolio-button-next',
            prevEl: '.portfolio-button-prev',
        },
    });

}



