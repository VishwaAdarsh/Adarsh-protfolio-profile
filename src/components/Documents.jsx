import GlowCard from "@/components/ui/GlowCard";
import { FileText, Download, ShieldCheck, GraduationCap } from "lucide-react";

const docs = [
  {
    title: "Professional Resume",
    type: "PDF Document",
    size: "140 KB",
    icon: FileText,
    file: `${import.meta.env.BASE_URL}documents/Adarsh_Resume.pdf`,
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Class 12th Marksheet",
    type: "Academic Record",
    size: "344 KB",
    icon: GraduationCap,
    file: `${import.meta.env.BASE_URL}documents/Class 12th marksheet.pdf`,
    color: "text-emerald-600 dark:text-green-400"
  },
  {
    title: "Class 10th Marksheet",
    type: "Academic Record",
    size: "315 KB",
    icon: GraduationCap,
    file: `${import.meta.env.BASE_URL}documents/Class 10th marksheet.pdf`,
    color: "text-amber-600 dark:text-yellow-400"
  }
];

export default function Documents() {
  return (
    <section id="documents" className="py-14 sm:py-20 md:py-24 relative">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
            <ShieldCheck size={14} /> Verified Documents
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Personal Documents</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {docs.map((doc, index) => (
            <GlowCard key={index} className="p-5 sm:p-6 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${doc.color}`}>
                    <doc.icon size={26} />
                  </div>
                  <a
                    href={doc.file}
                    download
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-all active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px]"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download size={18} />
                  </a>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-blue-300 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400">{doc.type} • {doc.size}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-xs text-slate-500 dark:text-gray-500">
                <span>Secure Access</span>
                <span>PDF Format</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
