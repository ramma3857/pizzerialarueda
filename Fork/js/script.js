$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#whatsapp').fadeIn();
        } else {
            $('#whatsapp').fadeOut();
        }
    });
});


