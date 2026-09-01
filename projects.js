// Edite este array para adicionar/remover projetos.
// `thumb`, `meta`, `live`, `repo` e `since` sao opcionais — omita o que nao tiver.
// `since` = data em que o projeto entrou no ar (YYYY-MM-DD), usada no uptime.
export const projects = [
  {
    name: "bem-te-vi",
    desc: "App de registro de avistamentos de aves: lista de vida, mapa e ficha por espécie.",
    thumb: "img/projects/bem-te-vi.png",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Gemini API", "Docker"],
    live: "https://bem-te-vi.pages.dev/",
    since: "2026-08-29",
  },
  {
    name: "monoto",
    desc: "Em desenvolvimento — ainda sem deploy público.",
    meta: "em desenvolvimento",
    stack: ["Tauri", "React", "Rust", "SQLite"],
    repo: "https://github.com/kaelscott/monoto",
  },
];
