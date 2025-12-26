import {
  NavLink,
  SocialLink,
  Experience,
  Education,
  Project,
  SkillCategory,
  AboutData,
  PersonalInfo,
  Certification,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Amrendra Nath",
  title: "Lead Consultant",
  email: "amrendrasrivastava26@gmail.com",
  location: "Noida, Uttar Pradesh, India",
  bio: "Passionate software engineer with 8+ years of experience building scalable web applications. Specialized in JavaScript technologies across the full stack with a focus on creating efficient, maintainable code and exceptional user experiences.",
};

export const navLinks: NavLink[] = [
  { id: 1, name: "About", url: "#about" },
  { id: 2, name: "Experience", url: "#experience" },
  { id: 3, name: "Education", url: "#education" },
  { id: 4, name: "Certifications", url: "#certifications" },
  { id: 5, name: "Skills", url: "#skills" },
  // { id: 6, name: "Projects", url: "#projects" },
  { id: 7, name: "Contact", url: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://linkedin.com/in/amrendranath",
    icon: "linkedin",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/amrendranath",
    icon: "github",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/amrendranath26",
    icon: "twitter",
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:amrendrasrivastava26@gmail.com",
    icon: "mail",
  },
  {
    id: 5,
    name: "Resume",
    url: "/pdfs/resume.pdf",
    icon: "file",
  },
];

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Lead Consultant",
    company: "Genpact",
    location: "Noida, Uttar Pradesh, India",
    period: "13th October 2022 - Present",
    description:
      "Leading large-scale React application development with advanced TypeScript and Material UI, mentoring teams, and implementing innovative solutions like MSW for API mocking that reduced development wait time by 83%.",
    responsibilities: [
      "Developed large-scale modular applications with advanced knowledge of React, Typescript, Material UI, JavaScript, and React Testing Library.",
      "Mentored junior developers through code reviews and pair programming sessions",
      "Collaborated with product team to define roadmap and technical requirements",
      "Transformed Figma/Zeplin designs into responsive, pixel-perfect user interfaces.",
      "Reduced API development wait time from 24 hours to 4 hours by implementing MSW for API mocking.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Rest API",
      "GraphQL",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    id: 2,
    role: "Software Engineer - Frontend",
    company: "Skuad",
    location: "Gurugram, Haryana, India",
    period: "08 August 2022 - 12 October 2022 ",
    description:
      "Spearheaded custom React component development with comprehensive testing strategies, delivering high-performance features that increased user engagement by 25% through close cross-functional collaboration.",
    responsibilities: [
      "Spearheaded the development of custom UI components in React, ensuring the delivery of highperformance web applications.",
      "Enhanced website features, optimizing for performance and user experience.",
      "Ensured robust front-end components using React Testing Library and Jest.",
      "Collaborated closely with cross-functional teams, including product managers and back-end developers, to ensure seamless feature integration.",
      "Contributed to the successful delivery of a major feature that increased user engagement by 25%.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Rest API",
      "GraphQL",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    id: 3,
    role: "Software Engineer - Frontend",
    company: "Zenius",
    location: "Gurugram, Haryana, India",
    period: "18 January 2021 - 07 August 2022",
    description:
      "Crafted scalable, reusable React components translating Figma/Zeplin designs into accessible interfaces, while debugging complex issues that improved application performance by 50% and reduced project delivery time by 20%.",
    responsibilities: [
      "Crafted reusable React components, optimizing application architecture for scalability and efficiency.",
      "Successfully translated Figma/Zeplin designs into functional, accessible components, contributing to the visual and functional excellence of the user interface.",
      "Played a key role in debugging and resolving complex issues, significantly improving application performance.",
      "Debugged and resolved complex issues, improving application performance by 50%.",
      "Collaborated with team members to refine workflows, reducing project delivery time by 20%.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Rest API",
      "GraphQL",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Kisan Network",
    location: "Gurugram, Haryana, India",
    period: "21 January 2019 - 16 January 2021",
    description:
      "Led responsive UI development with ReactJS and collaborated on NodeJS/TypeScript back-end APIs, achieving 30% increase in session duration and 20% boost in customer satisfaction through enhanced usability.",
    responsibilities: [
      "Led the creation of responsive user interfaces using ReactJS, elevating user experience and increasing session duration by 30%",
      "Collaborated on back-end API development using NodeJS and TypeScript, ensuring smooth data flow and integration.",
      "Designed and implemented front-end features that enhanced product usability, resulting in a 20% increase in customer satisfaction.",
      "Developed comprehensive test cases for APIs, ensuring reliability and security.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MySQL",
      "Node.js",
      "TypeScript",
      "Express",
    ],
  },
  {
    id: 5,
    role: "PHP Developer",
    company: "Perennial Lifesciences Pvt. Ltd.",
    location: "Delhi, India",
    period: "12 January 2017 - 20 January 2019",
    description:
      "Designed engaging landing pages and built a comprehensive CRM system using PHP and MySQL, reducing manual work by 40% and increasing online sales by 10% through optimized e-commerce website management.",
    responsibilities: [
      "Designed and developed captivating landing pages, increasing user engagement and conversion rates by 15%.",
      "Built and maintained a CRM system using core PHP and MySQL, streamlining business operations and reducing manual work by 40%.",
      "Managed e-commerce (WordPress) websites, improving customer satisfaction through optimized navigation and faster checkout processes.",
      "Collaborated with marketing and sales teams to align web functionalities with business objectives, leading to a 10% boost in online sales.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
  },
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "GLA University",
    location: "Mathura, Uttar Pradesh, India",
    period: "2012 - 2016",
    description: "Specialized in Software Engineering and Data Structures",
    achievements: ["Graduated with First Class (GPA: 7.1/10)"],
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Shri Nand Lal Khanna Vidya Mandir Inter College",
    location: "Kanpur, Uttar Pradesh, India",
    period: "2010 - 2011",
    achievements: [],
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Shri Nand Lal Khanna Vidya Mandir Inter College",
    location: "Kanpur, Uttar Pradesh, India",
    period: "2008 - 2009",
    achievements: [],
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-featured online store with product management, cart functionality, and payment processing. Supports multiple payment gateways and real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "/images/ecommerce.jpg",
    liveUrl: "https://example-ecommerce.com",
    codeUrl: "https://github.com/amrendranath/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative productivity application with real-time updates and team features. Includes drag-and-drop interface, notifications, and advanced filtering.",
    technologies: ["React", "Firebase", "Redux", "Material UI", "WebSocket"],
    image: "/images/taskmanager.jpg",
    liveUrl: "https://taskmanager.example.com",
    codeUrl: "https://github.com/amrendranath/task-manager",
  },
  {
    id: 3,
    title: "Portfolio Template",
    description:
      "Responsive portfolio website template for developers and designers. Features dark mode, smooth animations, and SEO optimization.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio.jpg",
    codeUrl: "https://github.com/amrendranath/portfolio-template",
  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    description:
      "Data visualization dashboard for monitoring business metrics. Features interactive charts, custom date ranges, and export functionality.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL", "Docker"],
    image: "/images/dashboard.jpg",
    liveUrl: "https://analytics.example.com",
    codeUrl: "https://github.com/amrendranath/analytics-dashboard",
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    name: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    id: 3,
    name: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    id: 4,
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 80 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Jest/Testing", level: 80 },
    ],
  },
];

export const aboutData: AboutData = {
  description: `I'm a passionate software engineer with 8+ years of experience building scalable web applications. Specialized in JavaScript technologies across the full stack with a focus on creating efficient, maintainable code and exceptional user experiences. My approach combines technical expertise with creative problem-solving to deliver high-quality solutions that make a real impact.`,
  stats: [
    {
      id: 1,
      icon: "award",
      value: "8+",
      label: "Years Experience",
    },
    {
      id: 2,
      icon: "users",
      value: "50+",
      label: "Happy Clients",
    },
    {
      id: 3,
      icon: "code",
      value: "100+",
      label: "Projects Completed",
    },
    {
      id: 4,
      icon: "trophy",
      value: "15+",
      label: "Awards Won",
    },
  ],
};

export const certificationsData: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "December 16, 2024",
    credentialId: "AWS-CCP-2024",
    credentialUrl:
      "https://www.credly.com/badges/692f2eb8-25bd-47d0-b47b-923316c0c1f9/linked_in_profile",
    description:
      "Foundational understanding of AWS Cloud concepts, services, and terminology.",
  },
];
