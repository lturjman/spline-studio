import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Image from "next/image";
import { Heading } from "@/components/Heading";

export default async function Films({ params }) {
  const client = createClient();
  const page = await client.getByUID("film", params.uid);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="text-center max-w-3xl mx-auto px-4 py-10">
        <Heading level={1} className="pt-10">
          {page.data.title}
        </Heading>
        {page.data.category && (
          <Heading level={6}>{page.data.category}</Heading>
        )}
      </div>

      <div className="space-y-10">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
