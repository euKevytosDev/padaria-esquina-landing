/*
  main.js — lógica da página
  Responsabilidades:
    1. Montar links do WhatsApp
    2. Preencher textos a partir do config.js
    3. Criar categorias, produtos e experiências dinamicamente
    4. Menu mobile (hambúrguer)
    5. Animação ao rolar (revelar-scroll)
*/

// ─── Utilitário: link do WhatsApp ─────────────────────
// Formato oficial: https://wa.me/55NUMERO?text=MENSAGEM
function montarLinkWhatsApp(numero, mensagem) {
  const numeroLimpo = numero.replace(/\D/g, "");
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/55${numeroLimpo}?text=${texto}`;
}

// ─── Aplica dados do config.js na página ─────────────
function preencherConteudo() {
  const linkWhats = montarLinkWhatsApp(
    PADARIA.whatsapp,
    PADARIA.mensagemPadrao
  );

  // Textos estáticos
  document.getElementById("hero-titulo").textContent = PADARIA.nome;
  document.getElementById("hero-slogan").textContent = PADARIA.slogan;
  document.getElementById("texto-sobre").textContent = PADARIA.sobre;
  document.getElementById("texto-endereco").textContent = PADARIA.endereco;
  document.getElementById("texto-horario").textContent = PADARIA.horario;
  document.getElementById("footer-nome").textContent = PADARIA.nome;

  const hero = document.querySelector(".hero");
  if (hero && PADARIA.heroImagem) {
    hero.style.setProperty("--hero-bg", `url("${PADARIA.heroImagem}")`);
  }

  const mapa = document.getElementById("mapa-embed");
  if (mapa && PADARIA.mapsEmbedUrl) {
    mapa.src = PADARIA.mapsEmbedUrl;
  }

  // Todos os botões de WhatsApp recebem o mesmo link
  const botoesWhats = [
    document.getElementById("btn-whatsapp"),
    document.getElementById("hero-cta-whatsapp"),
    document.getElementById("contato-cta-whatsapp"),
  ];

  botoesWhats.forEach((botao) => {
    if (botao) {
      botao.href = linkWhats;
      botao.setAttribute(
        "aria-label",
        `Falar com ${PADARIA.nome} no WhatsApp`
      );
    }
  });

  preencherCategorias();
  preencherProdutos();
  preencherExperiencias();
  preencherAvaliacoes();
}

// ─── Cria os chips de categoria na barra marrom ───────
function preencherCategorias() {
  const lista = document.getElementById("lista-categorias");
  if (!lista) return;

  lista.innerHTML = "";

  PADARIA.categorias.forEach((nome) => {
    const item = document.createElement("li");
    item.className = "categorias__item";
    item.textContent = nome;
    lista.appendChild(item);
  });
}

// Emojis temporários até ter fotos reais dos produtos
const EMOJI_PRODUTO = ["🥖", "🎂", "🥐", "🍩"];

// ─── Monta o grid de produtos em destaque ─────────────
function preencherProdutos() {
  const grid = document.getElementById("grid-produtos");
  if (!grid) return;

  grid.innerHTML = "";

  PADARIA.produtos.forEach((produto, indice) => {
    const card = document.createElement("article");
    card.className = "produto-card";

    const circulo = document.createElement("div");
    circulo.className = "produto-card__circulo";

    const img = document.createElement("img");
    img.className = "produto-card__img";
    img.alt = produto.nome;
    img.src = produto.imagem;

    // Se a imagem não existir ainda, mostra emoji no lugar
    img.onerror = () => {
      img.remove();
      const placeholder = document.createElement("div");
      placeholder.className = "produto-card__img produto-card__placeholder";
      placeholder.textContent = EMOJI_PRODUTO[indice] || "🥖";
      circulo.appendChild(placeholder);
    };

    circulo.appendChild(img);

    const nome = document.createElement("h3");
    nome.className = "produto-card__nome";
    nome.textContent = produto.nome;

    const inner = document.createElement("div");
    inner.className = "produto-card__inner";
    inner.append(circulo, nome);

    card.appendChild(inner);
    grid.appendChild(card);
  });
}

// ─── Monta os cards de "Experiência na padaria" ───────
function preencherExperiencias() {
  const grid = document.getElementById("grid-experiencia");
  if (!grid) return;

  grid.innerHTML = "";

  PADARIA.experiencias.forEach((item) => {
    const card = document.createElement("article");
    card.className = "experiencia-card";

    const icone = document.createElement("div");
    icone.className = "experiencia-card__icone";
    icone.textContent = item.icone;
    // Ícone é decorativo: leitores de tela leem o título/texto, não o emoji
    icone.setAttribute("aria-hidden", "true");

    const titulo = document.createElement("h3");
    titulo.className = "experiencia-card__titulo";
    titulo.textContent = item.titulo;

    const texto = document.createElement("p");
    texto.className = "experiencia-card__texto";
    texto.textContent = item.texto;

    card.append(icone, titulo, texto);
    grid.appendChild(card);
  });
}

// ─── Monta as avaliações estilo Google (sem média/total) ──
function preencherAvaliacoes() {
  const grid = document.getElementById("grid-avaliacoes");
  if (!grid || !PADARIA.avaliacoes) return;

  grid.innerHTML = "";

  // SVG de uma estrela cheia (dourada via CSS)
  const svgEstrela =
    '<svg class="avaliacao-card__estrela" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2.25l2.955 5.988 6.61.96-4.783 4.663 1.129 6.584L12 17.302l-5.911 3.143 1.129-6.584L2.435 9.198l6.61-.96L12 2.25z"/></svg>';

  PADARIA.avaliacoes.forEach((av) => {
    const nota = Math.max(0, Math.min(5, av.nota || 5));

    const card = document.createElement("article");
    card.className = "avaliacao-card";

    // Cabeçalho: avatar + (nome, quando)
    const topo = document.createElement("div");
    topo.className = "avaliacao-card__topo";

    const avatar = document.createElement("div");
    avatar.className = "avaliacao-card__avatar";

    // Cria um avatar de letra (inicial do nome) num círculo colorido
    const criarInicial = () => {
      const inicial = document.createElement("span");
      inicial.className = "avaliacao-card__inicial";
      inicial.textContent = (av.nome || "?").charAt(0).toUpperCase();
      if (av.cor) inicial.style.background = av.cor;
      return inicial;
    };

    // Com foto: usa a imagem (com fallback pra inicial). Sem foto: avatar de letra.
    if (av.foto) {
      const foto = document.createElement("img");
      foto.className = "avaliacao-card__foto";
      foto.src = av.foto;
      foto.alt = `Foto de ${av.nome}`;
      foto.loading = "lazy";
      foto.onerror = () => {
        foto.remove();
        avatar.appendChild(criarInicial());
      };
      avatar.appendChild(foto);
    } else {
      avatar.appendChild(criarInicial());
    }

    // Selo "G" do Google no canto do avatar
    const selo = document.createElement("span");
    selo.className = "avaliacao-card__selo";
    selo.setAttribute("aria-hidden", "true");
    selo.innerHTML =
      '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>';
    avatar.appendChild(selo);

    const meta = document.createElement("div");
    meta.className = "avaliacao-card__meta";

    const nome = document.createElement("p");
    nome.className = "avaliacao-card__nome";
    nome.textContent = av.nome;

    const quando = document.createElement("p");
    quando.className = "avaliacao-card__quando";
    quando.textContent = av.quando || "";

    meta.append(nome, quando);
    topo.append(avatar, meta);

    // Estrelas
    const estrelas = document.createElement("div");
    estrelas.className = "avaliacao-card__estrelas";
    estrelas.setAttribute("role", "img");
    estrelas.setAttribute("aria-label", `${nota} de 5 estrelas`);
    estrelas.innerHTML = svgEstrela.repeat(nota);

    // Texto do comentário
    const texto = document.createElement("p");
    texto.className = "avaliacao-card__texto";
    texto.textContent = `"${av.texto}"`;

    card.append(topo, estrelas, texto);
    grid.appendChild(card);
  });
}

// ─── Menu hambúrguer (mobile) ─────────────────────────
function configurarMenu() {
  const btnMenu = document.getElementById("btn-menu");
  const nav = document.getElementById("nav-principal");

  if (!btnMenu || !nav) return;

  btnMenu.addEventListener("click", () => {
    const aberto = nav.classList.toggle("header__nav--aberto");
    btnMenu.classList.toggle("header__menu-btn--aberto", aberto);
    btnMenu.setAttribute("aria-expanded", aberto);
  });

  // Fecha o menu ao clicar em um link
  nav.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("header__nav--aberto");
      btnMenu.classList.remove("header__menu-btn--aberto");
      btnMenu.setAttribute("aria-expanded", "false");
    });
  });
}

// ─── Animação ao rolar (mesma ideia do site de casamento) ──
function configurarRevelarScroll() {
  const elementos = document.querySelectorAll(".revelar-scroll");
  if (elementos.length === 0) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elementos.forEach((el) => observador.observe(el));
}

// ─── Inicialização ────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  preencherConteudo();
  configurarMenu();
  configurarRevelarScroll();
});
