$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/**
 * Team
 */

$(function(){
    $('#team-member').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})