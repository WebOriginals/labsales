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
if(window.screen.width <=767) {
    var node = document.querySelector('.js--video');
    node.parentNode.removeChild(node);

    var properties = {
        'remove': {
            enumerable: false,
            writable: false,
            value: function () {
                if (!this.parentNode) {
                    throw "Parent node not exists";
                }

                this.parentNode.removeChild(this);
                return this;
            }
        }
    };
    Object.defineProperties(Node.prototype, properties);

// Метод можно вызвать только после загрузки всего DOM-дерева
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.js--video').remove();
    });
}

