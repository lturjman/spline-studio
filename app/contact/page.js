"use client";
import { FormspreeProvider } from "@formspree/react";
import ContactForm from "@/components/ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Map from "@/components/Maps";
import { motion } from "motion/react";

const RECAPTCHA_KEY = "6LezkpErAAAAAJOoz0ea_1wKT1fpzWuMCJbnggQa";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Formulaire */}
        <div>
          <FormspreeProvider>
            <GoogleReCaptchaProvider
              reCaptchaKey={RECAPTCHA_KEY}
              scriptProps={{
                async: true,
                defer: true,
                appendTo: "head",
                nonce: undefined,
              }}
            >
              <ContactForm />
            </GoogleReCaptchaProvider>
          </FormspreeProvider>
        </div>

        {/* Carte avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto"
        >
          <Map />
        </motion.div>
      </div>
    </div>
  );
}
