"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, src: "/1.jpg", label: "" },
  { id: 2, src: "/2.jpg", label: "" },
  { id: 3, src: "/3.jpg", label: "" },
];

export default function VerticalGallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {images.map((img) => {
        const isActive = hovered === img.id;
        const isInactive = hovered !== null && hovered !== img.id;

        return (
          <motion.div
            key={img.id}
            className="relative w-full overflow-hidden cursor-pointer"
            onHoverStart={() => setHovered(img.id)}
            onHoverEnd={() => setHovered(null)}
            animate={{
              height: isActive ? 400 : isInactive ? 100 : 200,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.label}
              width={1000}
              height={600}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-3">
              <p className="text-white text-sm">{img.label}</p>
            </div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 text-white"
              >
                <p className="font-bold text-xl">LA CROIX</p>
                <p className="text-sm">Découvrez le projet</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
