import { Link } from "react-router-dom";
import { Compass, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 animate-pulse">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-cyan-500 dark:text-cyan-400 block mb-2">
          ERROR 404 // COORDINATES UNKNOWN
        </span>

        <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-3">
          Deep Space Anomaly
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The transmission coordinate you requested does not exist in this digital universe sector.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:scale-105 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Universe Core</span>
        </Link>
      </div>
    </div>
  );
}
