$(document).ready(function(){
  // Main slider
  var mainSlider = $('#main-slider').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:800,
    nav:false,
    dots:true,
    touchDrag:true,
    mouseDrag:true
  });

  // Thumbnail slider
  var thumbSlider = $('#slider-thumb').owlCarousel({
    items:2,
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:600,
    nav:false,
    dots:false,
    responsive:{
      0:{ items:2 },
      768:{ items:3 },
      1024:{ items:4 }
    }
  });

  // Custom nav
  $('.customNextBtn').click(function() {
    thumbSlider.trigger('next.owl.carousel');
  });
  $('.customPrevBtn').click(function() {
    thumbSlider.trigger('prev.owl.carousel');
  });

  // Thumbnail click → go to corresponding main slide
  $('#slider-thumb .item').on('click', function(){
    var index = $(this).data('index');
    mainSlider.trigger('to.owl.carousel', [index, 300, true]);
  });
});

$('#slider-thumb').owlCarousel({
  items:2,
  margin:10,
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  smartSpeed:600,
  nav:false,
  dots:false,
  responsive:{
    0:{ items:2 },     // mobile
    768:{ items:3 },   // tablet
    1024:{ items:4 }   // desktop
  }
});

// Custom nav buttons
$('.customNextBtn').click(function() {
  $('#slider-thumb').trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
  $('#slider-thumb').trigger('prev.owl.carousel');
});

// Main slider
$('#main-slider').owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
  autoplayTimeout:4000,
  smartSpeed:800,
  nav:false,
  dots:true,
  touchDrag:true,
  mouseDrag:true
});

// Thumbnails slider
$('#slider-thumb').owlCarousel({
  items:2,
  margin:10,
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  smartSpeed:600,
  nav:false,
  dots:false,
  responsive:{
    0:{ items:2 },     // mobile
    768:{ items:3 },   // tablet
    1024:{ items:4 }   // desktop
  }
});

// Custom nav buttons
$('.customNextBtn').click(function() {
  $('#slider-thumb').trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
  $('#slider-thumb').trigger('prev.owl.carousel');
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