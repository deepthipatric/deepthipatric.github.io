const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".section, .hero-card, .role, .edu, .pubs article")
  .forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
  });
