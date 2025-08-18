import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Image from "next/image";

export default async function Films({ params }) {
  const client = createClient();
  const page = await client.getByUID("film", params.uid);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="text-center max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-archivoBlack uppercase text-5xl font-extrabold tracking-tight text-neutral-900">
          {page.data.title}
        </h1>
        {page.data.category && (
          <p className="mt-3 text-neutral-500 tracking-wide uppercase text-sm">
            {page.data.category}
          </p>
        )}
      </div>

      <div className="space-y-10">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
