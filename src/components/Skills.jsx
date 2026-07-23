import { Code2, Database, Server, Palette, Smartphone, Cloud, Bot } from "lucide-react";

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
    category: " AI Tools & Platforms",
    icon: Bot,
    items: ["Gen AI", "Automation", "GitHub", "Vercel", "Netlify", "Antigravity", "SQL Server Studio"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl">
            A comprehensive overview of technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div key={index} className="glass-card p-8 space-y-6 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-600/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{group.category}</h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
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
