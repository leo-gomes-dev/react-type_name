# Name Displayer App

Uma aplicação web minimalista desenvolvida em React que captura o texto digitado pelo usuário em tempo real e o renderiza em destaque na tela após o envio do formulário.

---

## Sobre o Projeto (About)

O **Name Displayer App** é um projeto de página única (SPA) focado na demonstração prática de conceitos essenciais do ecossistema React e CSS moderno. A aplicação monitora o estado de um campo de entrada, exibe um feedback visual instantâneo do que está sendo digitado e atualiza o cabeçalho principal de forma reativa assim que o formulário é submetido.

### Funcionalidades Principais

- **Feedback em tempo real**: Exibe o texto "Digitando: [...]" dinamicamente antes do envio.
- **Validação simples**: Impede o envio de campos vazios ou preenchidos apenas com espaços.
- **Persistência local de estado**: Gerenciamento limpo com React Hooks (`useState`).
- **Interface customizada**: Estilização baseada em variáveis globais de CSS (`:root`) para consistência visual.

---

## Design e Estilização

A aplicação utiliza um tema escuro (_Dark Mode_) com a seguinte arquitetura de estilos:

- **Centralização Absoluta**: Grid/Flexbox para manter o conteúdo focado no centro da tela.
- **Componentização Visual**: Estados de `focus` nos inputs e efeitos de `hover` nos botões.
- **Animações Fluidas**: Feedback visual utilizando `@keyframes fadeIn` na exibição do texto.

---

## Tecnologias Utilizadas

- **React** (Biblioteca Javascript para construção de interfaces)
- **JavaScript (ES6+)**
- **CSS3** (Variáveis CSS, Flexbox, Animações)

---

## Estrutura de Arquivos Base

```bash
src/
 ├── App.css       # Estilos específicos do container e formulário
 ├── App.jsx       # Componente principal e lógica de estado
 └── index.css     # Reset global e variáveis de cores do tema
```

---

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/leo-gomes-dev/type_name.git
   ```

2. **Entre na pasta do projeto:**

   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
