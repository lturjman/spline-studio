import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Formulaire */}
        <div>
          <ContactForm />
        </div>

        <Map />
      </div>
    </div>
  );
}
