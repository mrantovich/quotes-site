$(document).ready(function(){

	$('.header__menu-wrap').click(function(){
		$(this).toggleClass('_active');
		$('.header__menu').toggleClass('_active');
		if ($('.header__menu').hasClass('_active')) {
			$('.header__menu').text('close');
		}
		else {
			$('.header__menu').text('menu');
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