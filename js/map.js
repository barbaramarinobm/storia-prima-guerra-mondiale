/**
 * MOTORE CARTOGRAFICO STORICO AD ALTA RISOLUZIONE "GOD'S EYE VIEW"
 * Ispirato dall'architettura di bilawalsidhu/gods-eye-view:
 * - 100% Carte Storiche Autentiche d'Epoca (Raster HD, ZERO carte vettoriali sintetiche o sovrapposizioni)
 * - Nessun tracciato geometrico artificiale che copre i territori
 * - Pan e Zoom ultra-fluido (rotellina del mouse centrata, drag & touch)
 * - Lente d'Ingrandimento d'Archivio Storico (ingrandimento 2.5x al passaggio del cursore)
 * - Punti Caldi Tattici Discreti (Hotspots POI) posizionati con precisione millimetrica
 * - Interruttore Punti ON/OFF per ammirare la carta storica al 100% pulita
 * - Switch immediato tra le 4 carte storiche fondamentali:
 *   1. 🗺️ Europa 1914 (De Agostini - Fine '800 & Imperi)
 *   2. 🇮🇹 Fronte Italiano (Topografica Militare IGM: Alpi, Piave, Grappa, Isonzo)
 *   3. 🔄 Europa dei Trattati di Pace 1919 (Versailles e Nuovi Confini)
 *   4. 🕳️ Spaccato Didattico della Trincea (Anatomia della guerra di posizione)
 */

