import { createClient } from "@/prismicio";

export default async function Films({ params }) {
  const client = createClient();

  const film = await client.getByUID("film", params.uid);

  return (
    <div>
      <h1 className="mt-10 text-6xl font-bold m-auto w-full text-center">
        {film.data.title}
      </h1>
      <div className="aspect-video w-full my-4">
        <iframe
          src={film.data.video.embed_url}
          title="Vidéo"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
