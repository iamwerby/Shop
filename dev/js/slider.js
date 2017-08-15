"use strict";

$(document).ready(function() {

	$('.slider__item').removeClass('active');

	var height = $('.slider').innerHeight();

	$('.slider__item').innerHeight(height);

	$('.slider__container').innerHeight(height*$('.slider__item').length);

	$('.slider__container').css('top',-height);
	$('.slider__item:last-child').prependTo('.slider__container');


	var slide = setInterval(slider,6000)


	function slider() {
		$('.slider__container').animate({
			'margin-top': -height
		}, 1000, function () {
			$('.slider__item:first-child').appendTo('.slider__container');
			$('.slider__container').css('margin-top', 0);
		})
	}


});