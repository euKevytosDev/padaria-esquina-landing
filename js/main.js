// Monta o link do WhatsApp e aplica no botão
// Formato: https://wa.me/55NUMERO?text=MENSAGEM

function montarLinkWhatsApp(numero, mensagem) {
  const numeroLimpo = numero.replace(/\D/g, "");
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/55${numeroLimpo}?text=${texto}`;
}

// TODO (você): leia o código abaixo, entenda o fluxo e teste no navegador
const botao = document.getElementById("btn-whatsapp");

if (botao && typeof PADARIA !== "undefined") {
  botao.href = montarLinkWhatsApp(PADARIA.whatsapp, PADARIA.mensagemPadrao);
  botao.setAttribute("aria-label", `Falar com ${PADARIA.nome} no WhatsApp`);
}
