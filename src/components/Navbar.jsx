export default function Navbar() {
  return (
    <nav className="bg-[#161b22]/80 backdrop-blur-md border-b border-gray-800 text-gray-300 py-4 px-6 sticky top-0 z-50 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
        <h1 className="text-lg font-bold tracking-wider text-white">
          dan<span className="text-emerald-400">.dev</span>
        </h1>
      </div>
      <div className="flex gap-6 text-sm">
        <a href="#profile" className="hover:text-emerald-400 transition">Profile</a>
        <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
        <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
        <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
      </div>
    </nav>
  );
}