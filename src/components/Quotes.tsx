"use client";

import { useState, useEffect } from "react";

const quotes = [
  {
    text: "Delta înseamnă pace, înseamnă purificare interioară, contemplare.",
    textEn: "The Delta means peace, inner purification, contemplation.",
    funny: false,
  },
  {
    text: "În Delta, până și rudele sunt oameni cu se cade... 😁",
    textEn: "In the Delta, even your relatives become decent people... 😁",
    funny: true,
  },
  {
    text: "În Deltă călătorești înapoi în timp.",
    textEn: "In the Delta, you travel back in time.",
    funny: false,
  },
  {
    text: "Delta Dunării este o simfonie a naturii, unde apa și pământul dansează împreună.",
    textEn: "The Danube Delta is a symphony of nature, where water and land dance together.",
    funny: false,
  },
  {
    text: "Aici, în Delta Dunării, liniștea este spartă doar de cântecul păsărilor și șoaptele vântului.",
    textEn: "Here, in the Danube Delta, silence is broken only by birdsong and the whisper of the wind.",
    funny: false,
  },
  {
    text: "Peisajele Deltei sunt ca niște picturi vii — mereu în schimbare, dar mereu frumoase.",
    textEn: "The Delta's landscapes are like living paintings — always changing, always beautiful.",
    funny: false,
  },
  {
    text: "Canalele Deltei sunt venele prin care curge viața, aducând prospețime și vitalitate.",
    textEn: "The Delta's channels are the veins through which life flows, bringing freshness and vitality.",
    funny: false,
  },
  {
    text: "Fiecare apus de soare este un spectacol al naturii, plin de culori și lumină.",
    textEn: "Every sunset is a spectacle of nature, full of color and light.",
    funny: false,
  },
  {
    text: "Plimbările cu barca prin Delta Dunării sunt aventuri pline de descoperiri și surprize.",
    textEn: "Boat rides through the Danube Delta are adventures full of discoveries and surprises.",
    funny: false,
  },
  {
    text: "În fiecare colț al Deltei, natura ne șoptește povești vechi de când lumea.",
    textEn: "In every corner of the Delta, nature whispers stories as old as the world.",
    funny: false,
  },
  {
    text: "În Delta Dunării, fiecare zi este un nou început, plin de promisiuni și descoperiri.",
    textEn: "In the Danube Delta, every day is a new beginning, full of promise and discovery.",
    funny: false,
  },
  {
    text: "La mare, pe Dunăre, de-a lungul Gârlei Turcești, pe Flamânda, Sacalin, Melea, la cherhanaua veche — pentru tot ce mișcă în jurul bărcii există o poveste pe care o împărtășim cu voi.",
    textEn: "At the sea, on the Danube, along the Turkish Channel, on Flamânda, Sacalin, Melea, at the old fishery — for everything that moves around the boat, there is a story we share with you.",
    funny: false,
  },
];

export default function Quotes({ lang = "ro" }: { lang?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const q = quotes[active];

  return (
    <div>
      {/* Featured quote — auto-rotate */}
      <div className="bg-green-900 rounded-3xl p-10 md:p-16 text-center mb-12 relative overflow-hidden min-h-[200px] flex flex-col items-center justify-center">
        <div className="absolute top-4 left-8 text-8xl text-green-700 font-serif leading-none select-none">"</div>
        <div className="absolute bottom-4 right-8 text-8xl text-green-700 font-serif leading-none select-none">"</div>

        <p
          key={active}
          className={`text-2xl md:text-3xl font-light italic leading-relaxed relative z-10 max-w-3xl
            ${q.funny ? "text-amber-300" : "text-green-100"}`}
        >
          {lang === "ro" ? q.text : q.textEn}
        </p>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? "bg-amber-400 w-6" : "bg-green-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Grid cu toate citatele */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quotes.map((q, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-2xl p-6 cursor-pointer transition border-2 ${
              q.funny
                ? "bg-amber-50 border-amber-200 hover:border-amber-400"
                : "bg-white border-gray-100 hover:border-green-300"
            } ${active === i ? (q.funny ? "border-amber-400 shadow-md" : "border-green-400 shadow-md") : ""}`}
          >
            <p className={`text-sm leading-relaxed italic ${q.funny ? "text-amber-800 font-semibold" : "text-gray-700"}`}>
              „{lang === "ro" ? q.text : q.textEn}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
