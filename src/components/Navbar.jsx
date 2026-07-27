import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_25px_rgba(139,92,246,0.12)]"
        : "bg-slate-950/40 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <div className="section-container h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative flex items-center focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <img
              src="/adarsh1.png"
              alt="Adarsh Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
              Adarsh<span className="text-purple-400 group-hover:text-blue-400 transition-colors">.</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 relative py-1 group focus:outline-none"
            >
              <span className="group-hover:text-purple-200 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={22} className="text-purple-400" />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? "max-h-80 opacity-100 border-b border-purple-500/20"
          : "max-h-0 opacity-0"
          } bg-slate-950/90 backdrop-blur-2xl`}
      >
        <div className="section-container py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-xl border border-transparent hover:border-purple-500/20 transition-all duration-300 flex items-center justify-between group"
            >
              <span className="group-hover:text-purple-300 transition-colors">
                {link.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
