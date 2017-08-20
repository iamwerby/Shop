$(document).ready(function() {
	$('.popular__container').slick({
    	dots: false,
    	infinite: true,
  		speed: 300,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows:false,
  		autoplay:true
  	});
});

$('.popular__header-arrow-prev').on('click', function() {
	$('.popular__container').slick('slickPrev');
})

$('.popular__header-arrow-next').on('click', function() {
	$('.popular__container').slick('slickNext');
})

