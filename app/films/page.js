import FilmGallery from "@/components/FilmGallery";
import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";
import { Heading } from "@/components/Heading";

export default async function Films({ searchParams }) {
  const client = createClient();
  const page = await client.getSingle("films");
  const filters = [];
  if (searchParams.category)
    filters.push(filter.at("my.film.category", searchParams.category));

  const response = await client.getByType("film", { filters });
  const films = response.results;

  return (
    <div className="bg-black py-10">
      <Heading level={1} className="text-white m-auto">
        {page.data.title}
      </Heading>
      <FilmGallery films={films} selectedCategory={searchParams.category} />
    </div>
  );
}
