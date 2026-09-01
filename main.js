import { projects } from "./projects.js";

// --- motd (uptime) ---
// Ajuste LAUNCH_DATE para a data em que o site foi publicado.
const LAUNCH_DATE = new Date("2026-08-29");
const days = Math.max(0, Math.floor((Date.now() - LAUNCH_DATE) / 86400000));
const motd = document.getElementById("motd");
if (motd) {
  motd.textContent = "";
  const prompt = document.createElement("span");
  prompt.className = "prompt";
  prompt.textContent = "$";
  motd.appendChild(prompt);
  motd.appendChild(document.createTextNode(
    ` uptime\n up ${days} dia${days === 1 ? "" : "s"} · ${projects.length} projeto${projects.length === 1 ? "" : "s"} no ar`
  ));
}

// --- render projetos ---
const list = document.getElementById("project-list");

for (const p of projects) {
  const win = document.createElement("article");
  win.className = "window";

  const bar = document.createElement("div");
  bar.className = "window-bar";
  bar.innerHTML = '<span class="window-dots"><span></span><span></span><span></span></span>';
  const title = document.createElement("span");
  title.className = "window-title";
  title.textContent = p.name;
  bar.appendChild(title);

  const body = document.createElement("div");
  body.className = "window-body";

  win.appendChild(bar);

  if (p.thumb) {
    const img = document.createElement("img");
    img.className = "window-thumb";
    img.src = p.thumb;
    img.alt = "";
    img.loading = "lazy";
    win.appendChild(img);
  } else {
    const empty = document.createElement("div");
    empty.className = "window-thumb-empty";
    const label = document.createElement("span");
    label.textContent = "sem preview";
    empty.appendChild(label);
    win.appendChild(empty);
  }

  win.appendChild(body);

  const desc = document.createElement("p");
  desc.textContent = p.desc;
  body.appendChild(desc);

  if (p.meta) {
    const meta = document.createElement("span");
    meta.className = "project-meta";
    meta.textContent = p.meta;
    body.appendChild(meta);
    body.appendChild(document.createElement("br"));
  }

  if (p.stack?.length) {
    const stackList = document.createElement("ul");
    stackList.className = "project-stack";
    for (const s of p.stack) {
      const li = document.createElement("li");
      li.textContent = s;
      stackList.appendChild(li);
    }
    body.appendChild(stackList);
  }

  if (p.live || p.repo) {
    const links = document.createElement("div");
    links.className = "project-links";
    if (p.live) {
      const a = document.createElement("a");
      a.href = p.live;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "live";
      links.appendChild(a);
    }
    if (p.repo) {
      const a = document.createElement("a");
      a.href = p.repo;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "repo";
      links.appendChild(a);
    }
    body.appendChild(links);
  }

  list.appendChild(win);
}

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
