
$(document).ready(function(){
    $('.carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
        // dots: true
    });
});
