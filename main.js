// --- toggle de tema ---
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function syncToggleLabel() {
  toggle.textContent = root.dataset.theme === "dark" ? "[ light ]" : "[ dark ]";
}
syncToggleLabel();

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  syncToggleLabel();
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // localStorage indisponível (modo privado etc.) — tema não persiste, sem problema
  }
});

// --- nav ativa ---
// Destaque so no que o usuario clicou. Scrollspy nao serve aqui: a pagina
// e curta o bastante pra caber na tela, entao nao ha scroll pra observar.
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.forEach((a) => a.classList.remove("active"));
    link.classList.add("active");
  })
);
