import Image from "next/image";
import Parallax from "../components/ParallaxContent";
import WrapperColonne from "../components/WrapperColonne";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";

export default async function Home() {
  const client = createClient();

  const response = await client.getByType("film", {
    filters: [filter.at("my.film.show_on_home", true)],
  });
  const films = response.results;

  return (
    <div className="-mt-20">
      <div className="relative w-screen h-screen overflow-hidden">
        <div className="absolute z-20 top-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
          <Image
            src="/logoBlanc.svg"
            alt="Logo Spline Studio"
            width={300}
            height={100}
          />
          <Heading level={1} className="text-white mx-50">
            Agence de production audiovisuelle singulière.
          </Heading>
        </div>
        <video
          className="absolute z-10 w-full h-full object-cover "
          src="/SplineStudioPresentation.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <Heading level={2} className="mt-20">
        La Croix
      </Heading>

      <Parallax />
      <div className="flex justify-center items-center">
        <Heading level={2} className="mt-20">
          Les réalisations
        </Heading>
      </div>

      <WrapperColonne films={films} />

      <div className="flex justify-center items-center">
        <button
          className=" bg-emerald-300 text-black uppercase my-10
               px-4 py-2 rounded hover:bg-emerald-400 transition"
        >
          Découvrir tous les films
        </button>
      </div>
    </div>
  );
}
