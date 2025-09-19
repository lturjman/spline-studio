"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const films = [
  {
    id: 1,
    uid: "tournage1",
    image: "/tournage1.png",
    alt: "tournage photos",
    title: "tournage1",
  },
  {
    id: 2,
    uid: "tournage2",
    image: "/tournage2.png",
    alt: "tournage photos",
    title: "tournage2",
  },
  {
    id: 3,
    uid: "tournage3",
    image: "/tournage3.png",
    alt: "tournage photos",
    title: "tournage3",
  },
  {
    id: 4,
    uid: "tournage4",
    image: "/tournage4.png",
    alt: "tournage photos",
    title: "tournage4",
  },
  {
    id: 5,
    uid: "tournage5",
    image: "/tournage5.png",
    alt: "tournage photos",
    title: "tournage5",
  },
  {
    id: 6,
    uid: "tournage6",
    image: "/tournage6.png",
    alt: "tournage photos",
    title: "tournage6",
  },
];

export default function ImagesSpline() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 gap-2 md:flex md:items-center md:justify-center md:gap-4">
      {films.map((film) => {
        const isActive = hovered === film.id;
        const isInactive = hovered !== null && hovered !== film.id;

        return (
          <motion.div
            layout
            key={film.id}
            className="relative overflow-hidden rounded-xl shadow-lg h-60 md:h-[75vh] w-full transition-all"
            onMouseEnter={() => setHovered(film.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              flex: isActive ? 3 : isInactive ? 1 : 1.5,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Image
              src={film.image}
              alt={film.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center hidden md:block"
              ></motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
