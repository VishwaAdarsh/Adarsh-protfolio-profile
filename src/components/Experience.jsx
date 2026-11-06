import { Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Prompt Master Participant",
    issuer: "Google Student Ambassador",
    date: "2025",
    type: "Participation",
    description: "Won competitive prompt engineering challenge demonstrating AI proficiency.",
    link: `${import.meta.env.BASE_URL}documents/Google Certificate_Adarsh Vishwakarma.pdf`
  },
  {
    title: "Generative AI Certification",
    issuer: "Outskill",
    date: "2025",
    type: "Certification",
    description: "Completed comprehensive course on generative AI concepts and applications.",
    link: `${import.meta.env.BASE_URL}documents/Adarsh_Vishwakarma_Certificate.pdf`
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "2025",
    type: "Accreditation",
    description: "Earned accreditation in Databricks data engineering fundamentals.",
    link: `${import.meta.env.BASE_URL}documents/DATA_BRICKS CERTIFICATE.pdf`
  },
  {
    title: "Essay Writing Competition",
    issuer: "Google Student Ambassador",
    date: "2025",
    type: "Participation",
    description: "Competed in technical essay writing demonstrating communication skills.",
    link: `${import.meta.env.BASE_URL}documents/Google certificate essay writing.pdf`
  },
  {
    title: "AI Tool Workshop",
    issuer: "Be10x",
    date: "2026",
    type: "Completion",
    description: "Completed AI tool workshop organized by Be10x for learning AI tools to boost productivity.",
    link: `${import.meta.env.BASE_URL}documents/Certificate.pdf`
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-10 w-72 md:w-80 h-72 md:h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Experience & Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-slate-600 dark:text-gray-400 mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg">
            Milestones, credentials, and achievements validating practical skills and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 max-w-3xl">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item group">
              <div className="glass-card p-5 sm:p-6 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-gray-500">• {exp.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:gradient-text transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400 mb-2">{exp.issuer}</p>
                    <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all flex-shrink-0 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={`View ${exp.title} certificate`}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
