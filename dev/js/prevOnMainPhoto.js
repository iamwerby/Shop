"use strict";

$(document).ready(function() {
	
	$('.product__container-preview-photo img').on('click',function (){
		$(".product__container-preview-photo").removeClass('product__container-preview-photo--active');
		$(this).parent().addClass('product__container-preview-photo--active')
		var src = $(this).attr('src');
		var srcBig = $(this).attr('data-large-img-url');

		$('.product__container-main-photo img').attr('src', src);
		$('.product__container-main-photo img').attr('data-large-img-url', srcBig);
	})

});