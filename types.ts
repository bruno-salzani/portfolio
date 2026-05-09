
export interface Project {
  title: string;
  date: string;
  link: string;
  category: 'QA' | 'Web' | 'Other';
  description?: string | { en: string; pt: string };
}

export interface Certification {
  title: string;
  date: string;
  issuer: string;
  link: string;
  category: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface Experience {
  role: string | { en: string; pt: string };
  company: string;
  type: string | { en: string; pt: string };
  period: string | { en: string; pt: string };
  duration: string | { en: string; pt: string };
  location: string | { en: string; pt: string };
  description: string[] | { en: string[]; pt: string[] };
  logo?: string;
}
