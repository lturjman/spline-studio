import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex max-w-4xl mx-auto px-4 h-screen justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-right">Contactez-Nous</h2>
          <div className="mt-6 text-right">
            <span>
              Spline Studio est une société de production audiovisuelle créative
              qui existe depuis 2016.
            </span>

            <div className="mt-6 font-semibold text-right">
              Nous ne prenons ni stagiaires, ni alternants pour le moment.
            </div>

            <div className="mt-6 font-bold">Spline Studio</div>
            <div>86 Boulevard de la Croix Rousse</div>
            <div>69004 LYON</div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
