export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-16 border-b border-gray-800/60">
      <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
        <span className="text-emerald-400"></span> Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-[#161b22] border border-gray-800 hover:border-emerald-500/50 rounded-lg p-3 transition duration-200">
            <div className="text-sm font-semibold text-gray-200">{skill.name}</div>
            <div className="text-xs text-gray-500 mt-1 font-mono">{skill.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}