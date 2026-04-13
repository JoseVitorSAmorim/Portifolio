# 🚀 Guia de Deploy no GitHub Pages

Este portfólio é uma **aplicação estática (SPA)** - não requer backend ou banco de dados. É um cartão de visita digital completo em HTML, CSS e JavaScript.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Um repositório no GitHub

## 🔧 Passo 1: Preparar o Repositório

### 1.1 Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. **Nome**: `seu-username.github.io` (substitua `seu-username` por seu username do GitHub)
   - ⚠️ Importante: O nome deve ser exatamente assim para o Pages funcionar
4. Selecione **"Public"**
5. Clique em **"Create repository"**

### 1.2 Alternativa: Repositório com Nome Diferente

Se quiser um nome diferente (ex: `portfolio`):
1. Crie um repositório com o nome desejado
2. Faça o push dos arquivos
3. Vá em **Settings** → **Pages**
4. Selecione a branch `main` (ou `master`) e pasta `/ (root)`
5. Clique em **Save**

## 💻 Passo 2: Upload dos Arquivos

### Opção A: Usando Git (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USERNAME/seu-username.github.io.git
cd seu-username.github.io

# 2. Copie todos os arquivos do portfólio para este diretório
# (index.html, style.css, script.js, .gitignore, .nojekyll)

# 3. Adicione os arquivos
git add .

# 4. Commit
git commit -m "Inicial: Portfolio pessoal"

# 5. Push para o GitHub
git push -u origin main
```

### Opção B: Upload Direto (Mais Simples)

1. No repositório do GitHub, clique em **"Add file"** → **"Upload files"**
2. Arraste e solte seus arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `.nojekyll`
   - `.gitignore`
3. Clique em **"Commit changes"**

## ✅ Passo 3: Ativar GitHub Pages

1. Vá em **Settings** do repositório
2. Procure por **"Pages"** na lateral esquerda
3. Em **"Source"**, selecione:
   - Branch: `main` (ou `master`)
   - Pasta: `/ (root)`
4. Clique em **"Save"**
5. Aguarde 1-2 minutos

## 🌐 Passo 4: Acessar seu Portfólio

Após alguns minutos, seu portfólio estará disponível em:

- Se repositório `seu-username.github.io`: `https://seu-username.github.io`
- Outras repos: `https://seu-username.github.io/nome-do-repo`

## 📝 Customizações Importantes

### Adicionar Seu Nome
Edite o `index.html` e procure por:
- "Seu Nome" no footer
- "seu.email@exemplo.com" na seção de contato
- Textos do hero e about

### Adicionar Links Sociais
No footer, atualize os links dos ícones:
```html
<a href="https://github.com/seu-username" class="social-link" title="GitHub">
<a href="https://linkedin.com/in/seu-perfil" class="social-link" title="LinkedIn">
```

### Adicionar Funcionalidade de Email (Opcional)

O formulário é visual por padrão. Para adicionar funcionalidade real, escolha uma opção:

#### Opção 1: Formspree (Recomendado - Grátis)
1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta e registre seu projeto
3. Receba um endpoint único
4. Atualize o formulário no `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

#### Opção 2: EmailJS (Sem Backend)
1. Acesse [emailjs.com](https://emailjs.com)
2. Crie uma conta
3. Configure um serviço de email
4. Adicione o script no `index.html`
5. Configure no `script.js`

#### Opção 3: Netlify Forms
Se fizer deploy no Netlify em vez do GitHub Pages:
1. Use o atributo `netlify` no formulário
2. Pronto! Receberá emails automaticamente

## 🔄 Atualizando o Portfólio

Sempre que fazer alterações:

```bash
# 1. Faça as alterações nos arquivos
# 2. Staging das mudanças
git add .

# 3. Commit com mensagem descritiva
git commit -m "Atualizações: Adicionar novo projeto"

# 4. Push para o GitHub
git push
```

As mudanças aparecem automaticamente no seu site em poucos minutos!

## 🎯 Dicas de Manutenção

- ✅ Adicione novos projetos regularmente
- ✅ Mantenha os links sociais atualizados
- ✅ Revise a descrição pessoal periodicamente
- ✅ Teste em diferentes navegadores
- ✅ Verifique responsividade em mobile

## 🌐 Domínio Customizado (Opcional)

Se quiser usar seu próprio domínio:

1. Vá em **Settings** → **Pages**
2. Em **"Custom domain"**, adicione seu domínio
3. Configure os registros DNS no seu provedor de domínio
4. Aguarde a validação (até 24 horas)

## 📊 Protótipo do Repositório

```
seu-username.github.io/
├── index.html          # Estrutura principal
├── style.css           # Estilos (azul + amarelo)
├── script.js           # Interatividade
├── .gitignore          # Arquivos ignorados
├── .nojekyll           # Desabilita Jekyll
└── README.md           # Documentação
```

## ✨ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Arquivos fazem upload
- [ ] GitHub Pages ativado
- [ ] Site acessível em `https://seu-username.github.io`
- [ ] Nome personalizado editado
- [ ] Email atualizado
- [ ] Links sociais configurados
- [ ] Projetos personalizados
- [ ] Testado em mobile e desktop

## 🆘 Troubleshooting

### Site não aparece após 10 minutos
1. Verifique se o repositório é **público**
2. Confirme que está em **Settings** → **Pages**
3. Verifique se o nome é `seu-username.github.io` (regra de ouro!)

### Estilos não carregam
1. Verifique se todos os arquivos foram enviados
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Verifique o console (F12) para erros

### Formulário não funciona
- Por padrão, é apenas visual
- Integre Formspree ou EmailJS conforme instruzido acima

---

**Status do Portfólio**: ✅ Pronto para deploy  
**Tipo**: SPA Estática (HTML + CSS + JavaScript)  
**Hosting**: GitHub Pages (Grátis e ilimitado)

Bom deployment! 🎉
