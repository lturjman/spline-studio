import FilmGallery from "@/components/FilmGallery";
import { createClient } from "@/prismicio";

export default async function Films() {
  const client = createClient();
  const page = await client.getSingle("films");

  return (
    <div>
      <h1 className="mt-10 text-6xl font-bold m-auto w-full text-center">
        {page.data.title}
      </h1>
      <FilmGallery />
    </div>
  );
}
