
# ConectaReab - Frontend

Projeto frontend da plataforma **ConectaReab**, desenvolvido em **React** com **TypeScript** e **Tailwind CSS**. Este projeto contém componentes reutilizáveis para construção da interface, incluindo cards, FAQ, layout principal e footer.

---

## Tecnologias

- React
- TypeScript
- Tailwind CSS
- React Router DOM

---

## Estrutura de Componentes



src/
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis
│   ├── FaqItem.tsx
│   ├── FeatureCard.tsx
│   ├── Footer.tsx
│   ├── InfoCard.tsx
│   ├── Layout.tsx
│   ├── Loading.tsx
│   └── MemberCard.tsx
├── types/           # Tipos TypeScript
└── App.tsx



---

## Componentes Principais

### `FaqItem`
Componente de FAQ expansível:
- Props:
  - `question`: string — pergunta da FAQ.
  - `answer`: string — resposta da FAQ.
- Permite abrir e fechar a resposta com animação suave.

### `FeatureCard`
Card de funcionalidades do projeto:
- Props:
  - `number`: string — número ou índice da funcionalidade.
  - `title`: string — título da funcionalidade.
  - `description`: string — descrição da funcionalidade.

### `Footer`
Rodapé do site:
- Links para páginas principais, suporte e informações sobre o projeto.
- Inclui logo com link externo.

### `InfoCard`
Card com background de imagem:
- Props:
  - `title`: string — título do card.
  - `description`: string — descrição do card.
  - `backgroundImage`: string — URL da imagem de fundo.
  - `className?`: string — classes adicionais opcionais.

### `Layout`
Componente que define a estrutura da página:
- Navbar com links de navegação.
- Área principal com `Outlet` do React Router.
- Footer incluso.

### `Loading`
Componente simples de loading:
- Exibe mensagem "Carregando..." com animação `pulse`.

### `MemberCard`
Card de integrante da equipe:
- Props:
  - `member`: objeto com informações do integrante (`name`, `rm`, `description`, `quote`, `image`, `linkedin`, `github`, `layout`).
- Layout flexível (imagem à esquerda ou direita).
- Links para GitHub e LinkedIn do integrante.

---

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/conectareab-frontend.git
````

2. Entre na pasta do projeto:

```bash
cd conectareab-frontend
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

---

## Uso

* Configure as rotas no `React Router` usando o componente `Layout`.
* Utilize os componentes `FaqItem`, `FeatureCard`, `InfoCard` e `MemberCard` para construir as páginas do site.
* Para o FAQ, passe a pergunta e resposta como props no `FaqItem`.
* Para os cards de funcionalidades ou integrantes, passe os dados correspondentes como props.
* Personalize cores, imagens e textos diretamente via props ou Tailwind CSS.
* O `Loading` pode ser usado como fallback durante carregamento de dados assíncronos.

---

## Licença

Este projeto é licenciado sob a licença **MIT**.
Você é livre para usar, modificar e distribuir este projeto, desde que mantenha a atribuição original.



