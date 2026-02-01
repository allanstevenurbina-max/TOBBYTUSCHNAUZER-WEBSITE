document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  if (!track || !prevBtn || !nextBtn) return;

  const step = 320;

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: step, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -step, behavior: "smooth" });
  });
});