document.addEventListener("DOMContentLoaded", () => {
  const zoomables = document.querySelectorAll(".zoomable");

  zoomables.forEach(img => {
    img.addEventListener("click", () => {
      // Toggle zoom class
      img.classList.toggle("zoomed");
    });
  });
});
