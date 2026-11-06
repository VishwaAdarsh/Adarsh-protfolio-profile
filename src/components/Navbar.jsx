import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/useTheme";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
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
        ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-purple-500/20 shadow-sm dark:shadow-[0_4px_25px_rgba(139,92,246,0.12)]"
        : "bg-white/50 dark:bg-slate-950/40 backdrop-blur-md border-b border-slate-200/40 dark:border-white/5"
        }`}
    >
      <div className="section-container h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative flex items-center focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="flex items-center gap-3">
            <img
              src="./adarsh1.png"
              alt="Adarsh Logo"
              width="44"
              height="44"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300">
              Adarsh<span className="text-purple-500 dark:text-purple-400 group-hover:text-blue-500 transition-colors">.</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white font-medium text-sm transition-all duration-300 relative py-1 group focus:outline-none"
            >
              <span className="group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}

          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 focus:outline-none active:scale-95"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={19} className="text-amber-400 animate-spin-slow hover:scale-110 transition-transform" />
            ) : (
              <Moon size={19} className="text-purple-600 hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Mobile Header Right (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-gray-300 active:scale-95 transition-all"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-slate-700 dark:text-gray-300 bg-slate-100/80 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl border border-slate-200 dark:border-white/10 transition-all duration-300 focus:outline-none active:scale-95"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-purple-600 dark:text-purple-400" />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? "max-h-96 opacity-100 border-b border-slate-200 dark:border-purple-500/20 shadow-xl"
          : "max-h-0 opacity-0"
          } bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl`}
      >
        <div className="section-container py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="w-full text-left px-4 py-3 min-h-[44px] text-base font-medium text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-500/10 rounded-xl transition-all duration-200 flex items-center justify-between group active:scale-[0.99]"
            >
              <span className="group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {link.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
