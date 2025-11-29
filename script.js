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
//jquery flipster
$(document).ready(function() {
    $("#flipster-services").flipster({
      style: 'coverflow', // Default Flipster style
      spacing: -0.5,
      loop: true,
      buttons: true,
      start: 0,
      autoplay: 4000,
      // Responsive card display
      onItemSwitch: function(currentItem, previousItem){
        // Optional: highlight current card
        $('.flipster li').removeClass('shadow-2xl border-yellow-500 border-2');
        $(currentItem).find('.max-w-xs').addClass('shadow-2xl border-yellow-500 border-2');
      }
    });

    // Adjust number of visible cards with CSS
    // Tailwind already helps with max-width
  });

  // Learn More toggle
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const learnMoreContent = document.getElementById('learnMoreContent');
  learnMoreBtn.addEventListener('click', () => {
    learnMoreContent.classList.toggle('hidden');
    learnMoreBtn.textContent = learnMoreContent.classList.contains('hidden') ? 'Learn More' : 'Show Less';
  });

  // Initialize Owl Carousel
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      responsive:{
        0:{items:1},
        640:{items:2},
        1024:{items:3}
      },
      navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"]
    });
  });
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    $(document).ready(function(){
      // Flipster
      $("#flipster-services").flipster({
        style: 'carousel',
        spacing: -0.5,
        loop: true,
        buttons: true,
        start: 0,
        autoplay: 4000,
      });

      // OwlCarousel
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
      $('#slider-thumb').owlCarousel({
        items:3,
        margin:10,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
      });
    });

    // Flipster Carousel
  $(document).ready(function(){
    $("#flipster-runway").flipster({
      style: 'coverflow',  // 3D coverflow style
      spacing: -0.5,
      loop: true,
      buttons: true,
      autoplay: 3000,
      start: 0,
      scrollwheel: true,
      onItemSwitch: function(currentItem, previousItem){
        // optional glow effect on active card
        $('.flipster li').removeClass('shadow-2xl border-gold border-2');
        $(currentItem).find('.card').addClass('shadow-2xl border-gold border-2');
      }
    });
  });
const modelLearnMoreBtn = document.getElementById('modelLearnMoreBtn');
  const modelLearnMoreContent = document.getElementById('modelLearnMoreContent');
  modelLearnMoreBtn.addEventListener('click', () => {
    modelLearnMoreContent.classList.toggle('hidden');
    modelLearnMoreBtn.textContent = modelLearnMoreContent.classList.contains('hidden') ? 'View Modeling Packages' : 'Show Less';
  });

  