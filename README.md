# Plataforma Rosa - Landing Page 2026

Uma landing page profissional, responsiva e funcional desenvolvida com HTML, CSS e JavaScript puro.

## 📋 Características

✅ **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop  
✅ **Countdown Timer Funcional** - Atualização em tempo real  
✅ **Design Moderno** - Baseado no design original com tons escuros e rosa/magenta  
✅ **Performance Otimizada** - CSS e JS otimizados, sem dependências externas  
✅ **Acessibilidade** - Semântica HTML correta  
✅ **Animações Suaves** - Transições e efeitos visuais polidos  
✅ **Cross-browser** - Funciona em todos os navegadores modernos  

## 🚀 Como Usar

### Opção 1: Arquivo Local

1. Baixe os 3 arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Coloque-os na mesma pasta

3. Abra o `index.html` no navegador

### Opção 2: Servidor Web

Para melhor performance, use um servidor web local:

```bash
# Se tiver Python 3 instalado:
python -m http.server 8000

# Se tiver Node.js:
npx http-server

# Se tiver PHP:
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📱 Breakpoints Responsivos

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: até 767px
- **Extra Small**: até 480px

## 🎨 Cores e Variáveis CSS

```css
--primary-color: #E91E7D;        /* Rosa principal */
--secondary-color: #FF1493;      /* Rosa secundário */
--dark-bg: #0A0A0A;              /* Fundo escuro */
--text-primary: #FFFFFF;         /* Texto principal */
--text-secondary: #B0B0B0;       /* Texto secundário */
--accent-color: #8B4A5C;         /* Cor de destaque */
```

## ⏱️ Configurar Countdown Timer

Para alterar a data de término do countdown, edite o arquivo `script.js`:

```javascript
// Procure por esta linha (aproximadamente na linha 15):
const targetDate = new Date('2026-01-05T23:59:59').getTime();

// Altere a data conforme necessário:
const targetDate = new Date('2026-01-10T23:59:59').getTime();
```

## 📁 Estrutura de Arquivos

```
projeto/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos CSS (responsive)
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🔧 Personalização

### Alterar Textos
Abra o `index.html` e edite o conteúdo diretamente dentro das tags HTML.

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css` (linhas 6-14):

```css
:root {
    --primary-color: #E91E7D;
    /* ... altere conforme necessário */
}
```

### Adicionar Imagens
Substitua o SVG placeholder na seção `.platform-image`:
```html
<div class="platform-image">
    <img src="sua-imagem.jpg" alt="Descrição" loading="lazy">
</div>
```

## 📊 Componentes Principais

### 1. Header com Countdown
- Timer atualizado em tempo real
- Responsivo em todos os dispositivos
- Animação suave de mudança de valores

### 2. Hero Section
- Título destacado com highlight
- CTA principal chamativo
- Descrição clara do valor

### 3. Features Grid
- 3 cards com informações de benefícios
- Numeração destacada
- Hover effects interativos

### 4. Platform Section
- Layout com texto e imagem
- Estatísticas lado a lado
- Responsive grid

### 5. Testimonial
- Citação formatada com destaque
- Informações do autor
- Design elegant

### 6. Final CTA
- Call-to-action final
- Botão destacado
- Background distintivo

## 🎯 SEO Básico

Para melhor SEO, customize o arquivo `index.html`:

```html
<head>
    <title>Sua Página - Descrição</title>
    <meta name="description" content="Descrição curta da página">
    <meta name="keywords" content="palavras-chave, relacionadas">
</head>
```

## ⚡ Performance

- Sem dependências externas (jQuery, Bootstrap, etc)
- CSS otimizado e minificado manualmente
- JavaScript eficiente com Intersection Observer
- Lazy loading nativo para imagens
- Animações via CSS para melhor performance

## 🔗 Links e Botões

Para fazer os botões funcionarem, atualize os `href` ou adicione eventos:

```html
<!-- Opção 1: Link externo -->
<a href="https://seu-link.com" class="btn btn-primary">
    Texto do Botão
</a>

<!-- Opção 2: Com JavaScript -->
<button class="btn btn-primary" onclick="redirecionar()">
    Texto do Botão
</button>
```

## 📞 Contato WhatsApp (Exemplo)

Para integrar WhatsApp, adicione esta função no `script.js`:

```javascript
function abrirWhatsApp() {
    const numero = '5598999999999'; // Seu número
    const mensagem = 'Olá! Gostaria de mais informações sobre a Plataforma Rosa';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
```

E no botão:
```html
<button class="btn btn-primary" onclick="abrirWhatsApp()">
    Entrar no Grupo WhatsApp
</button>
```

## 🐛 Troubleshooting

### Countdown não atualiza
- Verifique se o JavaScript está ativo
- Verifique a data no `script.js`
- Abra o console (F12) para erros

### Botões não respondem
- Verifique se `script.js` está sendo carregado
- Confira os IDs dos elementos no HTML

### Problemas de responsividade
- Limpe o cache do navegador (Ctrl+F5)
- Teste em um novo abas anônima
- Verifique o viewport no DevTools

## 📚 Tecnologias Usadas

- **HTML5** - Semântica e estrutura
- **CSS3** - Flexbox, Grid, Media Queries
- **JavaScript Vanilla** - Sem frameworks
- **CSS Variables** - Temas dinâmicos

## 📄 Licença

Livre para usar e modificar conforme necessário.

---

**Desenvolvido com ❤️ para Plataforma Rosa**

Última atualização: Janeiro de 2026
