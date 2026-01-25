
import { Project, Certification } from './types';

export const PROJECTS: Project[] = [
  // QA Projects
  { title: "Automação Selenium Java (Leilões)", date: "01/2025", link: "https://github.com/bruno-salzani/automation-selenium-leiloes", category: "QA" },
  { title: "Automação Cypress JS (Adopet)", date: "12/2024", link: "https://github.com/bruno-salzani/test-cypress-adopet", category: "QA" },
  { title: "Teste de Software - LMS (Neolude)", date: "05/2024", link: "https://github.com/bruno-salzani/manual-test-neolude", category: "QA" },
  { title: "Teste de Software - Natura", date: "03/2024", link: "https://github.com/bruno-salzani/teste-software-funcionalidades-natura", category: "QA" },
  { title: "Automação Cypress JS (Neolude)", date: "02/2024", link: "https://github.com/bruno-salzani/cypress-lms-automation", category: "QA" },
  { title: "Manual Test APP (Prudential)", date: "12/2023", link: "https://github.com/bruno-salzani/manual-test-prudential", category: "QA" },
  
  // Web Dev Projects
  { title: "Borges Captações", date: "06/2025", link: "https://github.com/bruno-salzani/borges-captacoes", category: "Web" },
  { title: "Stargames Informatica", date: "05/2025", link: "https://github.com/bruno-salzani/stargames-informatica", category: "Web" },
  { title: "Clinica Nova Vida", date: "04/2025", link: "https://github.com/bruno-salzani/clinica-novavida/", category: "Web" },
  { title: "CSS Minify", date: "04/2023", link: "https://github.com/bruno-salzani/minifycss", category: "Web" },
  { title: "Binary to Decimal", date: "03/2023", link: "https://github.com/bruno-salzani/bin2dec", category: "Web" },
  { title: "Blog Terceira Idade", date: "08/2021", link: "https://github.com/bruno-salzani/blog-terceira-idade", category: "Web" },
  
  // Other
  { title: "SentinelKit - Cyber-Segurança", date: "01/2026", link: "https://github.com/bruno-salzani/SentinelKit/tree/main", category: "Other" },
];

