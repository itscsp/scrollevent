$(document).ready(function() {
    $(window).scroll(function(){
        var screen_width = window.innerWidth;
        if(screen_width <= 769) {
        	var scrollBottom = $(window).scrollTop() + $(window).height();
            scrollBottom -= 30
            var subHeigth = $("#BlockSliderSimilar").height() + $(".footer-section").height();
            var totalheight = $(document).height() - subHeigth

            if(scrollBottom < totalheight){
                $('.add-to-cart').addClass('add-to-cart-mobile-btn')
            }else{

                $('.add-to-cart').removeClass('add-to-cart-mobile-btn')
            }
        }
    });

});