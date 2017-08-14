/**
 * Created by Alex on 31.07.2017.
 */
"use strict";




$(document).ready(function() {

	
	$('.slider__pagination-item').on('click',function (){
		$('.slider__pagination-item').removeClass('slider__pagination-item--active');
		$(this).addClass('slider__pagination-item--active');

		$('.slider__item').removeClass('active');

		var index = $(this).attr('data-index');

		$('.slider__item').eq(index).addClass('active');

		if (!$('.slider__item').hasClass('active')) {
			$('.slider__item').slideUp(500);
		}

		$('.slider__item').eq(index).slideDown(500);
	})

});