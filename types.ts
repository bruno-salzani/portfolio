
export interface Project {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  date: string; // Format MM/YY
  tags: string[];
  thumbnail: string;
}

export interface Course {
  date: string;
  title: string;
  institution: string;
}

export interface StudyCategory {
  id: string;
  title: string;
  courses: Course[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  topics: string[];
}
