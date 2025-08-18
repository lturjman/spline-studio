import ContactForm from "@/components/ContactForm";
import { createClient } from "@/prismicio";
import { Heading } from "@/components/Heading";

export default async function Contact() {
  const client = createClient();
  const page = await client.getSingle("contact");

  return (
    <div className=" min-h-screen">
      <Heading level={1} className="pt-10">
        {" "}
        {page.data.title}
      </Heading>
      <div className="flex max-w-4xl mx-auto px-4 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <Heading level={2} className="md:text-right mr-0 text-emerald-300 ">
              SPLINE STUDIO
            </Heading>

            <div className="mt-6 text-center md:text-right font-spaceGrotesk uppercase">
              <span className="font-bold">
                Spline Studio est une société de production audiovisuelle
                créative qui existe depuis 2016.
              </span>

              <div className="mt-6 text-center md:text-right">
                Nous ne prenons ni stagiaires, ni alternants pour le moment.
              </div>

              <div className="mt-6 text-center md:text-right font-bold">
                Spline Studio
              </div>
              <div>86 Boulevard de la Croix Rousse</div>
              <div>69004 LYON</div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
