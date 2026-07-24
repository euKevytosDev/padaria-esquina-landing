# Padaria Líder — Landing Page

Landing page que fiz pra **Padaria Líder**: uma página só, mobile-first, com vitrine de produtos e botão direto pro WhatsApp.

Cliente real de freela. O código ficou organizado de um jeito que dá pra trocar texto, cor e contato sem caçar HTML espalhado — e depois virei template pra outra padaria (Braga).

## Ao vivo

https://eukevytosdev.github.io/padaria-esquina-landing/

## O que tem na página

- Hero, produtos, sobre, localização e contato  
- Menu que funciona no celular  
- WhatsApp com mensagem pronta  
- Cores e copy centralizados em arquivos de config  

## Stack

HTML · CSS · JavaScript puro (sem framework)

## Pastas

```text
padaria-esquina-landing/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css   # marca (cores, fonte, espaço)
│   └── style.css
├── js/
│   ├── config.js       # WhatsApp, endereço, textos
│   └── main.js         # menu, WhatsApp, animações
└── assets/images/
```

## Personalizar

| Arquivo | Muda o quê |
|---------|------------|
| `js/config.js` | WhatsApp, endereço, horário, textos |
| `css/variables.css` | Cores da marca |
| `assets/images/` | Fotos |

## Rodar local

```bash
git clone https://github.com/euKevytosDev/padaria-esquina-landing.git
```

Abre o `index.html` ou usa Live Server.

## Deploy (GitHub Pages)

Settings → Pages → branch `main`, pasta `/ (root)`. Em alguns minutos sobe em `https://seuusuario.github.io/padaria-esquina-landing/`.

## Continuação com o cliente

Ainda pode entrar número definitivo do WhatsApp, fotos reais, Maps no lugar do placeholder e domínio próprio.

Template reaproveitado em: [padaria-braga-landing](https://github.com/euKevytosDev/padaria-braga-landing)

## Autor

Raian Kevin — [@euKevytosDev](https://github.com/euKevytosDev) · [portfólio](https://github.com/euKevytosDev/portfolio-raian)
