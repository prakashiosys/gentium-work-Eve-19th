// slick-slider----------*
$(document).ready(function(){
	      $('.slider').slick({
	      	slidesToShow: 3,
	      	slidesToScroll: 3,
	        accessibilty: true,
	        dots: true,
	        arrows: false,
	        centerMode: true,
		    infinite: true,
		    cssEase: 'linear'
	    });
});
// ham-burger-----------*
$(document).ready(function() {
    $('.nav-bar').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
    $('.mobile-trigger i').toggleClass('change');
    $('.nav-bar').toggle('slow');
        return false;
	});
});