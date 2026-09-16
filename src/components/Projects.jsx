import { useState, useEffect } from 'react';

export default function Projects({ projects }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const savedLikedStatus = localStorage.getItem('devdan_portfolio_has_liked');
    const savedLikesCount = localStorage.getItem('devdan_portfolio_likes_count');

    if (savedLikedStatus === 'true') {
      setHasLiked(true);
    }
    
    // Safety check para maiwasan ang NaN
    const parsedLikes = parseInt(savedLikesCount, 10);
    if (!isNaN(parsedLikes)) {
      setLikes(parsedLikes);
    } else {
      setLikes(0); // Magsisimula sa 0 kapag walang valid data
    }
  }, []);

  const handleLikeToggle = () => {
    const currentLikes = isNaN(likes) ? 0 : likes;
    
    if (!hasLiked) {
      const newLikes = currentLikes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('devdan_portfolio_has_liked', 'true');
      localStorage.setItem('devdan_portfolio_likes_count', newLikes.toString());
    } else {
      const newLikes = Math.max(0, currentLikes - 1);
      setLikes(newLikes);
      setHasLiked(false);
      localStorage.setItem('devdan_portfolio_has_liked', 'false');
      localStorage.setItem('devdan_portfolio_likes_count', newLikes.toString());
    }
  };

  return (
    <section id="projects" className="py-16 border-b border-gray-800/60">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
          <span className="text-emerald-400"></span> Built Projects
        </h2>

        <button 
          onClick={handleLikeToggle}
          className={`border font-mono text-xs px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 active:scale-95 ${
            hasLiked 
              ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
              : 'bg-[#161b22] border-gray-700 hover:border-emerald-500/50 text-gray-300'
          }`}
        >
          <span>{hasLiked ? '👍 Liked' : '👍 Like'}</span>
          <span className="h-3 w-px bg-gray-700"></span>
          <span className="font-bold">{likes}</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="bg-[#161b22] border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition duration-200 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white font-mono group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>
                <span className="text-xs text-emerald-400 font-mono opacity-0 group-hover:opacity-100 transition">
                  [ View Preview ]
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Screenshot Preview Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#161b22] border border-gray-800 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <h3 className="text-lg font-bold text-white font-mono">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-emerald-400 font-mono text-sm px-2 py-1 rounded border border-gray-800 hover:border-emerald-500/50 transition"
              >
                [ ESC / CLOSE ]
              </button>
            </div>

            <div className="w-full h-64 sm:h-80 bg-gray-900 relative overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-gray-300 text-sm mb-4 leading-relaxed font-sans">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 font-mono text-xs">
                <a 
                  href={selectedProject.liveDemo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-4 py-2 rounded transition"
                >
                  Live Demo 🚀
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#0d1117] border border-gray-800 hover:border-emerald-500/50 text-gray-300 px-4 py-2 rounded transition"
                >
                  Source Code 💻
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}