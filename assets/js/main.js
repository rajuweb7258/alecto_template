jQuery(document).ready(function($) {
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		nav: true,
		dots: true,
		navText: ["<img src='assets/img/left-arrow.png' alt='' />", "<img src='assets/img/right-arrow.png' alt='' />"],
	});

	$(".slider-area").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		nav: true,
		dots: true,
		navText: ["<img src='assets/img/left-arrow.png' alt='' />", "<img src='assets/img/right-arrow.png' alt='' />"],
	});
});