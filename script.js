// ============================================================
// CONFIGURAÇÃO DOS QUIZZES
// ------------------------------------------------------------
// Troque os caminhos abaixo pelos endereços dos seus 16 quizzes.
// Exemplos:
//   "8ano/matematica/index.html"  -> se os arquivos estiverem
//                                    dentro da mesma pasta do portal
//   "https://meusite.com/matematica8" -> se estiverem publicados
//                                    na internet.
// ============================================================

const quizzes = {
  "8º Ano": {
    "Português": "https://jonataspereira-prog.github.io/quiz-8-portugues/",
    "Matemática": "https://jonataspereira-prog.github.io/quiz-8-matematica/",
    "Ciências": "https://jonataspereira-prog.github.io/quiz-8-ciencias/",
    "Geografia": "https://jonataspereira-prog.github.io/quiz-8-geografia/",
    "História": "https://jonataspereira-prog.github.io/quiz-8-historia/",
    "Inglês": "https://jonataspereira-prog.github.io/quiz-8-ingles/",
    "Arte": "https://jonataspereira-prog.github.io/quiz-8-arte/",
    "Educação Física": "https://jonataspereira-prog.github.io/quiz-8-ed.fisica/"
  },

  "9º Ano": {
    "Português": "https://jonataspereira-prog.github.io/quiz-9-portugues/",
    "Matemática": "https://jonataspereira-prog.github.io/quiz-9-matematica/",
    "Ciências": "https://jonataspereira-prog.github.io/quiz-9-ciencias/",
    "Geografia": "https://jonataspereira-prog.github.io/quiz-9-geografia/",
    "História": "https://jonataspereira-prog.github.io/quiz-9-historia/",
    "Inglês": "https://jonataspereira-prog.github.io/quiz-9-ingles/",
    "Arte": "https://jonataspereira-prog.github.io/quiz-9-arte/",
    "Educação Física": "https://jonataspereira-prog.github.io/quiz-9-ed.fisica/"
  }
};

const dadosDisciplinas = {
  "Matemática":       { icone: "💵",   cor: "#2563eb" },
  "Português":        { icone: "📖",  cor: "#ef4444" },
  "Ciências":         { icone: "🧪",  cor: "#65a30d" },
  "Geografia":        { icone: "🌎",  cor: "#f59e0b" },
  "História":         { icone: "🏛️", cor: "#9333ea" },
  "Inglês":           { icone: "🗽", cor: "#0284c7" },
  "Arte":             { icone: "🎨",  cor: "#ec4899" },
  "Educação Física":  { icone: "⚽",  cor: "#14b8a6" }
};

const telaSeries = document.getElementById("tela-series");
const telaDisciplinas = document.getElementById("tela-disciplinas");
const tituloSerie = document.getElementById("titulo-serie");
const grid = document.getElementById("disciplinas-grid");
const btnVoltar = document.getElementById("btn-voltar");

document.querySelectorAll(".serie-card").forEach(card => {
  card.addEventListener("click", () => {
    mostrarDisciplinas(card.dataset.serie);
  });
});

btnVoltar.addEventListener("click", () => {
  telaDisciplinas.classList.remove("ativa");
  telaSeries.classList.add("ativa");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function mostrarDisciplinas(serie) {
  tituloSerie.textContent = serie.toUpperCase();
  grid.innerHTML = "";

  Object.entries(quizzes[serie]).forEach(([disciplina, link]) => {
    const info = dadosDisciplinas[disciplina];

    const card = document.createElement("button");
    card.className = "disciplina";
    card.style.setProperty("--cor", info.cor);
    card.setAttribute("aria-label", `Abrir quiz de ${disciplina}`);

    card.innerHTML = `
      <span class="icone">${info.icone}</span>
      <span class="nome-disciplina">${disciplina}</span>
      <span class="instrucao">Clique para jogar</span>
    `;

    card.addEventListener("click", () => {
      // O navegador abrirá o quiz no mesmo endereço.
      // Para abrir em nova aba, troque por:
      // window.open(link, "_blank");
      window.location.href = link;
    });

    grid.appendChild(card);
  });

  telaSeries.classList.remove("ativa");
  telaDisciplinas.classList.add("ativa");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
