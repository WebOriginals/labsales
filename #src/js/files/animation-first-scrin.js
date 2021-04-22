if(window.screen.width >=767) {
    if ($('.body-first-screen-sl').length > 0) {
        let sl = document.querySelector('.body-first-screen-sl');
        setTimeout(function () {
            sl.classList.add('opacity');
        }, 7000);
    }

    if ($('.mouse').length > 0) {
        let sl = document.querySelector('.mouse');
        setTimeout(function () {
            sl.classList.add('opacity');
        }, 7000);
    }
}


