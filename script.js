let currentSlide = 0;
const images = ["images/carousel1.jpg", "images/carousel2.jpg"];

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  document.querySelector(".carousel-image").src = images[currentSlide];
}

function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImage").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function filterReviews(type) {
  const reviews = document.querySelectorAll(".review");
  reviews.forEach(r => {
    r.style.display = type === 'all' || r.classList.contains(type) ? 'block' : 'none';
  });
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function showTip() {
    const tips = [
      "Clear your cache regularly to speed up browsing.",
      "Use a VPN for better online privacy.",
      "Unplug devices when not in use to save energy.",
      "Update your software to avoid security vulnerabilities."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tipDisplay").textContent = randomTip;
  }
  