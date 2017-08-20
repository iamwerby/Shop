$(document).ready(function() {
	
	$('.categories-filter__left-column-list-item > a').on('click', function (e) {
		e.preventDefault();

		if(!$(this).hasClass('active')) {
			$('.categories-filter__left-column-list-item > a').removeClass('active');
			$('.categories-filter__left-column-list-sub').slideUp(200);
		}

		$(this).toggleClass('active');
		$(this).siblings('.categories-filter__left-column-list-sub').slideToggle(200);
	})
});

