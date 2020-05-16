// $(document).ready(function () {
// 	$('.slick-content').slick({
// 		slidesToScroll: 1,
// 		arrows: false,
// 		dots: true,
// 		vertical: true,
// 		verticalSwiping: true,
// 		infinite: false,
// 	});
// });

// $(document).ready(function () {
// 	$('.news-slider').slick({
// 		// infinite: false,
// 		slidesToShow: 3,
// 		slidesToScroll: 3,
// 		dots: true,
// 		arrows: true,
// 		// variableWidth: true,
// 	});
// });

$(document).ready(function () {
	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		vertical: true,
		verticalSwiping: true,
		infinite: false,
	});
});

$(document).ready(function () {
	$('.slick-content').slick({
		infinite: false,

		slidesToScroll: 1,
		dots: true,
		arrows: true,
		// variableWidth: true,
	});
});
