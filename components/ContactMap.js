"use client";
import { motion } from "motion/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

export default function ContactMap() {
  // const customIcon = new L.Icon({
  //   iconUrl: "/pin.png",
  //   iconSize: [30],
  //   iconAnchor: [15, 30],
  //   popupAnchor: [0, -30],
  // });
  const position = [45.7736, 4.8256];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto"
    >
      <div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-md">
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={true}
          dragging={true}
          doubleClickZoom={true}
          zoomControl={true}
          className="h-full w-full grayscale-[10%]"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          <Marker position={position}>
            <Popup>Spline Studio</Popup>
          </Marker>
        </MapContainer>
      </div>
    </motion.div>
  );
}
