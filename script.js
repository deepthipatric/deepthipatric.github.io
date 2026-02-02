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

const openModal = (modal) => {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = (modal) => {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

document.querySelectorAll(".thumb-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-modal");
    openModal(document.getElementById(target));
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close")) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.open").forEach(closeModal);
  }
});
