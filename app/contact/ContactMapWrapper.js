"use client";

import dynamic from "next/dynamic";
import ContactMap from "./Map";

export default function ContactMapWrapper() {
  return (
    <div>
      <ContactMap />
    </div>
  );
}
