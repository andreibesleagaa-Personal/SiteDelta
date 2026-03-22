"use client";

import { useState } from "react";
import { t, Lang } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>('ro');
  const T = t[lang];

  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-amber-800">🦆 Delta cu Romeo & Rareș</div>
        <div className="hidden md:flex gap-6 text-amber-900 font-medium">
          <a href="#excursii" className="hover:text-amber-600 transition">{T.nav.excursii}</a>
          <a href="#despre" className="hover:text-amber-600 transition">{T.nav.despre}</a>
          <a href="#galerie" className="hover:text-amber-600 transition">{T.nav.galerie}</a>
          <a href="#contact" className="hover:text-amber-600 transition">{T.nav.contact}</a>
        </div>
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center bg-amber-50 border border-amber-200 rounded-full p-1 text-sm font-semibold">
            <button
              onClick={() => setLang('ro')}
              className={`px-3 py-1 rounded-full transition ${lang === 'ro' ? 'bg-amber-600 text-white' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              🇷🇴 RO
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition ${lang === 'en' ? 'bg-amber-600 text-white' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              🇬🇧 EN
            </button>
          </div>
          <a href="#rezervare" className="bg-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-700 transition text-sm">
            {T.nav.rezerva}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-green-50 to-blue-50 pt-20">
        <div className="absolute inset-0 bg-[url('/hero-delta.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            {T.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-6 leading-tight">
            {T.hero.title1}<br />
            <span className="text-amber-600">{T.hero.title2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {T.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rezervare" className="bg-amber-600 text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition shadow-lg">
              {T.hero.cta1}
            </a>
            <a href="#excursii" className="border-2 border-green-800 text-green-800 text-lg px-8 py-4 rounded-full font-bold hover:bg-green-800 hover:text-white transition">
              {T.hero.cta2}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600 text-sm md:text-base">
            <div className="flex items-center gap-2"><span className="text-2xl">🚤</span><span>{T.hero.stat1}</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">🧊</span><span>{lang === 'ro' ? 'Frigider cu băuturi reci la bord' : 'Fridge with cold drinks on board'}</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">☂️</span><span>{lang === 'ro' ? 'Umbrar + prelată pentru ploaie' : 'Shade cover + rain tarp'}</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">🐕</span><span>{lang === 'ro' ? 'Veste de salvare și pentru câini' : 'Life jackets for dogs too'}</span></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* DOTARI BARCA */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-2">{T.barca.title}</h2>
            <p className="text-gray-600">{T.barca.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {T.barca.items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITAT ROMEO */}
      <section className="py-20 px-6 bg-green-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-8">🦆</div>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed italic text-green-100 mb-8">
            {T.quote.text.split('nu doar o plimbare').length > 1 ? (
              <>
                {T.quote.text.split(lang === 'ro' ? 'nu doar o plimbare' : 'not just a ride')[0]}
                <span className="text-amber-300 font-semibold">
                  {lang === 'ro' ? 'nu doar o plimbare."' : 'not just a ride."'}
                </span>
              </>
            ) : T.quote.text}
          </blockquote>
          <p className="text-green-300 text-lg">{T.quote.author}</p>
        </div>
      </section>

      {/* DESPRE NOI */}
      <section id="despre" className="py-24 px-6 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{T.despre.title}</h2>
            <p className="text-xl text-green-200">{T.despre.subtitle}</p>
          </div>
          <div className="bg-green-700/50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto border border-green-600">
            <p className="text-green-100 text-lg leading-relaxed mb-4">{T.despre.romeo_q1}</p>
            <p className="text-green-100 text-lg leading-relaxed">{T.despre.romeo_q2}</p>
            <p className="text-amber-300 font-semibold mt-4">{T.despre.romeo_name}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {T.despre.ghizi.map((g, i) => (
              <div key={i} className="text-center">
                <div className="text-7xl mb-4">{g.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{g.name}</h3>
                <p className="text-green-200 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCURSII */}
      <section id="excursii" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-4">{T.excursii.title}</h2>
            <p className="text-xl text-gray-600">{T.excursii.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {T.excursii.pachete.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 hover:shadow-xl transition relative ${
                p.popular
                  ? 'border-2 border-green-600 bg-green-50'
                  : i === 2
                  ? 'border border-blue-200 bg-blue-50'
                  : 'border border-amber-200 bg-amber-50'
              }`}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    ⭐ {lang === 'ro' ? 'Popular' : 'Popular'}
                  </div>
                )}
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {p.items.map((item, j) => (
                    <li key={j}>✅ {item}</li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500 italic mb-4">{T.excursii.pret}</div>
                <a href="#rezervare" className={`block text-center text-white py-3 rounded-full font-semibold transition ${
                  p.popular ? 'bg-green-600 hover:bg-green-700' : i === 2 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-600 hover:bg-amber-700'
                }`}>
                  {T.excursii.rezerva}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRASEU */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-4">{T.traseu.title}</h2>
          <p className="text-xl text-gray-600 mb-16">{T.traseu.subtitle}</p>
          <div className="space-y-8">
            {T.traseu.pasi.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-sm text-left">
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REZERVARE */}
      <section id="rezervare" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">{T.rezervare.title}</h2>
            <p className="text-xl text-gray-600">{T.rezervare.subtitle}</p>
          </div>
          <form className="space-y-6 bg-amber-50 rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{T.rezervare.nume} *</label>
                <input type="text" placeholder="Ion Popescu" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{T.rezervare.telefon} *</label>
                <input type="tel" placeholder="07xx xxx xxx" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{T.rezervare.data} *</label>
              <input type="date" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{T.rezervare.pachet}</label>
              <select className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white">
                {T.excursii.pachete.map((p, i) => (
                  <option key={i}>{p.icon} {p.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{T.rezervare.persoane}</label>
              <input type="number" min="1" max="20" placeholder="2" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{T.rezervare.mesaj}</label>
              <textarea rows={3} placeholder={T.rezervare.mesaj_placeholder} className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white text-lg py-4 rounded-full font-bold hover:bg-amber-700 transition shadow-md">
              {T.rezervare.submit}
            </button>
            <p className="text-center text-sm text-gray-500">{T.rezervare.nota}</p>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-green-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{T.contact.title}</h2>
          <p className="text-green-200 mb-8">{T.contact.subtitle}</p>
          <a href="tel:+40700000000" className="inline-block bg-amber-500 text-white text-xl px-10 py-5 rounded-full font-bold hover:bg-amber-600 transition shadow-lg">
            {T.contact.cta}
          </a>
          <p className="mt-6 text-green-300 text-sm">{T.contact.adresa}</p>
        </div>
      </section>

    </main>
  );
}
