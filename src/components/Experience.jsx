import { Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Prompt Master Competition Winner",
    issuer: "Google Student Ambassador",
    date: "2025",
    type: "Competition",
    description: "Won competitive prompt engineering challenge demonstrating AI proficiency",
    link: "/documents/Google Certificate_Adarsh Vishwakarma.pdf"
  },
  {
    title: "Generative AI Certification",
    issuer: "Outskill",
    date: "2025",
    type: "Certification",
    description: "Completed comprehensive course on generative AI concepts and applications",
    link: "/documents/Adarsh_Vishwakarma_Certificate.pdf"
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "2025",
    type: "Accreditation",
    description: "Earned accreditation in Databricks data engineering fundamentals",
    link: "/documents/DATA_BRICKS CERTIFICATE.pdf"
  },
  {
    title: "Essay Writing Competition",
    issuer: "Google Student Ambassador",
    date: "2025",
    type: "Participation",
    description: "Competed in technical essay writing demonstrating communication skills",
    link: "/documents/Google certificate essay writing.pdf"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Experience & Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 max-w-3xl">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item group">
              <div className="glass-card p-6 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                        {exp.type}
                      </span>
                      <span className="text-xs text-gray-500">{exp.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{exp.issuer}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-400 transition-colors flex-shrink-0 hover:scale-110 transform duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
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
