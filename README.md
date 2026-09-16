# ⚡ DevDan Personal Portfolio

A modern, high-performance, and fully responsive Single Page Application (SPA) personal portfolio built to showcase my projects, technical stack, and development journey as an Information Technology student. 

Built following strict component-driven architecture principles using **React** and **Vite**, fully styled with **Tailwind CSS**, and containerized using **Docker**.

---

## 🚀 Live Preview & Features
- **Dark Terminal / Developer Dashboard Theme:** Sleek UI inspired by modern developer tooling with neon emerald accents.
- **Dynamic Array Rendering:** Projects, skills, and profile details are dynamically mapped from structured mock data objects (`portfolioData.js`).
- **State Management & Interactivity:** 
  - Interactive "Star / Like" counter system with persistent browser memory (`localStorage`).
  - Controlled contact form state with instant feedback.
- **Interactive Project Previews:** Clickable project cards that open a dark modal overlay displaying system screenshots, tech stack badges, and direct repository links.
- **Docker Containerization:** Fully reproducible development environment via Docker & Docker Compose.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3
- **Styling:** Tailwind CSS
- **Tooling:** Vite
- **DevOps / Containerization:** Docker, Docker Compose
- **Version Control:** Git & GitHub

---

## 📁 Project Directory Structure
```text
DevDanPortfolio/
├── public/               # Static assets, images, and system screenshots
│   ├── profile.jpg
│   ├── task-tracker.png
│   └── ecommerce-landing.png
├── src/
│   ├── components/       # Reusable modular React components
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── ContactForm.jsx
│   ├── data/
│   │   └── portfolioData.js # Structured mock data objects & arrays
│   ├── App.jsx           # Main parent component & state flow
│   ├── main.jsx          # DOM entry point
│   └── index.css         # Global styling & Tailwind directives
├── Dockerfile.dev        # Development container configuration
├── docker-compose.yml    # Multi-container orchestration
└── vite.config.js        # Vite & HMR polling configuration


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
