"use client";

type Season = {
  emoji: string;
  period: string;
  periodEn: string;
  title: string;
  titleEn: string;
  color: string;
  bg: string;
  border: string;
  badge: string;
  badgeEn: string;
  badgeColor: string;
  highlights: string[];
  highlightsEn: string[];
  tip: string;
  tipEn: string;
};

const seasons: Season[] = [
  {
    emoji: "🌸",
    period: "Aprilie – Iunie",
    periodEn: "April – June",
    title: "Primăvara",
    titleEn: "Spring",
    color: "text-green-800",
    bg: "bg-green-50",
    border: "border-green-300",
    badge: "Ideal pentru natură",
    badgeEn: "Best for nature",
    badgeColor: "bg-green-600",
    highlights: [
      "🦢 Pelicani, egrete și stârci revin la cuibărit",
      "🌸 Natură explodată în culori vii",
      "🌡️ Temperaturi plăcute (10–20°C)",
      "🦟 Puțini țânțari față de vară",
      "🛶 Canale accesibile – nivel ridicat al apei",
      "⚠️ Prohibiție la pescuit (protejarea puietului)",
    ],
    highlightsEn: [
      "🦢 Pelicans, egrets and herons return to nest",
      "🌸 Nature bursts into fresh color",
      "🌡️ Pleasant temperatures (10–20°C)",
      "🦟 Fewer mosquitoes than summer",
      "🛶 Channels accessible – high water level",
      "⚠️ Fishing ban in effect (spawning season)",
    ],
    tip: "Cel mai bun sezon pentru birdwatching și fotografii de natură.",
    tipEn: "Best season for birdwatching and nature photography.",
  },
  {
    emoji: "☀️",
    period: "Iulie – August",
    periodEn: "July – August",
    title: "Vara",
    titleEn: "Summer",
    color: "text-amber-800",
    bg: "bg-amber-50",
    border: "border-amber-300",
    badge: "Sezon de vârf",
    badgeEn: "Peak season",
    badgeColor: "bg-amber-500",
    highlights: [
      "🪷 Nuferi în plină înflorire (iunie–iulie)",
      "🏖️ Plajă la Sfântu Gheorghe – nisip fin, apă curată",
      "🌡️ Zile calde și luminoase (30–35°C)",
      "🦢 Pelicani ușor de observat cu puii lor",
      "🐟 Pescuit posibil după ridicarea prohibiției",
      "🦟 Atenție la țânțari la apus",
    ],
    highlightsEn: [
      "🪷 Lotus flowers in full bloom (June–July)",
      "🏖️ Beach at Sfântu Gheorghe – fine sand, clean water",
      "🌡️ Warm sunny days (30–35°C)",
      "🦢 Pelicans easy to spot with their chicks",
      "🐟 Fishing opens after the ban lifts",
      "🦟 Watch out for mosquitoes at sunset",
    ],
    tip: "Perfect pentru familii, plajă și nuferi.",
    tipEn: "Perfect for families, beach, and lotus flowers.",
  },
  {
    emoji: "🍂",
    period: "Septembrie – Octombrie",
    periodEn: "September – October",
    title: "Toamna",
    titleEn: "Autumn",
    color: "text-orange-800",
    bg: "bg-orange-50",
    border: "border-orange-300",
    badge: "Ideal pentru pescuit",
    badgeEn: "Best for fishing",
    badgeColor: "bg-orange-500",
    highlights: [
      "🎣 CEL MAI BUN sezon pentru pescuit – știucă, șalău, somn, crap",
      "🍂 Peisaje aurii spectaculoase",
      "🌡️ Temperaturi blânde (până la 25°C)",
      "🦟 Aproape zero țânțari",
      "👥 Mult mai puțini turiști",
      "🦅 Păsări rapitoare în migrație spre sud",
    ],
    highlightsEn: [
      "🎣 BEST season for fishing – pike, perch, catfish, carp",
      "🍂 Spectacular golden landscapes",
      "🌡️ Mild temperatures (up to 25°C)",
      "🦟 Almost zero mosquitoes",
      "👥 Far fewer tourists",
      "🦅 Raptors and waders migrating south",
    ],
    tip: "Preferatul pescarilor și fotografilor. Liniște totală.",
    tipEn: "Favorite of fishermen and photographers. Total peace.",
  },
  {
    emoji: "❄️",
    period: "Noiembrie – Martie",
    periodEn: "November – March",
    title: "Iarna",
    titleEn: "Winter",
    color: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-300",
    badge: "Aventură și liniște",
    badgeEn: "Adventure & solitude",
    badgeColor: "bg-blue-600",
    highlights: [
      "🦅 Acvile de iarnă și gâște sălbatice",
      "❄️ Delta acoperită de chiciură – peisaje rare",
      "🦟 Zero țânțari",
      "👥 Aproape nimeni – Delta e doar a ta",
      "🦢 Gâscă cu piept roșu (specie pe cale de dispariție)",
      "🏠 Cazare ușor de găsit, prețuri mai mici",
    ],
    highlightsEn: [
      "🦅 White-tailed eagles and wild geese",
      "❄️ Frost-covered Delta – rare landscapes",
      "🦟 Zero mosquitoes",
      "👥 Almost no one – the Delta is yours alone",
      "🦢 Red-breasted goose (endangered species)",
      "🏠 Easy accommodation, lower prices",
    ],
    tip: "Pentru cei care vor Delta nefiltrată. O experiență rară.",
    tipEn: "For those who want the raw Delta. A rare experience.",
  },
];

export default function Seasons({ lang = "ro" }: { lang?: string }) {
  return (
    <div className="space-y-6">
      {seasons.map((s, i) => (
        <div key={i} className={`rounded-2xl border-2 ${s.border} ${s.bg} p-6 md:p-8`}>
          <div className="flex flex-wrap items-start gap-4 mb-4">
            <span className="text-5xl">{s.emoji}</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className={`text-2xl font-bold ${s.color}`}>
                  {lang === "ro" ? s.title : s.titleEn}
                </h3>
                <span className={`${s.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {lang === "ro" ? s.badge : s.badgeEn}
                </span>
              </div>
              <p className={`text-sm font-semibold ${s.color} opacity-70`}>
                {lang === "ro" ? s.period : s.periodEn}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-4">
            {(lang === "ro" ? s.highlights : s.highlightsEn).map((h, j) => (
              <div key={j} className="text-sm text-gray-700">{h}</div>
            ))}
          </div>
          <div className={`border-t ${s.border} pt-4 mt-2`}>
            <p className={`text-sm font-semibold italic ${s.color}`}>
              💡 {lang === "ro" ? s.tip : s.tipEn}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
