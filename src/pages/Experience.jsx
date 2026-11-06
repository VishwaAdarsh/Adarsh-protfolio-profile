import { 
  Briefcase, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap,
  Building2,
  Terminal
} from "lucide-react";
import { experienceData, educationData } from "@/data/experienceData";

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER & MILESTONES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Experience & Achievements
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          A chronicle of competitive hackathons, industry accreditations, full-stack systems engineering, and academic milestones.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-12 mb-20 ml-2 sm:ml-4">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Glowing Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 border-2 border-white dark:border-[#070B17] shadow-[0_0_12px_rgba(0,217,255,0.6)] group-hover:scale-125 transition-transform" />

            {/* Card Content */}
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl shadow-sm transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  {exp.period}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {exp.type}
                </span>
              </div>

              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                {exp.role}
              </h2>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-4 flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>{exp.organization}</span>
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Timeline */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC MILESTONES</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">
            Academic Track Record
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  {edu.period}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {edu.location}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-4">
                {edu.institution}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {edu.details}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                {edu.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
