import { createClient } from "@/prismicio";

export default async function SplineStudio() {
  const client = createClient();
  const page = await client.getSingle("spline_studio");

  return (
    <div>
      <h1 className="mt-10 font-bold m-auto w-full text-center font-archivoBlack uppercase tracking-tight text-4xl">
        {page.data.title}
      </h1>
    </div>
  );
}
