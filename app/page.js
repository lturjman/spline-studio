import Image from "next/image";

import WavyText from "../components/WaveText";
import Parallax from "../components/ParallaxContent";
import WrapperColonne from "../components/WrapperColonne";
import WrapperLigne from "../components/WrapperLigne";

import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <div>
      <h1>{page.data.title}</h1>
      <WavyText />
      <video
        className="h-[70vh]"
        src="/SplineStudioPresentation.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <WrapperColonne />
      <WrapperLigne />

      <Parallax />
    </div>
  );
}
