import FilmGallery from "@/components/FilmGallery";
import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";
import { Heading } from "@/components/Heading";

export default async function Films({ searchParams }) {
  const client = createClient();
  const page = await client.getSingle("films");
  const filters = [];
  const { category } = await searchParams;
  if (category) filters.push(filter.at("my.film.category", category));

  const response = await client.getByType("film", {
    filters,
    orderings: [{ field: "my.film.title", direction: "asc" }],
  });
  const films = response.results;

  return (
    <div className="bg-black py-10">
      <Heading level={1} className="text-white m-auto">
        {page.data.title}
      </Heading>
      <FilmGallery films={films} selectedCategory={category} />
    </div>
  );
}
