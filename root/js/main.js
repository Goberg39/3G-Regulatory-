// Small progressive enhancements. The site works fine without this file.

// Keep the footer copyright year current.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
