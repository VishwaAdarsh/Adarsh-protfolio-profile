import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  Cpu, 
  Database, 
  ExternalLink, 
  Github, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Compass,
  Award
} from "lucide-react";
import { motion } from "motion/react";
import HeroUniverseCanvas from "@/components/3d/HeroUniverseCanvas";
import { projectsData } from "@/data/projectsData";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const resumeUrl = `${import.meta.env.BASE_URL}documents/Adarsh_Resume.pdf`;
  const portraitUrl = `${import.meta.env.BASE_URL}images/adarsh.jpeg`;

  const stats = [
    { label: "Built Projects", value: "6+", sub: "Full-Stack & Systems" },
    { label: "System Uptime", value: "99.8%", sub: "Production Reliability" },
    { label: "Google Challenge", value: "Winner", sub: "Prompt Master 2025" },
    { label: "Education", value: "B.Sc. IT", sub: "Tolani College" },
  ];

  const pillars = [
    {
      icon: Code2,
      title: "Full-Stack Web Engineering",
      desc: "Architecting high-performance, responsive applications with React 18, Tailwind CSS, FastAPI, and Node.js with a relentless focus on clean code and user experience.",
      tags: ["React 18", "FastAPI", "Tailwind CSS", "REST APIs"]
    },
    {
      icon: Cpu,
      title: "Intelligent AI & Automation",
      desc: "Orchestrating generative AI pipelines, transformer workflows, and prompt engineering algorithms to convert complex data into intuitive, automated solutions.",
      tags: ["Generative AI", "Prompt Engineering", "Python", "Automation"]
    },
    {
      icon: Database,
      title: "Cloud Backends & Data Systems",
      desc: "Designing resilient relational schemas, realtime subscriptions, authentication protocols, and distributed data pipelines with PostgreSQL, Supabase, and SQLite.",
      tags: ["PostgreSQL", "Supabase", "SQLite", "Data Modeling"]
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-24 overflow-hidden">
        {/* 3D WebGL Universe Canvas Background */}
        <HeroUniverseCanvas />

        {/* Ambient background glow accents (Adaptive to theme) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Column: Brand Narrative & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Futuristic Introduction Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-cyan-400 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-md mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 animate-pulse" />
                <span>ENTER THE DIGITAL UNIVERSE</span>
              </motion.div>

              {/* Main Cinematic Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6"
              >
                BUILDING THE{" "}
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-500 dark:to-violet-400 bg-clip-text text-transparent">
                  DIGITAL FUTURE
                </span>
                .
              </motion.h1>

              {/* Professional Positioning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex items-center gap-2 text-sm sm:text-base font-mono font-semibold text-violet-600 dark:text-violet-400 mb-4"
              >
                <span>Software Developer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>AI Enthusiast</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Technology Creator</span>
              </motion.div>

              {/* Supporting Tagline & Intro */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
              >
                Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Adarsh Vishwakarma</strong>. I engineer digital experiences, intelligent applications, and technology-driven solutions that turn ambitious ideas into reliable, high-impact reality.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[46px]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white/80 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200/80 dark:border-white/15 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[46px]"
                >
                  <span>About Me</span>
                </Link>

                <a
                  href={resumeUrl}
                  download="Adarsh_Vishwakarma_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors min-h-[46px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </motion.div>
            </div>

            {/* Right Hero Column: Authentic Photographic Composition with Holographic Framing */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
              >
                {/* Outer Rotating Glowing Ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 opacity-60 dark:opacity-80 blur-md animate-pulse" />
                
                {/* Secondary Cybernetic Border */}
                <div className="absolute -inset-1 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600">
                  <div className="w-full h-full rounded-full bg-[#070B17]/40" />
                </div>

                {/* Central Photograph Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden p-2 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 dark:to-transparent backdrop-blur-md shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/40 dark:border-white/10 relative">
                    <img
                      src={portraitUrl}
                      alt="Adarsh Vishwakarma"
                      className="w-full h-full object-cover object-center scale-[1.03] hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle Holographic Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Status Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full bg-white/90 dark:bg-[#0D1428]/90 border border-slate-200/90 dark:border-cyan-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono font-medium text-slate-800 dark:text-cyan-300">
                    Open for Opportunities • Mumbai
                  </span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS TICKER ================= */}
      <section className="py-10 border-y border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 dark:from-white dark:via-blue-200 dark:to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT I BUILD (CORE CAPABILITIES) ================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Transforming Ideas Into Resilient Digital Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Every project is an integration of architectural rigor, modern developer tooling, and clean, intentional visual design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    {pillar.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SHOWCASE ================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50/70 dark:bg-[#0A1022]/60 border-t border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>THE CREATION LAB</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                Featured Engineering Work
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all"
            >
              <span>Explore All Projects ({projectsData.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Project Image Preview */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image.replace('./', '')}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/60 text-white backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Project Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>System Specs & Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA PORTAL ================= */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-b from-blue-600/10 via-violet-600/10 to-transparent dark:from-[#0D1428] dark:to-[#070B17] border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-2xl text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSMISSION PORTAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Have a Project or Opportunity in Mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are looking to build a high-performance web platform, integrate intelligent AI automations, or collaborate on innovative software, I'm always ready to connect.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all"
              >
                <span>Read Developer Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
