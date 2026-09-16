import { useState } from 'react';

export default function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const email = "franciadanloyd30@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
        <span className="text-emerald-400"></span> Contact Info
      </h2>
      
      <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 md:p-8 max-w-2xl relative">
        <p className="text-gray-400 text-sm font-mono mb-6 leading-relaxed">
          To reach my inbox directly, just copy the address below or execute the email command.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 relative">
          {/* Copy Box */}
          <div className="flex-1 bg-[#0d1117] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 font-mono text-sm flex items-center justify-between">
            <span className="truncate mr-2">{email}</span>
            <button 
              onClick={handleCopy}
              className={`${copied ? "text-cyan-400" : "text-emerald-400"} hover:text-emerald-300 font-bold transition shrink-0`}
            >
              {copied ? "[ COPIED ]" : "[ COPY ]"}
            </button>
          </div>
          
          {/* Execute Email Chooser Button */}
          <div className="relative">
            <button 
              onClick={() => setShowOptions(!showOptions)}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black font-mono font-bold py-3 px-6 rounded-lg transition text-center flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              Execute Email () ▾
            </button>

            {/* Email App Chooser Dropdown */}
            {showOptions && (
              <div className="absolute right-0 mt-2 w-56 bg-[#161b22] border border-gray-700 rounded-lg shadow-xl py-2 z-50 font-mono text-xs">
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowOptions(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                >
                  ✉️ Open with Gmail 
                </a>
                <a 
                  href={`https://compose.mail.yahoo.com/?to=${email}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowOptions(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                >
                  ✉️ Open with Yahoo Mail
                </a>
                <a 
                  href={`mailto:${email}`}
                  onClick={() => setShowOptions(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition border-t border-gray-800"
                >
                  💻 Default System App
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-sm font-mono pt-4 border-t border-gray-800/60">
          <a href="https://github.com/whitewalker122" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400 transition flex items-center gap-2">
            <span className="text-emerald-500">🔗</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/dan-loyd-francia-0189542b0/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400 transition flex items-center gap-2">
            <span className="text-emerald-500">🔗</span> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 