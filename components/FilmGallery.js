"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/1.jpg",
    label: "Photo film 1",
    link: "/film/1",
    buttonLabel: "Voir Film 1",
    category: "drame",
  },
  {
    id: 2,
    src: "/2.jpg",
    label: "Photo film 2",
    link: "/film/2",
    buttonLabel: "Voir Film 2",
    category: "action",
  },
  {
    id: 3,
    src: "/3.jpg",
    label: "Photo film 3",
    link: "/film/3",
    buttonLabel: "Voir Film 3",
    category: "drame",
  },
  {
    id: 4,
    src: "/4.jpg",
    label: "Photo film 4",
    link: "/film/4",
    buttonLabel: "Voir Film 4",
    category: "comédie",
  },
  {
    id: 5,
    src: "/3.jpg",
    label: "Photo film 4",
    link: "/film/4",
    buttonLabel: "Voir Film 4",
    category: "comédie",
  },
  {
    id: 6,
    src: "/2.jpg",
    label: "Photo film 2",
    link: "/film/2",
    buttonLabel: "Voir Film 2",
    category: "action",
  },
  {
    id: 7,
    src: "/3.jpg",
    label: "Photo film 3",
    link: "/film/3",
    buttonLabel: "Voir Film 3",
    category: "drame",
  },
  {
    id: 8,
    src: "/4.jpg",
    label: "Photo film 4",
    link: "/film/4",
    buttonLabel: "Voir Film 4",
    category: "comédie",
  },
  {
    id: 9,
    src: "/1.jpg",
    label: "Photo film 4",
    link: "/film/4",
    buttonLabel: "Voir Film 4",
    category: "comédie",
  },
];

export default function FilmGallery() {
  const [hovered, setHovered] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "drame", "action", "comédie"];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-white px-4 py-8">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border hover:bg-emerald-300 hover:border-none hover:text-black ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <a href={img.link}>
                <button className="bg-white text-black font-bold px-4 py-2 text-sm rounded hover:bg-emerald-300  transition">
                  {img.buttonLabel}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
