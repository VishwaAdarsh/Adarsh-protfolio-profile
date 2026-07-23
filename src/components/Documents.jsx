import GlowCard from "@/components/ui/GlowCard";
import { FileText, Download, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const docs = [
    {
        title: "Professional Resume",
        type: "PDF Document",
        size: "140 KB",
        icon: FileText,
        file: "/documents/Adarsh_Resume.pdf",
        color: "text-blue-400"
    },
    {
        title: "Class 12th Marksheet",
        type: "Academic Record",
        size: "344 KB",
        icon: GraduationCap,
        file: "/documents/Class 12th marksheet.pdf",
        color: "text-green-400"
    },
    {
        title: "Class 10th Marksheet",
        type: "Academic Record",
        size: "315 KB",
        icon: GraduationCap,
        file: "/documents/Class 10th marksheet.pdf",
        color: "text-yellow-400"
    }
];

export default function Documents() {
    return (
        <section id="documents" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
                        <ShieldCheck size={14} /> Verified Documents
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Personal Documents</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {docs.map((doc, index) => (
                        <GlowCard key={index} className="p-6 relative group hover:bg-white/5 bg-black/40">
                            <div className="flex items-start justify-between mb-8">
                                <div className={`p-3 rounded-lg bg-white/5 ${doc.color}`}>
                                    <doc.icon size={28} />
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white" asChild>
                                    <a href={doc.file} download>
                                        <Download size={20} />
                                    </a>
                                </Button>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">{doc.title}</h3>
                                <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-muted-foreground/60">
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
