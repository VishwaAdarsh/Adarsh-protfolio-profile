import { useState } from "react";
import { 
  Cpu, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { skillsData } from "@/data/skillsData";

const ICON_MAP = {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const displayedGroups =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>THE TECHNOLOGY CORE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Technical Skills & Capabilities
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          A structured matrix of languages, frameworks, cloud databases, and AI tooling engineered for performance, precision, and scalability.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all min-h-[40px] ${
              activeCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20 font-semibold"
                : "bg-white/70 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedGroups.map((group) => {
          const Icon = ICON_MAP[group.iconName] || Code2;

          return (
            <div
              key={group.category}
              className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {group.skills.length} Core Competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
