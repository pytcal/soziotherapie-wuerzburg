// Header scroll state + burger
const header = document.getElementById("header");
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");

let lastY = 0;
export function initNav() {
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 30);
      lastY = y;
    },
    { passive: true },
  );

  burger?.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("open", !open);
    document.body.style.overflow = !open ? "hidden" : "";
  });

  links?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
      document.body.style.overflow = "";
    }),
  );
}
