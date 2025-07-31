import Image from "next/image";

import WavyText from "../components/WaveText";
import Parallax from "../components/ParallaxContent";
import WrapperColonne from "../components/WrapperColonne";
import WrapperLigne from "../components/WrapperLigne";
import MovingCross from "@/components/MovingCross";

import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <div className="">
      <div className="relative w-screen h-[90vh] md:h-[70vh] overflow-hidden">
        {/* Croix placée derrière */}
        <div className="absolute right-0 top-20 z-10">
          <MovingCross />
        </div>
        <div>test</div>

        {/* Vidéo au-dessus */}
        <video
          className="relative z-20 w-full h-full object-cover md:w-auto md:h-full md:translate-x-[-5vw]"
          src="/SplineStudioPresentation.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <WavyText />
      <MovingCross />
      <Parallax />
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold my-10">Les réalisations</h1>
      </div>
      <WrapperColonne />
      <div className="flex justify-center items-center">
        <button
          className=" bg-emerald-300 text-black font-bold mt-10
               px-4 py-2 rounded hover:bg-emerald-400 transition"
        >
          Découvrir tous les films
        </button>
      </div>
    </div>
  );
}
