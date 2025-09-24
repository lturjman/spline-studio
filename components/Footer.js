import Logo from "@/components/DynamicLogo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black p-8 pb-14 relative flex flex-col md:flex-row items-start justify-between w-full">
      {/* Left column */}
      <div className="flex flex-col text-white uppercase tracking-tight text-lg z-10">
        <Link href="#" className="hover:text-emerald-300">
          Accueil
        </Link>
        <Link href="/splinestudio" className="hover:text-emerald-300">
          Spline Studio
        </Link>
        <Link href="/films" className="hover:text-emerald-300">
          Films
        </Link>
        <div className=" uppercase tracking-tight text-sm pt-4">
          <Link
            href="https://www.instagram.com/splinestd/"
            className="mr-4 hover:text-emerald-300"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/company/splinestudio/"
            className="hover:text-emerald-300"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col text-white text-right text-lg uppercase tracking-tight ml-auto z-10">
        <Link href="/contact" className="hover:text-emerald-300 ">
          Contact
        </Link>
        <Link
          href="/mentionslegales"
          className="text-sm hover:text-emerald-300"
        >
          Mentions légales
        </Link>
      </div>

      {/* Animated GIF Logo */}
      <div
        className="
          z-0 h-15 flex justify-center items-center overflow-hidden 
          w-[200px] md:w-[300px]
          md:absolute md:left-1/2 md:top-1/2 md:translate-x-[-50%] md:translate-y-[-50%]
        "
      >
        <video
          src="/SplineStudioAnim3840x2160.webm"
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Logo animé Spline Studio"
        />
      </div>

      {/* Mention en bas centré */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-400 text-xs text-center">
        © 2025 - SPLINE Studio – Tous droits réservés
      </div>
    </footer>
  );
}
