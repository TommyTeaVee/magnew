document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "impilo-cookie-consent";
  const modal = document.getElementById("cookieConsentModal");
  const acceptBtn = document.getElementById("acceptAllBtn");
  const rejectBtn = document.getElementById("rejectBtn");

  // Show if not yet answered
  if (!localStorage.getItem(storageKey)) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }

  // Accept cookies
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem(storageKey, "accepted");
    modal.style.display = "none";
  });

  // Reject cookies
  rejectBtn.addEventListener("click", () => {
    localStorage.setItem(storageKey, "rejected");
    modal.style.display = "none";
  });
});