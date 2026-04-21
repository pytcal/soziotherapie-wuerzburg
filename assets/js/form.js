export function initForm() {
  document.querySelectorAll(".field input,.field textarea").forEach((input) => {
    const set = () =>
      input.parentElement.classList.toggle("filled", !!input.value);
    input.addEventListener("input", set);
    set();
  });

  const form = document.querySelector("#contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Gesendet ✓";
    btn.disabled = true;
  });
}
