"use client";
import Map from "@/components/Maps";
import { motion } from "motion/react";

const RECAPTCHA_KEY = "6LezkpErAAAAAJOoz0ea_1wKT1fpzWuMCJbnggQa";

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto"
    >
      <Map />
    </motion.div>
  );
}
