"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "motion/react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormspreeProvider } from "@formspree/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RECAPTCHA_KEY = "6LezkpErAAAAAJOoz0ea_1wKT1fpzWuMCJbnggQa";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  if (state.succeeded) {
    return <p>Votre message à bien été envoyé !</p>;
  }

  const executeRecaptchaAndSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!executeRecaptcha) {
      console.log("reCAPTCHA pas encore chargé");
      return;
    }

    const token = await executeRecaptcha("form_submit");
    console.log("Token reCAPTCHA :", token);
    data["g-recaptcha-response"] = token;
    handleSubmit(data);
  };

  return (
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
        <div className="max-w-md mx-auto uppercase">
          <AnimatePresence>
            {state.succeeded ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6 bg-green-100 border border-emerald-300 text-emerald-800 rounded-2xl shadow"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Merci pour ton message !
                </h2>
                <p>Je te répondrai dès que possible.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={executeRecaptchaAndSubmit}
                className="p-6 bg-white rounded-2xl shadow-xl space-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1 px-2"
                  >
                    Adresse Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                    placeholder="johnDoe@email.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-600 text-xs mt-1 font-semibold px-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1 px-2"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                    placeholder="0612345678"
                  />
                  <ValidationError
                    prefix="phone"
                    field="phone"
                    errors={state.errors}
                    className="text-red-600 text-xs mt-1 font-semibold px-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1 px-2"
                  >
                    Objet
                  </label>
                  <input
                    id="subject"
                    type="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                    placeholder="Prise de contact"
                  />
                  <ValidationError
                    prefix="subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-600 text-xs mt-1 font-semibold px-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1 px-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                    placeholder="Bonjour, ..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-600 text-xs font-semibold p-2"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-emerald-300 text-gray-700 font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-emerald-300 transition"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </GoogleReCaptchaProvider>
    </FormspreeProvider>
  );
}
