import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-slate-900/50 backdrop-blur-sm py-10 sm:py-12 relative overflow-hidden transition-colors duration-300">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text mb-1">Adarsh Vishwakarma</p>
            <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm">
              Designed & built with React • Tailwind CSS • Vite
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/VishwaAdarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card hover:scale-110 transition-transform min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-slate-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card hover:scale-110 transition-transform min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-slate-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-6 sm:pt-8">
          <p className="text-center text-slate-500 dark:text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Adarsh Vishwakarma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
