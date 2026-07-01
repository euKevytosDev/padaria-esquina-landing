/*
  config.js — dados da padaria em um só lugar.
  Quando o dono pedir mudança de telefone ou horário, edite só este arquivo.
*/
const PADARIA = {
  nome: "Padaria Líder",
  slogan: "Tradição e qualidade em cada fornada",

  // Apenas números: DDD + telefone (troque pelo número real)
  whatsapp: "00000000000",

  mensagemPadrao:
    "Olá! Vi o site da Padaria Líder e gostaria de mais informações.",

  // Textos genéricos — substitua quando tiver a história real
  sobre:
    "Há gerações cuidando do que sai do forno com carinho. Na Padaria Líder, " +
    "cada pão é preparado diariamente com ingredientes selecionados, " +
    "receitas de família e o compromisso de servir a vizinhança com " +
    "frescor, sabor e atendimento acolhedor.",

  endereco: "Rua da Padaria, 100 — Centro",
  horario: "Segunda a sábado, das 6h às 20h · Domingo, das 6h às 12h",

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
