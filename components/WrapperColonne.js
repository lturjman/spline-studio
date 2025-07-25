"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, src: "/1.jpg", label: "Photo film 1" },
  { id: 2, src: "/2.jpg", label: "Photo film 2" },
  { id: 3, src: "/3.jpg", label: "Photo film 3" },
];

export default function ImageGallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex h-screen items-center justify-center gap-2 bg-white px-4">
      {images.map((img) => {
        const isActive = hovered === img.id;
        const isInactive = hovered !== null && hovered !== img.id;

        return (
          <motion.div
            key={img.id}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer flex-1 h-[500px]"
            onHoverStart={() => setHovered(img.id)}
            onHoverEnd={() => setHovered(null)}
            animate={{
              flex: isActive ? 3 : isInactive ? 1 : 1.5,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white font-semibold text-xl">{img.label}</p>
            </div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
              >
                <button className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition">
                  DÉCOUVRIR LA CROIX
                </button>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
