const main_slider = $("#main-slider");
main_slider.owlCarousel({
	rtl: false,
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 1
		}
	}
});

const slider_thumb = $("#slider-thumb");
slider_thumb.owlCarousel({
	rtl: false,
	loop: true,
	margin: 12,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 2
		}
	}
});

// Custom Navigation Events
$(".customNextBtn").click(function () {
	main_slider.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
	main_slider.trigger("prev.owl.carousel");
});

$(".customNextBtn").click(function () {
	slider_thumb.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
	slider_thumb.trigger("prev.owl.carousel");
});