import Logo from "@/components/DynamicLogo";

export default function Footer() {
  return (
    <footer className="bg-white p-8 flex flex-col md:flex-row justify-between items-start gap-10 pb-20">
      {/* Left Column */}
      <div className="flex flex-col text-black font-bold text-4xl">
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

      {/* Center Logo */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <div className="w-80 h-40 flex items-center justify-center text-black font-medium">
          <Logo />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-end text-black">
        <div className="text-4xl font-extrabold hover:text-emerald-300">
          {" "}
          <a href="#">Contact</a>
        </div>
        <div className="text-lg font-semibold hover:text-emerald-300">
          <a href="#">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
