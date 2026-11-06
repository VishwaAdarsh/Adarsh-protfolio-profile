import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Terminal, 
  Search, 
  Filter, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Sparkles,
  Layers,
  Cpu
} from "lucide-react";
import { projectsData } from "@/data/projectsData";

const CATEGORIES = ["All", "Full Stack", "Creative & Dev", "AI & Systems"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (selectedCategory === "Full Stack" && project.category === "Full Stack") ||
        (selectedCategory === "Creative & Dev" && (project.category === "Creative Tech" || project.category === "Creative & Dev")) ||
        (selectedCategory === "AI & Systems" && (project.category === "AI & Systems" || project.tags.some(t => t.includes("AI") || t.includes("Python"))));

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>THE CREATION LAB</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Projects & Engineering Artifacts
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          Production systems, web applications, open-source utilities, and hackathon solutions built with modern technology stacks.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all min-h-[40px] ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20 font-semibold"
                  : "bg-white/70 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech or keyword..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-24 rounded-3xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/10 p-8">
          <p className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-2">
            No projects matched your search criteria
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Try resetting your search query or selecting "All" categories.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Image Preview with Badges */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image.replace('./', '')}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/70 text-white backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-blue-500/80 text-white backdrop-blur-md">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-violet-600 dark:text-violet-400 mb-3 line-clamp-1">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:gap-2.5 transition-all"
                  >
                    <span>System Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
                        aria-label={`Source repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
