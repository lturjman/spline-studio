"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/1.jpg",
    label: "Photo film 1",
    link: "/film/1",
    buttonLabel: "Voir Film 1",
  },
  {
    id: 2,
    src: "/2.jpg",
    label: "Photo film 2",
    link: "/film/2",
    buttonLabel: "Voir Film 2",
  },
  {
    id: 3,
    src: "/3.jpg",
    label: "Photo film 3",
    link: "/film/3",
    buttonLabel: "Voir Film 3",
  },
  {
    id: 4,
    src: "/4.jpg",
    label: "Photo film 4",
    link: "/film/4",
    buttonLabel: "Découvrir plus de films",
  },
];

export default function ImageGallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-2 md:flex md:items-center md:justify-center md:gap-2 h-full">
      {images.map((img) => {
        const isActive = hovered === img.id;
        const isInactive = hovered !== null && hovered !== img.id;

        return (
          <motion.div
            layout
            key={img.id}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-60 md:h-[75vh] w-full transition-all"
            onMouseEnter={() => setHovered(img.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              flex: isActive ? 3 : isInactive ? 1 : 1.5,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center block md:hidden">
              <a href={img.link}>
                <button className="bg-white text-black font-bold px-4 py-2 text-sm rounded hover:bg-gray-200 transition">
                  {img.buttonLabel}
                </button>
              </a>
            </div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center hidden md:block"
              >
                <a href={img.link}>
                  <button className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition">
                    {img.buttonLabel}
                  </button>
                </a>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
