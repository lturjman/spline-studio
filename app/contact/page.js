import ContactForm from "@/components/ContactForm";
import dynamic from "next/dynamic";

// Import dynamique du composant client uniquement côté navigateur
const MapWrapper = dynamic(() => import("./MapWrapper"), {
  ssr: false,
  loading: () => (
    <div className="h-[60vh] bg-gray-200 rounded-2xl animate-pulse" />
  ),
});

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <ContactForm />
        </div>
        <MapWrapper />
      </div>
    </div>
  );
}
