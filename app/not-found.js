import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[90vh]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page non trouvée</p>
      <Link
        href="/"
        className="mt-2 hover:bg-emerald-300 bg-black hover:text-black text-white rounded-full px-6 py-2 lg:w-[20vw] transition-all"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
