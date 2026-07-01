/*
  main.js — lógica da página
  Responsabilidades:
    1. Montar links do WhatsApp
    2. Preencher textos a partir do config.js
    3. Criar categorias e produtos dinamicamente
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

    card.append(circulo, nome);
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
