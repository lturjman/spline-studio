"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import whiteAnimationData from "@/public/LogoSSblanc.json";
import blackAnimationData from "@/public/LogoSSnoir.json";

import { usePathname } from "next/navigation";

const DynamicLogo = ({ isDark }) => {
  const lottieRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    lottieRef.current.setSpeed(2);
  }, []);

  return (
    <Link href="/" aria-label="Accueil">
      <Lottie
        key={`${pathname} black logo`}
        lottieRef={lottieRef}
        animationData={blackAnimationData}
        initialSegment={[15, 80]}
        loop={false}
        autoplay={true}
        style={{ width: 200, height: 200, cursor: "pointer" }}
        className={isDark ? "" : "hidden"}
      />
      <Lottie
        key={`${pathname} white logo`}
        lottieRef={lottieRef}
        animationData={whiteAnimationData}
        initialSegment={[15, 80]}
        loop={false}
        autoplay={true}
        style={{ width: 200, height: 200, cursor: "pointer" }}
        className={isDark ? "hidden" : ""}
      />
    </Link>
  );
};

export default DynamicLogo;
