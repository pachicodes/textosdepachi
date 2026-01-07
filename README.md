# Pachi Rangel — Blog de Escrita

Um blog pessoal para contos, crônicas, poemas e reflexões sobre escrita.

Feito com [Eleventy](https://www.11ty.dev/).

---

## 🚀 Como usar

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/pachi-rangel-blog.git
cd pachi-rangel-blog

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicia o servidor local com hot-reload
npm start
```

O site estará disponível em `http://localhost:8080`

### Build para produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `_site/`

---

## 📁 Estrutura do projeto

```
blog-escrita/
├── src/
│   ├── _includes/       # Componentes reutilizáveis
│   ├── _layouts/        # Templates de página
│   │   ├── base.njk     # Layout principal
│   │   └── post.njk     # Layout para posts
│   ├── css/
│   │   └── style.css    # Estilos do site
│   ├── contos/          # Seus contos em Markdown
│   ├── cronicas/        # Suas crônicas em Markdown
│   ├── poemas/          # Seus poemas em Markdown
│   ├── escrita/         # Textos sobre escrita
│   ├── index.njk        # Página inicial
│   ├── sobre.md         # Página Sobre
│   └── contato.md       # Página de Contato
├── .eleventy.js         # Configuração do Eleventy
├── package.json
└── README.md
```

---

## ✍️ Como adicionar conteúdo

### Criar um novo conto

Crie um arquivo `.md` em `src/contos/`:

```markdown
---
layout: post.njk
title: "Título do seu conto"
date: 2024-12-15
excerpt: "Uma breve descrição do conto"
tags:
  - conto
  - ficção
---

Aqui começa o seu texto...
```

### Criar uma nova crônica

Crie um arquivo `.md` em `src/cronicas/`:

```markdown
---
layout: post.njk
title: "Título da crônica"
date: 2024-12-15
excerpt: "Breve descrição"
tags:
  - cronica
  - cotidiano
---

Seu texto aqui...
```

### Criar um novo poema

Crie um arquivo `.md` em `src/poemas/`:

```markdown
---
layout: post.njk
title: "Título do poema"
date: 2024-12-15
tags:
  - poema
---

<div class="poema">

<div class="estrofe">
Primeira estrofe
do seu poema
</div>

<div class="estrofe">
Segunda estrofe
continua aqui
</div>

</div>
```

---

## 🌐 Deploy no GitHub Pages

O blog já está configurado para deploy automático no GitHub Pages.

### Passo a passo:

1. **Crie um repositório** no GitHub

2. **Faça o push do código:**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages:**
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"

4. **Pronto!** O site será publicado automaticamente em:
   `https://seu-usuario.github.io/seu-repo/`

---

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `src/css/style.css`:

```css
:root {
  --bg-color: #e8f5e9;        /* Cor de fundo */
  --text-color: #2d3436;       /* Cor do texto */
  --accent-color: #4a7c59;     /* Cor de destaque */
  --link-color: #2d5a3d;       /* Cor dos links */
  --border-color: #a5d6a7;     /* Cor das bordas */
}
```

### Fontes

O blog usa:
- **Special Elite** — Para títulos (estilo máquina de escrever)
- **Courier Prime** — Para o corpo do texto

Você pode trocar as fontes editando os links do Google Fonts no `base.njk`.

---

## 📝 Licença

MIT — use como quiser!

---

Feito com 💚 por Pachi Rangel
