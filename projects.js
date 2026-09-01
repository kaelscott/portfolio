// Edite este array para adicionar/remover projetos.
// `thumb`, `meta`, `live` e `repo` sao opcionais — omita o que nao tiver.
export const projects = [
  {
    name: "bem-te-vi",
    desc: "App de registro de avistamentos de aves: lista de vida, mapa e ficha por espécie.",
    thumb: "img/projects/bem-te-vi.png",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Gemini API", "Docker"],
    live: "https://bem-te-vi.pages.dev/",
  },
  {
    name: "monoto",
    desc: "Em desenvolvimento — ainda sem deploy público.",
    meta: "em desenvolvimento",
    stack: ["Tauri", "React", "Rust", "SQLite"],
    repo: "https://github.com/kaelscott/monoto",
  },
];
