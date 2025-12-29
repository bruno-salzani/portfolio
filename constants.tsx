
import { Project, EducationItem, StudyCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Borges Captações",
    description: "Plataforma profissional para gestão e captação de imóveis.",
    repoUrl: "https://github.com/bruno-salzani/borges-captacoes",
    date: "10/24",
    tags: ["React", "TypeScript", "Tailwind"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/borges-captacoes"
  },
  {
    title: "Stargames Informática",
    description: "E-commerce especializado em produtos de informática e games.",
    repoUrl: "https://github.com/bruno-salzani/stargames-informatica",
    date: "08/24",
    tags: ["JavaScript", "HTML", "CSS"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/stargames-informatica"
  },
  {
    title: "Clínica Novavida",
    description: "Site institucional para clínica médica com sistema de agendamento.",
    repoUrl: "https://github.com/bruno-salzani/clinica-novavida",
    date: "06/24",
    tags: ["Web Design", "Responsive", "UI/UX"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/clinica-novavida"
  },
  {
    title: "MinifyCSS",
    description: "Ferramenta utilitária para minificação de arquivos CSS otimizando performance.",
    repoUrl: "https://github.com/bruno-salzani/minifycss",
    date: "04/24",
    tags: ["Utility", "JavaScript", "Optimization"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/minifycss"
  },
  {
    title: "Bin2Dec",
    description: "Conversor de números binários para decimais com interface intuitiva.",
    repoUrl: "https://github.com/bruno-salzani/bin2dec",
    date: "02/24",
    tags: ["Logic", "JavaScript", "Math"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/bin2dec"
  },
  {
    title: "Blog Terceira Idade",
    description: "Blog de conteúdo focado em bem-estar e saúde para idosos.",
    repoUrl: "https://github.com/bruno-salzani/blog-terceira-idade",
    date: "12/23",
    tags: ["Content", "Accessibility", "Blog"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/blog-terceira-idade"
  },
  {
    title: "Terceira Idade Landing",
    description: "Landing page institucional para serviços de assistência à terceira idade.",
    repoUrl: "https://github.com/bruno-salzani/terceira-idade",
    date: "11/23",
    tags: ["HTML", "CSS", "Responsive"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/terceira-idade"
  },
  {
    title: "HTML Barbershop",
    description: "Landing page elegante para barbearia com foco em agendamento e serviços.",
    repoUrl: "https://github.com/bruno-salzani/html-barbershop",
    date: "10/23",
    tags: ["HTML5", "CSS3", "Design"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/html-barbershop"
  },
  {
    title: "HTML Courses Repository",
    description: "Material didático e exercícios práticos de desenvolvimento web fundamental.",
    repoUrl: "https://github.com/bruno-salzani/html-courses",
    date: "09/23",
    tags: ["Education", "HTML5", "Documentation"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/html-courses"
  },
  {
    title: "HTML Presentation",
    description: "Apresentação interativa sobre as novas semânticas do HTML5.",
    repoUrl: "https://github.com/bruno-salzani/html-presentation",
    date: "07/23",
    tags: ["Slides", "Web Standards", "Presentation"],
    thumbnail: "https://opengraph.githubassets.com/1/bruno-salzani/html-presentation"
  }
];

export const STUDIES: StudyCategory[] = [
  {
    id: "html-css",
    title: "HTML/CSS",
    courses: [
      { date: "05/2022", title: "Layouts Responsivos: trabalhando com layouts mobile", institution: "Alura" },
      { date: "02/2021", title: "Web Design Responsivo: Páginas que se adaptam do mobile ao desk", institution: "Alura" },
      { date: "01/2021", title: "Flexbox: posicione elementos na tela", institution: "Alura" },
      { date: "01/2021", title: "HTML5 e CSS3 parte 4: avançando no CSS", institution: "Alura" },
      { date: "11/2019", title: "Arquitetura CSS: descomplicando os problemas", institution: "Alura" },
      { date: "11/2019", title: "Bootstrap 4: criando uma landing page responsiva", institution: "Alura" },
      { date: "11/2019", title: "Bootstrap: criação de uma single-page responsiva", institution: "Alura" },
      { date: "10/2019", title: "HTML5 e CSS3 II: Turbinando as suas páginas", institution: "Alura" },
      { date: "10/2019", title: "HTML5 e CSS3 I: Suas primeiras páginas da Web", institution: "Alura" },
      { date: "09/2019", title: "HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas", institution: "Alura" },
      { date: "09/2019", title: "HTML5 e CSS3 parte 2: posicionamento, listas e navegação", institution: "Alura" },
      { date: "09/2019", title: "HTML5 e CSS3 parte 1: crie uma página da Web", institution: "Alura" }
    ]
  },
  {
    id: "programming",
    title: "Programação",
    courses: [
      { date: "08/2025", title: "ChatGPT e programação: aumente sua produtividade", institution: "Alura" },
      { date: "10/2022", title: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação", institution: "Alura" },
      { date: "03/2021", title: "Formação Vue.js", institution: "Alura" },
      { date: "06/2020", title: "Node.js Parte 1: Inovando com JavaScript no backend", institution: "Alura" },
      { date: "05/2020", title: "Python: começando com a linguagem", institution: "Alura" },
      { date: "02/2020", title: "JavaScript: programando na linguagem da web", institution: "Alura" },
      { date: "12/2018", title: "Formação C# e orientação a objetos", institution: "Alura" },
      { date: "08/2018", title: "JavaScript: conhecendo o Browser e padrões de projeto", institution: "Alura" },
      { date: "06/2018", title: "Programador de Sistemas", institution: "Senac" },
      { date: "08/2014", title: "Programador C#", institution: "Microcenter" }
    ]
  },
  {
    id: "soft-skills",
    title: "Habilidades Interpessoais",
    courses: [
      { date: "04/2024", title: "Equipes ágeis: organizando os papéis em uma equipe", institution: "Alura" },
      { date: "02/2024", title: "Formação Líderes Inspand Comunicação e Feedback", institution: "Inspand" },
      { date: "10/2022", title: "Organização de Equipes Ágeis: os papéis existentes em uma equipe", institution: "Alura" },
      { date: "10/2022", title: "Liderança: aprendendo sobre a missão e propósito de liderar pessoas", institution: "Alura" },
      { date: "01/2022", title: "Liderança: práticas de gestão e melhorias", institution: "Alura" },
      { date: "11/2021", title: "Delegação de tarefas: obtenha o melhor do seu time", institution: "Alura" },
      { date: "10/2021", title: "Relacionamento interpessoal: aprenda a lidar melhor com você e com o outro", institution: "Alura" },
      { date: "12/2019", title: "Scrum: agilidade em seu projeto", institution: "Alura" }
    ]
  },
  {
    id: "others",
    title: "Outros",
    courses: [
      { date: "06/2025", title: "SEO: otimização de sites", institution: "Alura" },
      { date: "03/2024", title: "Git e GitHub: compartilhando e colaborando em projetos", institution: "Alura" },
      { date: "10/2022", title: "Git e Github: controle e compartilhe seu código", institution: "Alura" },
      { date: "08/2020", title: "Funções com Excel: operações matemáticas e filtros", institution: "Alura" },
      { date: "08/2020", title: "Excel procv: lógica booleana e busca por valores", institution: "Alura" },
      { date: "07/2020", title: "Excel: domine o editor de planilhas", institution: "Alura" },
      { date: "02/2020", title: "Hackaton Isat Edtechs", institution: "Inspand" },
      { date: "08/2018", title: "HTTP: Entendendo a web por baixo dos panos", institution: "Alura" },
      { date: "12/2014", title: "Web Designer", institution: "Microcenter" }
    ]
  }
];

export const SKILLS = [
  { name: "HTML5", level: 95, color: "bg-orange-500" },
  { name: "CSS3 / Tailwind", level: 90, color: "bg-blue-500" },
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "TypeScript", level: 80, color: "bg-blue-600" },
  { name: "React", level: 85, color: "bg-cyan-500" },
  { name: "Git", level: 80, color: "bg-red-500" }
];
