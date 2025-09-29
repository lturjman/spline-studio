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
import Link from "next/link";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageItem({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className=" snap-start flex justify-center items-center relative">
      <Link href="films/la-croix">
        <div
          ref={ref}
          className="w-[80vw] h-150 bg-gray-100 overflow-hidden 
                           max-500:w-150 max-500:h-200"
        >
          <Image
            src={`/LaCroix.jpg`}
            alt="Images de La Croix"
            width={800}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
          className="absolute top-1/4
             left-1/2 md:left-[55%] 
             transform -translate-x-1/2 md:translate-x-0 
             -translate-y-1/2 
             flex flex-col gap-4 sm:gap-4
             bg-black/80 p-4 sm:p-6 
             rounded-xl 
             max-w-[90vw] sm:max-w-[80vw] md:max-w-[40vw]"
        >
          <div className="text-white">
            Après plus de 70 sélections à l’international et une vingtaine de
            prix en festival, notre dernier court-métrage La Croix est
            disponible sur la plateforme Canal+, via Insomnia.
          </div>

          <button className="mt-4 self-start hover:bg-emerald-300 bg-white transition rounded-full px-6 py-2 ">
            Découvrir la bande-annonce
          </button>
        </motion.div>
      </Link>
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
