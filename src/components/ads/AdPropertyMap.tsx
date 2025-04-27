"use client";

import { useEffect, useRef } from "react";

const adPropertyMap = ({ location }: { location: string }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Simuler une carte avec un fond coloré et du texte
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #e0e7ff; border-radius: 0.5rem; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('/placeholder.svg?height=600&width=800'); background-size: cover; opacity: 0.3;"></div>
          <div style="position: relative; text-align: center; padding: 1rem;">
            <div style="font-weight: bold; font-size: 1.25rem; margin-bottom: 0.5rem;">📍 ${location}</div>
            <div style="font-size: 0.875rem; color: #4b5563;">Carte interactive disponible dans l'application finale</div>
          </div>
        </div>
      `;
    }
  }, [location]);

  return (
    <div ref={mapRef} className="h-80 w-full rounded-lg bg-gray-100"></div>
  );
};

export default adPropertyMap;
