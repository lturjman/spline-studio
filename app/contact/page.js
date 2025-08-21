import ContactForm from "@/components/ContactForm";
import { createClient } from "@/prismicio";
import { Heading } from "@/components/Heading";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import GoogleReCaptchaWrapper from "@/components/GoogleReCaptchaWrapper";

export default async function Contact() {
  const client = createClient();
  const page = await client.getSingle("contact");

  return (
    <div className=" min-h-screen">
      <div className=" relative w-[80vw]  h-[15vh] transition-all m-auto overflow-hidden rounded-full mt-10">
        <div className="absolute inset-0 bg-[url('/ComboLacroixJade.jpg')] bg-cover bg-center bg-fixed"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Heading level={1} className=" text-white ">
            {" "}
            {page.data.title}
          </Heading>
        </div>
      </div>

      <div className="flex max-w-4xl mx-auto px-4 justify-center items-center mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <Heading
              level={2}
              className="md:text-right mr-0 text-emerald-300 md:mt-10"
            >
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

            <Heading
              level={3}
              className="text-lg md:text-xl text-center md:text-right md:mr-0"
            >
              Actus, backstages, ... Suivez-nous sur les réseaux sociaux
            </Heading>

            <div className="flex space-x-6  justify-center md:justify-end mt-6">
              <a
                href="https://www.instagram.com/splinestd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/splinestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="mb-6">
            <GoogleReCaptchaWrapper>
              <ContactForm />
            </GoogleReCaptchaWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
