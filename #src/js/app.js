@@include('files/animationAll.js')
$( document ).ready(function() {
    //component
    @@include('../component/Modals/js/modal.js')
    @@include('../component/dinamicAdaptiv/js/dinamicAdaptiv.js')
    @@include('../component/lazyLoad/js/lazyLoad.js')
    // end component

    // sliders
    @@include('files/sliders/pageMain-firstScreen.js')
    @@include('files/sliders/pageMain-portfolio.js')
    @@include('files/sliders/pageMain-we-this.js')
    @@include('files/sliders/pageCase-project.js')
    @@include('files/sliders/pageCase-reviews.js')
    // end sliders


    @@include('files/menu.js')
    @@include('files/header-fix.js')
    @@include('files/animation-first-scrin.js')
    @@include('files/delete-video.js')
    @@include('files/animation-inputs.js')

})
