import Image from "next/image";
import Parallax from "../components/ParallaxContent";
import WrapperColonne from "../components/WrapperColonne";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default async function Home() {
  const client = createClient();

  const response = await client.getByType("film", {
    filters: [filter.at("my.film.show_on_home", true)],
  });
  const films = response.results;

  return (
    <div className="-mt-20">
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Contenu centré */}
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

        {/* Réseaux sociaux en bas à droite */}
        <div className="absolute z-20 bottom-6 right-6 flex space-x-6">
          <a
            href="https://www.instagram.com/splinestd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-all duration-300  text-3xl md:text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/splinestudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-all duration-300 text-3xl md:text-2xl"
          >
            <FaLinkedin />
          </a>
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

      <div className="flex justify-center items-center my-10">
        <Link href="/films">
          <button className="  hover:bg-emerald-300 bg-black hover:text-black text-white rounded-full px-6 py-2 lg:w-[20vw] lg:hover:w-[25vw] transition-all text-center">
            Découvrir tous les films
          </button>
        </Link>
      </div>
    </div>
  );
}
