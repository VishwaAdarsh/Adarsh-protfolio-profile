import { Code2, Server, Bot } from "lucide-react";

const skillsGroups = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "REST APIs", "MySQL", "Data Validation"]
  },
  {
    category: "AI Tools & Platforms",
    icon: Bot,
    items: ["Gen AI", "Automation", "GitHub", "Vercel", "Netlify", "Antigravity", "SQL Server Studio"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-64 md:w-80 h-64 md:h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-slate-600 dark:text-gray-400 mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of technologies and tools I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {skillsGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div key={index} className="glass-card p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6 group">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-purple-100 dark:bg-gradient-to-br dark:from-purple-600/30 dark:to-blue-600/30 rounded-xl border border-purple-200 dark:border-purple-500/20 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{group.category}</h3>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {group.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 sm:px-4 py-2 bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/90 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-gray-300 rounded-lg text-xs sm:text-sm transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
