
document.addEventListener("DOMContentLoaded", () => {
  // Highlight the navigation link for the current section.
  const navLinks = document.querySelectorAll(".navbar nav a");
  const sections = document.querySelectorAll(
    "#home, #classes, #book"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const active =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.style.textDecoration = active ? "underline" : "none";
            link.style.textUnderlineOffset = "6px";
          });
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach((section) => observer.observe(section));

  // Show a clay-colored background if an image fails to load.
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement.style.backgroundColor = "#dfbba5";
    });
  });

  // Reveal class cards when they enter the viewport.
  const cards = document.querySelectorAll(".class-card");

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s, transform 0.6s";
  });

  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => cardObserver.observe(card));
});
