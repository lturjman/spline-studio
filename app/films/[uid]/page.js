import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Films({ params }) {
  const client = createClient();
  const page = await client.getByUID("film", params.uid);

  return (
    <div>
      <h1 className="mt-10 font-bold m-auto w-full text-center font-archivoBlack uppercase tracking-tight text-4xl">
        {page.data.title}
      </h1>
      {page.data.category}

      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}
