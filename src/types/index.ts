export type Project = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  category: 'web' | 'mini';
  badge?: 'Solo Project' | 'Team Project' | 'Ongoing';
};

export type Skill = {
  name: string;
  proficiency: number; // 0-100
  logo: string;
  description?: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  courses: string[];
  logo: string;
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  date: string;
  link?: string;
  badge?: string;
};

export type Certification = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
  logo: string;
};

export type SocialProfile = {
  name: string;
  icon: string;
  url: string;
  stats?: string;
};