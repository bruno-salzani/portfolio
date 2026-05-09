
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.github': 'View GitHub profile',
    'nav.backToTop': 'Back to top',
    'nav.openMenu': 'Open navigation menu',

    // Hero
    'hero.badge': '7+ Years of Technology Experience',
    'hero.title': 'Quality in',
    'hero.title.gradient': 'Every Line',
    'hero.title.end': 'of Code.',
    'hero.description': 'QA Specialist with over 7 years of experience in the full software testing lifecycle. I excel at balancing the analytical mindset of manual and exploratory testing with the efficiency of automation (Web, Mobile, and API) using cutting-edge tools such as Playwright, Cypress, Selenium, and Appium. With a strong focus on BDD and Cucumber, I integrate quality into business rules from day one to eliminate bottlenecks, ensure agility in complex projects, and accelerate the delivery of value to the client.',
    'hero.github': 'GITHUB',
    'hero.linkedin': 'LINKEDIN',
    'hero.cv': 'RESUME',
    'hero.cv.title': 'View resume',
    'hero.cv.url': 'https://github.com/bruno-salzani/bruno-salzani/blob/main/Curriculo_en.pdf',
    'hero.stats.years': 'Years of XP',
    'hero.stats.projects': 'Projects',
    'hero.stats.certs': 'Certificates',
    'hero.badge.expertise': 'Expertise',
    'hero.badge.focus': 'Focus',
    'hero.badge.ai.top': 'AI-DRIVEN DEVELOPMENT',
    'hero.badge.ai.bottom': 'MASTERY IN GENERATIVE AI',

    // App Sections
    'section.skills.tag': 'Specialties',
    'section.skills.title': 'Technical Skills',
    'section.experience.tag': 'Trajectory',
    'section.experience.title': 'Professional Experience',
    'section.projects.tag': 'Portfolio',
    'section.projects.title': 'My Projects',
    'section.certifications.tag': 'Education',
    'section.certifications.title': 'Certifications',

    // Skills
    'skills.languages': 'Languages',
    'skills.automation': 'Automation',
    'skills.tools': 'Tools & Infra',
    'skills.ai': 'AI Domain',
    'skills.devops': 'CI/CD & DevOps',
    'skills.agile': 'Management & Strategy',

    // Experience
    'experience.duration.years': 'years',
    'experience.duration.months': 'months',
    'experience.duration.present': 'present',
    'experience.duration.year': 'year',
    'experience.duration.month': 'month',

    // Projects
    'projects.tab.all': 'VIEW ALL',
    'projects.tab.qa': 'QUALITY / QA',
    'projects.tab.other': 'OTHERS',
    'projects.desc.qa': 'Modern implementation focused on automated testing strategies, developed with an AI-Driven approach for maximum efficiency and coverage.',
    'projects.desc.other': 'Diverse project exploring new technologies, cybersecurity, and specialized development with advanced AI support.',
    'projects.explore': 'Explore Code',

    // Certifications
    'certifications.expand': 'VIEW ALL CERTIFICATIONS',
    'certifications.minimize': 'MINIMIZE CERTIFICATIONS',
    'certifications.quote': '"These certifications are a reflection of my journey of continuous learning and dedication to improving both my technical expertise and interpersonal skills."',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Developed with React, TypeScript and Tailwind CSS.',
  },
  pt: {
    // Header
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.certifications': 'Certificações',
    'nav.contact': 'Contato',
    'nav.github': 'Ver perfil no GitHub',
    'nav.backToTop': 'Voltar ao topo',
    'nav.openMenu': 'Abrir menu de navegação',

    // Hero
    'hero.badge': '7+ Anos de Experiência em Tecnologia',
    'hero.title': 'Qualidade em',
    'hero.title.gradient': 'Cada Linha',
    'hero.title.end': 'de Código.',
    'hero.description': 'Olá, sou Bruno Salzani, Especialista em QA e profissional PCD com mais de 7 anos de experiência no ciclo completo de testes. Domino o equilíbrio entre o olhar analítico dos testes manuais e exploratórios com a eficiência da automação (Web, Mobile e API) utilizando ferramentas de ponta como Playwright, Cypress, Selenium e Appium. Com foco em BDD e Cucumber, busco integrar a qualidade às regras de negócio desde o início para eliminar gargalos, garantir agilidade em projetos complexos e acelerar a entrega de valor ao cliente.',
    'hero.github': 'GITHUB',
    'hero.linkedin': 'LINKEDIN',
    'hero.cv': 'CURRÍCULO',
    'hero.cv.title': 'Ver currículo',
    'hero.cv.url': 'https://github.com/bruno-salzani/bruno-salzani/blob/main/Curriculo.pdf',
    'hero.stats.years': 'Anos de XP',
    'hero.stats.projects': 'Projetos',
    'hero.stats.certs': 'Certificados',
    'hero.badge.expertise': 'Expertise',
    'hero.badge.focus': 'Foco',
    'hero.badge.ai.top': 'AI-DRIVEN DEVELOPMENT',
    'hero.badge.ai.bottom': 'DOMÍNIO EM IA GENERATIVA',

    // App Sections
    'section.skills.tag': 'Especialidades',
    'section.skills.title': 'Habilidades Técnicas',
    'section.experience.tag': 'Trajetória',
    'section.experience.title': 'Experiência Profissional',
    'section.projects.tag': 'Portfólio',
    'section.projects.title': 'Meus Projetos',
    'section.certifications.tag': 'Educação',
    'section.certifications.title': 'Certificações',

    // Skills
    'skills.languages': 'Linguagens',
    'skills.automation': 'Automação',
    'skills.tools': 'Ferramentas & Infra',
    'skills.ai': 'Domínio em IA',
    'skills.devops': 'CI/CD & DevOps',
    'skills.agile': 'Gestão & Estratégia',

    // Experience
    'experience.duration.years': 'anos',
    'experience.duration.months': 'meses',
    'experience.duration.present': 'o momento',
    'experience.duration.year': 'ano',
    'experience.duration.month': 'mês',

    // Projects
    'projects.tab.all': 'VER TODOS',
    'projects.tab.qa': 'QUALIDADE / QA',
    'projects.tab.other': 'OUTROS',
    'projects.desc.qa': 'Implementação moderna com foco em estratégias de teste automatizado, desenvolvida com abordagem AI-Driven para máxima eficiência e cobertura.',
    'projects.desc.other': 'Projeto diversificado explorando novas tecnologias, cibersegurança e desenvolvimento especializado com suporte de IA avançada.',
    'projects.explore': 'Explorar Código',

    // Certifications
    'certifications.expand': 'VER TODAS AS CERTIFICAÇÕES',
    'certifications.minimize': 'MINIMIZAR CERTIFICAÇÕES',
    'certifications.quote': '"Essas certificações são um reflexo da minha jornada de aprendizado contínuo e dedicação em melhorar tanto minha expertise técnica quanto habilidades interpessoais."',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.builtWith': 'Desenvolvido com React, TypeScript e Tailwind CSS.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
