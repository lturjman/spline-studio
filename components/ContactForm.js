import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "motion/react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm("mpwlrppq");
  if (state.succeeded) {
    return <p>Votre message à bien été envoyé !</p>;
  }

  const executeRecaptchaAndSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("reCAPTCHA pas encore chargé");
      return;
    }

    const token = await executeRecaptcha("form_submit");

    console.log("Token reCAPTCHA :", token);
    handleSubmit(e);
  };

  return (
    <div className="max-w-md mx-auto">
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
            className="p-6 bg-white rounded-2xl shadow-xl space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Adresse Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                placeholder="ton@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Téléphone
              </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                placeholder="06*********"
              />
              <ValidationError
                prefix="phone"
                field="phone"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
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
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                placeholder="Ton message ici..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
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
  );
}
