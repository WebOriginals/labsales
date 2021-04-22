var project = new Swiper('.project-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: '.project-button-next',
        prevEl: '.project-button-prev',
    },
    pagination: {
        el: '.project-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        767: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 160
        },
        1600: {
            slidesPerView: 2.5,
            spaceBetween: 180
        },
        2500: {
            slidesPerView: 3,
            spaceBetween: 250
        }
    }
});