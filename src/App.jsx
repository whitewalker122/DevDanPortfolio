import { profileInfo, skillsList, projectsList } from './data/portfolioData.js';
import Navbar from 'src/components/Navbar.jsx';
import Profile from 'src/components/Profile.jsx';
import Skills from 'src/components/Skills.jsx';
import Projects from 'src/components/Projects.jsx';
import ContactForm from 'src/components/ContactForm.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6">
        <Profile info={profileInfo} />
        <Skills skills={skillsList} />
        <Projects projects={projectsList} />
        <ContactForm />
      </main>
    </div>
  );
}