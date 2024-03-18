jQuery(document).ready(function($){
	// $ code here
    $('.one-time').each(function(index,element){
        $(element).find('p:empty').remove();
        //$( 'p:empty' ).remove();
    });
	$('.one-time').slick({
	    dots: true,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
		slidesToScroll: 3,
	    adaptiveHeight: true,
		arrows: false,
	});
	$('ul.slick-dots li button').empty();
});