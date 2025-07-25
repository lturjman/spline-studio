"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import Image from "next/image";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageItem({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen snap-start flex justify-center items-center relative">
      <div
        ref={ref}
        className="w-100 h-150 m-5 bg-gray-100 overflow-hidden 
                           max-500:w-150 max-500:h-200"
      >
        <Image
          src={`/${id}.jpg`}
          alt="Images de La Croix"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="text-[#8df0cc] m-0 font-mono text-[50px] font-bold tracking-[-0.1em] leading-tight absolute top-1/2 left-[calc(50%+120px)] transform -translate-y-1/2"
      >
        {`#00${id}`}
      </motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example" className="snap-y snap-mandatory">
      {[1, 2, 3, 4, 5].map((image) => (
        <ImageItem key={image} id={image} alt="" />
      ))}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-[#8df0cc] bottom-[50px] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
