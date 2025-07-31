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
    <div>
      <h1 className="mt-10 text-6xl font-bold m-auto w-full text-center">
        {page.data.title}
      </h1>
      <FilmGallery films={films} selectedCategory={searchParams.category} />
    </div>
  );
}
