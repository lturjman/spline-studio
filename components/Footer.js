import Logo from "@/components/DynamicLogo";

export default function Footer() {
  return (
    <footer className="bg-white p-8 pb-10 relative flex flex-col md:flex-row items-start justify-between gap-10">
      {/* Left column */}
      <div className="flex flex-col text-black font-bold text-2xl md:text-4xl">
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
        <div className="text-base font-semibold pt-4">
          <a href="#" className="mr-4 hover:text-emerald-300">
            Instagram
          </a>
          <a href="#" className="hover:text-emerald-300">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col text-black text-right text-2xl md:text-4xl font-extrabold ml-auto">
        <a href="#" className="hover:text-emerald-300 ">
          Contact
        </a>
        <span className="text-sm md:text-lg font-semibold hover:text-emerald-300">
          <a href="#">Mentions légales</a>
        </span>
      </div>

      {/* Logo */}
      <div
        className="
    w-full h-10 flex justify-center items-center overflow-hidden
    md:absolute md:left-1/2 md:top-1/3 md:translate-x-[-50%] md:translate-y-[-50%]
  "
      >
        <Logo />
      </div>
    </footer>
  );
}