class WW1MapManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Contenitore mappa #${containerId} non trovato!`);
      return;
    }

    // Configurazione delle 4 Carte Storiche Reali (100% Offline in assets/)
    // Coordinate verificate al pixel sui toponimi e rilievi originali
    this.maps = {
      europa_1914: {
        id: "europa_1914",
        name: "🗺️ Europa 1914 (De Agostini - Gli Imperi)",
        subtitle: "Carta storica d'epoca con confini autentici, rilievi e cartiglio",
        src: "assets/carta_europa_1914_italiano.jpg",
        width: 1200,
        height: 896,
        hotspots: [
          {
            id: "sarajevo",
            name: "Sarajevo: L'Attentato del 28 Giugno 1914",
            date: "28 Giugno 1914",
            phaseId: "1914",
            x: 54.5,
            y: 70.8,
            type: "spark",
            summary: "L'arciduca Francesco Ferdinando viene assassinato dallo studente Gavrilo Princip. È la scintilla che fa scattare il domino delle alleanze."
          },
          {
            id: "liegi",
            name: "Liegi: L'Invasione del Belgio",
            date: "Agosto 1914",
            phaseId: "1914",
            x: 37.8,
            y: 53.0,
            type: "battle",
            summary: "I forti belgi resistono all'avanzata tedesca del Piano Schlieffen sotto i colpi dei colossali cannoni 'Grande Berta'."
          },
          {
            id: "marna-1",
            name: "Fiume Marna: La Guerra Lampo si Ferma",
            date: "Settembre 1914",
            phaseId: "1914",
            x: 32.5,
            y: 56.5,
            type: "battle",
            summary: "I francesi bloccano i tedeschi a soli 40 km da Parigi usando anche i taxi urbani. Fallisce la guerra lampo e nascono le trincee."
          },
          {
            id: "tannenberg",
            name: "Tannenberg: Il Fronte Orientale",
            date: "Agosto 1914",
            phaseId: "1914",
            x: 54.5,
            y: 47.0,
            type: "battle",
            summary: "I generali Hindenburg e Ludendorff circondano e annientano la 2ª armata russa in Prussia Orientale."
          },
          {
            id: "tregua-natale-1914",
            name: "Fiandre: La Tregua di Natale 1914",
            date: "24-25 Dicembre 1914",
            phaseId: "1914",
            x: 34.5,
            y: 51.5,
            type: "human",
            summary: "Soldati tedeschi e britannici smettono di sparare, accendono candele, cantano 'Stille Nacht' e giocano a calcio nella terra di nessuno."
          },
          {
            id: "ypres-2",
            name: "Ypres: Il Debutto del Gas Asfissiante",
            date: "Aprile 1915",
            phaseId: "1915",
            x: 34.2,
            y: 51.0,
            type: "battle",
            summary: "I tedeschi rilasciano nubi di cloro asfissiante. Inizia l'era orribile delle armi chimiche e delle maschere antigas."
          },
          {
            id: "gallipoli",
            name: "Gallipoli & Dardanelli: Lo Sbarco ANZAC",
            date: "Aprile 1915",
            phaseId: "1915",
            x: 67.5,
            y: 78.5,
            type: "battle",
            summary: "Tentativo alleato di conquistare Istanbul e rifornire la Russia, respinto con perdite disastrose dall'esercito ottomano di Atatürk."
          },
          {
            id: "verdun",
            name: "Verdun: 300 Giorni di Carneficina",
            date: "Febbraio - Dicembre 1916",
            phaseId: "1916",
            x: 35.8,
            y: 54.5,
            type: "battle",
            summary: "La battaglia più lunga della storia: 700.000 vittime attorno al forte di Douaumont ('Ils ne passeront pas!')."
          },
          {
            id: "somme",
            name: "Somme: Il Debutto dei Carri Armati",
            date: "Luglio - Novembre 1916",
            phaseId: "1916",
            x: 32.2,
            y: 52.0,
            type: "battle",
            summary: "Massiccia offensiva alleata: debutto dei primi tanks britannici Mark I nel fango delle Fiandre."
          },
          {
            id: "jutland",
            name: "Jutland: Lo Scontro delle Corazzate",
            date: "Maggio 1916",
            phaseId: "1916",
            x: 41.5,
            y: 37.5,
            type: "naval",
            summary: "L'unica grande battaglia navale tra la flotta imperiale tedesca e la Grand Fleet britannica nel Mare del Nord."
          },
          {
            id: "san-pietroburgo",
            name: "Pietrogrado: La Rivoluzione Russa",
            date: "1917",
            phaseId: "1917",
            x: 65.7,
            y: 29.8,
            type: "politics",
            summary: "Caduta dello Zar Nicola II; a ottobre i bolscevichi di Lenin prendono il potere ed escono dal conflitto."
          },
          {
            id: "amiens",
            name: "Amiens: 'Il Giorno più Nero'",
            date: "Agosto 1918",
            phaseId: "1918",
            x: 31.8,
            y: 51.5,
            type: "battle",
            summary: "Attacco alleato coordinato con oltre 500 carri armati che spezza le linee tedesche."
          },
          {
            id: "compiegne",
            name: "Compiègne: L'Armistizio nel Vagone",
            date: "11 Novembre 1918",
            phaseId: "1918",
            x: 31.2,
            y: 54.0,
            type: "peace",
            summary: "Alle 5 del mattino viene firmata la resa tedesca nel celebre vagone ferroviario. Cessano le ostilità."
          }
        ]
      },

      fronte_italiano: {
        id: "fronte_italiano",
        name: "🇮🇹 Fronte Italiano (Alpi, Grappa, Piave, Isonzo)",
        subtitle: "Carta topografica militare IGM dell'epoca ad altissima definizione",
        src: "assets/carta_fronte_italiano.jpg",
        width: 1376,
        height: 768,
        hotspots: [
          {
            id: "fiume-isonzo",
            name: "Fiume Isonzo: Il Fronte della Trincea (1915-1917)",
            date: "1915 - 1917",
            phaseId: "1915",
            x: 77.0,
            y: 38.0,
            type: "front",
            summary: "Undici sanguinose battaglie frontali ordinate da Cadorna contro le posizioni fortificate austriache."
          },
          {
            id: "marmolada-citta-ghiaccio",
            name: "Marmolada (3.343 m): La Città di Ghiaccio",
            date: "1915 - 1917",
            phaseId: "1915",
            x: 41.5,
            y: 14.5,
            type: "whitewar",
            summary: "La Guerra Bianca a 3.000 metri: gli austriaci scavarono dentro il ghiacciaio una base con dormitori, cucine e gallerie."
          },
          {
            id: "col-di-lana",
            name: "Col di Lana: Il Monte di Sangue (1916)",
            date: "Aprile 1916",
            phaseId: "1916",
            x: 38.5,
            y: 22.5,
            type: "mountain",
            summary: "Guerra di mine in quota: gli italiani scavarono un tunnel nella roccia e fecero saltare la cima con 5 tonnellate di gelatina esplosiva."
          },
          {
            id: "strafexpedition-asiago",
            name: "Altopiano di Asiago: La Strafexpedition (1916)",
            date: "Maggio 1916",
            phaseId: "1916",
            x: 29.3,
            y: 55.7,
            type: "battle",
            summary: "La 'spedizione punitiva' asburgica scende in Trentino puntando alla pianura veneta, ma viene fermata con sacrifici enormi sul Pasubio."
          },
          {
            id: "gorizia-presa",
            name: "Gorizia: Liberata nell'Agosto 1916",
            date: "6-17 Agosto 1916",
            phaseId: "1916",
            x: 82.3,
            y: 48.2,
            type: "battle",
            summary: "Gli italiani espugnano il baluardo del Sabotino e attraversano l'Isonzo liberando Gorizia tra l'entusiasmo della Nazione."
          },
          {
            id: "monte-san-michele",
            name: "Monte San Michele & Carso: Le Poesie di Ungaretti",
            date: "1915 - 1916",
            phaseId: "1916",
            x: 82.3,
            y: 55.0,
            type: "literature",
            summary: "Trincee scavate nella roccia viva carsica dove Giuseppe Ungaretti scrisse 'Veglia' e 'San Martino del Carso'."
          },
          {
            id: "strada-52-gallerie",
            name: "Pasubio: La Strada delle 52 Gallerie",
            date: "1917",
            phaseId: "1917",
            x: 26.5,
            y: 66.0,
            type: "fort",
            summary: "Capolavoro d'ingegneria militare scavato nella parete rocciosa a picco sul burrone per portare rifornimenti al sicuro dai cannoni nemici."
          },
          {
            id: "monte-ortigara",
            name: "Monte Ortigara: Il Calvario degli Alpini",
            date: "Giugno 1917",
            phaseId: "1917",
            x: 30.5,
            y: 46.0,
            type: "battle",
            summary: "Offensiva d'alta quota costata oltre 25.000 perdite tra gli alpini per conquistare una vetta rocciosa poi ripersa subito."
          },
          {
            id: "caporetto-disfatta",
            name: "Caporetto: La Rotta del 24 Ottobre 1917",
            date: "24 Ottobre 1917",
            phaseId: "1917",
            x: 74.0,
            y: 31.9,
            type: "breakthrough",
            summary: "Le truppe austro-tedesche sfondano con infiltrazioni e gas nel fondovalle dell'Isonzo. L'esercito italiano arretra di 150 km fino al Piave."
          },
          {
            id: "monte-grappa-resistenza",
            name: "Monte Grappa (1.775 m): «Di qui non si passa!»",
            date: "Novembre 1917 - 1918",
            phaseId: "1917",
            x: 36.3,
            y: 50.8,
            type: "mountain",
            summary: "Il massiccio montuoso sacro su cui si arrestò l'invasione austro-tedesca difeso con coraggio disperato dai fanti italiani."
          },
          {
            id: "fiume-piave-sacro",
            name: "Fiume Piave: I Ragazzi del '99 & Battaglia del Solstizio",
            date: "1917 - 1918",
            phaseId: "1918",
            x: 47.1,
            y: 59.9,
            type: "river",
            summary: "Il Fiume Sacro alla Patria: i giovanissimi diciottenni fermano l'assalto nemico e a giugno 1918 sbaragliano l'ultima offensiva asburgica."
          },
          {
            id: "vittorio-veneto-vittoria",
            name: "Vittorio Veneto: La Vittoria Finale (4 Novembre 1918)",
            date: "24 Ottobre - 4 Novembre 1918",
            phaseId: "1918",
            x: 48.5,
            y: 47.0,
            type: "victory",
            summary: "L'offensiva generale di Armando Diaz spezza l'esercito austro-ungarico e porta all'Armistizio di Villa Giusti: la guerra è vinta."
          },
          {
            id: "trieste-liberata",
            name: "Trieste: I Bersaglieri sbarcano dall'Audace",
            date: "3 Novembre 1918",
            phaseId: "1918",
            x: 83.4,
            y: 67.7,
            type: "liberation",
            summary: "Le truppe italiane entrano a Trieste acclamate dalla popolazione: si compie il Risorgimento e l'unificazione d'Italia."
          },
          {
            id: "trento-liberata",
            name: "Trento: L'Ingresso dei Cavalleggeri",
            date: "3 Novembre 1918",
            phaseId: "1918",
            x: 18.5,
            y: 53.0,
            type: "liberation",
            summary: "I soldati italiani raggiungono Trento accolti dalle campane a festa e dai tricolori alle finestre."
          }
        ]
      },

      europa_1919: {
        id: "europa_1919",
        name: "🔄 Europa 1919 (Pace di Versailles & Nuovi Confini)",
        subtitle: "Carta storica con la dissoluzione dei 4 imperi e la nascita dei nuovi stati",
        src: "assets/carta_europa_1919.jpg",
        width: 1200,
        height: 896,
        hotspots: [
          {
            id: "versailles-pace",
            name: "Versailles: La Pace Punitiva alla Germania",
            date: "28 Giugno 1919",
            phaseId: "1919",
            x: 29.5,
            y: 56.5,
            type: "peace",
            summary: "Firmato nella Galleria degli Specchi: la Germania cede Alsazia-Lorena e colonie e subisce colossali debiti di guerra."
          },
          {
            id: "saint-germain-pace",
            name: "Saint-Germain: La Fine dell'Austria-Ungheria",
            date: "Settembre 1919",
            phaseId: "1919",
            x: 49.5,
            y: 57.5,
            type: "peace",
            summary: "Dissoluzione totale dell'impero degli Asburgo: l'Austria diventa una piccola repubblica e cede le terre all'Italia."
          },
          {
            id: "ungheria-trianon",
            name: "Budapest: Il Trattato del Trianon",
            date: "1920",
            phaseId: "1919",
            x: 56.5,
            y: 58.5,
            type: "border",
            summary: "L'Ungheria perde due terzi del suo territorio storico, cedendo Transilvania, Slovacchia e Vojvodina."
          },
          {
            id: "italia-brennero",
            name: "Italia: Il Confine al Brennero, Trento e Trieste",
            date: "1919 - 1920",
            phaseId: "1919",
            x: 47.5,
            y: 63.5,
            type: "border",
            summary: "L'Italia raggiunge i suoi confini naturali dell'arco alpino annettendo Trentino, Alto Adige, Gorizia, Trieste e Istria."
          },
          {
            id: "fiume-dannunzio",
            name: "Fiume: L'Impresa di Gabriele d'Annunzio",
            date: "Settembre 1919",
            phaseId: "1919",
            x: 50.5,
            y: 65.5,
            type: "politics",
            summary: "Il poeta-soldato occupa la città contesa alla guida di 2.500 volontari contro la cosiddetta 'vittoria mutilata'."
          },
          {
            id: "polonia-rinata",
            name: "Polonia: Rinasce dopo oltre un Secolo",
            date: "1919",
            phaseId: "1919",
            x: 57.5,
            y: 43.5,
            type: "border",
            summary: "La Polonia viene ricostituita come stato sovrano indipendente unendo territori già russi, tedeschi e austriaci con accesso al mare a Danzica."
          },
          {
            id: "cecoslovacchia-nuova",
            name: "Cecoslovacchia: Nuovo Stato Democratico",
            date: "1919",
            phaseId: "1919",
            x: 51.5,
            y: 51.5,
            type: "border",
            summary: "Nasce la repubblica di cechi e slovacchi guidata da Tomáš Masaryk staccatasi dall'impero austro-ungarico."
          },
          {
            id: "jugoslavia-regno",
            name: "Jugoslavia: Il Regno dei Serbi, Croati e Sloveni",
            date: "1919",
            phaseId: "1919",
            x: 55.0,
            y: 67.5,
            type: "border",
            summary: "I popoli slavi del sud si uniscono sotto la corona serba con capitale Belgrado."
          }
        ]
      },

      trincea: {
        id: "trincea",
        name: "🕳️ Spaccato Trincea (Anatomia della Vita nel Fango)",
        subtitle: "Carta didattica illustrata della sezione di una trincea della Prima Guerra Mondiale",
        src: "assets/carta_trincea_didattica.jpg",
        width: 1200,
        height: 896,
        hotspots: [
          {
            id: "tr-terra-nessuno",
            name: "1. La Terra di Nessuno (Crateri d'Artiglieria)",
            date: "1914 - 1918",
            phaseId: "all",
            x: 18.0,
            y: 38.0,
            type: "trench",
            summary: "Striscia di terra devastata da crateri d'artiglieria ricolmi d'acqua putrida e reticolati. Uscire allo scoperto di giorno significava morte certa."
          },
          {
            id: "tr-reticolati",
            name: "2. I Reticolati di Filo Spinato",
            date: "1914 - 1918",
            phaseId: "all",
            x: 26.0,
            y: 44.0,
            type: "trench",
            summary: "Fasce larghe fino a 15 metri di filo con aculei d'acciaio su paletti avvitati nel terreno per bloccare gli assalti di fanteria."
          },
          {
            id: "tr-parapetto",
            name: "3. Il Parapetto con Sacchi di Sabbia",
            date: "1914 - 1918",
            phaseId: "all",
            x: 34.0,
            y: 47.0,
            type: "trench",
            summary: "Muro di sacchi di terra per assorbire schegge e pallottole, con feritoie metalliche per le vedette."
          },
          {
            id: "tr-passerelle",
            name: "4. Passerelle di Legno (Duckboards) nel Fango",
            date: "1914 - 1918",
            phaseId: "all",
            x: 44.0,
            y: 65.0,
            type: "trench",
            summary: "Tavole posate sul fondo acquitrinoso per non affondare nella melma e prevenire il doloroso 'piede da trincea'."
          },
          {
            id: "tr-periscopio",
            name: "5. Vedetta col Periscopio da Trincea",
            date: "1914 - 1918",
            phaseId: "all",
            x: 64.0,
            y: 35.0,
            type: "trench",
            summary: "Tubo a specchi per osservare il nemico al di sopra del parapetto senza sporgere la testa ed evitare i cecchini."
          },
          {
            id: "tr-feritoia",
            name: "6. Feritoia Blindata per il Tiro",
            date: "1914 - 1918",
            phaseId: "all",
            x: 71.0,
            y: 34.0,
            type: "trench",
            summary: "Piastra d'acciaio con sportellino scorrevole dove infilare la canna del fucile 'Carcano 91' per rispondere al fuoco."
          },
          {
            id: "tr-ricovero",
            name: "7. Il Ricovero Sotterraneo (Dugout)",
            date: "1914 - 1918",
            phaseId: "all",
            x: 76.0,
            y: 75.0,
            type: "trench",
            summary: "Caverna scavata sotto terra con paglia, lanterna a olio e brandine per proteggersi dai bombardamenti d'artiglieria pesante."
          },
          {
            id: "tr-deposito",
            name: "8. Deposito Munizioni e Nicchia nella Roccia",
            date: "1914 - 1918",
            phaseId: "all",
            x: 20.0,
            y: 82.0,
            type: "trench",
            summary: "Casse di legno contenenti bombe a mano 'SIPE', munizioni di riserva e razioni di gallette conservate all'asciutto."
          }
        ]
      }
    };

    // Stato del Motore
    this.activeMapKey = "europa_1914";
    this.currentPhase = null;
    this.showPins = true;
    this.isLoupeActive = false;

    // Parametri Pan & Zoom
    this.zoom = 1.0;
    this.minZoom = 0.85;
    this.maxZoom = 4.2;
    this.pan = { x: 0, y: 0 };
    this.isPanning = false;
    this.startPan = { x: 0, y: 0 };

    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="gods-eye-map-frame" id="godsEyeFrame">
        <!-- VIEWPORT INTERATTIVO DI PAN & ZOOM AD ALTA DEFINIZIONE -->
        <div class="map-interactive-viewport" id="mapInteractiveViewport">
          <!-- Superficie Trasformata via CSS (Immagine Reale + Hotspots Sincronizzati) -->
          <div class="map-canvas-surface" id="mapCanvasSurface">
            <img id="mainHistoricalRasterMap" class="main-historical-raster" src="${this.maps.europa_1914.src}" alt="Carta Storica" draggable="false" />
            <!-- Contenitore dei Pin Storici Interattivi (posizionati in %) -->
            <div class="hotspots-layer" id="hotspotsLayer"></div>
          </div>

          <!-- Lente d'Ingrandimento Storica d'Archivio (Loupe Tool) -->
          <div class="historical-loupe" id="historicalLoupe">
            <div class="loupe-inner" id="loupeInner">
              <img id="loupeZoomedImg" class="loupe-zoomed-img" src="${this.maps.europa_1914.src}" alt="Dettaglio Lente" draggable="false" />
            </div>
            <div class="loupe-crosshair"></div>
            <span class="loupe-badge">🔍 2.5x</span>
          </div>

          <!-- Tooltip Tattico Flottante HUD -->
          <div class="hotspot-hud-card" id="hotspotHudCard" style="display: none;"></div>

          <!-- CONTROLLI FLOTTANTI TATTICI LATERALI -->
          <div class="map-tactical-tools">
            <button id="btnMapZoomIn" class="tool-btn" title="Ingrandisci carta (fino a 400%)">+</button>
            <button id="btnMapZoomOut" class="tool-btn" title="Rimpicciolisci carta">−</button>
            <button id="btnMapZoomReset" class="tool-btn text-tool" title="Ripristina vista intera">100%</button>
            <button id="btnToggleLoupe" class="tool-btn text-tool" title="Attiva o disattiva la Lente d'Ingrandimento Storica">
              <span>🔎</span> Lente
            </button>
            <button id="btnTogglePins" class="tool-btn text-tool active" title="Mostra o nascondi i punti interattivi per ammirare la carta pulita">
              <span id="pinsIcon">👁️</span> Punti: ON
            </button>
          </div>
        </div>

        <!-- TELEMETRIA HUD TATTICA INFERIORE -->
        <div class="map-bottom-telemetry">
          <span class="telemetry-item" id="telemetryMapTitle">📍 ${this.maps.europa_1914.name}</span>
          <span class="telemetry-item" id="telemetryZoomValue">ZOOM: 100%</span>
          <span class="telemetry-hint">✦ Trascina con il mouse per esplorare &bull; Ruota la rotellina per ingrandire &bull; Clicca sui punti per i dettagli</span>
        </div>
      </div>
    `;

    this.bindEvents();
    this.renderHotspots();
    setTimeout(() => {
      this.resetZoom();
    }, 50);
  }

  // ==========================================
  // GESTIONE DEGLI EVENTI MOUSE, TOUCH E ZOOM
  // ==========================================
  bindEvents() {
    const viewport = document.getElementById("mapInteractiveViewport");
    const pills = document.querySelectorAll(".map-pill-btn");
    const btnZoomIn = document.getElementById("btnMapZoomIn");
    const btnZoomOut = document.getElementById("btnMapZoomOut");
    const btnReset = document.getElementById("btnMapZoomReset");
    const btnLoupe = document.getElementById("btnToggleLoupe");
    const btnPins = document.getElementById("btnTogglePins");

    // 1. Cambio Carta Storica via Bottoni Pills
    pills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        const mapKey = e.currentTarget.dataset.map;
        this.setMap(mapKey);
      });
    });

    // 2. Drag to Pan
    viewport.addEventListener("mousedown", (e) => {
      if (e.target.closest(".hotspot-pin") || e.target.closest(".map-tactical-tools") || e.target.closest(".map-selector-topbar")) return;
      this.isPanning = true;
      this.startPan = { x: e.clientX - this.pan.x, y: e.clientY - this.pan.y };
      viewport.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (this.isPanning) {
        this.pan.x = e.clientX - this.startPan.x;
        this.pan.y = e.clientY - this.startPan.y;
        this.clampPan();
        this.updateTransform();
      }

      if (this.isLoupeActive) {
        this.updateLoupe(e);
      }
    });

    window.addEventListener("mouseup", () => {
      if (this.isPanning) {
        this.isPanning = false;
        viewport.style.cursor = "grab";
      }
    });

    // 3. Smooth Wheel Zoom centrato sul cursore
    viewport.addEventListener("wheel", (e) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const factor = e.deltaY < 0 ? 1.15 : 0.87;
      this.zoomAt(factor, mouseX, mouseY);
    }, { passive: false });

    // 4. Bottoni Controlli Tattici
    btnZoomIn.addEventListener("click", () => {
      const rect = viewport.getBoundingClientRect();
      this.zoomAt(1.25, rect.width / 2, rect.height / 2);
    });

    btnZoomOut.addEventListener("click", () => {
      const rect = viewport.getBoundingClientRect();
      this.zoomAt(0.8, rect.width / 2, rect.height / 2);
    });

    btnReset.addEventListener("click", () => {
      this.resetZoom();
    });

    btnLoupe.addEventListener("click", () => {
      this.isLoupeActive = !this.isLoupeActive;
      btnLoupe.classList.toggle("active", this.isLoupeActive);
      const loupeEl = document.getElementById("historicalLoupe");
      if (loupeEl) loupeEl.style.display = this.isLoupeActive ? "block" : "none";
    });

    btnPins.addEventListener("click", () => {
      this.showPins = !this.showPins;
      btnPins.classList.toggle("active", this.showPins);
      document.getElementById("pinsIcon").textContent = this.showPins ? "👁️" : "👁️‍🗨️";
      btnPins.innerHTML = `<span id="pinsIcon">${this.showPins ? '👁️' : '👁️‍🗨️'}</span> Punti: ${this.showPins ? 'ON' : 'OFF'}`;
      const layer = document.getElementById("hotspotsLayer");
      if (layer) layer.style.display = this.showPins ? "block" : "none";
    });
  }

  // ==========================================
  // CAMBIO CARTA STORICA ATTIVA
  // ==========================================
  setMap(mapKey) {
    if (!this.maps[mapKey]) return;
    this.activeMapKey = mapKey;
    const cfg = this.maps[mapKey];

    // Aggiorna Pills interne e bottoni nella sub-bar
    document.querySelectorAll(".map-pill-btn").forEach(p => {
      p.classList.toggle("active", p.dataset.map === mapKey);
    });
    document.querySelectorAll(".theater-btn").forEach(p => {
      p.classList.toggle("active", p.dataset.map === mapKey);
    });

    // Aggiorna Immagine Principale e Lente
    const imgMain = document.getElementById("mainHistoricalRasterMap");
    const imgLoupe = document.getElementById("loupeZoomedImg");
    if (imgMain) imgMain.src = cfg.src;
    if (imgLoupe) imgLoupe.src = cfg.src;

    // Aggiorna Telemetria
    const titleEl = document.getElementById("telemetryMapTitle");
    const phaseLabel = this.currentPhase ? (this.currentPhase.year || this.currentPhase.title) : "1914";
    if (titleEl) {
      titleEl.innerHTML = `📍 <strong>${cfg.name}</strong> &bull; Periodo: <span style="color:#facc15; font-weight:800;">${phaseLabel}</span>`;
    }

    // Reset Vista e Render Hotspots
    this.resetZoom();
    this.renderHotspots();

    // Chiudi eventuale tooltip aperto
    const hud = document.getElementById("hotspotHudCard");
    if (hud) hud.style.display = "none";
  }

  // ==========================================
  // MATEMATICA DI TRASFORMAZIONE PAN & ZOOM
  // ==========================================
  zoomAt(factor, clientX, clientY) {
    const prevZoom = this.zoom;
    let newZoom = this.zoom * factor;
    newZoom = Math.max(this.minZoom, Math.min(this.maxZoom, newZoom));

    if (newZoom === prevZoom) return;

    // Centratura attorno al cursore del mouse
    this.pan.x = clientX - (clientX - this.pan.x) * (newZoom / prevZoom);
    this.pan.y = clientY - (clientY - this.pan.y) * (newZoom / prevZoom);

    this.zoom = newZoom;
    this.clampPan();
    this.updateTransform();
  }

  resetZoom() {
    const viewport = document.getElementById("mapInteractiveViewport");
    const cfg = this.maps[this.activeMapKey];
    if (viewport && cfg && viewport.clientWidth > 0 && viewport.clientHeight > 0) {
      const vW = viewport.clientWidth;
      const vH = viewport.clientHeight;
      const scaleX = (vW * 0.96) / cfg.width;
      const scaleY = (vH * 0.96) / cfg.height;
      this.zoom = Math.min(scaleX, scaleY, 1.0);
      this.minZoom = Math.min(this.zoom * 0.7, 0.5);

      this.pan.x = Math.round((vW - cfg.width * this.zoom) / 2);
      this.pan.y = Math.round((vH - cfg.height * this.zoom) / 2);
    } else {
      this.zoom = 1.0;
      this.pan = { x: 0, y: 0 };
    }
    this.updateTransform();
  }

  clampPan() {
    const viewport = document.getElementById("mapInteractiveViewport");
    if (!viewport) return;
    const w = viewport.clientWidth;
    const h = viewport.clientHeight;

    // Limiti di trascinamento per non perdere la carta
    const maxBoundX = w * (this.zoom - 0.2);
    const maxBoundY = h * (this.zoom - 0.2);

    this.pan.x = Math.max(-maxBoundX, Math.min(w * 0.8, this.pan.x));
    this.pan.y = Math.max(-maxBoundY, Math.min(h * 0.8, this.pan.y));
  }

  updateTransform() {
    const surface = document.getElementById("mapCanvasSurface");
    const zoomText = document.getElementById("telemetryZoomValue");
    if (surface) {
      surface.style.transform = `translate(${Math.round(this.pan.x)}px, ${Math.round(this.pan.y)}px) scale(${this.zoom.toFixed(3)})`;
    }
    if (zoomText) {
      zoomText.textContent = `ZOOM: ${Math.round(this.zoom * 100)}%`;
    }
  }

  // ==========================================
  // LENTE D'INGRANDIMENTO STORICA (LOUPE ENGINE)
  // ==========================================
  updateLoupe(e) {
    const loupe = document.getElementById("historicalLoupe");
    const zoomedImg = document.getElementById("loupeZoomedImg");
    const viewport = document.getElementById("mapInteractiveViewport");
    const surface = document.getElementById("mapCanvasSurface");
    if (!loupe || !zoomedImg || !viewport || !surface) return;

    const vRect = viewport.getBoundingClientRect();
    const mouseX = e.clientX - vRect.left;
    const mouseY = e.clientY - vRect.top;

    if (mouseX < 0 || mouseX > vRect.width || mouseY < 0 || mouseY > vRect.height) {
      loupe.style.display = "none";
      return;
    }
    loupe.style.display = "block";

    // Posiziona la lente centrata sul mouse
    const loupeRadius = 90;
    loupe.style.left = `${mouseX - loupeRadius}px`;
    loupe.style.top = `${mouseY - loupeRadius}px`;

    // Calcola il punto relativo sulla superficie della mappa
    const surfX = (mouseX - this.pan.x) / this.zoom;
    const surfY = (mouseY - this.pan.y) / this.zoom;

    // Ingrandimento della lente 2.5x
    const loupeMag = 2.5;
    const imgW = surface.clientWidth * loupeMag;
    const imgH = surface.clientHeight * loupeMag;

    zoomedImg.style.width = `${imgW}px`;
    zoomedImg.style.height = `${imgH}px`;
    zoomedImg.style.left = `${loupeRadius - surfX * loupeMag}px`;
    zoomedImg.style.top = `${loupeRadius - surfY * loupeMag}px`;
  }

  // ==========================================
  // RENDER HOTSPOTS DISCRETI E NON INVASIVI
  // ==========================================
  renderHotspots() {
    const layer = document.getElementById("hotspotsLayer");
    const hud = document.getElementById("hotspotHudCard");
    const viewport = document.getElementById("mapInteractiveViewport");
    if (!layer || !viewport) return;

    layer.innerHTML = "";
    if (!this.showPins) {
      layer.style.display = "none";
      return;
    }
    layer.style.display = "block";

    const cfg = this.maps[this.activeMapKey];
    if (!cfg || !cfg.hotspots) return;

    const currentPhaseId = this.currentPhase ? this.currentPhase.id : null;

    cfg.hotspots.forEach(spot => {
      // Determina se il punto corrisponde all'anno/fase correntemente selezionato
      const isCurrentPhase = !currentPhaseId || 
                            spot.phaseId === "all" || 
                            spot.phaseId === currentPhaseId ||
                            (currentPhaseId === "origini-1880-1914" && (spot.phaseId === "1880" || spot.phaseId === "1914"));

      const pin = document.createElement("div");
      pin.className = `hotspot-pin pin-${spot.type} ${isCurrentPhase ? "pin-active-phase" : "pin-secondary"}`;
      pin.style.left = `${spot.x}%`;
      pin.style.top = `${spot.y}%`;
      pin.dataset.id = spot.id;

      pin.innerHTML = `
        <div class="pin-radar-ring ${isCurrentPhase ? 'active-pulse' : ''}"></div>
        <div class="pin-core ${isCurrentPhase ? 'core-bright' : ''}"></div>
        <div class="pin-label ${isCurrentPhase ? 'label-prominent' : 'label-subtle'}">${spot.name.split(":")[0]}</div>
      `;

      // Hover Tooltip HUD
      pin.addEventListener("mouseenter", (e) => {
        if (!hud) return;
        hud.style.display = "block";
        hud.innerHTML = `
          <div class="hud-card-header">
            <strong>${spot.name}</strong>
            <span class="hud-date">📅 ${spot.date}</span>
          </div>
          <p class="hud-summary">${spot.summary}</p>
          <div class="hud-action">👆 Clicca per approfondire la scheda didattica</div>
        `;

        const vRect = viewport.getBoundingClientRect();
        let posX = e.clientX - vRect.left + 14;
        let posY = e.clientY - vRect.top + 14;

        if (posX + 300 > vRect.width) posX = Math.max(10, posX - 320);
        if (posY + 160 > vRect.height) posY = Math.max(10, posY - 150);

        hud.style.left = `${posX}px`;
        hud.style.top = `${posY}px`;
      });

      pin.addEventListener("mouseleave", () => {
        if (hud) hud.style.display = "none";
      });

      // Click: apre la scheda didattica
      pin.addEventListener("click", () => {
        if (hud) hud.style.display = "none";
        this.openHotspotDetail(spot);
      });

      layer.appendChild(pin);
    });
  }

  // ==========================================
  // APRE LA SCHEDA DIDATTICA DELL'HOTSPOT
  // ==========================================
  openHotspotDetail(spot) {
    if (typeof window.showBattleModal === "function") {
      window.showBattleModal({
        name: spot.name,
        date: spot.date,
        theater: this.activeMapKey === "fronte_italiano" ? "italiano" : "generale",
        summary: spot.summary,
        significance: "Snodo storico fondamentale analizzato sulla cartografia autentica d'epoca.",
        curiosityFact: "Osserva i toponimi e i rilievi geografici reali sulla carta storica per comprendere perché questa posizione era strategicamente vitale."
      });
    }
  }

  // ==========================================
  // SINCRONIZZAZIONE AUTOMATICA CON LA CRONOLOGIA
  // ==========================================
  setPhase(phase) {
    this.currentPhase = phase;

    // Seleziona automaticamente e intelligentemente la carta didatticamente indicata per ogni anno/fase
    let targetMapKey = "europa_1914";

    if (phase.id === "origini-1880-1914" || phase.id === "1914") {
      // 1. Fine '800 & 1914: Carta d'Europa con i 4 Grandi Imperi e la scintilla di Sarajevo
      targetMapKey = "europa_1914";
    } else if (["1915", "1916", "1917", "1918"].includes(phase.id)) {
      // 2. 1915-1918: Il fronte alpino e italo-austriaco (Isonzo, Grappa, Piave, Vittorio Veneto)
      targetMapKey = "fronte_italiano";
    } else if (phase.id === "1919") {
      // 3. 1919: Trattati di Pace a Versailles e nuovi confini d'Europa
      targetMapKey = "europa_1919";
    }

    if (this.activeMapKey !== targetMapKey) {
      this.setMap(targetMapKey);
    } else {
      // Se la carta è già attiva, aggiorna comunque i punti caldi evidenziando quelli dell'anno selezionato!
      this.renderHotspots();
      const titleEl = document.getElementById("telemetryMapTitle");
      const cfg = this.maps[this.activeMapKey];
      if (titleEl && cfg) {
        titleEl.innerHTML = `📍 <strong>${cfg.name}</strong> &bull; Periodo: <span style="color:#facc15; font-weight:800;">${phase.year || phase.title}</span>`;
      }
    }
  }

  setTheater(theaterKey) {
    if (theaterKey === "italiano") {
      this.setMap("fronte_italiano");
    } else if (theaterKey === "all") {
      this.setMap(this.currentPhase && this.currentPhase.id === "1919" ? "europa_1919" : "europa_1914");
    }
  }

  toggleTroopMovements() {}
  toggleFrontlines() {}
  toggleBattles(show) {
    this.showPins = show;
    const layer = document.getElementById("hotspotsLayer");
    if (layer) layer.style.display = show ? "block" : "none";
  }
  toggleTerritories() {}
  toggleDeclutter() {}
}

window.WW1MapManager = WW1MapManager;
