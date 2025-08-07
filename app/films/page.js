import FilmGallery from "@/components/FilmGallery";
import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";

export default async function Films({ searchParams }) {
  const client = createClient();
  const page = await client.getSingle("films");
  const filters = [];
  if (searchParams.category)
    filters.push(filter.at("my.film.category", searchParams.category));

  const response = await client.getByType("film", { filters });
  const films = response.results;

  return (
    <div className="bg-black">
      <h1 className="pt-10 text-4xl font-archivoBlack uppercase tracking-tight m-auto w-full text-center text-white">
        {page.data.title}
      </h1>
      <FilmGallery films={films} selectedCategory={searchParams.category} />
    </div>
  );
}
