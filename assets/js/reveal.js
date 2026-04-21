// IntersectionObserver-based reveals
export function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  document
    .querySelectorAll(".reveal-line,.fade-up,.mask-in,.word,.service")
    .forEach((el) => io.observe(el));

  // Stagger index
  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    [...parent.children].forEach((child, i) =>
      child.style.setProperty("--i", i),
    );
  });
}
