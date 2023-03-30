if (document.documentElement.clientWidth > 575) {
    $(document.clientWidth).ready(function() {
        $(".hits__slider").slick({
            dots: false,
            prevArrow: '<div class="hits__arrowl"><img class="hits__arrow" src="img/arrow_left.png"></div>',
            nextArrow: '<div class="hits__arrowr"><img class="hits__arrow" src="img/arrow_right.png"></div>',
            slidesToShow: 4,
        });
    });
    $( document ).ready( function() {
        $(".hits__price").autoNumeric(
          'init', {aSep: ',', mDec: '0', vMax: '99999999999999999999999999'}
        );
    });
} else { 
    $(document.clientWidth).ready(function() {
        $(".hits__slider").slick({
            dots: false,
            prevArrow: '<div class="hits__arrowl"><img class="hits__arrow" src="img/arrow_left.png"></div>',
            nextArrow: '<div class="hits__arrowr"><img class="hits__arrow" src="img/arrow_right.png"></div>',
            slidesToShow: 1,
        });
    });
    $(document.clientWidth).ready(function() {
        $(".info").slick({
            dots: false,
            slidesToShow: 1,
        });
    });    
}