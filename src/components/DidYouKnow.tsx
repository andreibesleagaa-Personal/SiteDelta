"use client";

import Image from "next/image";

const facts = [
  {
    emoji: "🐟",
    title: "888 kg — Morunul legendar",
    titleEn: "888 kg — The legendary Beluga",
    desc: "Cel mai mare morun prins vreodată în România a cântărit 888 kg și măsura 4,26 m. A fost capturat pe Brațul Sfântul Gheorghe — exact acolo unde navigăm noi. Din el s-au scos 127 kg de caviar negru, iar capul singur cântărea 143 kg.",
    descEn: "The largest beluga sturgeon ever caught in Romania weighed 888 kg and measured 4.26 m. It was caught on the St. George branch — exactly where we sail. It yielded 127 kg of black caviar, and its head alone weighed 143 kg.",
    highlight: true,
    image: "/media/mancare/Morun KG.jpg",
  },
  {
    emoji: "🌍",
    title: "Patrimoniu UNESCO din 1991",
    titleEn: "UNESCO World Heritage since 1991",
    desc: "Delta Dunării este primul sit natural din România recunoscut de UNESCO. Este cea mai bine conservată deltă din Europa și una dintre cele mai valoroase zone umede de pe Planetă.",
    descEn: "The Danube Delta is Romania's first UNESCO World Heritage natural site — the best-preserved delta in Europe and one of the most valuable wetlands on Earth.",
    highlight: false,
  },
  {
    emoji: "🦢",
    title: "60% din pelicanii lumii cuibăresc AICI",
    titleEn: "60% of the world's pelicans nest HERE",
    desc: "Delta Dunării găzduiește cea mai mare colonie de pelicani comuni din Europa — 60% din populația mondială vine să cuibărească pe aceste meleaguri. Peste 300 de specii de păsări trăiesc sau tranzitează Delta.",
    descEn: "The Danube Delta hosts the largest common pelican colony in Europe — 60% of the world's population comes here to nest. Over 300 bird species live in or pass through the Delta.",
    highlight: false,
  },
  {
    emoji: "🌿",
    title: "Cel mai mare stufăriș din lume",
    titleEn: "The world's largest reed bed",
    desc: "Delta Dunării deține recordul mondial pentru cea mai mare suprafață compactă de stuf — 170.000 hectare. Unele tulpini ajung la 4 metri înălțime. Stuful a fost și este esențial pentru arhitectura tradițională locală.",
    descEn: "The Danube Delta holds the world record for the largest compact reed bed — 170,000 hectares. Some stalks reach 4 meters high. Reed has always been central to local traditional architecture.",
    highlight: false,
  },
  {
    emoji: "🗺️",
    title: "Delta crește cu 40 m pe an",
    titleEn: "The Delta grows 40 m per year",
    desc: "Delta Dunării are doar ~10.000 de ani — una din cele mai tinere formațiuni geologice din Europa. Dunărea depune anual 67 milioane de tone de aluviuni, extinzând Delta în Marea Neagră cu ~40 de metri pe an.",
    descEn: "The Danube Delta is only ~10,000 years old — one of Europe's youngest geological formations. The Danube deposits 67 million tonnes of sediment per year, extending the Delta into the Black Sea by ~40 meters annually.",
    highlight: false,
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Oameni aici de 9.000 de ani",
    titleEn: "People have lived here for 9,000 years",
    desc: "Cele mai vechi schelete umane din România au fost descoperite în Delta Dunării — datând de acum ~9.000 de ani. Lipovenii, urmași ai rușilor vechi-credincioși, trăiesc și azi în Delta, păstrând tradiții seculare.",
    descEn: "The oldest human skeletons in Romania were discovered in the Danube Delta — dating back ~9,000 years. The Lipovans, descendants of Russian Old Believers, still live here today, preserving centuries-old traditions.",
    highlight: false,
  },
  {
    emoji: "🐠",
    title: "5.500 de specii într-un singur loc",
    titleEn: "5,500 species in one place",
    desc: "Delta adăpostește 5.500+ specii de plante și animale, 136 specii de pești, 44 de mamifere și 23 de ecosisteme diferite. O biodiversitate comparată cu Marea Barieră de Corali din Australia.",
    descEn: "The Delta hosts 5,500+ plant and animal species, 136 fish species, 44 mammals, and 23 different ecosystems. A biodiversity compared to Australia's Great Barrier Reef.",
    highlight: false,
  },
];

export default function DidYouKnow({ lang = "ro" }: { lang?: string }) {
  return (
    <div className="space-y-6">
      {facts.map((fact, i) => (
        <div
          key={i}
          className={`rounded-2xl overflow-hidden shadow-sm ${
            fact.highlight
              ? "border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50"
              : "border border-gray-200 bg-white"
          }`}
        >
          <div className={`flex flex-col md:flex-row gap-0 ${fact.image ? "" : ""}`}>
            {fact.image && (
              <div className="relative md:w-64 h-52 md:h-auto flex-shrink-0">
                <Image
                  src={fact.image}
                  alt={fact.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
                {fact.highlight && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    🏆 RECORD ROMÂNIA
                  </div>
                )}
              </div>
            )}
            <div className="p-6 flex-1">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{fact.emoji}</span>
                <h3 className={`text-xl font-bold ${fact.highlight ? "text-amber-800" : "text-green-900"}`}>
                  {lang === "ro" ? fact.title : fact.titleEn}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {lang === "ro" ? fact.desc : fact.descEn}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
