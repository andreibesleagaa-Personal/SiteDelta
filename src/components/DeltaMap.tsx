"use client";

import { useEffect } from "react";

export default function DeltaMap() {
  useEffect(() => {
    // Importăm Leaflet doar pe client (nu SSR)
    import("leaflet").then((L) => {
      // Evităm dublă inițializare
      const container = document.getElementById("delta-map") as HTMLElement & { _leaflet_id?: number };
      if (container._leaflet_id) return;

      // Fix pentru iconițele default Leaflet în Next.js
      // @ts-expect-error - Leaflet internal
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Centrat pe Delta Dunării
      const map = L.map("delta-map", {
        center: [45.05, 29.45],
        zoom: 10,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Puncte de plecare
      const mahmudia = L.latLng(45.0833, 29.1000);
      const murghiol = L.latLng(45.0500, 29.1667);
      const sfGheorghe = L.latLng(44.9000, 29.5833);

      // Iconițe custom
      const startIcon = L.divIcon({
        html: `<div style="background:#d97706;color:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">🚗</div>`,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      const destIcon = L.divIcon({
        html: `<div style="background:#16a34a;color:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">🦆</div>`,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      // Markeri
      L.marker(mahmudia, { icon: startIcon })
        .addTo(map)
        .bindPopup("<b>🚗 Mahmudia</b><br>Punct de plecare")
        .openPopup();

      L.marker(murghiol, { icon: startIcon })
        .addTo(map)
        .bindPopup("<b>🚗 Murghiol</b><br>Punct de plecare alternativ");

      L.marker(sfGheorghe, { icon: destIcon })
        .addTo(map)
        .bindPopup("<b>🦆 Sfântu Gheorghe</b><br>Destinația finală · Cazare · Terasă cu stuf");

      // Traseu aproximativ pe Brațul Sf. Gheorghe
      const traseu = [
        [45.0833, 29.1000], // Mahmudia
        [45.0700, 29.1500], // Murghiol
        [45.0200, 29.2500],
        [44.9800, 29.3500],
        [44.9500, 29.4500],
        [44.9000, 29.5833], // Sf. Gheorghe
      ] as [number, number][];

      L.polyline(traseu, {
        color: "#d97706",
        weight: 4,
        opacity: 0.8,
        dashArray: "10, 6",
      }).addTo(map);

      // Bounds să includă tot traseul
      map.fitBounds(L.latLngBounds([mahmudia, murghiol, sfGheorghe]).pad(0.2));
    });

    // CSS Leaflet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-green-200">
      <div id="delta-map" style={{ height: "420px", width: "100%" }} />
      <div className="bg-white px-6 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚗</span>
          <span><strong>Puncte de plecare:</strong> Mahmudia sau Murghiol</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">🦆</span>
          <span><strong>Destinație:</strong> Sfântu Gheorghe</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-8 h-1 bg-amber-500 rounded" style={{borderTop: "3px dashed #d97706", background: "transparent"}}></span>
          <span>Traseu pe Brațul Sf. Gheorghe</span>
        </div>
      </div>
    </div>
  );
}
