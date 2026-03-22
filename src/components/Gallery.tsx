"use client";

import { useState } from "react";
import Image from "next/image";

type MediaItem = {
  src: string;
  type: "image" | "video";
  label: string;
  category: "peisaje" | "mancare" | "turisti";
};

const media: MediaItem[] = [
  { src: "/media/peisaje/Apus.jpeg", type: "image", label: "Apus în Delta", category: "peisaje" },
  { src: "/media/peisaje/ducks.jpeg", type: "image", label: "Rațe sălbatice", category: "peisaje" },
  { src: "/media/peisaje/ducs.jpeg", type: "image", label: "Delta sălbatică", category: "peisaje" },
  { src: "/media/peisaje/nicsip.jpeg", type: "image", label: "Nisip fin", category: "peisaje" },
  { src: "/media/peisaje/nufer.jpeg", type: "image", label: "Nuferi", category: "peisaje" },
  { src: "/media/peisaje/splash water.jpeg", type: "image", label: "Apă cristalină", category: "peisaje" },
  { src: "/media/mancare/bors.jpeg", type: "image", label: "Borș de pește", category: "mancare" },
  { src: "/media/mancare/caras prajit.jpeg", type: "image", label: "Caras prăjit", category: "mancare" },
  { src: "/media/mancare/mancare.jpeg", type: "image", label: "Specialități Delta", category: "mancare" },
  { src: "/media/mancare/Morun KG.jpg", type: "image", label: "Morun proaspăt", category: "mancare" },
  { src: "/media/turisti/delta.jpeg", type: "image", label: "Pe apă", category: "turisti" },
  { src: "/media/turisti/Emotiones sell.jpeg", type: "image", label: "Emoții autentice", category: "turisti" },
  { src: "/media/turisti/Imagini veste salvare caini.jpeg", type: "image", label: "Pet-friendly ❤️", category: "turisti" },
  { src: "/media/turisti/Imagini veste salvare caini2.jpeg", type: "image", label: "Siguri la bord", category: "turisti" },
];

const videos = [
  { src: "/media/video/apus.mp4", label: "Apus de soare pe Delta" },
  { src: "/media/video/barca.mp4", label: "Pe barcă" },
  { src: "/media/video/plaja.mp4", label: "Plaja sălbatică" },
  { src: "/media/video/turisti.mp4", label: "Turiști fericiți" },
  { src: "/media/video/capcuk.mp4", label: "Mâncare gătită" },
];

type Category = "toate" | "peisaje" | "mancare" | "turisti" | "video";

export default function Gallery({ lang = "ro" }: { lang?: string }) {
  const [active, setActive] = useState<Category>("toate");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const labels: Record<Category, string> = lang === "ro"
    ? { toate: "Toate", peisaje: "🌿 Natură", mancare: "🍽️ Mâncare", turisti: "🛶 Excursii", video: "🎬 Video" }
    : { toate: "All", peisaje: "🌿 Nature", mancare: "🍽️ Food", turisti: "🛶 Trips", video: "🎬 Video" };

  const filtered = active === "video"
    ? []
    : active === "toate"
    ? media
    : media.filter(m => m.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {(["toate", "peisaje", "mancare", "turisti", "video"] as Category[]).map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition text-sm ${
              active === cat
                ? "bg-green-700 text-white"
                : "bg-white border border-green-200 text-green-800 hover:bg-green-50"
            }`}
          >
            {labels[cat]}
          </button>
        ))}
      </div>

      {/* Imagini */}
      {active !== "video" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition"
              onClick={() => setLightbox(item.src)}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video grid */}
      {active === "video" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md bg-black">
              <video
                src={v.src}
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
              />
              <div className="bg-green-900 text-white text-sm font-medium px-4 py-2 text-center">
                {v.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400 transition"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightbox}
              alt=""
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
