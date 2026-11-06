import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Zap, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">
          Project Specification Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The requested project record "{slug}" does not exist in the creation lab registry.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects Lab</span>
        </Link>
      </div>
    );
  }

  // Find next project for quick pagination
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Back Link */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO CREATION LAB</span>
      </Link>

      {/* Project Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              Featured Flagship
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg font-mono text-violet-600 dark:text-violet-400 mb-6">
          {project.subtitle}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-md shadow-blue-500/20 hover:scale-105 transition-all min-h-[42px]"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 transition-all min-h-[42px]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Hero Image Showcase */}
      <div className="relative rounded-3xl overflow-hidden mb-12 border border-slate-200/80 dark:border-white/10 shadow-2xl bg-slate-950 aspect-video max-h-[500px]">
        <img
          src={`${import.meta.env.BASE_URL}${project.image.replace('./', '')}`}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Metrics Grid */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl text-center"
            >
              <p className="text-2xl font-heading font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent">
                {m.value}
              </p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Architectural Deep-Dive Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
        {/* Left Column: Narrative Details */}
        <div className="md:col-span-8 flex flex-col gap-10">
          {/* Overview */}
          <div className="p-8 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>System Overview</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/15">
              <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>The Problem</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
              <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Engineered Solution</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="p-8 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <span>Technical Architecture</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Challenges & Results */}
          <div className="p-8 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-violet-500" />
              <span>Engineering Challenges & Results</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <strong className="text-slate-900 dark:text-white block mb-1">Challenge Overcome:</strong>
                <p>{project.challenges}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                <strong className="text-slate-900 dark:text-white block mb-1">Impact & Verification:</strong>
                <p>{project.results}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tech Stack & System Properties */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Next Project Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-blue-500/20 text-center">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Next in Lab
            </p>
            <p className="text-base font-heading font-bold text-slate-900 dark:text-white mb-4">
              {nextProject.title}
            </p>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:gap-2.5 transition-all"
            >
              <span>View Next System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
