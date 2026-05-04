// =========================
//  IMPILO MAIN SCRIPT.JS
// =========================

document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll();
  setupModelGridFilters();
  setupPortfolioFilters();
  setupLearnMoreToggles();
  setupFlipsterCarousels();
  setupHeroSliderWithThumbs();
  setupGenericCarousels();
  setupAnimatedMobileMenu();  // ⭐ NEW CLEAN MENU
});

/* =========================
   MOBILE MENU (ANIMATED)
========================= */
function setupAnimatedMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      // Slide DOWN
      menu.classList.remove("hidden");
      menu.classList.add("mobile-menu-enter");
      requestAnimationFrame(() => {
        menu.classList.add("mobile-menu-enter-active");
        menu.classList.remove("mobile-menu-enter");
      });
    } else {
      // Slide UP
      menu.classList.add("mobile-menu-exit");
      requestAnimationFrame(() => {
        menu.classList.add("mobile-menu-exit-active");
        menu.classList.remove("mobile-menu-exit");
      });
      setTimeout(() => {
        menu.classList.remove("mobile-menu-exit-active");
        menu.classList.add("hidden");
      }, 400);
    }
  });

  // Close menu when any link is clicked
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("mobile-menu-exit");
      requestAnimationFrame(() => {
        menu.classList.add("mobile-menu-exit-active");
        menu.classList.remove("mobile-menu-exit");
      });

      setTimeout(() => {
        menu.classList.remove("mobile-menu-exit-active");
        menu.classList.add("hidden");
      }, 350);
    });
  });
}

/* =========================
   SMOOTH SCROLL
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
      const offset = 80; // header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* =========================
   MODEL GRID FILTERS
========================= */
function setupModelGridFilters() {
  const modelGrid = document.getElementById("modelGrid");
  if (!modelGrid) return;

  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".model-card");
  const searchInput = document.getElementById("modelSearch");

  function applyFilters() {
    const activeChip = document.querySelector(".filter-chip.active");
    const filter = activeChip ? activeChip.dataset.filter : "all";
    const term = searchInput ? searchInput.value.toLowerCase().trim() : "";

    cards.forEach((card) => {
      const gender = (card.dataset.gender || "").toLowerCase();
      const tags = (card.dataset.tags || "").toLowerCase();
      const name = (card.dataset.name || "").toLowerCase();

      const matchesFilter =
        filter === "all" || gender === filter || tags.includes(filter);

      const matchesSearch =
        !term || name.includes(term) || tags.includes(term);

      card.style.display = matchesFilter && matchesSearch ? "" : "none";
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
}

/* =========================
   PORTFOLIO FILTERS
========================= */
function setupPortfolioFilters() {
  const items = document.querySelectorAll(".portfolio-item");
  const chips = document.querySelectorAll(".filter-chip[data-filter]");
  if (!items.length || !chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;

      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      items.forEach((item) => {
        const category = item.dataset.category;
        item.style.display =
          filter === "all" || category === filter ? "flex" : "none";
      });
    });
  });
}

/* =========================
   LEARN MORE BUTTONS
========================= */
function setupLearnMoreToggles() {
  const btn1 = document.getElementById("learnMoreBtn");
  const content1 = document.getElementById("learnMoreContent");

  if (btn1 && content1) {
    btn1.addEventListener("click", () => {
      content1.classList.toggle("hidden");
      btn1.textContent = content1.classList.contains("hidden")
        ? "Learn More"
        : "Show Less";
    });
  }

  const btn2 = document.getElementById("modelLearnMoreBtn");
  const content2 = document.getElementById("modelLearnMoreContent");

  if (btn2 && content2) {
    btn2.addEventListener("click", () => {
      content2.classList.toggle("hidden");
      btn2.textContent = content2.classList.contains("hidden")
        ? "View Modeling Packages"
        : "Show Less";
    });
  }
}

/* =========================
   FLIPSTER CAROUSELS
========================= */
function setupFlipsterCarousels() {
  if (typeof $ === "undefined" || !$.fn.flipster) return;

  if ($("#flipster-services").length) {
    $("#flipster-services").flipster({
      style: "coverflow",
      spacing: -0.5,
      loop: true,
      autoplay: 4000,
    });
  }

  if ($("#flipster-runway").length) {
    $("#flipster-runway").flipster({
      style: "coverflow",
      spacing: -0.5,
      loop: true,
      autoplay: 3000,
    });
  }
}

/* =========================
   HERO + THUMB SLIDER
========================= */
function setupHeroSliderWithThumbs() {
  if (typeof $ === "undefined" || !$.fn.owlCarousel) return;

  const $main = $("#main-slider");
  const $thumb = $("#slider-thumb");

  if (!$main.length) return;

  const mainSlider = $main.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    nav: false,
    dots: true,
  });

  if ($thumb.length) {
    const thumbSlider = $thumb.owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });

    $("#slider-thumb .item").on("click", function () {
      const index = $(this).data("index") ?? $(this).index();
      mainSlider.trigger("to.owl.carousel", [index, 300, true]);
    });
  }
}

/* =========================
   GENERIC CAROUSELS
========================= */
function setupGenericCarousels() {
  if (typeof $ === "undefined" || !$.fn.owlCarousel) return;

  const $carousels = $(".owl-carousel").not("#main-slider, #slider-thumb");
  if (!$carousels.length) return;

  $carousels.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 3 },
    },
  });
}

/* =========================
   SUBSCRIBE W/ TOAST
========================= */
async function subscribe() {
  const fullname = document.getElementById("subFullname").value.trim();
  const email = document.getElementById("subEmail").value.trim();

  if (!fullname) return showToast("Please enter your full name.", "error");
  if (!email.includes("@")) return showToast("Enter a valid email.", "error");

  try {
    const res = await fetch("https://reg.impilomag.co.za/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email }),
    });

    const data = await res.json();

    if (data.success) {
      showToast("🎉 Welcome to Impilo Magazine!", "success");
      document.getElementById("subFullname").value = "";
      document.getElementById("subEmail").value = "";
    } else {
      showToast(data.message || "Subscription failed.", "error");
    }
  } catch (err) {
    console.error(err);
    showToast("Network error. Try again later.", "error");
  }
}

/* =========================
   TOAST SYSTEM
========================= */
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className =
    "toast px-5 py-4 rounded-lg shadow-lg text-lg font-semibold border";

  if (type === "success") {
    toast.className += " bg-black text-gold border-gold shadow-goldGlow";
  } else {
    toast.className += " bg-red-700 text-white border-red-300";
  }

  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 20);
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
