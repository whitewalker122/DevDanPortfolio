// src/data/portfolioData.js

export const profileInfo = {
  name: "Dan Loyd Francia", 
  role: "Frontend Developer & Student",
  bio: "Passionate Information Technology student building clean, interactive, and modern web applications using React and Vite.",
  location: "Philippines",
  avatar: "/profile.jpg",
  github: "https://github.com/whitewalker122",
  linkedin: "https://www.linkedin.com/in/dan-loyd-francia-0189542b0/",
};

export const skillsList = [
  { id: 1, name: "React.js", category: "Frontend" },
  { id: 2, name: "JavaScript (ES6+)", category: "Frontend" },
  { id: 3, name: "HTML5 & CSS3", category: "Frontend" },
  { id: 4, name: "Tailwind CSS", category: "Styling" },
  { id: 5, name: "Vite", category: "Tooling" },
  { id: 6, name: "Docker", category: "DevOps" },
];

export const projectsList = [
  {
    id: 101,
    title: "DevDan Personal Portfolio",
    description: "A modular, responsive Single Page Application built with React, Vite, Tailwind CSS, and Docker containerization.",
    techStack: ["React", "Vite", "Docker", "Tailwind CSS"],
    image: "/portfolio-preview.png", 
    githubUrl: "https://github.com/whitewalker122",
    liveDemo: "#",
  },
  {
    id: 102,
    title: "Task & Project Tracker",
    description: "An interactive task management web application containerized with Docker, featuring dynamic state management and persistent storage.",
    techStack: ["React", "JavaScript", "Docker", "Tailwind CSS"],
    image: "/task-tracker.png",
    githubUrl: "https://github.com/whitewalker122/task-and-project-tracker",
    liveDemo: "#",
  },
  {
    id: 103,
    title: "E-Commerce Landing Page",
    description: "A modern, fully mobile-responsive product landing page featuring interactive filter components.",
    techStack: ["React", "Tailwind CSS"],
    image: "/ecommerce-landing.png",
    githubUrl: "https://github.com/whitewalker122/ecommerce-landing-page",
    liveDemo: "#",
  },
];