export interface NavLink {
  id: number;
  name: string;
  url: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

export interface Stat {
  id: number;
  icon: string;
  value: string;
  label: string;
}

export interface AboutData {
  description: string;
  stats: Stat[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  description?: string;
}
