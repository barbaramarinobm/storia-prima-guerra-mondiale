/**
 * ILLUSTRAZIONI STORICHE VETTORIALI (SVG) - LA PRIMA GUERRA MONDIALE
 * Immagini vettoriali integrate ad alta risoluzione, 100% offline e visibili subito.
 */

const WW1_ILLUSTRATIONS = {
  // Banner illustrati per ciascuna fase cronologica
  phases: {
    "1914": `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="phase-hero-svg">
        <defs>
          <linearGradient id="sky1914" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fdba74" />
            <stop offset="100%" stop-color="#fed7aa" />
          </linearGradient>
          <linearGradient id="smoke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#475569" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#94a3b8" stop-opacity="0" />
          </linearGradient>
        </defs>
        <!-- Cielo al tramonto -->
        <rect width="500" height="200" fill="url(#sky1914)" rx="10" />
        <!-- Sole/Bagliore -->
        <circle cx="250" cy="120" r="70" fill="#f97316" opacity="0.3" />
        <!-- Sagome delle città e fumo di Sarajevo e della Marna -->
        <path d="M 0 170 L 40 155 L 70 170 L 120 150 L 160 170 L 220 140 L 260 170 L 320 145 L 380 170 L 440 150 L 500 170 L 500 200 L 0 200 Z" fill="#334155" />
        <!-- Taxi della Marna stilizzato -->
        <g transform="translate(60, 135) scale(0.65)">
          <rect x="0" y="25" width="85" height="28" rx="6" fill="#b91c1c" />
          <path d="M 15 25 L 30 5 L 65 5 L 75 25 Z" fill="#b91c1c" />
          <rect x="25" y="8" width="18" height="14" fill="#bae6fd" />
          <rect x="48" y="8" width="18" height="14" fill="#bae6fd" />
          <circle cx="20" cy="53" r="12" fill="#0f172a" />
          <circle cx="20" cy="53" r="5" fill="#e2e8f0" />
          <circle cx="68" cy="53" r="12" fill="#0f172a" />
          <circle cx="68" cy="53" r="5" fill="#e2e8f0" />
          <text x="32" y="38" fill="#ffffff" font-size="10" font-weight="bold">TAXI</text>
        </g>
        <!-- Soldati con fucili in marcia -->
        <g fill="#1e293b" transform="translate(190, 115) scale(0.7)">
          <!-- Soldato 1 -->
          <circle cx="25" cy="25" r="7" />
          <line x1="25" y1="20" x2="42" y2="2" stroke="#0f172a" stroke-width="2.5" />
          <path d="M 18 32 L 32 32 L 30 65 L 18 65 Z" />
          <line x1="20" y1="65" x2="15" y2="90" stroke="#1e293b" stroke-width="4" />
          <line x1="28" y1="65" x2="35" y2="90" stroke="#1e293b" stroke-width="4" />
          <!-- Soldato 2 -->
          <circle cx="60" cy="25" r="7" />
          <line x1="60" y1="20" x2="77" y2="2" stroke="#0f172a" stroke-width="2.5" />
          <path d="M 53 32 L 67 32 L 65 65 L 53 65 Z" />
          <line x1="55" y1="65" x2="50" y2="90" stroke="#1e293b" stroke-width="4" />
          <line x1="63" y1="65" x2="70" y2="90" stroke="#1e293b" stroke-width="4" />
          <!-- Soldato 3 con bandiera -->
          <circle cx="95" cy="25" r="7" />
          <line x1="95" y1="85" x2="95" y2="-10" stroke="#78350f" stroke-width="3" />
          <path d="M 96 -10 L 135 0 L 96 15 Z" fill="#dc2626" />
          <path d="M 88 32 L 102 32 L 100 65 L 88 65 Z" />
        </g>
        <!-- Filo spinato iniziale -->
        <line x1="330" y1="165" x2="500" y2="165" stroke="#475569" stroke-width="2" />
        <line x1="350" y1="158" x2="355" y2="172" stroke="#475569" stroke-width="2" />
        <line x1="380" y1="158" x2="385" y2="172" stroke="#475569" stroke-width="2" />
        <line x1="420" y1="158" x2="425" y2="172" stroke="#475569" stroke-width="2" />
        <line x1="460" y1="158" x2="465" y2="172" stroke="#475569" stroke-width="2" />
        <!-- Testo Titolo Hero -->
        <rect x="15" y="15" width="190" height="26" rx="5" fill="rgba(15, 23, 42, 0.75)" />
        <text x="25" y="33" fill="#ffffff" font-size="13" font-weight="bold">1914: LO SCOPPIO E LA MARNA</text>
      </svg>
    `,

    "1915": `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="phase-hero-svg">
        <defs>
          <linearGradient id="sky1915" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#bae6fd" />
            <stop offset="100%" stop-color="#e0f2fe" />
          </linearGradient>
        </defs>
        <rect width="500" height="200" fill="url(#sky1915)" rx="10" />
        <!-- Montagne Alpine e Dolomitiche (Guerra Bianca) -->
        <polygon points="50,200 130,50 210,200" fill="#64748b" />
        <polygon points="120,68 130,50 140,68" fill="#ffffff" />
        <polygon points="150,200 260,30 370,200" fill="#475569" />
        <polygon points="245,55 260,30 275,55" fill="#ffffff" />
        <polygon points="310,200 410,70 500,200" fill="#64748b" />
        <polygon points="395,90 410,70 425,90" fill="#ffffff" />
        <!-- Fiume Isonzo dalle acque smeraldo -->
        <path d="M 0 195 Q 150 160 260 185 T 500 170 L 500 200 L 0 200 Z" fill="#059669" opacity="0.6" />
        <!-- Alpino italiano con cappello e penna nera -->
        <g transform="translate(50, 95) scale(0.85)">
          <path d="M 30 40 L 70 40 L 65 95 L 35 95 Z" fill="#15803d" />
          <circle cx="50" cy="25" r="14" fill="#fed7aa" />
          <!-- Cappello Alpino -->
          <ellipse cx="50" cy="18" rx="18" ry="7" fill="#166534" />
          <path d="M 40 18 Q 50 5 60 18 Z" fill="#166534" />
          <!-- Penna nera -->
          <line x1="38" y1="18" x2="26" y2="-8" stroke="#0f172a" stroke-width="3" stroke-linecap="round" />
          <!-- Fucile 91 -->
          <line x1="72" y1="10" x2="72" y2="105" stroke="#78350f" stroke-width="4" />
          <line x1="72" y1="10" x2="72" y2="-5" stroke="#94a3b8" stroke-width="2" />
        </g>
        <!-- Nube di gas a Ypres a destra -->
        <ellipse cx="440" cy="120" rx="45" ry="25" fill="#a3e635" opacity="0.45" />
        <ellipse cx="410" cy="135" rx="35" ry="20" fill="#bef264" opacity="0.4" />
        <rect x="15" y="15" width="225" height="26" rx="5" fill="rgba(21, 128, 61, 0.85)" />
        <text x="25" y="33" fill="#ffffff" font-size="13" font-weight="bold">1915: L'ITALIA SULL'ISONZO</text>
      </svg>
    `,

    "1916": `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="phase-hero-svg">
        <defs>
          <linearGradient id="sky1916" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#475569" />
            <stop offset="100%" stop-color="#94a3b8" />
          </linearGradient>
        </defs>
        <rect width="500" height="200" fill="url(#sky1916)" rx="10" />
        <!-- Terreno sconvolto dalle granate (Verdun / Somme) -->
        <path d="M 0 150 Q 80 130 150 160 Q 220 135 300 155 Q 380 130 450 160 L 500 150 L 500 200 L 0 200 Z" fill="#573a27" />
        <circle cx="120" cy="175" r="18" fill="#3b2314" />
        <circle cx="340" cy="180" r="22" fill="#3b2314" />
        <!-- Carro armato britannico Mark I (debutto alla Somme) -->
        <g transform="translate(190, 115) scale(0.9)">
          <!-- Cingoli romboidali -->
          <polygon points="10,45 35,10 115,10 135,45 115,58 35,58" fill="#3f3f46" stroke="#18181b" stroke-width="3" />
          <!-- Cannone laterale -->
          <rect x="55" y="22" width="28" height="18" rx="4" fill="#52525b" />
          <line x1="80" y1="30" x2="125" y2="28" stroke="#18181b" stroke-width="4.5" />
          <!-- Ruote del cingolo -->
          <circle cx="35" cy="46" r="6" fill="#18181b" />
          <circle cx="55" cy="46" r="6" fill="#18181b" />
          <circle cx="75" cy="46" r="6" fill="#18181b" />
          <circle cx="95" cy="46" r="6" fill="#18181b" />
          <circle cx="115" cy="46" r="6" fill="#18181b" />
        </g>
        <!-- Forte di Verdun in fiamme all'orizzonte -->
        <rect x="30" y="115" width="80" height="35" fill="#334155" />
        <polygon points="20,115 70,85 120,115" fill="#1e293b" />
        <path d="M 60 85 Q 70 50 85 45 Q 90 70 75 85 Z" fill="#ea580c" opacity="0.8" />
        <rect x="15" y="15" width="220" height="26" rx="5" fill="rgba(185, 28, 28, 0.85)" />
        <text x="25" y="33" fill="#ffffff" font-size="13" font-weight="bold">1916: VERDUN E I TANK</text>
      </svg>
    `,

    "1917": `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="phase-hero-svg">
        <defs>
          <linearGradient id="sky1917" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e1b4b" />
            <stop offset="100%" stop-color="#4338ca" />
          </linearGradient>
        </defs>
        <rect width="500" height="200" fill="url(#sky1917)" rx="10" />
        <!-- Monte Grappa solenne sullo sfondo -->
        <polygon points="120,200 250,55 380,200" fill="#312e81" />
        <polygon points="235,75 250,55 265,75" fill="#e0e7ff" />
        <!-- Il Fiume Piave in primo piano -->
        <path d="M 0 170 Q 150 145 280 175 T 500 160 L 500 200 L 0 200 Z" fill="#0284c7" />
        <path d="M 0 185 Q 180 160 300 185 T 500 175 L 500 200 L 0 200 Z" fill="#0369a1" />
        <!-- Sacchi di sabbia della trincea sul Piave -->
        <g fill="#d97706" stroke="#b45309" stroke-width="1.5">
          <ellipse cx="60" cy="180" rx="16" ry="7" />
          <ellipse cx="90" cy="180" rx="16" ry="7" />
          <ellipse cx="120" cy="180" rx="16" ry="7" />
          <ellipse cx="75" cy="172" rx="15" ry="6" />
          <ellipse cx="105" cy="172" rx="15" ry="6" />
        </g>
        <!-- Soldatino: Ragazzo del '99 con elmetto Adrian -->
        <g transform="translate(65, 115) scale(0.75)">
          <circle cx="45" cy="28" r="11" fill="#fed7aa" />
          <!-- Elmetto Adrian con cresta -->
          <ellipse cx="45" cy="22" rx="16" ry="7" fill="#15803d" />
          <line x1="45" y1="14" x2="45" y2="22" stroke="#166534" stroke-width="4" />
          <path d="M 30 38 L 60 38 L 56 80 L 34 80 Z" fill="#166534" />
          <line x1="62" y1="25" x2="85" y2="60" stroke="#78350f" stroke-width="3.5" />
        </g>
        <!-- Cartello storico: NON PASSA LO STRANIERO -->
        <rect x="310" y="130" width="165" height="36" rx="4" fill="#ffffff" stroke="#b91c1c" stroke-width="2.5" />
        <text x="318" y="146" fill="#b91c1c" font-size="10" font-weight="900">IL PIAVE MORMORÒ:</text>
        <text x="318" y="159" fill="#0f172a" font-size="11" font-weight="900">"NON PASSA LO STRANIERO!"</text>
        <rect x="15" y="15" width="220" height="26" rx="5" fill="rgba(15, 23, 42, 0.85)" />
        <text x="25" y="33" fill="#ffffff" font-size="13" font-weight="bold">1917: CAPORETTO E IL PIAVE</text>
      </svg>
    `,

    "1918": `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="phase-hero-svg">
        <defs>
          <linearGradient id="sky1918" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="100%" stop-color="#f0fdf4" />
          </linearGradient>
        </defs>
        <rect width="500" height="200" fill="url(#sky1918)" rx="10" />
        <!-- Colline venete di Vittorio Veneto -->
        <path d="M 0 170 Q 120 120 250 160 Q 360 125 500 155 L 500 200 L 0 200 Z" fill="#86efac" />
        <path d="M 0 185 Q 160 145 320 185 T 500 180 L 500 200 L 0 200 Z" fill="#4ade80" />
        <!-- Bandiera Italiana che sventola vittoriosa -->
        <g transform="translate(60, 60)">
          <line x1="0" y1="0" x2="0" y2="130" stroke="#475569" stroke-width="5" />
          <rect x="3" y="10" width="30" height="60" fill="#15803d" />
          <rect x="33" y="10" width="30" height="60" fill="#ffffff" />
          <rect x="63" y="10" width="30" height="60" fill="#dc2626" />
        </g>
        <!-- Biplano Ansaldo S.V.A. di D'Annunzio (Volo su Vienna) -->
        <g transform="translate(230, 40) scale(0.7)">
          <!-- Ali biplano -->
          <rect x="20" y="15" width="110" height="12" rx="3" fill="#d97706" />
          <rect x="20" y="45" width="110" height="12" rx="3" fill="#d97706" />
          <!-- Fusoliera -->
          <ellipse cx="75" cy="36" rx="55" ry="10" fill="#78350f" />
          <!-- Elica -->
          <line x1="130" y1="20" x2="130" y2="52" stroke="#0f172a" stroke-width="3" />
          <circle cx="130" cy="36" r="4" fill="#e2e8f0" />
          <!-- Coccarda tricolore sulle ali -->
          <circle cx="40" cy="21" r="5" fill="#15803d" />
          <circle cx="40" cy="21" r="3" fill="#ffffff" />
          <circle cx="40" cy="21" r="1.5" fill="#dc2626" />
        </g>
        <!-- Cavalleria / Bersaglieri a Trento e Trieste -->
        <rect x="320" y="125" width="155" height="42" rx="6" fill="#ffffff" stroke="#15803d" stroke-width="2" />
        <text x="330" y="143" fill="#15803d" font-size="11" font-weight="900">4 NOVEMBRE 1918</text>
        <text x="330" y="158" fill="#0f172a" font-size="10" font-weight="bold">ARMISTIZIO E VITTORIA</text>
        <rect x="15" y="15" width="240" height="26" rx="5" fill="rgba(21, 128, 61, 0.85)" />
        <text x="25" y="33" fill="#ffffff" font-size="13" font-weight="bold">1918: VITTORIO VENETO E LA PACE</text>
      </svg>
    `,

    "1919": `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="phase-hero-svg">
        <defs>
          <linearGradient id="sky1919" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="100%" stop-color="#fed7aa" />
          </linearGradient>
        </defs>
        <rect width="500" height="200" fill="url(#sky1919)" rx="10" />
        <!-- Reggia di Versailles (Galleria degli Specchi) e la colomba della pace -->
        <!-- Mappa d'Europa ridisegnata su pergamena -->
        <g transform="translate(60, 40) rotate(-2)">
          <rect x="0" y="0" width="220" height="135" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
          <text x="20" y="30" fill="#78350f" font-size="12" font-weight="bold">I NUOVI CONFINI 1919</text>
          <path d="M 30 50 L 90 45 L 120 70 L 100 110 L 40 100 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5" />
          <text x="50" y="75" fill="#1e3a8a" font-size="9" font-weight="bold">POLONIA</text>
          <path d="M 110 85 L 160 80 L 150 115 L 110 110 Z" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
          <text x="115" y="100" fill="#14532d" font-size="8" font-weight="bold">ITALIA +</text>
        </g>
        <!-- Colomba della pace con ramoscello d'ulivo -->
        <g transform="translate(320, 50) scale(1.1)">
          <path d="M 40 40 Q 60 10 90 20 Q 110 30 115 50 Q 80 50 65 65 Q 45 65 30 80 Q 35 60 40 40 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
          <circle cx="100" cy="30" r="2.5" fill="#0f172a" />
          <!-- Ramoscello -->
          <path d="M 112 36 Q 130 35 140 25" stroke="#15803d" stroke-width="2.5" fill="none" />
          <circle cx="132" cy="27" r="3.5" fill="#22c55e" />
          <circle cx="138" cy="23" r="3.5" fill="#22c55e" />
        </g>
        <rect x="15" y="15" width="255" height="26" rx="5" fill="rgba(30, 41, 59, 0.85)" />
        <text x="25" y="33" fill="#ffffff" font-size="13" font-weight="bold">1919: VERSAILLES E LA NUOVA EUROPA</text>
      </svg>
    `
  },

  // Illustrazioni per i Quaderni della Storia (Terza Media)
  notebooks: {
    trincea: `
      <svg viewBox="0 0 600 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#78350f" />
            <stop offset="100%" stop-color="#451a03" />
          </linearGradient>
        </defs>
        <!-- Cielo grigio di pioggia -->
        <rect width="600" height="90" fill="#94a3b8" />
        <!-- Sezione della Trincea (Terra di nessuno a sinistra, scavo al centro) -->
        <!-- Parapetto con sacchi di sabbia -->
        <rect x="0" y="90" width="600" height="150" fill="url(#groundGrad)" />
        <!-- Scavo della trincea -->
        <polygon points="260,90 280,210 440,210 455,90" fill="#3e1f07" />
        <!-- Pavimento di tavole di legno contro il fango (Duckboards) -->
        <rect x="310" y="200" width="110" height="8" rx="2" fill="#a16207" stroke="#713f12" />
        <!-- Gradino di tiro (Banquet de tir) -->
        <rect x="280" y="160" width="45" height="50" fill="#522504" />
        <!-- Sacchi di sabbia sul parapetto -->
        <g fill="#d97706" stroke="#b45309">
          <ellipse cx="230" cy="85" rx="20" ry="8" />
          <ellipse cx="255" cy="85" rx="20" ry="8" />
          <ellipse cx="242" cy="74" rx="18" ry="7" />
        </g>
        <!-- Filo spinato nella Terra di Nessuno -->
        <line x1="30" y1="90" x2="50" y2="50" stroke="#334155" stroke-width="4" />
        <line x1="120" y1="90" x2="140" y2="50" stroke="#334155" stroke-width="4" />
        <line x1="20" y1="65" x2="160" y2="65" stroke="#475569" stroke-width="2.5" />
        <line x1="20" y1="75" x2="160" y2="75" stroke="#475569" stroke-width="2.5" />
        <!-- Soldato di vedetta con periscopio -->
        <g transform="translate(290, 105)">
          <circle cx="20" cy="20" r="10" fill="#fed7aa" />
          <ellipse cx="20" cy="15" rx="14" ry="6" fill="#15803d" />
          <rect x="12" y="28" width="18" height="35" fill="#166534" />
          <!-- Periscopio a specchi -->
          <rect x="25" y="-25" width="6" height="45" fill="#334155" />
          <rect x="25" y="-25" width="14" height="6" fill="#334155" />
        </g>
        <!-- Rifugio sotterraneo (Dugout) scavato a destra -->
        <path d="M 450 140 Q 520 130 550 180 L 450 180 Z" fill="#1c0d02" />
        <text x="460" y="170" fill="#fde68a" font-size="10">Rifugio</text>
        <text x="30" y="30" fill="#ffffff" font-size="12" font-weight="bold">SEZIONE ANATOMICA DI UNA TRINCEA</text>
      </svg>
    `,

    armi: `
      <svg viewBox="0 0 600 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="240" fill="#1e293b" rx="8" />
        <!-- Griglia delle 4 armi tecnologiche -->
        <!-- 1. Mitragliatrice -->
        <g transform="translate(30, 30)">
          <rect x="0" y="0" width="250" height="85" rx="6" fill="#334155" />
          <text x="15" y="22" fill="#38bdf8" font-size="12" font-weight="bold">1. MITRAGLIATRICE (500 colpi/min)</text>
          <!-- Treppiede e canna raffreddata ad acqua -->
          <line x1="50" y1="70" x2="80" y2="40" stroke="#0f172a" stroke-width="3" />
          <line x1="110" y1="70" x2="80" y2="40" stroke="#0f172a" stroke-width="3" />
          <rect x="60" y="35" width="65" height="12" rx="2" fill="#0f172a" />
          <line x1="125" y1="41" x2="165" y2="41" stroke="#94a3b8" stroke-width="4" />
        </g>
        <!-- 2. Maschera antigas e chimica -->
        <g transform="translate(320, 30)">
          <rect x="0" y="0" width="250" height="85" rx="6" fill="#334155" />
          <text x="15" y="22" fill="#a3e635" font-size="12" font-weight="bold">2. GAS ASFISSIANTI & MASCHERE</text>
          <!-- Maschera con occhialoni e filtro -->
          <circle cx="80" cy="52" r="18" fill="#475569" stroke="#94a3b8" stroke-width="2" />
          <circle cx="73" cy="48" r="5" fill="#38bdf8" />
          <circle cx="87" cy="48" r="5" fill="#38bdf8" />
          <rect x="75" y="58" width="10" height="12" rx="2" fill="#1e293b" />
          <ellipse cx="125" cy="55" rx="20" ry="12" fill="#bef264" opacity="0.3" />
        </g>
        <!-- 3. Carro armato Tank -->
        <g transform="translate(30, 130)">
          <rect x="0" y="0" width="250" height="85" rx="6" fill="#334155" />
          <text x="15" y="22" fill="#fbbf24" font-size="12" font-weight="bold">3. CARRO ARMATO (TANK MARK I)</text>
          <polygon points="40,65 60,40 130,40 145,65" fill="#52525b" />
          <line x1="100" y1="50" x2="155" y2="50" stroke="#0f172a" stroke-width="3.5" />
          <circle cx="65" cy="65" r="5" fill="#18181b" />
          <circle cx="85" cy="65" r="5" fill="#18181b" />
          <circle cx="105" cy="65" r="5" fill="#18181b" />
          <circle cx="125" cy="65" r="5" fill="#18181b" />
        </g>
        <!-- 4. Aviazione e Caccia -->
        <g transform="translate(320, 130)">
          <rect x="0" y="0" width="250" height="85" rx="6" fill="#334155" />
          <text x="15" y="22" fill="#f87171" font-size="12" font-weight="bold">4. AEREI DA CACCIA (BIPLANO)</text>
          <rect x="60" y="40" width="70" height="8" rx="2" fill="#dc2626" />
          <rect x="60" y="58" width="70" height="8" rx="2" fill="#dc2626" />
          <ellipse cx="95" cy="53" rx="35" ry="6" fill="#991b1b" />
          <line x1="130" y1="42" x2="130" y2="64" stroke="#ffffff" stroke-width="2" />
        </g>
      </svg>
    `,

    donne: `
      <svg viewBox="0 0 600 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="240" fill="#f8fafc" rx="8" />
        <!-- Fabbrica di munizioni -->
        <g transform="translate(40, 30)">
          <!-- Sagoma officina industriale -->
          <polygon points="0,150 0,60 50,30 50,60 100,30 100,60 150,30 150,150" fill="#cbd5e1" />
          <rect x="25" y="80" width="20" height="30" fill="#94a3b8" />
          <rect x="75" y="80" width="20" height="30" fill="#94a3b8" />
        </g>
        <!-- Operaia con fazzoletto in testa che lavora alle granate -->
        <g transform="translate(240, 50)">
          <circle cx="50" cy="35" r="16" fill="#fed7aa" />
          <!-- Fazzoletto sui capelli -->
          <path d="M 34 32 Q 50 15 66 32 Z" fill="#b91c1c" />
          <path d="M 32 50 L 68 50 L 65 120 L 35 120 Z" fill="#0369a1" />
          <text x="-40" y="145" fill="#0f172a" font-size="13" font-weight="bold">LE OPERAIE ("MUNIZIONETTE")</text>
        </g>
        <!-- Tram cittadino guidato da una donna -->
        <g transform="translate(410, 80) scale(0.9)">
          <rect x="0" y="10" width="130" height="60" rx="8" fill="#eab308" stroke="#a16207" stroke-width="2" />
          <rect x="15" y="20" width="25" height="25" fill="#bae6fd" />
          <rect x="50" y="20" width="25" height="25" fill="#bae6fd" />
          <rect x="85" y="20" width="25" height="25" fill="#bae6fd" />
          <circle cx="30" cy="72" r="10" fill="#334155" />
          <circle cx="100" cy="72" r="10" fill="#334155" />
          <text x="15" y="105" fill="#0f172a" font-size="12" font-weight="bold">CONDUTTRICI DI TRAM</text>
        </g>
        <rect x="20" y="15" width="280" height="26" rx="5" fill="#1e293b" />
        <text x="30" y="33" fill="#ffffff" font-size="12" font-weight="bold">IL RUOLO CRUCIALE DELLE DONNE</text>
      </svg>
    `,

    ragazzi99: `
      <svg viewBox="0 0 600 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flagIt" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#15803d" />
            <stop offset="33%" stop-color="#15803d" />
            <stop offset="33%" stop-color="#ffffff" />
            <stop offset="66%" stop-color="#ffffff" />
            <stop offset="66%" stop-color="#dc2626" />
            <stop offset="100%" stop-color="#dc2626" />
          </linearGradient>
        </defs>
        <rect width="600" height="240" fill="#0f172a" rx="8" />
        <!-- Fondo con Monte Grappa e fiume Piave -->
        <polygon points="200,240 380,50 560,240" fill="#1e293b" />
        <path d="M 0 200 Q 250 170 600 210 L 600 240 L 0 240 Z" fill="#0284c7" />
        <!-- Ritratto del giovane soldato diciottenne con elmetto -->
        <g transform="translate(60, 45)">
          <circle cx="65" cy="55" r="28" fill="#fed7aa" />
          <!-- Elmetto Adrian verde oliva -->
          <ellipse cx="65" cy="40" rx="35" ry="15" fill="#166534" stroke="#14532d" stroke-width="2" />
          <path d="M 65 24 L 65 40" stroke="#14532d" stroke-width="4" />
          <!-- Giubba Grigio-Verde -->
          <path d="M 28 85 L 102 85 L 108 170 L 22 170 Z" fill="#3f6212" />
          <!-- Fregio tricolore sul petto -->
          <rect x="55" y="95" width="20" height="10" fill="url(#flagIt)" />
        </g>
        <g transform="translate(240, 60)">
          <rect x="0" y="0" width="310" height="110" rx="8" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.2)" />
          <text x="20" y="32" fill="#4ade80" font-size="16" font-weight="900">CLASSE DI LEVA 1899</text>
          <text x="20" y="55" fill="#e2e8f0" font-size="12">Chiamati al fronte a soli 18 anni dopo la</text>
          <text x="20" y="72" fill="#e2e8f0" font-size="12">rotta di Caporetto per sbarrare il passo al nemico.</text>
          <text x="20" y="95" fill="#facc15" font-size="13" font-weight="bold">"TUTTI EROI! O IL PIAVE, O TUTTI ACCOPPATI!"</text>
        </g>
      </svg>
    `,

    propaganda: `
      <svg viewBox="0 0 600 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="240" fill="#451a03" rx="8" />
        <!-- Muro con manifesti storici affissi -->
        <!-- Manifesto 1: Prestito Nazionale Italiano -->
        <g transform="translate(40, 25)">
          <rect x="0" y="0" width="150" height="190" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="3" />
          <rect x="10" y="10" width="130" height="30" fill="#b91c1c" />
          <text x="22" y="30" fill="#ffffff" font-size="11" font-weight="bold">SOTTOSCRIVETE</text>
          <circle cx="75" cy="85" r="32" fill="#d97706" />
          <text x="55" y="92" fill="#ffffff" font-size="20" font-weight="900">ORO</text>
          <text x="22" y="145" fill="#78350f" font-size="11" font-weight="bold">PER LA PATRIA</text>
          <text x="18" y="170" fill="#0f172a" font-size="9">Prestito Nazionale 5%</text>
        </g>
        <!-- Manifesto 2: Zio Sam / Lord Kitchener (Il dito puntato) -->
        <g transform="translate(225, 25)">
          <rect x="0" y="0" width="150" height="190" rx="4" fill="#ffffff" stroke="#1e3a8a" stroke-width="3" />
          <rect x="10" y="10" width="130" height="25" fill="#1e3a8a" />
          <text x="25" y="27" fill="#ffffff" font-size="11" font-weight="bold">I WANT YOU</text>
          <!-- Faccia con cappello a stelle e strisce e dito puntato -->
          <ellipse cx="75" cy="75" rx="18" ry="12" fill="#fed7aa" />
          <polygon points="60,65 90,65 75,40" fill="#dc2626" />
          <!-- Mano con indice puntato verso chi guarda -->
          <circle cx="75" cy="115" r="16" fill="#fed7aa" stroke="#0f172a" stroke-width="2" />
          <circle cx="75" cy="115" r="7" fill="#0f172a" />
          <text x="22" y="155" fill="#b91c1c" font-size="12" font-weight="900">FOR U.S. ARMY</text>
          <text x="24" y="175" fill="#64748b" font-size="8">Enlist Now at Station</text>
        </g>
        <!-- Busta con timbro di CENSURA MILITARE -->
        <g transform="translate(410, 45) rotate(4)">
          <rect x="0" y="0" width="150" height="110" rx="4" fill="#fafaf9" stroke="#78716c" stroke-width="2" />
          <line x1="15" y1="35" x2="135" y2="35" stroke="#000000" stroke-width="5" />
          <line x1="15" y1="55" x2="110" y2="55" stroke="#000000" stroke-width="5" />
          <circle cx="105" cy="80" r="22" fill="none" stroke="#dc2626" stroke-width="3" />
          <text x="88" y="78" fill="#dc2626" font-size="7" font-weight="bold">VERIFICATO</text>
          <text x="88" y="88" fill="#dc2626" font-size="7" font-weight="bold">CENSURA</text>
        </g>
      </svg>
    `
  }
};

window.WW1_ILLUSTRATIONS = WW1_ILLUSTRATIONS;
