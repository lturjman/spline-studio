import { createClient } from "@/prismicio";
import { Heading } from "@/components/Heading";

export default async function SplineStudio() {
  const client = createClient();
  const page = await client.getSingle("spline_studio");

  return (
    <div>
      <Heading level={1} className="pt-10">
        {page.data.title}
      </Heading>
    </div>
  );
}
