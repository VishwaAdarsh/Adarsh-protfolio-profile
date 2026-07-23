import GlowCard from "@/components/ui/GlowCard";

// Using images moved from legacy_backup
const photos = [
    { src: "/images/ai.jpg", label: "Ai" },
    { src: "/images/robot.jpg", label: "Intellignece" },
    { src: "/images/coding.jpg", label: "Coding" },
    // Add other distinct images from backup if available, reused mainly for layout demonstration
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <p className="text-gray-400 mt-2 max-w-2xl">
                    Here are some featured photos
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <GlowCard key={index} className="aspect-square md:aspect-[4/3] overflow-hidden group">
                            <img
                                src={photo.src}
                                alt={photo.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">{photo.label}</span>
                            </div>
                        </GlowCard>
                    ))}
                    {/* Placeholders to fill the grid if few images exist */}
                    {/* <GlowCard className="aspect-square md:aspect-[4/3] bg-white/5 flex items-center justify-center text-muted-foreground text-sm">
                        Additional Photo
                    </GlowCard> */}
                </div>
            </div>
        </section>
    );
}
