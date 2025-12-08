// script.js

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupSmoothScroll();
  setupModelGridFilters();
  setupPortfolioFilters();
  setupLearnMoreToggles();
  setupFlipsterCarousels();
  setupHeroSliderWithThumbs();
  setupGenericCarousels();
});

/* =========================
   MOBILE MENU
========================= */
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
}

/* =========================
   SMOOTH SCROLL FOR ANCHORS
========================= */
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  });
}

/* =========================
   MODEL GRID FILTERS
   (models.html, models-men.html)
========================= */
function setupModelGridFilters() {
  const modelGrid = document.getElementById("modelGrid");
  if (!modelGrid) return; // not on this page

  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".model-card");
  const searchInput = document.getElementById("modelSearch");

  function applyModelFilters() {
    const activeChip = document.querySelector(".filter-chip.active");
    const filter = activeChip ? activeChip.getAttribute("data-filter") : "all";
    const term = searchInput ? (searchInput.value || "").toLowerCase().trim() : "";

    cards.forEach((card) => {
      const gender = (card.getAttribute("data-gender") || "").toLowerCase();
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      const name = (card.getAttribute("data-name") || "").toLowerCase();

      const matchesFilter =
        filter === "all" ||
        gender === filter ||
        tags.includes(filter);

      const matchesSearch =
        !term ||
        name.includes(term) ||
        tags.includes(term);

      if (matchesFilter && matchesSearch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Chip clicks
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      applyModelFilters();
    });
  });

  // Search typing
  if (searchInput) {
    searchInput.addEventListener("input", applyModelFilters);
  }

  // Initial
  applyModelFilters();
}

/* =========================
   SINGLE MODEL PORTFOLIO FILTERS
   (model-*.html)
========================= */
function setupPortfolioFilters() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const portfolioChips = document.querySelectorAll(".filter-chip[data-filter]");
  if (!portfolioItems.length || !portfolioChips.length) return;

  portfolioChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.getAttribute("data-filter");

      portfolioChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

/* =========================
   LEARN MORE TOGGLES
   (home + modelling)
========================= */
function setupLearnMoreToggles() {
  // General "Learn More" section
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const learnMoreContent = document.getElementById("learnMoreContent");
  if (learnMoreBtn && learnMoreContent) {
    learnMoreBtn.addEventListener("click", () => {
      learnMoreContent.classList.toggle("hidden");
      learnMoreBtn.textContent = learnMoreContent.classList.contains("hidden")
        ? "Learn More"
        : "Show Less";
    });
  }

  // Modelling packages "Learn More"
  const modelLearnMoreBtn = document.getElementById("modelLearnMoreBtn");
  const modelLearnMoreContent = document.getElementById("modelLearnMoreContent");
  if (modelLearnMoreBtn && modelLearnMoreContent) {
    modelLearnMoreBtn.addEventListener("click", () => {
      modelLearnMoreContent.classList.toggle("hidden");
      modelLearnMoreBtn.textContent = modelLearnMoreContent.classList.contains("hidden")
        ? "View Modeling Packages"
        : "Show Less";
    });
  }
}

/* =========================
   FLIPSTER CAROUSELS
   (#flipster-services, #flipster-runway)
========================= */
function setupFlipsterCarousels() {
  if (typeof $ === "undefined" || typeof $.fn.flipster === "undefined") return;

  // Services flipster
  if ($("#flipster-services").length) {
    $("#flipster-services").flipster({
      style: "coverflow",
      spacing: -0.5,
      loop: true,
      buttons: true,
      start: 0,
      autoplay: 4000,
      onItemSwitch: function (currentItem) {
        $(".flipster li").removeClass("shadow-2xl border-yellow-500 border-2");
        $(currentItem).find(".max-w-xs").addClass("shadow-2xl border-yellow-500 border-2");
      },
    });
  }

  // Runway flipster
  if ($("#flipster-runway").length) {
    $("#flipster-runway").flipster({
      style: "coverflow",
      spacing: -0.5,
      loop: true,
      buttons: true,
      autoplay: 3000,
      start: 0,
      scrollwheel: true,
      onItemSwitch: function (currentItem) {
        $(".flipster li").removeClass("shadow-2xl border-gold border-2");
        $(currentItem).find(".card").addClass("shadow-2xl border-gold border-2");
      },
    });
  }
}

/* =========================
   HERO SLIDER + THUMB SLIDER
   (#main-slider + #slider-thumb)
========================= */
function setupHeroSliderWithThumbs() {
  if (typeof $ === "undefined" || typeof $.fn.owlCarousel === "undefined") return;

  const $main = $("#main-slider");
  const $thumb = $("#slider-thumb");

  // If there is no main slider, nothing to do
  if (!$main.length) return;

  // Main slider
  const mainSlider = $main.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    touchDrag: true,
    mouseDrag: true,
  });

  // Thumbnail slider (only if exists)
  let thumbSlider = null;
  if ($thumb.length) {
    thumbSlider = $thumb.owlCarousel({
      items: 2,
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 600,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
      },
    });

    // Thumbnail click → go to corresponding main slide
    $("#slider-thumb .item").on("click", function () {
      const index = $(this).data("index") ?? $(this).index();
      mainSlider.trigger("to.owl.carousel", [index, 300, true]);
    });

    // Custom nav for thumbnails
    $(".customNextBtn").on("click", function () {
      thumbSlider.trigger("next.owl.carousel");
    });

    $(".customPrevBtn").on("click", function () {
      thumbSlider.trigger("prev.owl.carousel");
    });
  }

  // Optional custom nav for main slider too (if you want)
  $(".customNextBtn").on("click", function () {
    mainSlider.trigger("next.owl.carousel");
  });

  $(".customPrevBtn").on("click", function () {
    mainSlider.trigger("prev.owl.carousel");
  });
}

/* =========================
   GENERIC OWL CAROUSELS
   (.owl-carousel but NOT hero & thumbs)
========================= */
function setupGenericCarousels() {
  if (typeof $ === "undefined" || typeof $.fn.owlCarousel === "undefined") return;

  // Any extra carousels you have (but exclude hero + thumb)
  const $carousels = $(".owl-carousel").not("#main-slider, #slider-thumb");
  if (!$carousels.length) return;

  $carousels.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 3 },
    },
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
  });
}


async function subscribe() {
  const fullname = document.getElementById("subFullname").value.trim();
  const email = document.getElementById("subEmail").value.trim();

  if (!fullname) {
    showToast("Please enter your full name.", "error");
    return;
  }

  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email address.", "error");
    return;
  }

  try {
    const res = await fetch("http://localhost:5050/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email }), // MATCHES BACKEND + SEED
    });

    const data = await res.json();

    if (data.success) {
      showToast("🎉 Welcome to Impilo Magazine! You're now subscribed!", "success");

      document.getElementById("subFullname").value = "";
      document.getElementById("subEmail").value = "";
    } else {
      showToast(data.message || "Subscription failed. Please try again.", "error");
    }
  } catch (err) {
    console.error("Subscribe error:", err);
    showToast("Network error. Please try again later.", "error");
  }
}
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className =
    "toast px-5 py-4 rounded-lg shadow-lg text-lg font-semibold border";

  // Gold + Black Theme
  if (type === "success") {
    toast.className +=
      " bg-black text-gold border-gold shadow-goldGlow";
  } else {
    toast.className +=
      " bg-red-700 text-white border-red-300 shadow-md";
  }

  toast.innerText = message;
  container.appendChild(toast);

  // Animate in
  setTimeout(() => toast.classList.add("show"), 50);

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");

    setTimeout(() => toast.remove(), 400);
  }, 3000);
}