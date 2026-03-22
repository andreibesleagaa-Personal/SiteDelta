import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-amber-800">🦆 Delta cu Romeo & Rareș</div>
        <div className="hidden md:flex gap-6 text-amber-900 font-medium">
          <a href="#excursii" className="hover:text-amber-600 transition">Excursii</a>
          <a href="#despre" className="hover:text-amber-600 transition">Despre noi</a>
          <a href="#galerie" className="hover:text-amber-600 transition">Galerie</a>
          <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
        </div>
        <a href="#rezervare" className="bg-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-700 transition text-sm">
          Rezervă acum
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-green-50 to-blue-50 pt-20">
        <div className="absolute inset-0 bg-[url('/hero-delta.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🌿 Experiențe autentice în Delta Dunării
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-6 leading-tight">
            Delta Dunării<br />
            <span className="text-amber-600">ca în povești</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Canale greu accesibile, sate din inima Deltei, oameni și obiceiuri rare. 
            Fără să ne uităm la ceas. O poveste, nu doar o plimbare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rezervare" className="bg-amber-600 text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition shadow-lg">
              🛶 Rezervă excursia
            </a>
            <a href="#excursii" className="border-2 border-green-800 text-green-800 text-lg px-8 py-4 rounded-full font-bold hover:bg-green-800 hover:text-white transition">
              Vezi pachetele
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600 text-sm md:text-base">
            <div className="flex items-center gap-2"><span className="text-2xl">🚤</span><span>2 bărci · 10 locuri fiecare</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">🧊</span><span>Frigider cu băuturi reci la bord</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">☂️</span><span>Umbrar + prelată pentru ploaie</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">🐕</span><span>Veste de salvare și pentru câini</span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">👶</span><span>Echipament pentru copii inclus</span></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* EXCURSII */}
      <section id="excursii" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Pachetele noastre</h2>
            <p className="text-xl text-gray-600">Alege experiența care ți se potrivește</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Pachet 1 */}
            <div className="border border-amber-200 rounded-2xl p-8 hover:shadow-xl transition bg-amber-50">
              <div className="text-5xl mb-4">🛶</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Excursia de o zi</h3>
              <p className="text-gray-600 mb-4">
                1h pe brațul Sf. Gheorghe, plajă, prânz la terasă cu bucate din Delta, 
                povești și muzică pe barcă.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Plecare din Mahmudia sau Murghiol</li>
                <li>✅ Ghid local inclus</li>
                <li>✅ Băuturi reci la bord</li>
                <li>✅ Veste de salvare pentru toți</li>
                <li>✅ Pet-friendly</li>
              </ul>
              <div className="text-sm text-gray-500 italic mb-4">Preț sub media pieței · stabilit la telefon</div>
              <a href="#rezervare" className="block text-center bg-amber-600 text-white py-3 rounded-full font-semibold hover:bg-amber-700 transition">
                Rezervă
              </a>
            </div>

            {/* Pachet 2 */}
            <div className="border-2 border-green-600 rounded-2xl p-8 hover:shadow-xl transition bg-green-50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                ⭐ Popular
              </div>
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Excursia + Masa</h3>
              <p className="text-gray-600 mb-4">
                Excursia completă cu masa gătită de Diana — pește proaspăt și 
                specialități din Delta, cu priveliște la apă.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Tot ce include pachetul de bază</li>
                <li>✅ Masă tradițională la terasă</li>
                <li>✅ Pește proaspăt din Delta</li>
                <li>✅ Meniu la precomandă sau surpriză</li>
                <li>✅ Gătit de Diana, cu suflet</li>
              </ul>
              <div className="text-sm text-gray-500 italic mb-4">Preț sub media pieței · stabilit la telefon</div>
              <a href="#rezervare" className="block text-center bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Rezervă
              </a>
            </div>

            {/* Pachet 3 */}
            <div className="border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition bg-blue-50">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Cazare + Experiența</h3>
              <p className="text-gray-600 mb-4">
                Rămâi peste noapte în casa rustică din Sfântu Gheorghe, 
                cu terasă cu stuf și răsărit de soare pe Delta.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Tot ce include pachetul complet</li>
                <li>✅ Cazare în casă rustică cu stuf</li>
                <li>✅ Mic dejun inclus</li>
                <li>✅ Sfântu Gheorghe — capătul drumului</li>
                <li>✅ Liniște totală, natură pură</li>
              </ul>
              <div className="text-sm text-gray-500 italic mb-4">Preț sub media pieței · stabilit la telefon</div>
              <a href="#rezervare" className="block text-center bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Rezervă
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* DOTARI BARCA */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-2">Barca noastră</h2>
            <p className="text-gray-600">Echipată complet pentru siguranța și confortul tău</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { icon: "🧊", label: "Frigider cu băuturi reci" },
              { icon: "⛱️", label: "Umbrar pentru zilele călduroase" },
              { icon: "🌧️", label: "Prelată în caz de ploaie" },
              { icon: "🦺", label: "Veste de salvare pt copii și câini" },
              { icon: "⚓", label: "Tot echipamentul de siguranță naval" },
            ].map((item, i) => (
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
            „Încerc să vă ofer o poveste din Delta Dunării,<br className="hidden md:block" />
            <span className="text-amber-300 font-semibold"> nu doar o plimbare."</span>
          </blockquote>
          <p className="text-green-300 text-lg">— Romeo, ghid local în Delta Dunării</p>
        </div>
      </section>

      {/* DESPRE NOI */}
      <section id="despre" className="py-24 px-6 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">De ce noi?</h2>
            <p className="text-xl text-green-200">Ieșim din tiparele excursiilor comerciale</p>
          </div>

          {/* Romeo's philosophy */}
          <div className="bg-green-700/50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto border border-green-600">
            <p className="text-green-100 text-lg leading-relaxed mb-4">
              „Scopul este să vedem Delta Dunării altfel, fără să ne uităm mereu la ceas, 
              să navigăm pe canale mai greu accesibile pentru ceilalți, să acostăm în satele 
              din inima deltei, să întâlnim oameni și obiceiuri."
            </p>
            <p className="text-green-100 text-lg leading-relaxed">
              „Prețul va fi în funcție de numărul de persoane (max. 10), va fi un preț minim — 
              sub prețul folosit de ceilalți transportatori. Iar la sfârșit, dacă v-a plăcut, 
              mă puteți onora cu ceva în plus — nu e obligatoriu."
            </p>
            <p className="text-amber-300 font-semibold mt-4">— Romeo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-7xl mb-4">🧭</div>
              <h3 className="text-2xl font-bold mb-3">Romeo</h3>
              <p className="text-green-200 leading-relaxed">
                Localnic, ghid cu povești despre fiecare cot de apă. 
                Știe canalele greu accesibile, satele din inimă, și oamenii cu obiceiuri rare.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl mb-4">🚣</div>
              <h3 className="text-2xl font-bold mb-3">Rareș</h3>
              <p className="text-green-200 leading-relaxed">
                Co-pilot pe apă, cunoscător al traseelor secrete. 
                Împreună cu Romeo, duc grupuri de până la 10 persoane în inima Deltei.
              </p>
            </div>
            <div className="text-center">
              <div className="text-7xl mb-4">👩‍🍳</div>
              <h3 className="text-2xl font-bold mb-3">Diana</h3>
              <p className="text-green-200 leading-relaxed">
                Soția lui Rareș, bucătăreasă cu talent. Gătește pește proaspăt și 
                specialități unice — cu precomenzi sau surprize gastronomice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRASEU */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Cum arată o zi perfectă</h2>
          <p className="text-xl text-gray-600 mb-16">De dimineață până seara — totul pregătit pentru tine</p>
          <div className="space-y-8">
            {[
              { icon: "🚗", title: "Ajungi cu mașina", desc: "Vii în Mahmudia sau Murghiol — lași mașina în parcare. Noi te preluăm." },
              { icon: "🛶", title: "O oră pe Brațul Sf. Gheorghe", desc: "Barca acoperită, băuturi reci, muzică și povești. Natură sălbatică de ambele părți." },
              { icon: "🏖️", title: "Plaja sălbatică", desc: "Nisip fin, apă curată, nimeni în jur. Exact cum trebuie." },
              { icon: "🍽️", title: "Masa la terasă", desc: "Diana a gătit deja. Pește proaspăt, specialități locale, liniște și umbră." },
              { icon: "🌅", title: "Rămâi sau te întorci", desc: "Dacă nu vrei să pleci (înțelegem!), ai cazare rustică disponibilă." },
            ].map((step, i) => (
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
            <h2 className="text-4xl font-bold text-green-900 mb-4">Rezervă locul tău</h2>
            <p className="text-xl text-gray-600">Completează formularul și Romeo te sună personal</p>
          </div>
          <form className="space-y-6 bg-amber-50 rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nume complet *</label>
                <input type="text" placeholder="Ion Popescu" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                <input type="tel" placeholder="07xx xxx xxx" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Data dorită *</label>
              <input type="date" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pachet ales</label>
              <select className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white">
                <option>🛶 Excursia de o zi</option>
                <option>🍽️ Excursia + Masa</option>
                <option>🌙 Cazare + Experiența completă</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Număr de persoane</label>
              <input type="number" min="1" max="20" placeholder="2" className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mesaj (opțional)</label>
              <textarea rows={3} placeholder="Aveți animale de companie? Preferințe alimentare? Orice altceva..." className="w-full border border-amber-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white text-lg py-4 rounded-full font-bold hover:bg-amber-700 transition shadow-md">
              🛶 Trimite rezervarea
            </button>
            <p className="text-center text-sm text-gray-500">Romeo vă contactează în maxim 24 de ore pentru confirmare și detalii de preț.</p>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-green-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Preferi să suni direct?</h2>
          <p className="text-green-200 mb-8">Romeo este disponibil și îți răspunde la orice întrebare</p>
          <a href="tel:+40700000000" className="inline-block bg-amber-500 text-white text-xl px-10 py-5 rounded-full font-bold hover:bg-amber-600 transition shadow-lg">
            📞 Sună-l pe Romeo
          </a>
          <p className="mt-6 text-green-300 text-sm">Sfântu Gheorghe, Delta Dunării · Plecare din Mahmudia sau Murghiol</p>
        </div>
      </section>

    </main>
  );
}
