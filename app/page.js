import Image from "next/image";

import WavyText from "../components/WaveText";
import Parallax from "../components/ParallaxContent";
import WrapperColonne from "../components/WrapperColonne";
import WrapperLigne from "../components/WrapperLigne";
import MovingCross from "@/components/MovingCross";

import { createClient } from "@/prismicio";

import { filter } from "@prismicio/client";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

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
          <h1 className="font-archivoBlack uppercase text-3xl md:text-5xl text-white mt-4 tracking-tight md:px-50">
            Agence de production audiovisuelle singulière.
          </h1>
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

      <h2 className="text-black font-archivoBlack uppercase tracking-tight text-4xl text-center m-4">
        La Croix
      </h2>

      <Parallax />
      <div className="flex justify-center items-center">
        <h1 className="text-4xl my-10 font-archivoBlack uppercase tracking-tight">
          Les réalisations
        </h1>
      </div>

      <WrapperColonne films={films} />

      <div className="flex justify-center items-center">
        <button
          className=" bg-emerald-300 text-black font-spaceGrotesk uppercase my-10
               px-4 py-2 rounded hover:bg-emerald-400 transition"
        >
          Découvrir tous les films
        </button>
      </div>
    </div>
  );
}
