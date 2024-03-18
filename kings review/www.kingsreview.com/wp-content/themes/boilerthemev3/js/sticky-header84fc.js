jQuery(document).ready(function($){
  var $body = $("body");
  var $wrapperTop = $(".sticky-container");
  var lastScrollTop = 0;
  var windowW = $(window).width();
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if(st < 3){
         $body.removeClass("header--fixed-up header--fixed");
         $wrapperTop.removeClass("animated fadeID fadeOU");
     }
    // if((st > 80) && (windowW < 770)){
    //      $body.addClass("header--fixed-up header--fixed");
    //      $wrapperTop.addClass("animated fadeInDown");
    //  }
    /* if((st < lastScrollTop) && (st > 100) && (windowW > 770)) {
         $body.addClass("header--fixed-up header--fixed");
         $wrapperTop.removeClass('fadeOutUp').addClass("animated fadeInDown");
     } else if((st > lastScrollTop) && (st > 100) && (windowW > 770)) {
         $wrapperTop.removeClass('fadeInDown').addClass("animated fadeOutUp");
     }*/
	  if((st < lastScrollTop) && (st > 100)) {
         $body.addClass("header--fixed-up header--fixed");
         $wrapperTop.removeClass('fadeOU').addClass("animated fadeID");
     } else if((st > lastScrollTop) && (st > 100)) {
         $wrapperTop.removeClass('fadeID').addClass("animated fadeOU");
		 $('li.menu-item-has-children').removeClass('show');
     }
     //console.log(lastScrollTop);
     lastScrollTop = st;
  });

});