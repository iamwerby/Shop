"use strict";

$(document).ready(function() {

	var widthIContainer = $('.categories__item-list').innerWidth();
	var widthItem = $('.categories__item-product').width();

	$('.categories__item-container').width(widthIContainer*$('.categories__item-product').length);

	$('.categories__item-container').css('left',-widthItem - 35);
	$('.categories__item-product:last-child').prependTo('.categories__item-container');


	var slideIC = setInterval(slider2,2000)


	function slider2() {
		$('.categories__item-container').animate({
			'margin-left': -widthItem - 35
		}, 2000, function () {
			$('.categories__item-product:first-child').appendTo('.categories__item-container');
			$('.categories__item-container').css('margin-left', -5);
		})
	}


});


/*var widthIContainer = $('.categories__item-list').innerWidth();
	var widthItem = $('.categories__item-product').width();

	$('.categories__item-container').width(widthIContainer*$('.categories__item-product').length);

	$('.categories__item-container').css('left',-widthItem - 35);
	$('.categories__item-product:last-child').prependTo('.categories__item-container');


	var slideIC = setInterval(slider2,4000)


	function slider2() {
		$('.categories__item-container').animate({
			'margin-left': -widthItem - 35
		}, 2000, function () {
			$('.categories__item-product:first-child').appendTo('.categories__item-container');
			$('.categories__item-container').css('margin-left', -5);
		})
	}*/
