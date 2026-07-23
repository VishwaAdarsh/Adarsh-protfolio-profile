import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

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
                Software Engineer & AI Generalist
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
                href="/resume.pdf"
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

            {/* Hero image placeholder with glass effect */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-premium p-1 animate-glow-pulse">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 rounded-full flex items-center justify-center text-gray-400 text-center p-8">
                <div className="space-y-2">
                  <p className="text-sm">[Profile Photo]</p>
                  <p className="text-xs opacity-50">800x800px</p>
                </div>
              </div>
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
