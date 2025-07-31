import Image from "next/image";
import Link from "next/link";

export default function FilmGallery({ films, selectedCategory }) {
  const categories = ["Court métrage", "Clip", "Documentaire", "Corporate"];

  return (
    <div className="bg-white px-4 py-8">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <Link
          href={{
            pathname: "/films",
          }}
          className={`px-4 py-2 rounded border hover:bg-emerald-300 hover:border-none hover:text-black ${
            !selectedCategory ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Tous
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={{
              pathname: "/films",
              query: { category },
            }}
            className={`px-4 py-2 rounded border hover:bg-emerald-300 hover:border-none hover:text-black ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {films.map((film) => (
          <div
            key={film.uid}
            className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={film.data.image.url}
              alt={film.data.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <a href={`/films/${film.uid}`}>
                <button className="bg-white text-black font-bold px-4 py-2 text-sm rounded hover:bg-emerald-300 transition">
                  {film.data.title}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
