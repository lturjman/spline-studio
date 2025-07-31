"use client";

import dynamic from "next/dynamic";

// Charge MapClient uniquement côté client
const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-[60vh] bg-gray-100 rounded-2xl animate-pulse" />
  ),
});

export default function MapWrapper() {
  return <MapClient />;
}
