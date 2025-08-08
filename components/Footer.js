import Logo from "@/components/DynamicLogo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black p-8 pb-10 relative flex flex-col md:flex-row items-start justify-between w-full">
      {/* Left column */}
      <div className="flex flex-col text-white font-spaceGrotesk uppercase tracking-tight text-lg z-10">
        <a href="#" className="hover:text-emerald-300">
          Spline Studio
        </a>
        <a href="#" className="hover:text-emerald-300">
          La Croix
        </a>
        <a href="#" className="hover:text-emerald-300">
          Films
        </a>
        <a href="#" className="hover:text-emerald-300">
          Backstages
        </a>
        <div className="font-spaceGrotesk uppercase tracking-tight text-sm pt-4">
          <a href="#" className="mr-4 hover:text-emerald-300">
            Instagram
          </a>
          <a href="#" className="hover:text-emerald-300">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col text-white text-right text-lg font-spaceGrotesk uppercase tracking-tight ml-auto z-10">
        <a href="#" className="hover:text-emerald-300 ">
          Contact
        </a>
        <a href="#" className="text-sm hover:text-emerald-300">
          Mentions légales
        </a>
      </div>

      {/* Animated GIF Logo */}
      <div
        className="
    z-0 h-10 flex justify-center items-center overflow-hidden 
    w-[200px] md:w-[300px]
    md:absolute md:left-1/2 md:top-1/2 md:translate-x-[-50%] md:translate-y-[-50%]
  "
      >
        <video
          src="/GIFSplineStudio.webm"
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Logo animé Spline Studio"
        />
      </div>
    </footer>
  );
}
