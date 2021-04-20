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