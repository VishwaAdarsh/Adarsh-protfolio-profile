import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "QR-Canvas Studio",
    problem: "Most online QR code generators provide only basic QR creation with limited customization. Advanced features such as logo embedding, custom shapes, gradients, multiple QR types, and scan validation are often unavailable or restricted.",
    solution: "A modern QR generation platform that supports 13+ QR types, advanced design customization, logo embedding, scan testing, history management, and high-resolution exports through a clean and responsive interface.",
    tags: ["React", "FastAPI", "Python", "SQLite", "TailwindCSS"],
    gradient: "from-purple-600 to-indigo-600",
    liveLink: "https://qr-canvas-ten.vercel.app/",
    githubLink: "https://github.com/VishwaAdarsh/QR-Canvas"
  },
  {
    title: "Attendence system web application",
    problem: "College events often rely on Excel sheets or manual attendance registers. This makes the process time-consuming, increases the chances of duplicate or missing entries, and makes it difficult to track attendance or generate reports efficiently.",
    solution: "Built a full-stack web application with separate Member and Admin portals. Members can register their details through a simple interface, while administrators can securely manage participant records, monitor attendance, update information, and maintain all event data from a centralized dashboard.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "FastAPI"],
    gradient: "from-blue-600 to-cyan-600",
    liveLink: "https://tech-bit-attendence.vercel.app/",
    githubLink: "https://github.com/VishwaAdarsh/TechBit-Attendence"
  },
  {
    title: "Vishwa Solutions",
    problem: "Many small businesses rely on phone calls, WhatsApp messages, and manual record-keeping to manage customer inquiries. Without a professional online presence, showcasing services, collecting project requests, and organizing customer information becomes difficult.",
    solution: "Developed a responsive business website for Vishwa Solutions that showcases services, completed projects, and company information while providing an inquiry form for customers. Submitted inquiries are organized in an Excel-based system, allowing business owners to manage customer requests without requiring a dedicated database.",
    tags: ["HTML5", "CSS3", "JavaScript", "GoogleSheets"],
    gradient: "from-emerald-600 to-teal-600",
    liveLink: "https://vishwasolutions.netlify.app/",
    githubLink: "https://github.com/VishwaAdarsh/Vishwa-Solutions"
  },
  {
    title: " AI Dashboard ",
    problem: "Content creation bottlenecks slow down marketing and publishing workflows.",
    solution: "Developed an AI-powered tool generating high-quality blog posts and marketing copy instantly.",
    tags: ["React", "FastAPI", "OpenAI", "Docker"],
    gradient: "from-emerald-600 to-teal-600",
    liveLink: "#",
    githubLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl">
            A selection of projects that showcase my ability to build elegant solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-premium p-8 overflow-hidden flex flex-col h-full hover:scale-105 transition-transform duration-300"
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-12 bg-gradient-to-r ${project.gradient} rounded-full mb-6 group-hover:w-full transition-all duration-500`}></div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-1">
                    Problem
                  </p>
                  <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">
                    Solution
                  </p>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6 py-6 border-t border-white/10">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 group/btn text-sm"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Live
                </a>
                <a
                  href={project.githubLink}
                  className="flex-1 btn-secondary flex items-center justify-center gap-2 group/btn text-sm"
                >
                  <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/VishwaAdarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 btn-secondary group hover:glow-button"
          >
            Explore More Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
