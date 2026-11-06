import GlowCard from "@/components/ui/GlowCard";

const photos = [
  { src: "./images/ai.jpg", label: "Artificial Intelligence" },
  { src: "./images/robot.jpg", label: "Machine Learning & Robotics" },
  { src: "./images/coding.jpg", label: "Software Engineering" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 md:w-[450px] h-72 md:h-[450px] bg-pink-500/10 rounded-full blur-2xl md:blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Gallery</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-slate-600 dark:text-gray-400 mt-2 sm:mt-3 max-w-2xl text-base sm:text-lg">
            Visual highlights representing my passions for AI, computation, and programming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <GlowCard key={index} className="aspect-[4/3] sm:aspect-square md:aspect-[4/3] overflow-hidden group rounded-2xl">
              <img
                src={photo.src}
                alt={photo.label}
                loading="lazy"
                width="600"
                height="450"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <span className="text-white text-sm sm:text-base font-semibold drop-shadow">{photo.label}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
