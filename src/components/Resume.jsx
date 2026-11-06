import { Download, Mail, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/3 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>

      <div className="section-container max-w-3xl relative z-10">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Resume</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="glass-premium p-6 sm:p-8 md:p-12 text-center space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">Get My Resume</h3>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base max-w-xl mx-auto">
              Download my comprehensive resume to learn about my technical foundation, project portfolio, educational credentials, and career achievements.
            </p>

            <a
              href={`${import.meta.env.BASE_URL}documents/Adarsh_Resume.pdf`}
              download="Adarsh_Vishwakarma_Resume.pdf"
              className="btn-primary glow-button inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10 pt-6 sm:pt-8">
            <p className="text-slate-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:vishwakarma1917adarsh@gmail.com"
                className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
