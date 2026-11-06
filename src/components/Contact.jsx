import { Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>

      <div className="section-container max-w-3xl relative z-10 text-center">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Let's Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on creative projects, or talk about AI and software engineering. Don't hesitate to reach out!
        </p>

        {/* Email CTA */}
        <div className="mb-8 sm:mb-12">
          <a
            href="mailto:vishwakarma1917adarsh@gmail.com"
            className="btn-primary glow-button inline-flex items-center justify-center gap-2.5 sm:gap-3 group text-sm sm:text-base md:text-lg px-5 sm:px-8 py-3.5 sm:py-4 max-w-full min-h-[48px]"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="break-all sm:break-normal font-medium">vishwakarma1917adarsh@gmail.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="glass-premium p-6 sm:p-8 space-y-5 sm:space-y-6">
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-medium">Or find me on social media</p>

          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
            <a
              href="https://github.com/VishwaAdarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 hover:glow-button group transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-white group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.instagram.com/vishwa.adarsh?igsh=dGJ3ZnM0bHA3Mjkw"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 hover:glow-button group transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 hover:glow-button group transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all" />
            </a>
            <a
              href="https://x.com/Vishwa_adars"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 hover:glow-button group transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:scale-110 transition-all" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-500 pt-2">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
