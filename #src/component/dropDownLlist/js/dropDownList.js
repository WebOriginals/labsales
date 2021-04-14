if( $( '.dropDownList-title' ).length ) {
    $(".dropDownList-title").click(function () {
        var elem = this;
        var block = $(elem).closest('.wrapper-dropDownList');
        var hidden = $(block).find('.dropDownList-hidden');
        $(hidden).slideToggle(parameters);
        $(elem).toggleClass("open");
    });
}