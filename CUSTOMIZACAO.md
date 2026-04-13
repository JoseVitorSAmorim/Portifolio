# 🎨 Guia de Customização do Portfólio

Este portfólio foi criado como um **cartão de visita digital estático**. Abaixo estão todas as customizações que você pode fazer.

## 📝 Informações Pessoais

### 1. Nome e Profissão (Hero Section)

**Arquivo**: `index.html` | **Linhas**: ~24-26

Procure por:
```html
<h1 class="hero-title">Olá, eu sou um <span class="highlight">Desenvolvedor</span></h1>
<p class="hero-subtitle">Criando soluções digitais inovadoras com código limpo e design moderno</p>
```

Troque por:
```html
<h1 class="hero-title">Olá, eu sou o <span class="highlight">João Silva</span></h1>
<p class="hero-subtitle">Desenvolvedor Full-Stack | Transformo ideias em soluções web</p>
```

---

### 2. Descrição Pessoal (About Section)

**Arquivo**: `index.html` | **Linhas**: ~83-93

Encontre a seção "Sobre Mim" e atualize os parágrafos conforme sua história.

Exemplo:
```html
<p>
    Sou um desenvolvedor apaixonado por criar aplicações web que resolvem 
    problemas reais. Especializado em React e Node.js, com 3 anos de experiência 
    em startups e agências.
</p>
```

---

### 3. Estatísticas (About Section)

**Arquivo**: `index.html` | **Linhas**: ~95-110

```html
<div class="stat">
    <h3>3+</h3>
    <p>Anos de Experiência</p>
</div>
<div class="stat">
    <h3>15+</h3>
    <p>Projetos Completos</p>
</div>
<div class="stat">
    <h3>10+</h3>
    <p>Clientes Satisfeitos</p>
</div>
```

---

## 💻 Habilidades (Skills)

**Arquivo**: `index.html` | **Linhas**: ~130-160

Cada skill é um card. Modelo:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-html5"></i>
    </div>
    <h3>Frontend</h3>
    <p>HTML, CSS, JavaScript, React, Vue.js</p>
</div>
```

### Adicionar Nova Skill
Copie um card existente e adapte:
- Ícone: Procure em [Font Awesome](https://fontawesome.com)
- Título: Nome da categoria
- Descrição: Ferramentas e tecnologias

**Ícones Úteis disponíveis**:
- `fas fa-html5` - HTML
- `fab fa-node-js` - Node.js
- `fas fa-database` - Banco de dados
- `fab fa-git-alt` - Git/Versionamento
- `fas fa-mobile-alt` - Mobile
- `fas fa-pen-nib` - Design

---

## 🚀 Projetos

**Arquivo**: `index.html` | **Linhas**: ~175-280

### Estrutura de um Projeto
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-shopping-cart"></i>
    </div>
    <div class="project-content">
        <h3>E-commerce Moderno</h3>
        <p>Descrição do projeto...</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
        </div>
        <a href="https://seu-link.com" class="project-link">Ver Projeto <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

### O Que Personalizar

#### Ícone do Projeto
Escolha um ícone relevante em [Font Awesome](https://fontawesome.com):
- `fas fa-shopping-cart` - E-commerce
- `fas fa-tasks` - To-do/Tarefas
- `fas fa-chart-bar` - Analytics/Dados
- `fas fa-users` - Social Network
- `fas fa-video` - Vídeo/Streaming
- `fas fa-code` - Código/Dev Tools

#### Título e Descrição
```html
<h3>Seu Projeto</h3>
<p>Descrição breve do que o projeto faz, tecnologias usadas, resultado alcançado.</p>
```

#### Tags (Tecnologias)
```html
<span class="tag">React</span>
<span class="tag">Firebase</span>
<span class="tag">Tailwind CSS</span>
```

#### Link do Projeto
```html
<a href="https://seu-projeto.com" class="project-link">Ver Projeto <i class="fas fa-arrow-right"></i></a>
```

Ou para repositório GitHub:
```html
<a href="https://github.com/seu-username/nome-repo" class="project-link">Ver no GitHub <i class="fas fa-arrow-right"></i></a>
```

---

## 📞 Contato (Contact Section)

**Arquivo**: `index.html` | **Linhas**: ~290-340

### Email
```html
<p>seu.email@exemplo.com</p>
```
⚠️ Note: Este é apenas um texto. Para fazer funcionar, veja [DEPLOYMENT.md](DEPLOYMENT.md)

### Telefone
```html
<p>(11) 99999-9999</p>
```

### Localização
```html
<p>São Paulo, Brasil</p>
```

---

## 🔗 Redes Sociais (Footer)

**Arquivo**: `index.html` | **Linhas**: ~350-370

```html
<a href="https://github.com/seu-username" class="social-link" title="GitHub">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/seu-perfil" class="social-link" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://twitter.com/seu-usuario" class="social-link" title="Twitter">
    <i class="fab fa-twitter"></i>
