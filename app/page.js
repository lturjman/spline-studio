import Image from "next/image";

import WavyText from "../components/WaveText";
import Parallax from "../components/ParallaxContent";
import WrapperColonne from "../components/WrapperColonne";
import WrapperLigne from "../components/WrapperLigne";

export default function Home() {
  return (
    <div>
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
