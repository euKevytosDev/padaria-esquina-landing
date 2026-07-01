/*
  config.js — dados da padaria em um só lugar.
  Quando o dono pedir mudança de telefone ou horário, edite só este arquivo.
*/
const PADARIA = {
  nome: "Padaria Líder",
  slogan: "Tradição e qualidade em cada fornada",

  // Apenas números: DDD + telefone (troque pelo número real)
  whatsapp: "31991141208",

  mensagemPadrao:
    "Olá! Vi o site da Padaria Líder e gostaria de mais informações.",

  // Textos genéricos — substitua quando tiver a história real
  sobre:
    "Há gerações cuidando do que sai do forno com carinho. Na Padaria Líder, " +
    "cada pão é preparado diariamente com ingredientes selecionados, " +
    "receitas de família e o compromisso de servir a vizinhança com " +
    "frescor, sabor e atendimento acolhedor.",

  endereco: "R. Cel. Gabriel de Andrade, 254 - Industrial, Contagem - MG, 32235-170",
  horario: "Segunda a sábado, das 6h às 20h · Domingo, das 6h às 12h",

  // Link do Google Maps (Compartilhar → Incorporar mapa)
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8020620167204!2d-44.04184742435196!3d-19.974824839706724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6be40215e5c2b%3A0xc1f1d51bba0a1593!2sPadaria%20Lider!5e0!3m2!1spt-BR!2sbr!4v1782918198968!5m2!1spt-BR!2sbr",

  // Categorias exibidas na barra marrom (inspirado no site de referência)
  categorias: [
    "Pães",
    "Bolos",
    "Salgados",
    "Doces",
    "Bebidas",
    "Cafés",
  ],

  // Produtos em destaque (nomes genéricos — troque pelos reais depois)
  produtos: [
    { nome: "Pão francês", imagem: "assets/images/produto-pao.jpg" },
    { nome: "Bolo caseiro", imagem: "assets/images/produto-bolo.jpg" },
    { nome: "Croissant", imagem: "assets/images/produto-croissant.jpg" },
    { nome: "Sonho", imagem: "assets/images/produto-sonho.jpg" },
  ],
};
