"use client";

import { useEffect, useState } from "react";

export default function MapClient() {
  const [mounted, setMounted] = useState(false);
  const [LeafletMap, setLeafletMap] = useState(null);

  useEffect(() => {
    setMounted(true);

    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([reactLeaflet, L]) => {
      const { MapContainer, TileLayer, Marker, Popup } = reactLeaflet;
      const customIcon = new L.Icon({
        iconUrl: "/pin.png",
        iconSize: [30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      const position = [45.7736, 4.8256];

      setLeafletMap(() => (
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
      ));
    });
  }, []);

  if (!mounted || !LeafletMap) {
    return <div className="h-[60vh] bg-gray-100 rounded-2xl animate-pulse" />;
  }

  const RenderedMap = LeafletMap;
  return <RenderedMap />;
}
