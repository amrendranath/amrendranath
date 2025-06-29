import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const navLinks = [
  { id: 1, name: "About", url: "#about" },
  { id: 2, name: "Experience", url: "#experience" },
  { id: 3, name: "Education", url: "#education" },
  { id: 4, name: "Skills", url: "#skills" },
  { id: 5, name: "Projects", url: "#projects" },
  { id: 6, name: "Contact", url: "#contact" },
];

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://linkedin.com/in/amrendranath",
    icon: FaLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/amrendranath",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/amrendranath26",
    icon: FaTwitter,
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:amrendrasrivastava26@gmail.com",
    icon: HiOutlineMail,
  },
  {
    id: 5,
    name: "Resume",
    url: "/pdfs/resume.pdf",
    icon: BsFillPersonLinesFill,
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "New Delhi, India",
    period: "2020 - Present",
    description:
      "Leading development of enterprise SaaS solutions for global clients",
    responsibilities: [
      "Architected and implemented microservices that improved system performance by 40%",
      "Mentored junior developers through code reviews and pair programming sessions",
      "Collaborated with product team to define roadmap and technical requirements",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "MongoDB",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Digital Solutions Ltd.",
    location: "Hyderabad, India",
    period: "2017 - 2020",
    description:
      "Full-stack development of web applications for financial sector",
    responsibilities: [
      "Developed RESTful APIs serving 50,000+ daily requests",
      "Optimized database queries reducing response times by 30%",
      "Implemented automated testing increasing coverage to 85%",
      "Led migration from legacy system to modern tech stack",
    ],
    technologies: [
      "JavaScript",
      "Angular",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Azure",
      "Jenkins",
    ],
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Ventures",
    location: "Pune, India",
    period: "2016 - 2017",
    responsibilities: [
      "Implemented new features for customer-facing web application",
      "Fixed bugs and improved application stability",
      "Participated in agile development process",
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "jQuery"],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-featured online store with product management, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project1.jpg",
    liveUrl: "https://example-ecommerce.com",
    codeUrl: "https://github.com/amrendra/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative productivity application with real-time updates and team features.",
    technologies: ["React", "Firebase", "Redux", "Material UI"],
    image: "/images/project2.jpg",
    liveUrl: "https://taskmanager.example.com",
    codeUrl: "https://github.com/amrendra/task-manager",
  },
  {
    id: 3,
    title: "Portfolio Template",
    description:
      "Responsive portfolio website template for developers and designers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/project3.jpg",
    codeUrl: "https://github.com/amrendra/portfolio-template",
  },
];

export const skillsData = [
  {
    id: 1,
    name: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
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
    ],
  },
  {
    id: 3,
    name: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 90 },
    ],
  },
];

export const aboutData = {
  description: `I'm a passionate software engineer with 5+ years of experience building scalable web applications. Specialized in JavaScript technologies across the full stack with a focus on creating efficient, maintainable code and exceptional user experiences. My approach combines technical expertise with creative problem-solving to deliver high-quality solutions.`,
  stats: [
    {
      id: 1,
      icon: "award",
      value: "5",
      label: "Years Experience",
    },
    {
      id: 2,
      icon: "users",
      value: "50",
      label: "Clients",
    },
    {
      id: 3,
      icon: "projects",
      value: "30",
      label: "Projects",
    },
  ],
};

export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "University of XYZ",
    period: "2014 - 2017",
    gpa: "3.8/4.0",
    honors: "Summa Cum Laude",
    description: "Specialized in Software Engineering and Distributed Systems",
    courses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Cloud Computing",
      "Big Data Analytics",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "ABC College",
    period: "2011 - 2014",
    gpa: "3.6/4.0",
    honors: "Dean's List",
    courses: [
      "Data Structures",
      "Computer Networks",
      "Database Systems",
      "Operating Systems",
    ],
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    institution: "DEF Junior College",
    period: "2009 - 2011",
    description: "Specialized in Mathematics, Physics, and Computer Science",
  },
];
