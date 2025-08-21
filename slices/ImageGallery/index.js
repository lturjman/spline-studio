"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @type {import("react").FC<ImageGalleryProps>}
 */

const ImageGallery = ({ slice }) => {
  const [hovered, setHovered] = useState(null);

  const images =
    slice?.primary?.imagegallery?.map((item, index) => ({
      id: index,
      src: item?.photo?.url,
      label: item?.photo?.alt || "",
    })) || [];

  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col w-full overflow-hidden"
    >
      {images.map((img) => {
        const isActive = hovered === img.id;
        const isInactive = hovered !== null && hovered !== img.id;

        return (
          <motion.div
            key={img.id}
            className="relative w-full h-[30vh] overflow-hidden"
            onHoverStart={() => setHovered(img.id)}
            onHoverEnd={() => setHovered(null)}
            animate={{
              height: isActive ? 500 : isInactive ? 100 : 200,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
            />

            {/* overlay sombre + titre éventuel
            <div className="absolute inset-0 bg-black/40 flex items-end p-3">
              <p className="text-white text-sm">{img.label}</p>
            </div> */}

            {/* contenu affiché uniquement quand l’image est active */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 text-white"
              ></motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
