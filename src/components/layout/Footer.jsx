import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight, Heart, Terminal, Compass, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Certifications", path: "/certifications" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-[#070B17]/90 backdrop-blur-xl transition-colors duration-300 overflow-hidden">
      {/* Top glowing laser line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 dark:via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                ADARSH<span className="text-blue-600 dark:text-cyan-400">.</span>V
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Building Digital Experiences. Exploring Intelligent Technology. Turning Ideas Into Reality.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM OPERATIONAL • MUMBAI, IN
              </span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Universe Coordinates
            </span>
            <div className="grid grid-cols-2 gap-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                  <span>{route.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Transmissions
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/VishwaAdarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/30 transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/30 transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="mailto:adarshvishwakarma2399@gmail.com"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/30 transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4" />
                  <span>Direct Transmission</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Adarsh Vishwakarma (ADARSH.V). All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Engineered with React 18 • Three.js • Vite • Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
