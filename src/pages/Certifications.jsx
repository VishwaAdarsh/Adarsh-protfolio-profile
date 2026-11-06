import { useState } from "react";
import { 
  Award, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  Building,
  Eye,
  X
} from "lucide-react";
import { certificatesData } from "@/data/certificatesData";

const CATEGORIES = ["All", "AI & Innovation", "Data Engineering", "Academic & Writing", "Academic Records"];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = certificatesData.filter((cert) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI & Innovation") return cert.category.includes("AI");
    if (activeCategory === "Data Engineering") return cert.category.includes("Data");
    if (activeCategory === "Academic & Writing") return cert.category.includes("Academic") && !cert.category.includes("Records");
    if (activeCategory === "Academic Records") return cert.category.includes("Records");
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>CREDENTIAL VAULT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Certifications & Academic Records
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          Verified documents, competition awards, industry credentials, and university transcript records with direct access to official PDF documents.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
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

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert) => {
          const filePath = `${import.meta.env.BASE_URL}${cert.file.replace('./', '')}`;

          return (
            <div
              key={cert.id}
              className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/20">
                  <FileText className="w-5 h-5" />
                </div>

                <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                  {cert.title}
                </h2>
                <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline min-h-[36px]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={filePath}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors min-h-[36px]"
                  aria-label={`Download ${cert.title}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Document Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full h-[85vh] bg-white dark:bg-[#0D1428] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}${selectedCert.file.replace('./', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 transition-colors text-xs font-medium flex items-center gap-1.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Open Tab</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 transition-colors"
                  aria-label="Close document preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Iframe Content */}
            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950">
              <iframe
                src={`${import.meta.env.BASE_URL}${selectedCert.file.replace('./', '')}`}
                title={selectedCert.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