export const CERTIFICATIONS: Certification[] = [
  // Qualidade de Software
  { title: "Testes em .NET: integração e entrega contínua com Azure DevOps", date: "01/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/dbf97068-5a4b-424f-8b22-e475ea61cf72?lang", category: "Qualidade de Software" },
  { title: "Carreira QA: processos e automação de testes", date: "12/2022", issuer: "Alura", link: "https://cursos.alura.com.br/degree/certificate/0395f251-befa-43e4-b7f7-3c0158554247", category: "Qualidade de Software" },
  { title: "Quality Assurance: plano de testes e gestão de bugs", date: "11/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/2c8eaa73-b5c0-413c-93de-5457fbab3ef6", category: "Qualidade de Software" },
  { title: "BDD e Java: Behavior Driven Development com Cucumber", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/b1956ef4-b9e1-4820-ba40-e2d1163e9068", category: "Qualidade de Software" },
  { title: "Gerenciamento de qualidade de software parte 1: o documento MDS", date: "09/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/9e370fee-fc12-4a07-917a-302b048019b3", category: "Qualidade de Software" },
  { title: "Fundamentos Quality Assurance: TestPlan e boas práticas", date: "06/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/48e29980-9af3-4ba1-b2fa-0a7bbae60793", category: "Qualidade de Software" },

  // Automação de Testes
  { title: "Appium: compreenda e aplique testes de interface", date: "08/2025", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/appium-compreenda-e-aplique-testes-interface/certificate", category: "Automação de Testes" },
  { title: "Selenium: testes automatizados de aceitação em Java", date: "12/2024", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/0367c0df-4ac4-44d3-bee8-c15bfa2d257d?lang", category: "Automação de Testes" },
  { title: "Cypress: automatizando testes E2E", date: "12/2024", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/5c3f390b-eb84-46db-abf6-300bfd1adb33?lang=pt_BR", category: "Automação de Testes" },
  { title: "Cypress: automação de testes E2E", date: "11/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/d6e6ce51-7660-40b5-8981-85d952c6ef1c", category: "Automação de Testes" },
  { title: "Testes em .NET: testes de interface usando Selenium", date: "09/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/342ad3d1-def3-4213-aadf-3d909371112d", category: "Automação de Testes" },
  { title: "Selenium WebDriver e C# parte 1: testes da sua web app", date: "12/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/14289510-7e48-4794-9473-10c18004a68b", category: "Automação de Testes" },
  { title: "Selenium: Testes automatizados de aceitação em .NET", date: "08/2018", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/e2ec4168-3554-441f-a714-aa4438510503", category: "Automação de Testes" },

  // CI/CD
  { title: "Integração Contínua: mais qualidade e menos risco", date: "02/2025", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/desenvolvimento-software-integracao-continua/certificate", category: "CI/CD" },
  { title: "Testes em .NET: entrega contínua com Azure DevOps", date: "01/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/dbf97068-5a4b-424f-8b22-e475ea61cf72?lang", category: "CI/CD" },

  // HTML/CSS
  { title: "Layouts Responsivos: layouts mobile", date: "05/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/b7400ec7-b6a0-48e3-a3cb-9b690b39be60", category: "HTML/CSS" },
  { title: "Web Design Responsivo", date: "02/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/4bda398d-2d2d-42ed-a9b9-cf12bcd17e1c", category: "HTML/CSS" },
  { title: "Flexbox: posicione elementos na tela", date: "01/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/1e25c3b2-d4e9-4e0b-aaa6-8033fa1afb0c", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 4: avançando no CSS", date: "01/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/ad012211-a9d6-4b3c-a8b8-c80a6f08b63d", category: "HTML/CSS" },
  { title: "Arquitetura CSS: descomplicando os problemas", date: "11/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/15188794-4aab-4a32-9b5f-4a1d3de8b23d", category: "HTML/CSS" },
  { title: "Bootstrap 4: landing page responsiva", date: "11/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/aff894c5-b2ae-4f98-a84f-22270488cf79", category: "HTML/CSS" },
  { title: "Bootstrap: single-page responsiva", date: "11/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/2a0adb8a-fa81-4e18-ae24-e5edb390cd5b", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 II: Turbinando páginas", date: "10/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/b97424a9-97bc-4077-8091-8d0bd1ff247c", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 I: Primeiras páginas", date: "10/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/6ac2fe58-1b2c-436c-bdbc-0824b9ccc1a5", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 3: formulários e tabelas", date: "09/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/4e143324-cf13-4bdf-b8e9-822825686c4d", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 2: posicionamento", date: "09/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/00979dc6-15ba-43f9-bc5a-23c0ee7be7a7", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 1: crie uma página", date: "09/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/1209abd4-85e0-4562-a32c-10ecb7fc886f", category: "HTML/CSS" },

  // Programação
  { title: "ChatGPT e programação: produtividade", date: "08/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/bruno-salzani/chatgpt-programacao-aumente-produtividade", category: "Programação" },
  { title: "JavaScript e HTML: desenvolva um jogo", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/c3abd570-36ac-4f45-adb9-8a79744dc5bd", category: "Programação" },
  { title: "Formação Vue.js", date: "03/2021", issuer: "Alura", link: "https://cursos.alura.com.br/degree/certificate/b27389b5-9622-4515-b751-810c5b540e30", category: "Programação" },
  { title: "Node.js Parte 1: Inovando backend", date: "06/2020", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/a235a5a5-ffb8-4fd7-9a85-a2c784d784c7", category: "Programação" },
  { title: "Python: começando com a linguagem", date: "05/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/python-introducao-a-linguagem/certificate", category: "Programação" },
  { title: "JavaScript: programando na linguagem da web", date: "02/2020", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/ce4fce5e-5654-4d9e-ae48-66f7c9a4d779", category: "Programação" },
  { title: "Formação C# e orientação a objetos", date: "12/2018", issuer: "Alura", link: "https://cursos.alura.com.br/degree/certificate/ca8bf1a4-bf4d-47ab-8826-d4de8b0f06d5", category: "Programação" },
  { title: "JavaScript: Browser e padrões de projeto", date: "08/2018", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/334e425b-c8a1-49ed-8e29-ee64be9a8ce9", category: "Programação" },
  { title: "Programador de Sistemas", date: "06/2018", issuer: "Senac", link: "https://www1.intranet.sp.senac.br/senac_solution/pss/relatorios/certificados/NBASVIARAPIDA/mod29.cfm?CRYPTALGID=8a7656e2-cd47-11eb-9977-f7340aa3fd80&dt=2021-06-14-16.34.31.000000", category: "Programação" },
  { title: "Programador C#", date: "08/2014", issuer: "Microcenter", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/Certificado%20Programador.png", category: "Programação" },

  // Habilidades Interpessoais
  { title: "Equipes ágeis: papéis em uma equipe", date: "04/2024", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/equipes-ageis-organizando-papeis-equipe/certificate", category: "Habilidades Interpessoais" },
  { title: "Formação Líderes Comunicação e Feedback", date: "02/2024", issuer: "Inspand", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/Forma%C3%A7%C3%A3o%20L%C3%ADderes%20Inspand%20Comunica%C3%A7%C3%A3o%20e%20Feedback.pdf", category: "Habilidades Interpessoais" },
  { title: "Organização de Equipes Ágeis", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/organizando-equipes-ageis/certificate", category: "Habilidades Interpessoais" },
  { title: "Liderança: missão e propósito", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/primeira-lideranca-aprendendo-liderar-pessoas/certificate", category: "Habilidades Interpessoais" },
  { title: "Liderança: práticas de gestão", date: "01/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/lideranca-pratica-gestao-melhorias/certificate", category: "Habilidades Interpessoais" },
  { title: "Delegação de tarefas: melhor do time", date: "11/2021", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/delegacao-de-tarefas/certificate", category: "Habilidades Interpessoais" },
  { title: "Relacionamento interpessoal", date: "10/2021", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/relacionamento-pessoal/certificate", category: "Habilidades Interpessoais" },
  { title: "Scrum: agilidade em seu projeto", date: "12/2019", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/agile-scrum/certificate", category: "Habilidades Interpessoais" },

  // Outros
  { title: "SEO: otimização de sites", date: "06/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/bruno-salzani/seo-otimizacao-de-sites", category: "Outros" },
  { title: "Git e GitHub: colaborando em projetos", date: "03/2024", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/git-github-compartilhando-colaborando-projetos/certificate", category: "Outros" },
  { title: "Git e Github: controle de versão", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/git-github-controle-de-versao/certificate", category: "Outros" },
  { title: "Funções com Excel: filtros e matemática", date: "08/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/excel-funcoes/certificate", category: "Outros" },
  { title: "Excel procv: lógica booleana", date: "08/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/excel-procv/certificate", category: "Outros" },
  { title: "Excel: domine o editor de planilhas", date: "07/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/excel-introducao/certificate", category: "Outros" },
  { title: "Hackaton Isat Edtechs", date: "02/2020", issuer: "Inspand", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/certificado%20hackaton.png", category: "Outros" },
  { title: "HTTP: Entendendo a web", date: "08/2018", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/bruno-salzani/http-fundamentos", category: "Outros" },
  { title: "Web Designer", date: "12/2014", issuer: "Microcenter", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/certificado%20web%20designer.png", category: "Outros" },
];

export const TECH_STACK = {
  languages: ["C#", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
  automation: ["Selenium", "Cypress", "Appium", "Cucumber", "Gherkin"],
  devops: ["GitLab CI", "GitHub Actions", "Azure DevOps", "Git"],
  agile: ["Jira", "Scrum", "Kanban", "Redmine"]
};
