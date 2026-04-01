"use client";

import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  {
    src: "/img/1000020367.jpg",
    alt: "Coiff'express Cergy — Réalisation coiffure",
  },
  {
    src: "/img/1000020368.jpg",
    alt: "Coiff'express Cergy — Réalisation coiffure",
  },
  {
    src: "/img/1000020369.jpg",
    alt: "Coiff'express Cergy — Réalisation coiffure",
  },
  {
    src: "/img/1000020370.jpg",
    alt: "Coiff'express Cergy — Réalisation coiffure",
  },
  {
    src: "/img/1000020371.jpg",
    alt: "Coiff'express Cergy — Réalisation coiffure",
  },
  {
    src: "/img/1000020372.jpg",
    alt: "Coiff'express Cergy — Réalisation coiffure",
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galerie" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Notre salon
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral">
            Galerie
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden bg-base-300 border border-base-300 hover:border-secondary/40 transition-colors"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-3 hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
