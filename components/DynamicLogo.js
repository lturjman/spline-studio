"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import whiteAnimationData from "@/public/LogoSSblanc.json";
import blackAnimationData from "@/public/LogoSSnoir.json";

import { usePathname } from "next/navigation";

const DynamicLogo = ({ isDark }) => {
  const pathname = usePathname();

  const blackRef = useRef(null);
  const whiteRef = useRef(null);

  const playWrapAnimation = (ref) => {
    if (!ref?.current) return;

    ref.current.setSpeed(3);
    ref.current.playSegments(
      [
        [80, 15],
        [15, 80],
      ],
      true
    );
  };

  useEffect(() => {
    playWrapAnimation(blackRef);
    playWrapAnimation(whiteRef);
  }, [pathname]);

  return (
    <Link href="/" aria-label="Accueil">
      <Lottie
        key={`${pathname} black logo`}
        lottieRef={blackRef}
        animationData={blackAnimationData}
        initialSegment={[15, 80]}
        loop={false}
        autoplay={false}
        style={{ width: "200px", height: "100px", cursor: "pointer" }}
        className={isDark ? "" : "hidden"}
        onDOMLoaded={() => playWrapAnimation(blackRef)}
      />
      <Lottie
        key={`${pathname} white logo`}
        lottieRef={whiteRef}
        animationData={whiteAnimationData}
        initialSegment={[15, 80]}
        loop={false}
        autoplay={false}
        style={{ width: "200px", height: "100px", cursor: "pointer" }}
        className={isDark ? "hidden" : ""}
        onDOMLoaded={() => playWrapAnimation(whiteRef)}
      />
    </Link>
  );
};

export default DynamicLogo;
