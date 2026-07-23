import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "Tolani College of Commerce, Mumbai",
    location: "Mumbai, Maharastra",
    duration: "2025 - Present",
    grade: "Grade / CGPA (e.g., 8.5 / 10)",
    description: "Focusing on Artificial Intelligence, Machine Learning, Data Analytics, Software Development, and Database Management Systems.",
    highlights: [
      "AI & Machine Learning",
      "Web Technologies & SQL",
      "Data Science & Analytics"
    ]
  },
  {
    degree: "Higher Secondary Education (12th Standard)",
    institution: "CD Inter college, Pratapgarh, Uttar Pradesh",
    location: "Pratapgarh, Uttar Pradesh",
    duration: "2024 - 2025",
    grade: "Percentage: 69.8%",
    description: "Completed Higher Secondary Certificate with a focus on Science and Mathematics.",
    highlights: [
      "Science & Mathematics",
      "Computer Science Fundamentals"
    ]
  },
  {
    degree: "Secondary School Certificate (10th Standard)",
    institution: "CD Inter college, Pratapgarh, Uttar Pradesh",
    location: "Pratapgarh, Uttar Pradesh",
    duration: "2022 - 2023",
    grade: "Percentage: 91% ",
    description: "Completed secondary school education with strong academic performance.",
    highlights: [
      "Mathematics & Science",
      "Academic Foundations"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-gray-400 mt-3 max-w-2xl text-lg">
            My academic qualifications and educational background.
          </p>
        </div>

        {/* Education List */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300 flex-shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-medium text-purple-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 md:text-right">
                  <div className="flex items-center gap-1.5 glass-premium px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{item.duration}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5 glass-premium px-3 py-1.5 rounded-full">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.grade && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.grade}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
