# 🚀 Portfólio Profissional – Bruno Salzani (React + TypeScript)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Website pessoal desenvolvido para apresentar minha trajetória profissional, projetos e competências técnicas. O projeto utiliza React com TypeScript para tipagem estática, Vite para build otimizado e Tailwind CSS para estilização moderna e responsiva.

---

# 🎯 Objetivo do Projeto

Centralizar e exibir informações profissionais de forma interativa e performática:

- **Apresentação**: Introdução com resumo profissional e links sociais.
- **Experiência**: Linha do tempo ou listagem de atuações profissionais.
- **Projetos**: Vitrine de trabalhos realizados com descrições e links.
- **Habilidades**: Listagem de tecnologias e competências (Hard/Soft Skills).
- **Certificações**: Exibição de conquistas acadêmicas e cursos.

Foco em:
- **Performance** (carregamento rápido e otimizado).
- **UX/UI** (design limpo, animações suaves e responsividade).
- **Código Limpo** (componentização e tipagem rigorosa).

---

# 🧠 Estratégia e Arquitetura

O projeto é uma Single Page Application (SPA) construída com:

1.  **React 19**: Biblioteca principal para construção da interface.
2.  **TypeScript**: Garantia de integridade do código e intellisense.
3.  **Vite**: Tooling de nova geração para dev server veloz e build otimizado.
4.  **Tailwind CSS**: Framework utility-first para estilização ágil.
5.  **Componentização**: Separação lógica em `components/` (Hero, Skills, Projects, etc.).

Diretrizes técnicas:
- Uso de **Hooks** (useState, useEffect) para gerenciamento de estado e efeitos.
- **Responsividade** total (Mobile First).
- **Semântica HTML** e acessibilidade (ARIA labels).

---

# 🔄 Seções do Portfólio

1.  **Hero (Início)**
    - Apresentação pessoal com foto e badges.
    - Botões de ação (GitHub, LinkedIn, Download Currículo).
    - Métricas (Anos de XP, Projetos, Certificados).

2.  **Habilidades Técnicas**
    - Visualização categorizada de skills.

3.  **Meus Projetos**
    - Galeria de projetos com detalhes visuais.

4.  **Experiência Profissional**
    - Histórico de carreira detalhado.

5.  **Certificações**
    - Lista de qualificações e cursos concluídos.

---

# 📁 Estrutura do Projeto

```
portfolio/
├── components/          # Componentes reutilizáveis e seções da página
│   ├── Certifications.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/              # Arquivos estáticos (PDFs, imagens)
├── src/                 # (Estrutura implícita na raiz neste projeto)
├── App.tsx              # Componente raiz e orquestração das seções
├── index.html           # Ponto de entrada HTML
├── main.tsx             # Ponto de entrada React (index.tsx)
├── tailwind.config.js   # (Ou via postcss) Configuração de estilos
├── tsconfig.json        # Configuração TypeScript
└── vite.config.ts       # Configuração do Vite
```

---

# ⚙️ Funcionalidades Implementadas

## Interface Interativa
- **Scroll Spy**: Header que reage à rolagem da página.
- **Animações**: Elementos com `fade-in`, `slide-in` e efeitos de hover.
- **Efeitos Visuais**: Backgrounds com blur, gradientes e glassmorphism.

## Conteúdo Dinâmico
- Dados estruturados em componentes para fácil atualização.
- Download direto de currículo (PDF) via assets estáticos.

## Performance
- Carregamento preguiçoso (Lazy loading) de recursos onde aplicável.
- Otimização de imagens e vetores (ícones Phosphor).

---

# 🧪 Boas Práticas

- **Typing Strict**: Uso rigoroso de TypeScript para evitar erros em tempo de execução.
- **Modularidade**: Cada seção é um componente isolado.
- **Estilização Utilitária**: Tailwind para manter CSS consistente e reduzir tamanho do bundle.
- **Linter**: Configuração de ESLint para padronização de código.

---

# 🛠️ Tecnologias

- **Core**: React, TypeScript, Node.js
- **Build**: Vite
- **Estilo**: Tailwind CSS
- **Ícones**: Phosphor Icons (via CSS ou React library)
- **Deploy**: (Vercel/Netlify/GitHub Pages - configurável)

---

# ▶️ Como Executar

1) Instalar dependências

```bash
npm install
```

2) Executar servidor de desenvolvimento

```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

3) Build para produção

```bash
npm run build
```

4) Visualizar build localmente

```bash
npm run preview
```

5) Lint e Verificação de Tipos

```bash
npm run lint
```

---

# 🤝 Conclusão

Este portfólio reflete não apenas minha experiência profissional, mas também a aplicação prática de conceitos modernos de desenvolvimento web, focando em qualidade de código e experiência do usuário.

Autor: **Bruno Salzani**
