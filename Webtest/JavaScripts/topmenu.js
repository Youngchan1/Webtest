// JavaScript Document
// Hide Header on on scroll down
/*jslint devel: true */
/* eslint-disable no-console */		
/*eslint no-undef: "error"*/
/*eslint-env node*/
/* eslint-disable */
$(document).ready(function() {
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.Topside').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
	$('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.Topside').removeClass('nav-down').addClass('nav-up');
		
    } else {
        // Scroll Up
        if($(window).height() < $(document).height()) {
            $('.Topside').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
});
});