import { Mail, Github, Linkedin, ArrowUpRight, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container max-w-3xl relative z-10 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Let's Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
          I'm always excited to hear about new projects, collaborate with talented people, or discuss innovative ideas. Don't hesitate to reach out!
        </p>

        {/* Email CTA */}
        <div className="mb-12">
          <a
            href="mailto:vishwakarma1917adarsh@gmail.com"
            className="btn-primary glow-button inline-flex items-center justify-center gap-3 group text-lg px-8 py-4"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>vishwakarma1917adarsh@gmail.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="glass-premium p-8 space-y-6">
          <p className="text-gray-400">Or find me on social media</p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/VishwaAdarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:glow-button group transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white-400 group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.instagram.com/vishwa.adarsh?igsh=dGJ3ZnM0bHA3Mjkw"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:glow-button group transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-300 group-hover:text-red-400 group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:glow-button group transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://x.com/Vishwa_adars"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:glow-button group transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-gray-300 group-hover:text-purple-400 group-hover:scale-110 transition-all" />
            </a>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
