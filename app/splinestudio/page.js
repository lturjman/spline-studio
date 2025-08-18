import { createClient } from "@/prismicio";
import { Heading } from "@/components/Heading";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { PrismicRichText } from "@prismicio/react";

export default async function SplineStudio() {
  const client = createClient();
  const page = await client.getSingle("spline_studio");

  return (
    <div>
      <Heading level={1} className="pt-10">
        {page.data.title}
      </Heading>

      <PrismicRichText field={page.data.presentation} />
      <PrismicRichText field={page.data.history} />

      <div className="space-y-10">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
