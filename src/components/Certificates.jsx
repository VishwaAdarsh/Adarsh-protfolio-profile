import GlowCard from "@/components/ui/GlowCard";
import { Award, BadgeCheck, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const certificates = [
  {
    title: "Prompt master competition",
    issuer: "Google Student Ambassador",
    date: "2025",
    type: "Professional Certificate",
    file: "/documents/Google Certificate_Adarsh Vishwakarma.pdf",
    order: 1
  },
  {
    title: "Generative AI Certificate",
    issuer: "Outskill",
    date: "2025",
    type: "Completion",
    file: "/documents/Adarsh_Vishwakarma_Certificate.pdf",
    order: 2
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "2025",
    type: "Accreditation",
    file: "/documents/DATA_BRICKS CERTIFICATE.pdf",
    order: 3
  },
  {
    title: "Essay Writing Competition",
    issuer: "Google Student Ambassador",
    date: "2025",
    type: "Participation",
    file: "/documents/Google certificate essay writing.pdf",
    order: 4
  }
];

export default function Certificates() {
  const [isTimelineView, setIsTimelineView] = useState(true);

  if (isTimelineView) {
    return (
      <section id="certificates" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional credentials and achievements that validate my technical expertise.
            </p>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block">
            <div className="relative py-12">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/30 via-purple-500/50 to-blue-500/30 -translate-y-1/2"></div>

              {/* Timeline Nodes */}
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Node Circle */}
                    <div className="w-16 h-16 bg-black/80 rounded-full flex items-center justify-center border-4 border-purple-500 shadow-lg shadow-purple-500/50 mb-6 hover:scale-110 transition-transform duration-300 group cursor-pointer relative">
                      <Award className="w-8 h-8 text-purple-400" />
                      <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse"></div>
                    </div>

                    {/* Card below node */}
                    <GlowCard className="p-4 flex flex-col items-center text-center w-full hover:shadow-2xl transition-all duration-500 bg-black/40">
                      <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2">{cert.type}</span>
                      <h3 className="text-sm font-bold text-white leading-tight mb-2 group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                      <p className="text-xs font-semibold text-blue-400 mb-3">{cert.date}</p>
                      <Button variant="outline" className="w-full border-white/10 hover:bg-white/10 text-xs h-8 group-hover:border-purple-500/30" asChild>
                        <a href={cert.file} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-1 h-3 w-3" /> View
                        </a>
                      </Button>
                    </GlowCard>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Vertical Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/30 via-purple-500/50 to-blue-500/30"></div>

              <div className="space-y-12">
                {certificates.map((cert, index) => (
                  <div key={index} className="relative">
                    {/* Node Circle */}
                    <div className="absolute -left-6 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-black/80 shadow-lg shadow-purple-500/50"></div>

                    {/* Card */}
                    <GlowCard className="p-6 hover:shadow-2xl transition-all duration-500 bg-black/40">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                          <div className="flex-grow">
                            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">{cert.type}</span>
                            <h3 className="text-lg font-bold text-white leading-tight mt-1">
                              {cert.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-sm font-semibold text-blue-400">{cert.date}</p>
                        <Button variant="outline" className="w-full border-white/10 hover:bg-white/10 text-sm" asChild>
                          <a href={cert.file} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" /> View Certificate
                          </a>
                        </Button>
                      </div>
                    </GlowCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback grid view (not used by default, but can be toggled)
  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional credentials and achievements that validate my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <GlowCard key={index} className="p-6 flex flex-col items-start gap-4 hover:shadow-2xl transition-all duration-500">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <Award size={32} />
              </div>

              <div className="space-y-2 flex-grow">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{cert.issuer}</span>
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.type} • {cert.date}</p>
              </div>

              <div className="w-full pt-4 mt-auto">
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/10 text-sm group-hover:border-purple-500/30" asChild>
                  <a href={cert.file} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> View Certificate
                  </a>
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
