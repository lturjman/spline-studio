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
  const timeoutRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const safeSetSpeed = (anim, s) => {
    if (!anim) return;
    if (typeof anim.setSpeed === "function") anim.setSpeed(s);
    else if (anim?.animationItem?.setSpeed) anim.animationItem.setSpeed(s);
  };
  const safePlaySegments = (anim, seg) => {
    if (!anim) return;
    if (typeof anim.playSegments === "function") anim.playSegments(seg, true);
    else if (anim?.animationItem?.playSegments)
      anim.animationItem.playSegments(seg, true);
  };

  useEffect(() => {
    if (!mounted || !logoRef.current) return;

    const anim = logoRef.current;
    const data = isDark ? blackAnimationData : whiteAnimationData;
    const fr = data && data.fr ? Number(data.fr) : 30;
    const speed = 3;

    const closed = [80, 15];
    const opened = [15, 80];

    safeSetSpeed(anim, speed);
    safePlaySegments(anim, closed);

    const frames = Math.abs(closed[1] - closed[0]);
    const durationMs = Math.max(40, ((frames / fr) * 1000) / speed) + 50;

    timeoutRef.current = setTimeout(() => {
      safeSetSpeed(anim, speed);
      safePlaySegments(anim, opened);
    }, durationMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pathname, isDark, mounted]);

  if (!mounted) {
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
