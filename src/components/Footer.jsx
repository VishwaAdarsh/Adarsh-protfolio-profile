import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm py-12 relative overflow-hidden">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text mb-1">Adarsh Vishwakarma</p>
            <p className="text-gray-400 text-sm">
              Designed & built with React • Tailwind • Vite
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/VishwaAdarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Adarsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
