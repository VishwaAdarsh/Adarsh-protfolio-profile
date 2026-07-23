import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle mouse parallax effect (disabled if reduced motion is preferred)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.015;
      const moveY = (clientY - window.innerHeight / 2) * 0.015;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section relative overflow-hidden">
      {/* ===== AI, PROGRAMMING & DATA SCIENCE DECORATIVE BACKGROUND ===== */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-transform duration-700 ease-out"
        style={{
          transform: mousePos.x ? `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` : "none"
        }}
      >
        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06]"></div>

        {/* Ambient Glowing Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

        {/* Futuristic SVG Circuit Lines & Neural Network Mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-20 sm:opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-circuit-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="hero-circuit-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
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

          {/* Central & Side Neural Network Connections */}
          <g className="opacity-70">
            <line x1="120" y1="220" x2="250" y2="300" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
            <line x1="250" y1="300" x2="180" y2="420" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
            <line x1="180" y1="420" x2="90" y2="340" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" />
            <line x1="720" y1="280" x2="840" y2="380" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
            
            <circle cx="120" cy="220" r="3" fill="#c084fc" />
            <circle cx="250" cy="300" r="4" fill="#60a5fa" className="animate-node-glow" />
            <circle cx="180" cy="420" r="3" fill="#a855f7" />
            <circle cx="720" cy="280" r="3.5" fill="#3b82f6" className="animate-node-glow" />
            <circle cx="840" cy="380" r="3" fill="#c084fc" />
          </g>

          {/* Microchip / Processor Accent Outline */}
          <g transform="translate(820, 110)" className="hidden lg:block opacity-25">
            <rect x="0" y="0" width="80" height="80" rx="8" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1.5" />
            <rect x="15" y="15" width="50" height="50" rx="4" fill="rgba(59, 130, 246, 0.08)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
            <line x1="20" y1="0" x2="20" y2="-10" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1.5" />
            <line x1="40" y1="0" x2="40" y2="-10" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1.5" />
            <line x1="60" y1="0" x2="60" y2="-10" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1.5" />
            <line x1="80" y1="20" x2="90" y2="20" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
            <line x1="80" y1="40" x2="90" y2="40" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
            <line x1="80" y1="60" x2="90" y2="60" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
          </g>
        </svg>

        {/* ===== 1. FLOATING PROGRAMMING CODE SNIPPETS ===== */}
        {/* Python Snippets */}
        <div className="absolute top-16 left-[8%] text-[11px] font-mono text-purple-300/35 border border-purple-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-slow hidden sm:block">
          <code>model.fit(X_train, y_train)</code>
        </div>
        <div className="absolute top-[42%] left-[3%] text-[11px] font-mono text-blue-300/30 border border-blue-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-reverse hidden md:block">
          <code>import pandas as pd</code>
        </div>
        <div className="absolute bottom-[20%] left-[7%] text-[11px] font-mono text-indigo-300/30 border border-indigo-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-fade-slow hidden lg:block">
          <code>import numpy as np</code>
        </div>
        <div className="absolute top-28 left-[38%] text-[11px] font-mono text-purple-300/25 border border-purple-500/15 px-2 py-0.5 rounded-md bg-slate-950/30 backdrop-blur-sm animate-float-diagonal hidden lg:block">
          <code>def predict(data):</code>
        </div>

        {/* C / C++ Snippets */}
        <div className="absolute top-20 right-[12%] text-[11px] font-mono text-blue-300/35 border border-blue-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-diagonal hidden sm:block">
          <code>#include &lt;stdio.h&gt;</code>
        </div>
        <div className="absolute top-[38%] right-[4%] text-[11px] font-mono text-purple-300/30 border border-purple-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-slow hidden md:block">
          <code>printf("Hello World");</code>
        </div>
        <div className="absolute bottom-[28%] right-[6%] text-[11px] font-mono text-indigo-300/30 border border-indigo-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-reverse hidden lg:block">
          <code>#include &lt;iostream&gt;</code>
        </div>
        <div className="absolute top-[14%] right-[32%] text-[10px] font-mono text-cyan-300/25 border border-cyan-500/15 px-2 py-0.5 rounded-md bg-slate-950/30 backdrop-blur-sm animate-fade-slow hidden xl:block">
          <code>vector&lt;int&gt; data;</code>
        </div>

        {/* JavaScript & React Snippets */}
        <div className="absolute top-[62%] left-[12%] text-[11px] font-mono text-cyan-300/30 border border-cyan-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-slow hidden md:block">
          <code>const ai = true;</code>
        </div>
        <div className="absolute top-[52%] right-[14%] text-[11px] font-mono text-purple-300/30 border border-purple-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-diagonal hidden md:block">
          <code>await loadModel();</code>
        </div>

        {/* SQL Snippets */}
        <div className="absolute bottom-[14%] right-[22%] text-[11px] font-mono text-blue-300/30 border border-blue-500/20 px-2.5 py-1 rounded-md bg-slate-950/40 backdrop-blur-sm animate-float-reverse hidden sm:block">
          <code>SELECT * FROM data;</code>
        </div>
        <div className="absolute bottom-[10%] left-[28%] text-[10px] font-mono text-indigo-300/25 border border-indigo-500/15 px-2 py-0.5 rounded-md bg-slate-950/30 backdrop-blur-sm animate-fade-slow hidden lg:block">
          <code>CREATE TABLE users;</code>
        </div>

        {/* ===== 2. PROGRAMMING LANGUAGE BADGES ===== */}
        <div className="absolute top-[32%] left-[14%] text-[10px] font-semibold text-purple-400/40 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full animate-float-slow hidden sm:block">
          Python
        </div>
        <div className="absolute top-[18%] left-[26%] text-[10px] font-semibold text-blue-400/40 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full animate-float-reverse hidden md:block">
          C++
        </div>
        <div className="absolute top-[72%] left-[22%] text-[10px] font-semibold text-indigo-400/40 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full animate-fade-slow hidden sm:block">
          JavaScript
        </div>
        <div className="absolute top-[28%] right-[24%] text-[10px] font-semibold text-cyan-400/40 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full animate-float-diagonal hidden md:block">
          React
        </div>
        <div className="absolute bottom-[36%] right-[16%] text-[10px] font-semibold text-purple-400/40 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full animate-float-slow hidden sm:block">
          SQL
        </div>
        <div className="absolute top-[78%] right-[30%] text-[10px] font-semibold text-blue-400/40 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full animate-fade-slow hidden lg:block">
          C
        </div>

        {/* ===== 3. AI & MACHINE LEARNING ELEMENTS ===== */}
        <div className="absolute top-[48%] left-[20%] text-xs font-bold tracking-wider text-purple-300/40 bg-purple-950/40 border border-purple-400/30 px-2.5 py-1 rounded-lg animate-pulse hidden sm:block">
          AI
        </div>
        <div className="absolute top-[68%] right-[36%] text-xs font-bold tracking-wider text-blue-300/40 bg-blue-950/40 border border-blue-400/30 px-2.5 py-1 rounded-lg animate-float-slow hidden sm:block">
          ML
        </div>
        <div className="absolute top-[22%] right-[44%] text-[11px] font-medium tracking-wide text-indigo-300/35 bg-indigo-950/30 border border-indigo-400/20 px-2 py-0.5 rounded-md animate-fade-slow hidden lg:block">
          LLM
        </div>
        <div className="absolute bottom-[24%] left-[36%] text-[10px] font-medium tracking-wider text-cyan-300/35 border border-cyan-500/20 px-2 py-0.5 rounded-md animate-float-diagonal hidden lg:block">
          Neural Network
        </div>

        {/* ===== 4. AI TOOL ECOSYSTEM (MINIMAL DECORATIVE PILLS) ===== */}
        <div className="absolute top-[10%] left-[20%] text-[10px] font-mono text-purple-300/30 border border-purple-500/20 px-2 py-0.5 rounded-full bg-slate-900/40 animate-fade-slow hidden lg:block">
          ChatGPT
        </div>
        <div className="absolute top-[15%] right-[20%] text-[10px] font-mono text-blue-300/30 border border-blue-500/20 px-2 py-0.5 rounded-full bg-slate-900/40 animate-float-slow hidden lg:block">
          Gemini
        </div>
        <div className="absolute bottom-[18%] left-[16%] text-[10px] font-mono text-indigo-300/30 border border-indigo-500/20 px-2 py-0.5 rounded-full bg-slate-900/40 animate-float-reverse hidden lg:block">
          Claude
        </div>
        <div className="absolute bottom-[22%] right-[10%] text-[10px] font-mono text-cyan-300/30 border border-cyan-500/20 px-2 py-0.5 rounded-full bg-slate-900/40 animate-fade-slow hidden xl:block">
          GitHub Copilot
        </div>

        {/* ===== 5. DATA SCIENCE ELEMENTS ===== */}
        <div className="absolute top-[75%] left-[5%] text-[11px] font-mono text-purple-300/30 animate-float-slow hidden sm:block">
          f(x)
        </div>
        <div className="absolute top-[82%] left-[45%] text-[10px] font-mono text-blue-300/25 animate-fade-slow hidden md:block">
          X_train, y_train
        </div>
        <div className="absolute top-[12%] left-[48%] text-[10px] font-mono text-indigo-300/25 animate-float-reverse hidden lg:block">
          model.predict()
        </div>
        <div className="absolute bottom-[32%] left-[2%] text-[10px] font-mono text-cyan-300/25 animate-pulse hidden md:block">
          &#123; data &#125;
        </div>
        <div className="absolute bottom-[44%] right-[3%] text-[10px] font-mono text-purple-300/25 animate-float-diagonal hidden md:block">
          [0, 1]
        </div>
        <div className="absolute bottom-[40%] left-[10%] text-[9px] font-mono text-indigo-400/20 tracking-widest animate-pulse hidden lg:block">
          010101
        </div>

        {/* Subtle Data Particles */}
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-[1px] animate-pulse"></div>
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-[1px] animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-300/40 rounded-full blur-[1px] animate-float-reverse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-indigo-400/30 rounded-full blur-[1px] animate-pulse"></div>
      </div>

      {/* ===== HERO CONTENT (UNTOUCHED) ===== */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Label */}
            <div>
              <p className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4">
                Welcome to my portfolio
              </p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="gradient-text block">Adarsh Vishwakarma</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                B.ScIT Student | Developer | AI Generalist
              </h2>
            </div>

            {/* Value Prop */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I craft premium, responsive web applications with a focus on user experience and clean code. Passionate about building elegant solutions to complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary glow-button flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`${import.meta.env.BASE_URL}documents/Adarsh_Vishwakarma_Resume.pdf`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/VishwaAdarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:vishwakarma1917adarsh@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 rounded-full blur-3xl glow-accent"></div>

            {/* Hero profile image with glass effect */}
            <div className="relative w-80 h-80 md:w-100 md:h-100 rounded-full overflow-hidden glass-premium p-1 animate-glow-pulse">
              <img
                src="/images/adarsh.jpeg"
                alt="Adarsh Vishwakarma"
                className="w-full h-full object-cover rounded-full"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
