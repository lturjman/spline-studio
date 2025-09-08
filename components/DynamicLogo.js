"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import whiteAnimationData from "@/public/LogoSSblanc.json";
import blackAnimationData from "@/public/LogoSSnoir.json";

const DynamicLogo = ({ isDark }) => {
  const pathname = usePathname();
  const logoRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const playWrapAnimation = (ref) => {
    if (!ref?.current) return;
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.setSpeed(3);
      ref.current.playSegments(
        [
          [80, 15],
          [15, 80],
        ],
        true
      );
    }, 20);
  };

  useEffect(() => {
    if (mounted && logoRef.current) {
      playWrapAnimation(logoRef);
    }
  }, [pathname, isDark, mounted]);

  if (!mounted) {
    // Fallback stable SSR
    return (
      <Link href="/" aria-label="Accueil">
        <div style={{ width: "200px", height: "100px" }} />
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="Accueil">
      <Lottie
        lottieRef={logoRef}
        animationData={isDark ? blackAnimationData : whiteAnimationData}
        initialSegment={[15, 80]}
        loop={false}
        autoplay={false}
        style={{ width: "200px", height: "100px", cursor: "pointer" }}
      />
    </Link>
  );
};

export default DynamicLogo;
