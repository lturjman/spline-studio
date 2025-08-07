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
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className=" snap-start flex justify-center items-center relative">
      <div
        ref={ref}
        className="w-200 h-150 bg-gray-100 overflow-hidden 
                           max-500:w-150 max-500:h-200"
      >
        <Image
          src={`/3.jpg`}
          alt="Images de La Croix"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="absolute top-1/4
             left-1/2 md:left-[45%] 
             transform -translate-x-1/2 md:translate-x-0 
             -translate-y-1/2 
             flex flex-col gap-4 sm:gap-4
             bg-black/80 p-4 sm:p-6 
             rounded-xl 
             max-w-[90vw] sm:max-w-[80vw] md:max-w-[40vw]"
      >
        <div
          className="text-white font-spaceGrotesk uppercase 
                  "
        >
          Notre dernier court métrage en festival. Après son passage à Gérardmer
          2024, il sera au Grauman’s Chinese Theatre de Los Angeles lors du
          ScreamFest 2024. Le film est désormais disponible chez INSOMNIA sur la
          plateforme Canal+ ...
        </div>

        <button
          className="mt-4 self-start bg-emerald-300 text-black font-spaceGrotesk uppercase 
               px-4 py-2 rounded hover:bg-emerald-400 transition"
        >
          Découvrir la bande-annonce
        </button>
      </motion.div>
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
      {[1].map((image) => (
        <ImageItem key={image} id={image} alt="" />
      ))}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-[#8df0cc] bottom-[50px] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
