import { Download, Mail, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container max-w-3xl relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Resume</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="glass-premium p-12 text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get My Resume</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Download my comprehensive resume to learn about my professional background, technical skills, and career achievements.
            </p>

            <a
              href={`${import.meta.env.BASE_URL}documents/Adarsh_Vishwakarma_Resume.pdf`}
              download="Adarsh_Vishwakarma_Resume.pdf"
              className="btn-primary glow-button inline-flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 mb-6">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vishwakarma1917adarsh@gmail.com"
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/vishwakarma-adarsh-b08566387"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
              >
                <ExternalLink className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
