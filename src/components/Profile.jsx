export default function Profile({ info }) {
  return (
    <section id="profile" className="py-16 border-b border-gray-800/60">
      <div className="bg-[#161b22] border border-gray-800 rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 via-cyan-500 to-blue-500"></div>
        <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded-md mb-4">
          Status: Available for hire 🚀
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{info.name}</h1>
        <h2 className="text-lg text-emerald-400 font-mono mb-4"> {info.role}</h2>
        <p className="text-gray-400 max-w-2xl leading-relaxed text-sm md:text-base">{info.bio}</p>
        <div className="mt-6 flex gap-4 text-xs font-mono text-gray-500">
          <span>📍 {info.location}</span>
          <span>⚡ React + Vite + Docker</span>
        </div>
      </div>
    </section>
  );
}