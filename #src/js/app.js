@@include('files/animationAll.js')
$( document ).ready(function() {
    //component
    @@include('../component/Modals/js/modal.js')
    @@include('../component/Tabs/js/tabs.js')
    @@include('../component/InputList/js/InputList.js')
    @@include('../component/dropDownLlist/js/dropDownList.js')
    @@include('../component/Quantity/js/quantity.js')
    @@include('../component/map/js/map.js')
    @@include('../component/dinamicAdaptiv/js/dinamicAdaptiv.js')
    @@include('../component/lazyLoad/js/lazyLoad.js')
    // end component

    // sliders
    @@include('files/sliders/pageMain-firstScreen.js')
    @@include('files/sliders/pageMain-portfolio.js')
    @@include('files/sliders/pageMain-we-this.js')
    // end sliders


    @@include('files/menu.js')
    @@include('files/header-fix.js')
    @@include('files/animation-first-scrin.js')
    @@include('files/delete-video.js')
    @@include('files/animation-inputs.js')

})