</a>
<a href="https://instagram.com/seu-usuario" class="social-link" title="Instagram">
    <i class="fab fa-instagram"></i>
</a>
```

**Links suportados no Font Awesome**:
- GitHub: `fab fa-github`
- LinkedIn: `fab fa-linkedin`
- Twitter: `fab fa-twitter`
- Instagram: `fab fa-instagram`
- WhatsApp: `fab fa-whatsapp`
- Email: `fas fa-envelope`

---

## 🎨 Cores e Design

### Alterar Paleta de Cores

**Arquivo**: `style.css` | **Linhas**: 1-10

```css
:root {
    --primary-blue: #0047AB;      /* Azul principal */
    --dark-blue: #002D7A;         /* Azul escuro */
    --light-blue: #0066CC;        /* Azul claro */
    --accent-yellow: #FFD700;     /* Amarelo/Accent */
    --light-yellow: #FFF44F;      /* Amarelo claro */
    ...
}
```

Se quiser trocar para outra paleta, altere os valores HEX.

**Exemplo - Paleta Purple & Orange**:
```css
--primary-blue: #7C3AED;      /* Purple */
--dark-blue: #6D28D9;         /* Dark Purple */
--accent-yellow: #FB923C;     /* Orange */
```

### Adicionar Fonte Customizada (Google Fonts)

**Arquivo**: `index.html` | Adicione no `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
```

**Arquivo**: `style.css` | Atualize a fonte:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

---

## 📱 Responsividade

O portfólio já é 100% responsivo, mas se quiser ajustar:

**Arquivo**: `style.css` | **Linhas**: 650+

Procure por `@media (max-width: 768px)` para editar o design mobile.

---

## ⚙️ JavaScript - Adicionar Funcionalidades

**Arquivo**: `script.js`

### Exemplo: Adicionar Analytics (Google Analytics)

No final do `</body>` no `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXXXX');
</script>
```

Substitua `G-XXXXXXXXXXXX` pelo seu ID do Google Analytics.

---

## 📄 Informações Extras

### README (Este arquivo)

Se quiser documentação adicional:
```html
<!-- Link no footer -->
<a href="README.md">Documentação</a>
```

### SEO - Otimizar para Busca

**Arquivo**: `index.html` | **Linhas**: 1-10

```html
<title>João Silva - Desenvolvedor Full Stack</title>
<meta name="description" content="Portfólio de João Silva, desenvolvedor full-stack especializado em React e Node.js">
<meta name="keywords" content="desenvolvedor, web, react, nodejs, frontend, backend">
<meta name="author" content="Seu Nome">
```

---

## ✅ Checklist de Customização

- [ ] Nome e profissão atualizados
- [ ] Descrição pessoal escrita
- [ ] Estatísticas atualizadas
- [ ] Skills personalizados
- [ ] Projetos adicionados (mínimo 3)
- [ ] Informações de contato corretas
- [ ] Links sociais funcionando
- [ ] Testado em mobile
- [ ] Testado em diferentes navegadores

---

## 🆘 Precisa de Ajuda?

Se não encontrou o que precisa:
1. Use Ctrl+F para buscar no HTML5. Procure por palavras-chave
2. Consulte [Font Awesome docs](https://fontawesome.com) para mais ícones
3. Use ferramentas como [Coolors.co](https://coolors.co) para explorar cores

---

**Última atualização**: 13 de abril de 2026  
**Versão**: 1.0 (Estática - Sem backend)
