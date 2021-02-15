$(function() {

    $('.slider').slick({
        autoplay: true,
        dots: true,
    });

    var header = $('.header').height() + $('.header').offset().top;
    console.log(header);

    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > header) {
            $('.header-scroll').addClass('header-fixed');
        } else {
            $('.header-scroll').removeClass('header-fixed');
        }
    });
});