// Initialize Lucide icons
lucide.createIcons();

// Example: Smooth scroll behavior (for buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Example future interaction placeholder
console.log("UniStay Girls Hostel Page Loaded ✅");
