"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";

export default function WrapperColonne({ films }) {
  const [hovered, setHovered] = useState(null);
  const videoRefs = useRef([]);
  const timeouts = useRef({});

  const handleMouseEnter = (filmId, index) => {
    setHovered(filmId);
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index) => {
    setHovered(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:flex md:items-center md:justify-center md:gap-2 h-full mx-4">
      {films.map((film, index) => {
        const isActive = hovered === film.id;
        const isInactive = hovered !== null && hovered !== film.id;

        return (
          <motion.div
            layout
            key={film.id}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-60 md:h-[75vh] w-full transition-all"
            onMouseEnter={() => handleMouseEnter(film.id, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            animate={{
              flex: isActive ? 3 : isInactive ? 1 : 1.5,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Link href={`/films/${film.uid}`}>
              <div className="relative h-full w-full">
                <Image
                  src={film.data.image.url}
                  alt={film.data.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {film.data.previewvideo?.url && (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={film.data.previewvideo.url}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    muted
                    playsInline
                    loop
                  />
                )}
              </div>
            </Link>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center block md:hidden">
              <Link
                href={`/films/${film.uid}`}
                className="bg-white text-black font-bold px-4 py-2 text-sm rounded hover:bg-emerald-300 transition font-spaceGrotesk uppercase inline-block"
              >
                {film.data.title}
              </Link>
            </div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center hidden md:block"
              >
                <Link
                  href={`/films/${film.uid}`}
                  className=" font-bold text-sm  hover:bg-emerald-300 bg-white rounded-full px-6 py-2 transition font-spaceGrotesk uppercase inline-block"
                >
                  {film.data.title}
                </Link>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
