"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icône personnalisée
const customIcon = new L.Icon({
  iconUrl: "/pin.png",
  iconSize: [30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const position = [45.7736, 4.8256];

export default function MapClient() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-xl mx-auto">
      <div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-md">
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={true}
          className="h-full w-full grayscale-[10%]"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Spline Studio</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
