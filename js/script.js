$(document).ready(function(){

	$('.header__menu').click(function(){
		$(this).toggleClass('_active');
		if ($(this).hasClass('_active')) {
			$(this).text('close');
		}
		else {
			$(this).text('menu');
		}

		$('.header__nav').toggleClass('_active');
	});

	$('.posters__item').mouseenter(function(){
		$(this).find('.posters__item-actions').addClass('_hovered');
	})
	$('.posters__item').mouseleave(function(){
		$(this).find('.posters__item-actions').removeClass('_hovered');
	})

});