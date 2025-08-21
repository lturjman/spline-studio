"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GoogleReCaptchaWrapper({ children }) {
  const RECAPTCHA_KEY = "6LezkpErAAAAAJOoz0ea_1wKT1fpzWuMCJbnggQa";
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
