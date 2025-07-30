"use client";

import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

export default function WavyText() {
  const containerRef = useRef(null);
  const chars = Array.from("audiovisuelle");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const charElements = container.querySelectorAll(".split-char");
    if (!charElements.length) return;

    container.style.visibility = "visible";

    animate(
      charElements,
      { y: [-5, 5] },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 1,
        delay: stagger(0.15, {
          startDelay: -0.15 * charElements.length,
        }),
      }
    );
  }, []);

  return (
    <div
      className="flex justify-center items-center w-full invisible mt-10"
      ref={containerRef}
    >
      <h1 className="text-4xl font-bold ">
        Agence de production{" "}
        <span className="wavy inline-flex">
          {chars.map((char, i) => (
            <span
              key={i}
              className="split-char inline-block will-change-[transform,opacity]"
            >
              {char}
            </span>
          ))}
          <span className="split-char inline-block">&nbsp;</span>
          singulière.
        </span>
      </h1>
    </div>
  );
}
