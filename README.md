# Padaria Líder — Landing Page

Landing page **mobile-first** desenvolvida como projeto freelancer para a **Padaria Líder**, com foco em presença digital, vitrine de produtos e contato rápido via WhatsApp.

## Demo

- Site ao vivo: https://eukevytosdev.github.io/padaria-esquina-landing/
- Repositório: https://github.com/euKevytosDev/padaria-esquina-landing

## Sobre o projeto

Site institucional de uma página só, pensado para clientes que acessam pelo celular. A estrutura foi organizada para facilitar a personalização: textos, cores e dados da padaria ficam separados em arquivos específicos.

Este projeto também serviu de **template base** para a landing da Padaria Braga.

## Stack

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Reset, variáveis de marca, layout responsivo |
| JavaScript (vanilla) | Menu, WhatsApp, animações e interações |

## Funcionalidades

- Layout responsivo (mobile-first)
- Botão de WhatsApp com mensagem pré-definida
- Menu de navegação com versão mobile
- Seções: hero, produtos, sobre, localização e contato
- Cores e textos centralizados em arquivos de configuração

## Estrutura de pastas

```text
padaria-esquina-landing/
├── index.html              # Estrutura da página (com comentários)
├── css/
│   ├── reset.css           # Zera estilos padrão do navegador
│   ├── variables.css       # Cores, fontes e espaçamentos da marca
│   └── style.css           # Layout e visual
├── js/
│   ├── config.js           # Dados da padaria (edite aqui!)
│   └── main.js             # WhatsApp, menu, animações
└── assets/images/
    └── logo-placa.png      # Logo / foto da placa
```

## O que editar para personalizar

| Arquivo | O que mudar |
|---|---|
| `js/config.js` | WhatsApp, endereço, horário, textos |
| `css/variables.css` | Cores da marca |
| `assets/images/` | Fotos reais dos produtos |

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/euKevytosDev/padaria-esquina-landing.git
   ```
2. Abra `index.html` no navegador ou use **Live Server**.
3. Para testar no celular: publique no GitHub Pages ou use o IP da sua máquina na rede local.

## Deploy (GitHub Pages)

1. Repositório → **Settings** → **Pages**
2. Source: branch `main`, pasta `/ (root)`
3. Aguarde alguns minutos — o site ficará em `https://seuusuario.github.io/padaria-esquina-landing/`

## Próximos passos (com o cliente)

- [ ] Número real do WhatsApp
- [ ] Endereço e horário definitivos
- [ ] Fotos dos produtos
- [ ] Google Maps no lugar do placeholder
- [ ] Domínio próprio (opcional)

## Projeto relacionado

- Template reutilizado em: [padaria-braga-landing](https://github.com/euKevytosDev/padaria-braga-landing)

## Autor

**Raian Kevin** — Desenvolvedor Front-end

- GitHub: [@euKevytosDev](https://github.com/euKevytosDev)
- Portfólio: [portfolio-raian](https://github.com/euKevytosDev/portfolio-raian)
