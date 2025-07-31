"use client";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import animationData from "@/public/GIFSplineStudio3.json";
import Link from "next/link";

const DynamicLogo = () => {
  const pathname = usePathname();
  const lottieRef = useRef(null);
  const hasPlayedInitial = useRef(false);

  const playSegment = (start, end) => {
    if (lottieRef.current) {
      lottieRef.current.playSegments([start, end], true);
    }
  };

  useEffect(() => {
    const animation = lottieRef.current;

    // Nettoyage
    cancelAnimationFrame(animation._watcher);
    clearTimeout(animation._resetTimeout);

    if (!hasPlayedInitial.current) {
      // Premier chargement uniquement : 0 → 40
      playSegment(0, 40);
      hasPlayedInitial.current = true;
      return;
    }

    playSegment(40, 120);

    return () => {
      cancelAnimationFrame(animation._watcher);
    };
  }, [pathname]);

  return (
    <Link href="/">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: 200, height: 200 }}
      />
    </Link>
  );
};

export default DynamicLogo;
