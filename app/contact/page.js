"use client";
import { FormspreeProvider } from "@formspree/react";
import ContactForm from "@/components/ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RECAPTCHA_KEY = "6LezkpErAAAAAJOoz0ea_1wKT1fpzWuMCJbnggQa";

export default function Contact() {
  return (
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
          <h1>Contact</h1>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </FormspreeProvider>
    </div>
  );
}
