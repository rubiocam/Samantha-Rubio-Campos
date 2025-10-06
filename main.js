// Example: Fade-in items as you scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll(".item").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});