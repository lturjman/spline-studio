"use client";

import dynamic from "next/dynamic";
import ContactMap from "./Map";

export default function ContactClientWrapper() {
  return (
    <div>
      <ContactMap />
    </div>
  );
}
