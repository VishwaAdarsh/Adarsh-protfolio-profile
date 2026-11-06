import { useState } from "react";
import { Camera, Sparkles, X, ZoomIn, Eye } from "lucide-react";
import { galleryData } from "@/data/galleryData";

const CATEGORIES = ["All", "Personal Identity", "Developer Journey", "Technology Exploration", "Creative Work", "College Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>VISUAL RECORD</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Photographic Gallery
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          A visual record of developer journey milestones, applied engineering experiments, AI concepts, and collegiate summits.
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const imgUrl = `${import.meta.env.BASE_URL}${item.src.replace('./', '')}`;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-white/10 cursor-pointer shadow-md hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={imgUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/80 backdrop-blur-md mb-2">
                  {item.category}
                </span>
                <h3 className="text-base font-heading font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0D1428] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[70vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}${selectedImage.src.replace('./', '')}`}
                alt={selectedImage.title}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="p-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-2">
                {selectedImage.category}
              </span>
              <h2 className="text-xl font-heading font-bold mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-sm text-slate-300">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
