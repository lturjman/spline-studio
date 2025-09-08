"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

export default function FilmGallery({ films, selectedCategory }) {
  const categories = [
    "Court métrage",
    "Clip",
    "Documentaire",
    "Pilote série",
    "Pub",
  ];
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play();

      // // stop après 6s
      // setTimeout(() => {
      //   if (!video.paused) {
      //     video.pause();
      //     video.currentTime = 0;
      //   }
      // }, 6000);
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="bg-black px-4 py-8 font-spaceGrotesk uppercase">
      {/* Filtres catégories */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <Link
          href={{ pathname: "/films" }}
          className={`px-6 py-2 rounded-full border hover:bg-emerald-300 hover:border-none hover:text-black ${
            !selectedCategory ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Tous
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={{ pathname: "/films", query: { category } }}
            className={`px-6 py-2 rounded-full border hover:bg-emerald-300 hover:border-none hover:text-black ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Grille films */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {films.map((film, index) => (
          <Link href={`/films/${film.uid}`} key={film.uid}>
            <div
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-md border border-transparent transition-all duration-300 hover:border-white"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Image */}
              <Image
                src={film.data.image.url}
                alt={film.data.image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Vidéo */}
              {film.data.previewvideo.url && (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={film.data.previewvideo.url}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  muted
                  playsInline
                >
                  Votre navigateur ne supporte pas la lecture de vidéo.
                </video>
              )}

              {/* Dégradé noir */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />

              {/* Titre */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="font-bold text-sm transition font-spaceGrotesk uppercase text-white hover:text-emerald-400">
                  {film.data.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
