import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Download, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { educationData } from "@/data/experienceData";

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}documents/Adarsh_Resume.pdf`;
  const portraitUrl = `${import.meta.env.BASE_URL}images/adarsh.jpeg`;

  const philosophies = [
    {
      title: "Pragmatic Architecture",
      desc: "Write maintainable, readable, and resilient code. Solve actual problems with the simplest, most performant tool rather than chasing transient hype."
    },
    {
      title: "Continuous Evolution",
      desc: "Software engineering and AI evolve exponentially. I treat learning as an everyday engineering discipline, constantly experimenting with new paradigms."
    },
    {
      title: "Human-Centric Engineering",
      desc: "No matter how complex the distributed system or ML pipeline is under the hood, the end product must feel instantaneous, accessible, and delightful."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>ORIGIN & TRAJECTORY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Behind the Code & Systems
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          I'm Adarsh Vishwakarma — a developer driven by the pursuit of building high-performance web systems and demystifying artificial intelligence.
        </p>
      </div>

      {/* Top Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left: Authentic Photograph in Cybernetic Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 opacity-30 dark:opacity-50 blur-xl" />
            <div className="relative rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-2xl p-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 relative">
                <img
                  src={portraitUrl}
                  alt="Adarsh Vishwakarma"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-lg">Adarsh Vishwakarma</p>
                  <p className="text-xs font-mono text-cyan-300">Software Developer & AI Creator</p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
                <span>Location: Mumbai, India</span>
                <span className="flex items-center gap-1 font-mono text-emerald-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Narrative Story */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              The Developer Journey
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                My passion for programming began with a curiosity about how software shapes the everyday modern world. From writing my first procedural scripts in Python and C++ to architecting full-stack web platforms with React and FastAPI, I have always been fascinated by transforming abstract concepts into tangible digital solutions.
              </p>
              <p>
                Currently pursuing my Bachelor of Science in Information Technology (B.Sc. IT) at <strong className="text-slate-900 dark:text-white">Tolani College of Commerce</strong>, I combine formal computer science fundamentals with rigorous, self-directed exploration of production software development, modern databases, and AI technologies.
              </p>
              <p>
                Whether it's building a 13-payload QR generation engine (<Link to="/projects/qr-canvas-studio" className="text-blue-600 dark:text-cyan-400 hover:underline">QR-Canvas Studio</Link>), an enterprise multi-tier event analytics portal (<Link to="/projects/attendance-management-system" className="text-blue-600 dark:text-cyan-400 hover:underline">Attendance Management System</Link>), or competing in Google Student Ambassador AI challenges, I focus on delivering clean, reliable, and accessible systems.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-4">
              <a
                href={resumeUrl}
                download="Adarsh_Vishwakarma_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Curriculum Vitae</span>
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
              >
                <span>Explore Projects Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <section className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">
            Formal Education & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm flex flex-col justify-between"
            >
              <div>
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
                <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-4">
                  {edu.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {edu.details}
                </p>
              </div>

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
      </section>

      {/* Engineering Philosophy */}
      <section className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUES & PRACTICE</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">
            Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm"
            >
              <span className="font-mono text-2xl font-extrabold text-blue-600 dark:text-cyan-400 block mb-4">
                0{idx + 1}.
              </span>
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
