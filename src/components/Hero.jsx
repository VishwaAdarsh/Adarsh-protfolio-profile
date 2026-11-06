import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable subtle mouse parallax on desktop with mouse (not touch/mobile)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.015;
      const moveY = (clientY - window.innerHeight / 2) * 0.015;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section relative overflow-hidden transition-colors duration-300">
      {/* ===== AI, PROGRAMMING & DATA SCIENCE DECORATIVE BACKGROUND ===== */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-transform duration-700 ease-out"
        style={{
          transform: mousePos.x ? `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` : "none"
        }}
      >
        {/* Subtle Radial Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:36px_36px] opacity-40 dark:opacity-15"></div>

        {/* Ambient Glowing Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-400/15 dark:bg-purple-600/15 rounded-full blur-3xl md:blur-[120px] animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-72 md:w-[480px] h-72 md:h-[480px] bg-blue-400/15 dark:bg-blue-600/15 rounded-full blur-3xl md:blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 md:w-[450px] h-72 md:h-[450px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl md:blur-[120px] animate-blob animation-delay-4000"></div>

        {/* Futuristic SVG Circuit Lines & Neural Mesh (Theme Adaptive) */}
        <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-circuit-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="hero-circuit-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Left Circuit Tracks */}
          <path d="M 40 120 L 160 120 L 230 190 L 230 380" fill="none" stroke="url(#hero-circuit-1)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-circuit-pulse" />
          <circle cx="160" cy="120" r="3" fill="#a855f7" />
          <circle cx="230" cy="190" r="4" fill="#3b82f6" className="animate-node-glow" />

          {/* Right Circuit Tracks */}
          <path d="M 880 90 L 760 190 L 760 340 L 660 440" fill="none" stroke="url(#hero-circuit-2)" strokeWidth="1.5" strokeDasharray="8 4" className="animate-circuit-pulse" />
          <circle cx="760" cy="190" r="3" fill="#3b82f6" />
          <circle cx="660" cy="440" r="4" fill="#a855f7" className="animate-node-glow" />

          {/* Neural Network Nodes */}
          <g className="opacity-70">
            <line x1="120" y1="220" x2="250" y2="300" stroke="rgba(147, 51, 234, 0.25)" strokeWidth="1" />
            <line x1="250" y1="300" x2="180" y2="420" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="1" />
            <line x1="180" y1="420" x2="90" y2="340" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="1" />
            <line x1="720" y1="280" x2="840" y2="380" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="1" />
            
            <circle cx="120" cy="220" r="3" fill="#c084fc" />
            <circle cx="250" cy="300" r="4" fill="#60a5fa" className="animate-node-glow" />
            <circle cx="180" cy="420" r="3" fill="#a855f7" />
            <circle cx="720" cy="280" r="3.5" fill="#3b82f6" className="animate-node-glow" />
            <circle cx="840" cy="380" r="3" fill="#c084fc" />
          </g>
        </svg>

        {/* Clean, Curated Floating Badges (Beautiful in Both Themes) */}
        <div className="absolute top-20 left-[6%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-200/90 dark:border-purple-500/25 text-slate-700 dark:text-purple-200 shadow-sm backdrop-blur-md animate-float-slow pointer-events-none text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          Python & Data Science
        </div>

        <div className="absolute top-[48%] left-[4%] hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-200/90 dark:border-blue-500/25 text-slate-700 dark:text-blue-200 shadow-sm backdrop-blur-md animate-float-reverse pointer-events-none text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Full-Stack Development
        </div>

        <div className="absolute bottom-[20%] left-[8%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-200/90 dark:border-indigo-500/25 text-slate-700 dark:text-indigo-200 shadow-sm backdrop-blur-md animate-float-diagonal pointer-events-none text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          FastAPI & SQL Databases
        </div>

        <div className="absolute top-24 right-[8%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-200/90 dark:border-blue-500/25 text-slate-700 dark:text-blue-200 shadow-sm backdrop-blur-md animate-float-diagonal pointer-events-none text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          AI & Machine Learning
        </div>

        <div className="absolute top-[52%] right-[5%] hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/80 border border-slate-200/90 dark:border-purple-500/25 text-slate-700 dark:text-purple-200 shadow-sm backdrop-blur-md animate-float-slow pointer-events-none text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          React & Modern Web
        </div>
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8 animate-fadeInUp">
            {/* Status Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
                <Sparkles size={14} className="text-purple-600 dark:text-purple-400" />
                <span>Available for Opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.12] mb-3 sm:mb-4 text-slate-900 dark:text-white">
                Hi, I'm{" "}
                <span className="gradient-text block">Adarsh Vishwakarma</span>
              </h1>

              <h2 className="text-lg sm:text-2xl md:text-3xl text-slate-600 dark:text-gray-300 font-light flex items-center gap-2 flex-wrap">
                <span>B.Sc.IT Student</span>
                <span className="text-purple-500">•</span>
                <span>Developer</span>
                <span className="text-blue-500">•</span>
                <span>AI Generalist</span>
              </h2>
            </div>

            {/* Value Prop */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-xl">
              I craft premium, responsive web applications with a focus on user experience, data architecture, and clean code. Passionate about building intelligent solutions to solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary glow-button flex items-center justify-center gap-2 group w-full sm:w-auto min-h-[46px] shadow-lg shadow-purple-500/20"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`${import.meta.env.BASE_URL}documents/Adarsh_Resume.pdf`}
                download="Adarsh_Vishwakarma_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[46px] px-6 sm:px-8 py-3 rounded-lg font-semibold border transition-all duration-300 bg-white hover:bg-slate-100 text-slate-800 border-slate-300/90 shadow-sm hover:shadow dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20 active:scale-[0.98]"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 sm:pt-4">
              <a
                href="https://github.com/VishwaAdarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/30 hover:scale-105 shadow-sm transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/30 hover:scale-105 shadow-sm transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vishwakarma1917adarsh@gmail.com"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/30 hover:scale-105 shadow-sm transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Visual Avatar Presentation */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            {/* Ambient Backdrop Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-blue-500/20 rounded-full blur-3xl"></div>

            {/* Profile Avatar with Gradient Border Ring */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 shadow-2xl shadow-purple-500/25">
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden bg-white dark:bg-slate-950 p-1">
                <img
                  src="./images/adarsh.jpeg"
                  alt="Adarsh Vishwakarma"
                  width="320"
                  height="320"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
            </div>

            {/* Floating Mini Status Badge */}
            <div className="absolute -bottom-2 -left-2 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-float-slow">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-white">AI & Web Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-white/20 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
