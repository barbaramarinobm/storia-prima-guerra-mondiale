/**
 * DATI STORICI E DIDATTICI - LA PRIMA GUERRA MONDIALE (1914 - 1918)
 * Atlante Storico Didattico Multimediale per la Scuola Secondaria di Primo Grado (11-14 anni)
 * 
 * Ispirato dai paradigmi di:
 * - "God's Eye View" (bilawalsidhu/gods-eye-view): visione d'insieme spaziale, altimetria alpina, coordinate e livelli tematici.
 * - "Be Ambitious" (robonuggets/be-ambitious): massima altitudine geopolitica, profondità di fonti primarie e letterarie, ampiezza di prospettive.
 * - "Gauntlet Loop" (robonuggets/gauntlet-loop): ciclo di verifica formativo a 3 livelli ("Sfida lo Storico") con feedback immediato e diploma.
 * - "Reverse Engineer Anything - REA" (morluto/rea): de-costruzione analitica delle cause di fine '800 e della catena del domino del luglio 1914.
 */

const WW1_DATA = {
  // =========================================================================
  // FASI CRONOLOGICHE DELLA GRANDE GUERRA (1882 - 1919)
  // =========================================================================
  phases: [
    // ----------------------------------------------------
    // FASE 0: FINE '800 E ORIGINI DELLA GUERRA (1882 - 1914)
    // ----------------------------------------------------
    {
      id: "origini-1880-1914",
      year: "Fine '800",
      title: "Fine '800 e Origini: La Polveriera d'Europa e le Cause della Guerra",
      period: "1882 - Giugno 1914",
      tagline: "Dalla Belle Époque alla trappola delle alleanze: imperialismo, corsa agli armamenti e la crisi dei Balcani",
      narrative: `Tra la fine dell'Ottocento e i primi anni del Novecento l'Europa vive la **Belle Époque**: un'epoca di straordinario progresso tecnologico, treni a vapore, prime automobili, cinema e luce elettrica. Sembra un mondo destinato a una pace eterna, ma sotto questa superficie luccicante si nascondono tensioni gravissime.
      Le grandi potenze industriali competono ferocemente per la conquista di colonie in Africa e in Asia (**Imperialismo**). La Germania dell'imperatore Guglielmo II costruisce una potente flotta militare per sfidare il dominio marittimo britannico, mentre la Francia sogna la rivincita (**Revanche**) per le regioni dell'Alsazia e della Lorena strappatele dai prussiani nel 1870.
      L'Europa si divide così in due blocchi armati e contrapposti: la **Triplice Alleanza** (Germania, Austria-Ungheria e Italia, siglata nel 1882) e la **Triplice Intesa** (Francia, Regno Unito e Russia, perfezionata nel 1907). Nei Balcani, intanto, l'indebolimento dell'Impero Ottomano crea una pericolosa instabilità politica: la cosiddetta **«polveriera balcanica»**, pronta a esplodere al minimo urto.`,
      italianPerspective: `L'Italia entra nella Triplice Alleanza nel 1882 per uscire dall'isolamento diplomatico dopo che la Francia ha occupato la Tunisia. È però un'alleanza innaturale e dolorosa: l'Austria-Ungheria è la storica nemica del Risorgimento italiano e occupa ancora le cosiddette **«terre irredente»** (Trento e Trieste), dove vivono popolazioni di lingua e cultura italiana.
      Negli ambienti patriottici e studenteschi cresce l'**Irredentismo**: il movimento che chiede la liberazione di Trento e Trieste dal dominio asburgico per completare l'unità d'Italia. Nel 1911-1912, intanto, l'Italia guidata da Giolitti dichiara guerra all'Impero Ottomano e conquista la Libia e le isole del Dodecaneso.`,
      curiosity: `🚂 **La Trappola dei Treni e degli Orari**: Nei primi del Novecento gli stati maggiori militari avevano pianificato la mobilitazione degli eserciti al millimetro usando le ferrovie. Una volta dato l'ordine di partenza dei convogli, i generali dissero che fermare i treni avrebbe mandato in tilt tutto il Paese: la tecnologia stessa finì per accelerare l'inizio della guerra!`,
      alliances: {
        allies: ["Francia", "Regno Unito", "Russia"],
        central: ["Germania", "Austria-Ungheria", "Italia (con riserve)"],
        neutral: ["Spagna", "Svizzera", "Paesi Bassi", "Belgio (neutralità garantita)", "Danimarca", "Norvegia", "Svezia", "Romania", "Grecia", "Serbia"]
      },
      frontlines: [],
      movements: [
        {
          id: "mov-colonial-rivalry",
          name: "Rivalità Coloniali & Crisi Marocchine (1905, 1911)",
          theater: "occidentale",
          side: "central",
          svgPoints: [[260, 520], [210, 580]],
          description: "Le cannoniere tedesche sfidano l'espansione coloniale francese in Nord Africa (Tangeri e Agadir)."
        },
        {
          id: "mov-naval-race",
          name: "Corsa agli Armamenti Navali nel Mare del Nord",
          theater: "occidentale",
          side: "allies",
          svgPoints: [[260, 310], [330, 270], [370, 290]],
          description: "La Germania costruisce la Hochseeflotte per sfidare la supremazia dei Dreadnought della Royal Navy."
        },
        {
          id: "mov-balkan-powder",
          name: "La Polveriera Balcanica (Guerre Balcaniche 1912-1913)",
          theater: "balcanico",
          side: "central",
          svgPoints: [[580, 560], [610, 580], [650, 600]],
          description: "Le nazioni balcaniche espellono l'Impero Ottomano, ma la Serbia cresce e si scontra con le ambizioni dell'Austria-Ungheria."
        }
      ],
      battles: [
        {
          id: "crisi-tangeri-agadir",
          name: "Le Crisi Marocchine (1905 e 1911)",
          date: "1905 e 1911",
          svgPos: [210, 560],
          theater: "occidentale",
          summary: "La Germania dell'imperatore Guglielmo II invia navi da guerra in Marocco per ostacolare l'influenza coloniale francese.",
          significance: "Sfiora per due volte una guerra europea anticipata e salda definitivamente l'alleanza tra Francia e Gran Bretagna.",
          curiosityFact: "Nel 1911 la Germania inviò la cannoniera 'Panther' nel porto di Agadir; la Gran Bretagna minacciò di intervenire con la propria flotta."
        },
        {
          id: "annessione-bosnia",
          name: "Annessione Austriaca della Bosnia-Erzegovina",
          date: "6 Ottobre 1908",
          svgPos: [540, 560],
          theater: "balcanico",
          summary: "L'Austria-Ungheria annette unilateralmente la Bosnia, già amministrata dal 1878. Ciò suscita l'ira violenta della Serbia e della Russia.",
          significance: "Crea il risentimento nazionalista serbo che porterà, sei anni dopo, all'attentato di Sarajevo contro l'erede asburgico.",
          curiosityFact: "I giovani nazionalisti serbi e bosniaci fondarono la società segreta 'Mano Nera' con l'obiettivo di liberare la Bosnia con attentati."
        },
        {
          id: "guerre-balcaniche",
          name: "Le Due Guerre Balcaniche",
          date: "1912 - 1913",
          svgPos: [620, 600],
          theater: "balcanico",
          summary: "Grecia, Bulgaria, Serbia e Montenegro si alleano per strappare all'Impero Ottomano quasi tutti i suoi territori europei.",
          significance: "La Serbia raddoppia il proprio territorio e diventa il centro del nazionalismo panslavo sostenuto dalla Russia contro Vienna.",
          curiosityFact: "In queste guerre furono usati per la prima volta aerei militari da ricognizione e mitragliatrici moderne su larga scala."
        },
        {
          id: "sarajevo-prelude",
          name: "Sarajevo: La Scintilla del Secolo",
          date: "28 Giugno 1914",
          svgPos: [565, 590],
          theater: "balcanico",
          summary: "L'arciduca Francesco Ferdinando d'Asburgo, erede al trono imperiale, e la moglie Sofia vengono assassinati dallo studente Gavrilo Princip.",
          significance: "È la causa occasionale che fa scattare il domino delle alleanze segrete, trasformando una crisi locale nel primo conflitto mondiale.",
          curiosityFact: "Gavrilo Princip faceva parte del gruppo 'Giovane Bosnia'. L'autista dell'arciduca sbagliò strada e si fermò per fare retromarcia proprio davanti al bar dove Princip stava bevendo un caffè!"
        }
      ]
    },

    // ----------------------------------------------------
    // FASE 1: 1914
    // ----------------------------------------------------
    {
      id: "1914",
      year: "1914",
      title: "1914: La Scintilla, il Fallimento della Guerra Lampo e la Tregua di Natale",
      period: "Giugno - Dicembre 1914",
      tagline: "Dall'attentato di Sarajevo alle prime trincee sul fronte occidentale e l'incredibile notte di pace",
      narrative: `Il 28 giugno 1914 a Sarajevo, l'arciduca Francesco Ferdinando viene assassinato. In poche settimane scatta l'effetto domino: l'Austria invia un ultimatum inaccettabile alla Serbia e le dichiara guerra; la Russia mobilita le proprie truppe a difesa dei serbi; la Germania dichiara guerra a Russia e Francia, invadendo il Belgio neutrale. A quel punto entra in campo anche il Regno Unito per difendere il Belgio.
      I comandi tedeschi avevano pianificato una vittoria fulminea in sei settimane (**Piano Schlieffen**), ma a settembre francesi e britannici li bloccano sul **Fiume Marna**, a soli 40 km da Parigi.
      La guerra di movimento fallisce miseramente: gli eserciti scavano fossati e chilometri di reticolati. Nasce la micidiale **guerra di posizione e di trincea**. A fine anno, sul fronte occidentale accade però un fatto umano straordinario: la **Tregua spontanea di Natale** tra soldati nemici.`,
      italianPerspective: `L'Italia fa parte della Triplice Alleanza con Germania e Austria, ma il 2 agosto 1914 proclama la propria **neutralità**: il trattato era solo difensivo, mentre l'Austria ha attaccato per prima senza consultare Roma!
      Nel Paese si accende uno scontro politico infuocato tra **Neutralisti** (la grande maggioranza: cattolici, socialisti riformisti e i liberali di Giovanni Giolitti, convinti che l'Italia possa ottenere compensi territoriali senza combattere) e **Interventisti** (nazionalisti, irredentisti come Cesare Battisti, intellettuali futuristi, democratici e Benito Mussolini, espulso dal Partito Socialista per aver fondato il giornale 'Il Popolo d'Italia').`,
      curiosity: `🕊️ **La Tregua di Natale 1914**: La notte del 24 dicembre i soldati tedeschi accendono candele sui parapetti e intonano 'Stille Nacht'. I soldati britannici rispondono cantando 'The First Noel'. All'alba centinaia di nemici escono disarmati nella 'terra di nessuno', si stringono le mani, scambiano sigarette e giocano a calcio con un pallone di stracci!`,
      alliances: {
        allies: ["Francia", "Regno Unito", "Russia", "Serbia", "Belgio", "Giappone"],
        central: ["Germania", "Austria-Ungheria", "Impero Ottomano"],
        neutral: ["Italia", "Stati Uniti", "Spagna", "Svizzera", "Paesi Bassi", "Romania", "Grecia"]
      },
      frontlines: [
        {
          id: "front-west-1914",
          name: "Fronte Occidentale (Fine 1914)",
          theater: "occidentale",
          color: "#dc2626",
          svgPoints: [[285, 350], [295, 370], [295, 395], [305, 420], [330, 425], [345, 445], [350, 465]],
          description: "La linea continua di 700 km di trincee dal Mare del Nord (Fiandre) fino al confine svizzero."
        },
        {
          id: "front-east-1914",
          name: "Fronte Orientale (Fine 1914)",
          theater: "orientale",
          color: "#dc2626",
          svgPoints: [[560, 265], [545, 335], [520, 380], [550, 405], [590, 410], [630, 420]],
          description: "Fronte immenso e mobile: i russi avanzano in Galizia ma sono annientati dai tedeschi a Tannenberg."
        }
      ],
      movements: [
        {
          id: "mov-schlieffen",
          name: "Attacco Tedesco - Piano Schlieffen",
          theater: "occidentale",
          side: "central",
          svgPoints: [[325, 390], [310, 375], [295, 380], [290, 405], [305, 420]],
          description: "Avanzata travolgente tedesca attraverso il Belgio neutrale per aggirare le difese francesi."
        },
        {
          id: "mov-marne-counter",
          name: "Controffensiva della Marna",
          theater: "occidentale",
          side: "allies",
          svgPoints: [[275, 425], [305, 420], [315, 410]],
          description: "L'esercito francese del generale Joffre ferma i tedeschi alle porte di Parigi salvando la Francia."
        },
        {
          id: "mov-tannenberg-trap",
          name: "Manovra a Tenaglia di Tannenberg",
          theater: "orientale",
          side: "central",
          svgPoints: [[510, 310], [545, 335]],
          description: "Hindenburg e Ludendorff circondano e annientano la 2ª armata russa in Prussia Orientale."
        }
      ],
      battles: [
        {
          id: "sarajevo",
          name: "Attentato di Sarajevo",
          date: "28 Giugno 1914",
          svgPos: [565, 590],
          theater: "balcanico",
          summary: "L'arciduca Francesco Ferdinando viene ucciso dal nazionalista Gavrilo Princip. È la scintilla della catastrofe.",
          significance: "Trasforma una disputa regionale tra Austria e Serbia nel primo conflitto globale della storia contemporanea.",
          curiosityFact: "Il complotto era stato organizzato da 6 studenti serbi; il primo attentatore lanciò una bomba a mano che ferì solo le scorte."
        },
        {
          id: "liegi",
          name: "Assedio di Liegi",
          date: "5 - 16 Agosto 1914",
          svgPos: [315, 380],
          theater: "occidentale",
          summary: "I forti belgi resistono per 11 giorni all'invasione tedesca, rallentando la tabella di marcia del Piano Schlieffen.",
          significance: "Regala tempo fondamentale alla Francia e al Regno Unito per mobilitare le proprie divisioni e difendere la frontiera.",
          curiosityFact: "I tedeschi impiegarono i cannoni giganti 'Grande Berta' da 420 mm, i cui proiettili pesavano oltre 800 kg ciascuno!"
        },
        {
          id: "marna-1",
          name: "Prima Battaglia della Marna",
          date: "6 - 12 Settembre 1914",
          svgPos: [305, 420],
          theater: "occidentale",
          summary: "Scontro titanico su un fronte di 200 km tra due milioni di uomini. I francesi fermano l'avanzata tedesca.",
          significance: "Segna la fine della guerra lampo: da questo momento gli eserciti si interrano per 4 anni di stallo nel fango.",
          curiosityFact: "Il governatore militare di Parigi Gallieni requisì 600 taxi urbani per trasportare d'urgenza 6.000 fanti sul fronte della Marna!"
        },
        {
          id: "tannenberg",
          name: "Battaglia di Tannenberg",
          date: "26 - 30 Agosto 1914",
          svgPos: [545, 335],
          theater: "orientale",
          summary: "I generali Hindenburg e Ludendorff accerchiano e distruggono l'armata russa del generale Samsonov in Prussia Orientale.",
          significance: "Salva la Germania dall'invasione russa; Samsonov per la vergogna si toglie la vita sparandosi nei boschi.",
          curiosityFact: "I russi comunicavano ordini via radio in chiaro, permettendo ai tedeschi di conoscere in anticipo ogni loro mossa."
        },
        {
          id: "tregua-natale-1914",
          name: "La Tregua di Natale nelle Fiandre",
          date: "24 - 26 Dicembre 1914",
          svgPos: [290, 360],
          theater: "occidentale",
          summary: "Cessate il fuoco spontaneo tra fanti tedeschi, britannici e francesi lungo oltre 100 km di trincee.",
          significance: "La dimostrazione più commovente dell'umanità che resiste alla follia della guerra; terrorizzò i comandi militari.",
          curiosityFact: "In diverse località della terra di nessuno si disputarono partite di calcio: una finì 3-2 per i sassoni contro gli scozzesi!"
        }
      ]
    },

    // ----------------------------------------------------
    // FASE 2: 1915
    // ----------------------------------------------------
    {
      id: "1915",
      year: "1915",
      title: "1915: L'Italia entra in Guerra, il Patto di Londra e la Guerra Chimica",
      period: "Maggio - Dicembre 1915",
      tagline: "Il Patto di Londra, il fronte alpino dell'Isonzo e la prima nube tossica a Ypres",
      narrative: `Nel 1915 il conflitto diventa globale e ancora più disumano. A Ypres i tedeschi rilasciano per la prima volta nubi di **gas asfissiante al cloro**, inaugurando l'era della guerra chimica. Nell'Atlantico un sommergibile tedesco silura il transatlantico passeggeri **Lusitania**, provocando quasi 1.200 vittime civili e scuotendo l'opinione pubblica americana.
      Nei Dardanelli gli Alleati tentano di aprire una rotta di rifornimento per la Russia sbarcando a **Gallipoli**, ma l'esercito ottomano li respinge con perdite spaventose.
      Il 24 Maggio il Regno d'Italia entra in guerra contro l'Austria-Ungheria, aprendo un fronte difficilissimo lungo oltre 600 km tra le vette alpine e i canyon rocciosi dell'Isonzo.`,
      italianPerspective: `Il 26 aprile 1915 il governo italiano firma segretamente il **Patto di Londra**: l'Italia si impegna a entrare in guerra entro un mese al fianco dell'Intesa in cambio di **Trentino, Alto Adige, Trieste, Gorizia, Istria e parte della Dalmazia**.
      Nelle «radiose giornate di maggio» la piazza interventista prevale sul Parlamento. Il 24 maggio l'esercito varca il confine (*«Il Piave mormorava calmo e placido al passaggio...»*).
      Il comandante supremo **Luigi Cadorna** applica una disciplina di ferro e lancia quattro sanguinose offensive frontali sull'**Isonzo**: gli assalti contro mitragliatrici e reticolati provocano oltre 200.000 perdite senza sfondare. Sulle vette dolomitiche si combatte la leggendaria **Guerra Bianca** a 3.000 metri tra ghiacci e slavine.`,
      curiosity: `🏔️ **La Città di Ghiaccio sulla Marmolada**: Sul ghiacciaio della Marmolada l'esercito austriaco scavò una vera e propria fortezza sotterranea dentro il ghiaccio alta decine di metri, con dormitori, cucine e depositi munizioni al riparo dall'artiglieria italiana e dalle bufere a -30°C!`,
      alliances: {
        allies: ["Francia", "Regno Unito", "Russia", "Italia", "Serbia", "Belgio", "Giappone"],
        central: ["Germania", "Austria-Ungheria", "Impero Ottomano", "Bulgaria"],
        neutral: ["Stati Uniti", "Spagna", "Svizzera", "Paesi Bassi", "Romania", "Grecia"]
      },
      frontlines: [
        {
          id: "front-italy-1915",
          name: "Fronte Italiano (Maggio-Dicembre 1915)",
          theater: "italiano",
          color: "#16a34a",
          svgPoints: [[430, 485], [440, 490], [450, 485], [460, 485], [470, 470], [482, 480], [488, 488], [490, 495]],
          description: "La linea di frontiera alpina tra Regno d'Italia e Austria: dal Lago di Garda e Pasubio fino a Caporetto e all'Isonzo."
        },
        {
          id: "front-west-1915",
          name: "Fronte Occidentale (1915)",
          theater: "occidentale",
          color: "#dc2626",
          svgPoints: [[285, 350], [295, 370], [295, 395], [305, 420], [330, 425], [345, 445], [350, 465]],
          description: "Stallo completo nelle trincee tra Mare del Nord e Svizzera."
        },
        {
          id: "front-east-1915",
          name: "Fronte Orientale - Ritirata Russa",
          theater: "orientale",
          color: "#dc2626",
          svgPoints: [[570, 230], [575, 290], [560, 340], [560, 400], [600, 430], [640, 460]],
          description: "Sfondamento austro-tedesco di Gorlice: i russi abbandonano la Polonia zarista."
        }
      ],
      movements: [
        {
          id: "mov-italy-advance-1915",
          name: "Avanzata Italiana sull'Isonzo",
          theater: "italiano",
          side: "allies",
          svgPoints: [[475, 485], [482, 480], [488, 488]],
          description: "Le armate di Cadorna varcano la frontiera puntando a Gorizia, bloccate sui monti Sabotino e San Michele."
        },
        {
          id: "mov-gorlice-tarnow",
          name: "Sfondamento Austro-Tedesco di Gorlice",
          theater: "orientale",
          side: "central",
          svgPoints: [[550, 410], [540, 380]],
          description: "Devastante bombardamento austro-tedesco che apre una breccia nelle linee zariste."
        },
        {
          id: "mov-gallipoli-landing",
          name: "Sbarco Alleato a Gallipoli (Dardanelli)",
          theater: "balcanico",
          side: "allies",
          svgPoints: [[680, 640], [705, 625]],
          description: "Le truppe ANZAC (australiani e neozelandesi) sbarcano sulle scogliere turche dei Dardanelli."
        }
      ],
      battles: [
        {
          id: "isonzo-1",
          name: "Le Prime Battaglie dell'Isonzo",
          date: "Giugno - Dicembre 1915",
          svgPos: [488, 488],
          theater: "italiano",
          summary: "Quattro sanguinose offensive ordinate da Cadorna contro le posizioni fortificate austriache sul Sabotino, Podgora e San Michele.",
          significance: "Dimostra la tragica inutilità degli assalti frontali di fanteria contro mitragliatrici e filo spinato.",
          curiosityFact: "I soldati italiani nel 1915 non avevano ancora elmetti d'acciaio: andavano all'assalto con semplici berretti di panno!"
        },
        {
          id: "ypres-2",
          name: "Seconda Battaglia di Ypres (Gas Chimico)",
          date: "22 Aprile - 25 Maggio 1915",
          svgPos: [295, 370],
          theater: "occidentale",
          summary: "I tedeschi rilasciano per la prima volta 168 tonnellate di cloro. Una densa nube verde-gialla soffoca migliaia di soldati.",
          significance: "Inaugura l'era delle armi chimiche, costringendo tutti gli eserciti a ideare in fretta le maschere antigas.",
          curiosityFact: "I soldati canadesi scoprirono che respirare attraverso fazzoletti imbevuti di urina neutralizzava parzialmente gli effetti del cloro."
        },
        {
          id: "gallipoli",
          name: "Spedizione di Gallipoli (Dardanelli)",
          date: "Aprile 1915 - Gennaio 1916",
          svgPos: [705, 625],
          theater: "balcanico",
          summary: "Tentativo promosso da Winston Churchill per conquistare Istanbul e aprire la rotta navale del Mar Nero con la Russia.",
          significance: "Disastro per gli Alleati: i turchi guidati da Mustafa Kemal (futuro Atatürk) resistono e respingono ogni sbarco.",
          curiosityFact: "In Australia e Nuova Zelanda il 25 aprile (ANZAC Day) è ancora oggi la festa nazionale più solenne in ricordo dei caduti."
        },
        {
          id: "lusitania",
          name: "Affondamento del RMS Lusitania",
          date: "7 Maggio 1915",
          svgPos: [160, 360],
          theater: "occidentale",
          summary: "Il sottomarino tedesco U-20 silura il transatlantico britannico al largo dell'Irlanda; periscono 1.198 civili innocenti (128 statunitensi).",
          significance: "Scatena l'indignazione negli USA e spinge l'opinione pubblica americana a considerare l'intervento armato contro il Kaiser.",
          curiosityFact: "Il transatlantico colò a picco in soli 18 minuti per l'esplosione secondaria delle munizioni segretamente stivate a bordo."
        }
      ]
    },

    // ----------------------------------------------------
    // FASE 3: 1916
    // ----------------------------------------------------
    {
      id: "1916",
      year: "1916",
      title: "1916: L'Anno del Sangue: Verdun, Somme, Strafexpedition e Gorizia",
      period: "Febbraio - Dicembre 1916",
      tagline: "I colossali scontri di attrito industriale, il debutto dei carri armati e la presa di Gorizia",
      narrative: `Il 1916 è l'anno dei mostruosi scontri di logoramento e attrito industriale. Sul fronte occidentale i tedeschi tentano di "dissanguare a morte la Francia" assediando i forti di **Verdun**: per dieci mesi milioni di granate polverizzano i boschi. Per alleggerire Verdun, gli anglo-francesi attaccano sulla **Somme**, dove il primo giorno cadono 20.000 fanti britannici e compaiono per la prima volta i **carri armati** (tanks).
      Nel Mare del Nord le corazzate si scontrano nella gigantesca battaglia dello **Jutland**.`,
      italianPerspective: `A maggio l'Austria lancia in Trentino la **Strafexpedition** (spedizione punitiva) per castigare il presunto tradimento dell'Italia: 400.000 soldati asburgici attaccano sull'Altopiano di Asiago per scendere in pianura veneta e intrappolare l'esercito italiano. Con immenso sacrificio sul Monte Cengio e sul Pasubio, gli italiani fermano l'invasione.
      Ad agosto Cadorna contrattacca sull'Isonzo: espugna il Sabotino e libera la città di **Gorizia**, prima grande vittoria morale della nazione, immortalata anche dai versi di poeti al fronte come Giuseppe Ungaretti.`,
      curiosity: `🛡️ **"Ils ne passeront pas!" (Non passeranno!)**: Fu il celebre grido dei soldati francesi a Verdun. Per alimentare la difesa, lungo l'unica strada sterrata rimasta ("La Voie Sacrée") migliaia di autocarri viaggiavano giorno e notte portando un fante al fronte ogni 14 secondi!`,
      alliances: {
        allies: ["Francia", "Regno Unito", "Russia", "Italia", "Romania", "Portogallo", "Serbia", "Belgio"],
        central: ["Germania", "Austria-Ungheria", "Impero Ottomano", "Bulgaria"],
        neutral: ["Stati Uniti", "Spagna", "Svizzera", "Paesi Bassi", "Grecia"]
      },
      frontlines: [
        {
          id: "front-italy-1916",
          name: "Fronte Italiano - Presa di Gorizia (Agosto 1916)",
          theater: "italiano",
          color: "#16a34a",
          svgPoints: [[430, 485], [440, 490], [450, 485], [460, 485], [470, 470], [482, 480], [492, 488], [490, 495]],
          description: "La linea del fronte supera Gorizia e si sposta sul Carso, mentre in Trentino l'attacco austriaco è stato respinto."
        },
        {
          id: "front-west-1916",
          name: "Fronte Occidentale - Verdun e Somme",
          theater: "occidentale",
          color: "#dc2626",
          svgPoints: [[285, 350], [295, 370], [298, 395], [305, 420], [332, 425], [345, 445], [350, 465]],
          description: "Centinaia di migliaia di morti per spostare la linea di pochi chilometri di terra martoriata."
        }
      ],
      movements: [
        {
          id: "mov-strafexpedition",
          name: "Strafexpedition Austriaca (Spedizione Punitiva)",
          theater: "italiano",
          side: "central",
          svgPoints: [[425, 470], [440, 480], [450, 485]],
          description: "Gli austriaci sfondano in Trentino puntando a isolare le armate dell'Isonzo, ma sono fermati su Pasubio e Monte Cengio."
        },
        {
          id: "mov-presa-gorizia",
          name: "Sesta Battaglia dell'Isonzo: Gorizia Liberata",
          theater: "italiano",
          side: "allies",
          svgPoints: [[478, 485], [485, 486], [492, 488]],
          description: "Le truppe italiane espugnano il Sabotino ed entrano trionfalmente a Gorizia varcando l'Isonzo."
        },
        {
          id: "mov-verdun-assault",
          name: "Assalto Tedesco sui Forti di Verdun",
          theater: "occidentale",
          side: "central",
          svgPoints: [[340, 410], [330, 425]],
          description: "Un milione di granate riversate sul Forte di Douaumont nel tentativo di distruggere l'esercito francese."
        }
      ],
      battles: [
        {
          id: "verdun",
          name: "Battaglia di Verdun",
          date: "21 Febbraio - 18 Dicembre 1916",
          svgPos: [330, 425],
          theater: "occidentale",
          summary: "La battaglia più lunga della storia: 300 giorni ininterrotti sul forte di Douaumont con 700.000 vittime tra francesi e tedeschi.",
          significance: "Simbolo supremo della resistenza francese; segna il fallimento della strategia di annientamento del generale tedesco Falkenhayn.",
          curiosityFact: "Ancora oggi l'area circostante è denominata 'Zone Rouge', interdetta all'agricoltura per milioni di granate inesplose e veleni."
        },
        {
          id: "somme",
          name: "Battaglia della Somme",
          date: "Luglio - Novembre 1916",
          svgPos: [295, 395],
          theater: "occidentale",
          summary: "Gigantesca offensiva anglo-francese per rompere le linee tedesche. Oltre 1 milione di caduti e feriti in cinque mesi.",
          significance: "Il 15 settembre 1916 debuttano sul campo di battaglia i primi carri armati britannici Mark I.",
          curiosityFact: "Il 1° luglio 1916 è il giorno più luttuoso dell'esercito britannico: 19.240 soldati persero la vita nelle prime 24 ore di assalto."
        },
        {
          id: "strafexpedition-battle",
          name: "La Strafexpedition in Trentino",
          date: "Maggio - Giugno 1916",
          svgPos: [450, 485],
          theater: "italiano",
          summary: "Offensiva asburgica dal Trentino verso l'Altopiano di Asiago. Gli italiani ripiegano con ordine e bloccano gli austriaci sul Pasubio.",
          significance: "Sventa il piano di prendere alle spalle l'esercito dell'Isonzo; provoca la caduta del governo Salandra sostituito da Boselli.",
          curiosityFact: "Sul Monte Cengio i Granatieri di Sardegna, terminate le munizioni, si lanciarono nel vuoto avvinghiati ai nemici ('Salto del Granatiere')."
        },
        {
          id: "gorizia",
          name: "Presa di Gorizia (VI Battaglia Isonzo)",
          date: "6 - 17 Agosto 1916",
          svgPos: [488, 488],
          theater: "italiano",
          summary: "Dopo aver espugnato il baluardo del Sabotino con la brigata di Badoglio, i soldati italiani attraversano l'Isonzo ed entrano a Gorizia.",
          significance: "Prima grande conquista territoriale italiana, celebrata da canti popolari e versi poetici.",
          curiosityFact: "In questa battaglia cadde l'eroico bersagliere Enrico Toti che, invalido e senza una gamba, prima di spirare scagliò la sua stampella contro la trincea nemica."
        },
        {
          id: "jutland",
          name: "Battaglia dello Jutland",
          date: "31 Maggio - 1 Giugno 1916",
          svgPos: [370, 260],
          theater: "marittimo",
          summary: "Il più grande scontro navale tra corazzate nel Mare del Nord tra flotta imperiale tedesca e Grand Fleet britannica.",
          significance: "La Germania non riesce a spezzare il blocco navale alleato e decide di affidarsi unicamente ai sottomarini.",
          curiosityFact: "Nello scontro spararono decine di cannoni da 381 mm uditi a oltre cento chilometri di distanza sulle coste danesi."
        }
      ]
    },

    // ----------------------------------------------------
    // FASE 4: 1917
    // ----------------------------------------------------
    {
      id: "1917",
      year: "1917",
      title: "1917: La Svolta: Rivoluzione Russa, Ingresso USA e Caporetto",
      period: "Gennaio - Dicembre 1917",
      tagline: "La caduta dello Zar, l'ingresso americano, la disfatta di Caporetto e la riscossa sul Piave",
      narrative: `Il 1917 è l'anno che stravolge la storia del Novecento. Le truppe e le popolazioni sono stremate da tre anni di massacro e fame. In Russia scoppiano due rivoluzioni: a febbraio lo Zar Nicola II abdica; a ottobre i bolscevichi di **Lenin** prendono il potere promettendo «Pace, Terra e Pane» e ritirano la Russia dal conflitto.
      Ad aprile gli **Stati Uniti** del presidente Woodrow Wilson dichiarano guerra alla Germania a causa della guerra sottomarina indiscriminata, portando per l'Intesa milioni di soldati freschi e un potenziale industriale immenso.
      Intanto Papa Benedetto XV invia una nota ai governi definendo la guerra una **«inutile strage»**.`,
      italianPerspective: `Il 24 Ottobre 1917 avviene la tragedia nazionale di **Caporetto**: reparti austro-tedeschi trasferiti dal fronte russo sfondano con tattiche di infiltrazione e gas tossici le linee dell'Isonzo. È una rotta disastrosa: l'esercito arretra di 150 km, abbandonando il Friuli e lasciando sul campo 300.000 prigionieri e 350.000 sbandati.
      Il generale Cadorna accusa ingiustamente i soldati di viltà e viene destituito: al suo posto re Vittorio Emanuele III nomina **Armando Diaz**.
      Diaz cambia strategia: migliora il rancio, concede licenze, abolisce la decimazione e infonde fiducia. Con l'arrivo dei giovanissimi **«Ragazzi del '99»** (diciottenni appena chiamati alla leva), gli italiani compiono il miracolo: sul massiccio del **Monte Grappa** e lungo il **Fiume Piave** sbarrano la strada agli invasori (*«Di qui non si passa!»*). La guerra diventa sacra difesa della patria.`,
      curiosity: `🎖️ **I Ragazzi del '99**: Erano i coscritti nati nel 1899, appena diciottenni, chiamati d'urgenza alle armi per colmare le falle di Caporetto. Arrivarono in prima linea cantando e dimostrarono un valore indomito sul Piave e sul Monte Grappa, salvando l'Italia intera dal crollo.`,
      alliances: {
        allies: ["Francia", "Regno Unito", "Stati Uniti", "Italia", "Giappone", "Grecia", "Cina", "Brasile", "Portogallo"],
        central: ["Germania", "Austria-Ungheria", "Impero Ottomano", "Bulgaria"],
        neutral: ["Spagna", "Svizzera", "Paesi Bassi", "Danimarca", "Svezia", "Norvegia"]
      },
      frontlines: [
        {
          id: "front-italy-1917",
          name: "La Nuova Linea del Piave e Grappa (Novembre 1917)",
          theater: "italiano",
          color: "#16a34a",
          svgPoints: [[425, 485], [440, 490], [455, 495], [465, 510], [472, 520]],
          description: "La drammatica linea del Piave e del Monte Grappa dove l'esercito italiano fermò l'avanzata austro-tedesca salvando Venezia."
        },
        {
          id: "front-west-1917",
          name: "Fronte Occidentale - Linea Hindenburg",
          theater: "occidentale",
          color: "#dc2626",
          svgPoints: [[285, 350], [290, 370], [300, 395], [315, 415], [335, 430], [350, 465]],
          description: "I tedeschi si ritirano sulla fortificatissima Linea Siegfried (Hindenburg) per accorciare il fronte."
        }
      ],
      movements: [
        {
          id: "mov-caporetto-breakthrough",
          name: "Sfondamento Austro-Tedesco di Caporetto",
          theater: "italiano",
          side: "central",
          svgPoints: [[488, 480], [475, 490], [465, 505], [460, 515]],
          description: "Le truppe guidate da Otto von Below sfondano nel fondovalle dell'Isonzo costringendo l'Italia a una drammatica ritirata fino al Piave."
        },
        {
          id: "mov-piave-stand",
          name: "Resistenza Italiana sul Monte Grappa e Piave",
          theater: "italiano",
          side: "allies",
          svgPoints: [[455, 510], [465, 510], [470, 520]],
          description: "I fanti italiani e i Ragazzi del '99 resistono all'impossibile respingendo ogni tentativo austro-tedesco di passare il fiume."
        }
      ],
      battles: [
        {
          id: "caporetto",
          name: "Battaglia di Caporetto (XII Isonzo)",
          date: "24 Ottobre - 12 Novembre 1917",
          svgPos: [480, 480],
          theater: "italiano",
          summary: "Attacco a sorpresa austro-tedesco con gas fosgene e infiltrazioni veloci di reparti scelti (tra cui il giovane Erwin Rommel). La linea italiana crolla.",
          significance: "La più grave disfatta militare della storia d'Italia, che porta alla sostituzione di Cadorna con Armando Diaz e trasforma la guerra in una riscossa popolare.",
          curiosityFact: "Il giovane tenente tedesco Erwin Rommel catturò oltre 9.000 soldati italiani e 81 cannoni con un solo battaglione di Alpenkorps!"
        },
        {
          id: "battaglia-arresto-piave",
          name: "Prima Battaglia del Piave (Battaglia d'Arresto)",
          date: "12 Novembre - 25 Dicembre 1917",
          svgPos: [465, 510],
          theater: "italiano",
          summary: "Gli austro-tedeschi tentano di dilagare oltre il Piave e dal Monte Grappa, ma trovano la disperata e incrollabile resistenza dei soldati italiani.",
          significance: "Salva Venezia e il Veneto dall'invasione; dimostra la rinascita morale e operativa dell'esercito italiano.",
          curiosityFact: "I fanti cantavano per farsi coraggio: 'Il Grappa non si tocca, è il monte della gloria!' e 'Tutti eroi! O il Piave, o tutti accoppati!'."
        },
        {
          id: "passchendaele",
          name: "Terza Battaglia di Ypres (Passchendaele)",
          date: "Luglio - Novembre 1917",
          svgPos: [290, 365],
          theater: "occidentale",
          summary: "Offensiva britannica nel fango delle Fiandre. Le piogge trasformano il campo in una palude liquida dove uomini e cavalli annegano.",
          significance: "Simbolo supremo dell'orrore inutile del fango: 500.000 vittime per conquistare appena 8 chilometri di terra sterile.",
          curiosityFact: "I soldati non potevano uscire dalle passerelle di legno: scivolare significava sprofondare nella melma senza ritorno."
        },
        {
          id: "cambrai",
          name: "Battaglia di Cambrai (Carri Armati in Massa)",
          date: "20 Novembre - 7 Dicembre 1917",
          svgPos: [305, 385],
          theater: "occidentale",
          summary: "I britannici attaccano impiegando in massa 476 carri armati Mark IV aprendo una breccia profonda nella Linea Hindenburg.",
          significance: "Dimostra il futuro della guerra moderna: l'azione combinata di fanteria, carri armati e aviazione a bassa quota.",
          curiosityFact: "A Londra suonarono a festa le campane delle chiese per la prima volta dall'inizio della guerra per celebrare il successo iniziale."
        }
      ]
    },

    // ----------------------------------------------------
    // FASE 5: 1918
    // ----------------------------------------------------
    {
      id: "1918",
      year: "1918",
      title: "1918: La Vittoria sul Piave, Vittorio Veneto e la Resa degli Imperi",
      period: "Gennaio - Novembre 1918",
      tagline: "Dalla Battaglia del Solstizio al trionfo di Vittorio Veneto: il crollo definitivo degli Imperi Centrali",
      narrative: `All'inizio del 1918 la Germania, libera dal fronte russo, tenta il tutto per tutto: lancia quattro colossali offensive di primavera (**Kaiserschlacht**) sul fronte occidentale, arrivando di nuovo sulla Marna a minacciare Parigi con i cannoni a lunghissima gittata. Ma l'esercito alleato, sostenuto da centinaia di migliaia di soldati americani e guidato dal generale Foch, respinge gli attacchi e contrattacca.
      A giugno sul fronte italiano l'Austria-Ungheria sferra la sua ultima grande offensiva (**Battaglia del Solstizio**), ma viene sbaragliata sul Piave.
      A ottobre gli italiani lanciano la travolgente controffensiva di **Vittorio Veneto**: l'esercito asburgico va in pezzi. Il 3 novembre a Villa Giusti viene firmato l'armistizio (in vigore il 4 novembre). L'11 novembre anche la Germania capitola firmando la resa nel vagone ferroviario di Compiègne. La Grande Guerra è finita.`,
      italianPerspective: `Il 15 giugno 1918 l'Austria attacca con tutte le sue forze lungo il Piave, il Montello e il Grappa. È la **Battaglia del Solstizio**: gli italiani resistono eroicamente e il fiume Piave, ingrossato dalle piogge, travolge i ponti di barche austriaci trasformando l'offensiva imperiale in una disfatta.
      Il 24 ottobre 1918, a un anno esatto da Caporetto, Diaz ordina l'attacco generale: l'esercito attraversa il Piave e sfonda a **Vittorio Veneto**, liberando Trento e Trieste tra il giubilo delle popolazioni.
      Il 4 novembre 1918 Armando Diaz emana il celebre **Bollettino della Vittoria**: *«La guerra è vinta. L'esercito austro-ungarico risale in disordine e senza speranza le valli che aveva disceso con orgogliosa sicurezza»*. L'Italia ha completato la sua unificazione nazionale.`,
      curiosity: `🚂 **Il Vagone di Compiègne**: L'armistizio che pose fine alla Grande Guerra fu firmato alle 5 del mattino dell'11 novembre 1918 all'interno di un vagone ristorante ferroviario nel bosco di Compiègne. Per una tragica beffa della storia, nel 1940 Adolf Hitler volle fare firmare la resa della Francia esattamente nello stesso vagone!`,
      alliances: {
        allies: ["Francia", "Regno Unito", "Stati Uniti", "Italia", "Giappone", "Belgio", "Serbia", "Grecia"],
        central: ["Germania (arresa l'11 nov)", "Austria-Ungheria (arresa il 3 nov)", "Impero Ottomano (arreso il 30 ott)", "Bulgaria (arresa il 29 sett)"],
        neutral: ["Spagna", "Svizzera", "Paesi Bassi", "Danimarca", "Svezia", "Norvegia"]
      },
      frontlines: [
        {
          id: "front-italy-1918",
          name: "Avanzata Trionfale di Vittorio Veneto",
          theater: "italiano",
          color: "#16a34a",
          svgPoints: [[420, 460], [450, 460], [470, 455], [490, 470], [510, 490]],
          description: "La liberazione del Trentino, del Friuli e l'ingresso a Trento e Trieste delle truppe italiane."
        },
        {
          id: "front-west-1918",
          name: "Offensiva dei Cento Giorni",
          theater: "occidentale",
          color: "#1d4ed8",
          svgPoints: [[285, 350], [315, 360], [335, 385], [350, 420], [360, 460]],
          description: "La ritirata precipitosa delle armate tedesche verso i confini della Germania."
        }
      ],
      movements: [
        {
          id: "mov-solstizio",
          name: "Battaglia del Solstizio (Respingimento sul Piave)",
          theater: "italiano",
          side: "allies",
          svgPoints: [[460, 510], [470, 500], [480, 490]],
          description: "L'esercito italiano ricaccia gli austriaci oltre il Piave infliggendo loro perdite irreparabili."
        },
        {
          id: "mov-vittorio-veneto",
          name: "Avanzata di Vittorio Veneto verso Trento e Trieste",
          theater: "italiano",
          side: "allies",
          svgPoints: [[465, 510], [475, 480], [490, 470], [510, 490]],
          description: "Sfondamento totale delle armate di Diaz e liberazione delle terre irredente."
        },
        {
          id: "mov-cento-giorni",
          name: "Offensiva dei Cento Giorni Alleata",
          theater: "occidentale",
          side: "allies",
          svgPoints: [[300, 395], [330, 380], [355, 370]],
          description: "L'avanzata finale guidata da Foch con oltre 1.000 carri armati e 2 milioni di fanti americani."
        }
      ],
      battles: [
        {
          id: "solstizio",
          name: "Battaglia del Solstizio (Seconda del Piave)",
          date: "15 - 24 Giugno 1918",
          svgPos: [465, 510],
          theater: "italiano",
          summary: "Offensiva finale dell'esercito asburgico per piegare l'Italia. Gli italiani resistono e contrattaccano, mentre il Piave in piena travolge le truppe austriache.",
          significance: "Spezza la spina dorsale dell'esercito austro-ungarico; Gabriele d'Annunzio la ribattezza 'Battaglia del Solstizio'.",
          curiosityFact: "In questa battaglia cadde il leggendario asso dell'aviazione italiana Francesco Baracca, abbattuto sul Montello con 34 vittorie aeree."
        },
        {
          id: "vittorio-veneto",
          name: "Battaglia di Vittorio Veneto",
          date: "24 Ottobre - 4 Novembre 1918",
          svgPos: [475, 485],
          theater: "italiano",
          summary: "Offensiva generale lanciata da Diaz: i fanti passano il Piave, sfondano le difese e catturano 400.000 prigionieri.",
          significance: "Trionfo finale d'Italia: decreta il crollo definitivo dell'Impero Asburgico e porta all'Armistizio di Villa Giusti.",
          curiosityFact: "I bersaglieri ciclisti entrarono a Trieste sbarcando dal cacciatorpediniere 'Audace' tra l'abbraccio della popolazione in festa."
        },
        {
          id: "amiens",
          name: "Battaglia di Amiens",
          date: "8 - 12 Agosto 1918",
          svgPos: [290, 395],
          theater: "occidentale",
          summary: "Attacco a sorpresa alleato guidato da oltre 500 carri armati con sfondamento profondo delle difese tedesche.",
          significance: "Definito dal generale tedesco Ludendorff 'il giorno più nero dell'esercito tedesco', segna l'inizio della ritirata irreversibile.",
          curiosityFact: "I carri armati alleati avanzarono così rapidamente da catturare lo stato maggiore di un corpo d'armata tedesco mentre faceva colazione!"
        },
        {
          id: "meuse-argonne",
          name: "Offensiva della Mosa-Argonne",
          date: "Settembre - Novembre 1918",
          svgPos: [325, 420],
          theater: "occidentale",
          summary: "La più grande operazione militare della storia statunitense: oltre 1,2 milioni di soldati americani all'assalto della foresta delle Argonne.",
          significance: "Taglia le ferrovie di rifornimento tedesche e costringe l'alto comando del Kaiser a chiedere la resa.",
          curiosityFact: "In questa battaglia combatté il soldato Alvin York, che quasi da solo catturò 132 soldati tedeschi e 32 mitragliatrici."
        }
      ]
    },

    // ----------------------------------------------------
    // FASE 6: 1919
    // ----------------------------------------------------
    {
      id: "1919",
      year: "1919",
      title: "1919: I Trattati di Pace, i 14 Punti di Wilson e la Nuova Mappa d'Europa",
      period: "Gennaio 1919 - 1920",
      tagline: "I 14 punti di Wilson, la caduta dei quattro imperi e la nascita dei nuovi confini",
      narrative: `Nel gennaio 1919 i rappresentanti delle nazioni vincitrici si riuniscono a Parigi nella Reggia di Versailles per ridisegnare la carta del mondo. Quattro secolari imperi sono crollati: l'**Impero Tedesco**, l'**Impero Austro-Ungarico**, l'**Impero Russo** e l'**Impero Ottomano**.
      Nasce la **Società delle Nazioni** (antenata dell'ONU), voluta dal presidente americano Woodrow Wilson per garantire la risoluzione pacifica dei conflitti. Tuttavia, la conferenza è dominata dalla volontà punitiva di Francia e Regno Unito: alla Germania vengono imposte condizioni umilianti (perdita di territori, divieto di riarmo, cifre astronomiche di risarcimento), gettando i semi di risentimento che condurranno alla Seconda Guerra Mondiale.`,
      italianPerspective: `L'Italia siede al tavolo dei quattro grandi vincitori con il presidente del consiglio Vittorio Emanuele Orlando e il ministro Sidney Sonnino. Con i trattati di Saint-Germain e Rapallo ottiene **Trentino, Alto Adige (fino al Brennero), Trieste, Gorizia e l'Istria**, completando l'unificazione risorgimentale.
      Tuttavia la città di Fiume e la Dalmazia vengono negate all'Italia per essere assegnate al neonato Regno di Jugoslavia. Nasce il mito della **«Vittoria Mutilata»**, cavalcato dai nazionalisti e da Gabriele d'Annunzio, che nel settembre 1919 occuperà Fiume alla guida di legionari armati.`,
      curiosity: `🗺️ **La Mappa Rivoluzionata**: Guarda la differenza sulla mappa: nascono dal nulla stati indipendenti come la Polonia (rinata dopo oltre un secolo!), la Cecoslovacchia, la Jugoslavia, la Finlandia, l'Estonia, la Lettonia e la Lituania, mentre l'Austria e l'Ungheria diventano due piccole repubbliche separate.`,
      alliances: {
        allies: ["Nazioni firmatarie dei Trattati di Pace (Francia, UK, Italia, USA, Giappone)"],
        central: ["Stati firmatari delle rese (Germania di Weimar, Repubblica d'Austria, Ungheria)"],
        neutral: []
      },
      frontlines: [],
      movements: [],
      battles: [
        {
          id: "versailles",
          name: "Trattato di Versailles",
          date: "28 Giugno 1919",
          svgPos: [270, 425],
          theater: "occidentale",
          summary: "Firmato nella celebre Galleria degli Specchi della reggia di Versailles esattamente 5 anni dopo l'attentato di Sarajevo.",
          significance: "Dichiara la Germania unica responsabile della guerra e la condanna a risarcimenti colossali e alla perdita di tutte le colonie.",
          curiosityFact: "Il generale francese Ferdinand Foch commentò con inquietante precisione: 'Questa non è una pace, è un armistizio per vent'anni'."
        },
        {
          id: "saint-germain",
          name: "Trattato di Saint-Germain (Fine Austria-Ungheria)",
          date: "10 Settembre 1919",
          svgPos: [265, 423],
          theater: "occidentale",
          summary: "Sancisce la dissoluzione totale dell'impero degli Asburgo. L'Austria diventa una piccola repubblica e cede Trentino, Alto Adige e Trieste all'Italia.",
          significance: "L'Italia completa la sua unificazione risorgimentale raggiungendo i confini naturali dell'arco alpino.",
          curiosityFact: "Il trattato proibiva espressamente all'Austria di unirsi alla Germania (l'Anschluss che Hitler imporrà nel 1938)."
        },
        {
          id: "impresa-fiume",
          name: "L'Impresa di Fiume di Gabriele d'Annunzio",
          date: "12 Settembre 1919",
          svgPos: [505, 510],
          theater: "italiano",
          summary: "Il poeta-soldato guida 2.500 legionari volontari e occupa la città adriatica contesa proclamando la Reggenza del Carnaro.",
          significance: "Espressione plateale della protesta contro la 'vittoria mutilata'; anticipa rituali, discorsi dal balcone e motti del fascismo.",
          curiosityFact: "D'Annunzio governò la città per oltre un anno prima che l'esercito italiano lo sgombrasse a cannonate nel 'Natale di Sangue' del 1920."
        }
      ]
    }
  ],

  // =========================================================================
  // LABORATORIO DI DE-COSTRUZIONE STORICA (REA - REVERSE ENGINEER ANYTHING)
  // =========================================================================
  causesLab: {
    title: "Laboratorio di De-Costruzione Storica: Le Cause della Guerra",
    subtitle: "Smonta gli ingranaggi che portarono al conflitto ed esplora il domino del luglio 1914",
    gears: [
      {
        id: "imperialismo",
        title: "1. Imperialismo e Corsa Coloniale",
        badge: "Causa Economico-Territoriale",
        icon: "🌍",
        description: `Tra il 1870 e il 1914 le potenze europee si spartiscono l'Africa e l'Asia. La Germania, diventata la prima potenza industriale del continente, arriva tardi alla spartizione coloniale e pretende il suo "posto al sole". Ciò genera continue frizioni con Gran Bretagna e Francia (crisi marocchine del 1905 e 1911).`,
        question: "Perché l'economia spinse alla guerra?",
        answer: "Le grandi industrie cercavano materie prime a basso costo (ferro, carbone, gomma, petrolio) e mercati protetti dove vendere i propri prodotti senza concorrenza."
      },
      {
        id: "militarismo",
        title: "2. Militarismo e Corsa agli Armamenti",
        badge: "Causa Militare-Industriale",
        icon: "⚙️",
        description: `I colossi industriali dell'acciaio e delle armi (Krupp in Germania, Schneider in Francia, Vickers e Armstrong in Inghilterra, Ansaldo in Italia) fanno affari d'oro producendo cannoni, corazzate e mitragliatrici. Gli stati maggiori militari acquistano un'influenza enorme sulla politica e convincono i governi che la guerra sarà breve e che chi attacca per primo vincerà.`,
        question: "Cosa significava 'corsa agli armamenti'?",
        answer: "Ogni volta che una nazione costruiva una nuova corazzata o ampliava l'esercito, i paesi rivali si sentivano minacciati e ne costruivano il doppio per non restare indietro."
      },
      {
        id: "nazionalismo",
        title: "3. Nazionalismo Radicale e Propaganda",
        badge: "Causa Culturale-Ideologica",
        icon: "🚩",
        description: `Il patriottismo dell'Ottocento si trasforma in nazionalismo aggressivo: l'esaltazione della propria nazione a discapito delle altre, viste come inferiori o nemiche. La scuola, i giornali e la propaganda inculcano nei giovani il culto della patria armata. Movimenti culturali come il Futurismo (Filippo Tommaso Marinetti) arrivano a definire la guerra «sola igiene del mondo».`,
        question: "Quali erano i principali nazionalismi rivali?",
        answer: "Il 'Revanscismo' francese contro la Germania; il 'Pangermanesimo' tedesco; il 'Panslavismo' russo nei Balcani; l'Irredentismo italiano per Trento e Trieste."
      },
      {
        id: "alleanze",
        title: "4. Il Sistema Rigido delle Alleanze Segrete",
        badge: "Causa Diplomatica-Strutturale",
        icon: "🤝",
        description: `L'Europa si divide in due blocchi contrapposti legati da trattati di mutua difesa: la Triplice Alleanza (1882) e la Triplice Intesa (1907). Questi accordi prevedevano clausole automatiche: se un paese veniva aggredito, tutti gli alleati dovevano entrare in guerra in suo soccorso. Bastava una singola scintilla per incendiare l'intero continente.`,
        question: "Qual era il difetto mortale di questo sistema?",
        answer: "Tolse ogni margine di trattativa diplomatica: un litigio regionale tra Austria e Serbia nei Balcani obbligò automaticamente tutte le maggiori potenze del mondo a scendere sul campo di battaglia."
      }
    ],
    dominoSteps: [
      {
        step: 1,
        date: "28 Giugno 1914",
        actor: "Sarajevo (Bosnia)",
        flag: "🇧🇦",
        title: "L'Attentato di Sarajevo",
        text: "Lo studente nazionalista serbo-bosniaco Gavrilo Princip spara all'arciduca erede al trono d'Austria Francesco Ferdinando e alla moglie Sofia.",
        impact: "L'Austria-Ungheria accusa il governo serbo di complicità e decide di dare una 'lezione definitiva' a Belgrado."
      },
      {
        step: 2,
        date: "23 Luglio 1914",
        actor: "Vienna (Austria)",
        flag: "🇦🇹",
        title: "L'Ultimatum alla Serbia",
        text: "L'Austria invia alla Serbia un ultimatum rigidissimo con condizioni umilianti, tra cui la partecipazione di poliziotti austriaci alle indagini a Belgrado.",
        impact: "La Serbia accetta quasi tutti i punti tranne quello sulla polizia straniera sul proprio suolo: per l'Austria è il pretesto cercato."
      },
      {
        step: 3,
        date: "28 Luglio 1914",
        actor: "Austria dichiara guerra",
        flag: "⚔️",
        title: "Dichiarazione di Guerra & Mobilitazione Russa",
        text: "L'Austria dichiara guerra alla Serbia e bombarda Belgrado. Lo Zar Nicola II di Russia ordina la mobilitazione generale per proteggere i 'fratelli slavi'.",
        impact: "La mobilitazione russa mette in allarme l'Impero Tedesco che si sente accerchiato."
      },
      {
        step: 4,
        date: "1-3 Agosto 1914",
        actor: "Berlino & Parigi",
        flag: "🇩🇪 🇫🇷",
        title: "La Germania attacca Russia e Francia",
        text: "La Germania intima alla Russia di fermare la mobilitazione. Al rifiuto dello Zar, dichiara guerra alla Russia (1 agosto) e alla Francia (3 agosto).",
        impact: "Scatta il Piano Schlieffen: per piegare la Francia in fretta, l'esercito tedesco invade il Belgio neutrale."
      },
      {
        step: 5,
        date: "4 Agosto 1914",
        actor: "Londra (Regno Unito)",
        flag: "🇬🇧",
        title: "La Gran Bretagna scende in campo",
        text: "La violazione della neutralità del Belgio spinge il governo britannico a dichiarare guerra alla Germania per difendere i patti internazionali.",
        impact: "Tutte le grandi potenze europee, con i loro sterminati imperi coloniali, sono ora in guerra."
      },
      {
        step: 6,
        date: "2 Agosto 1914",
        actor: "Roma (Italia)",
        flag: "🇮🇹",
        title: "L'Italia proclama la Neutralità",
        text: "L'Italia dichiara di non voler intervenire al fianco di Austria e Germania: il patto della Triplice Alleanza era puramente difensivo e l'Austria ha attaccato per prima.",
        impact: "Si apre in Italia un acceso dibattito di dieci mesi tra neutralisti e interventisti che culminerà con l'ingresso a fianco dell'Intesa nel maggio 1915."
      }
    ],
    whatIfScenarios: [
      {
        title: "E se l'Austria non avesse inviato l'ultimatum?",
        hypothesis: "Se Francesco Giuseppe avesse cercato una condanna diplomatica internazionale a Ginevra invece di usare la mano di ferro...",
        reality: "Le cancellerie europee stavano già preparando piani di guerra da oltre un decennio. Senza Sarajevo, una guerra generale sarebbe comunque probabilmente scoppiata entro pochi anni alla crisi balcanica o coloniale successiva."
      },
      {
        title: "E se l'Italia fosse rimasta neutrale per tutta la guerra?",
        hypothesis: "Se la linea pacifista e negoziatrice di Giovanni Giolitti avesse prevalso in Parlamento...",
        reality: "L'Italia avrebbe risparmiato 650.000 giovani caduti e un immenso debito economico. Giolitti sosteneva che con la neutralità l'Austria avrebbe comunque ceduto il Trentino in cambio del non intervento. Tuttavia l'Italia non avrebbe seduto tra i grandi vincitori a Versailles e le tensioni sociali del dopoguerra sarebbero state diverse."
      },
      {
        title: "E se i tedeschi avessero vinto la Marna nel 1914?",
        hypothesis: "Se il Piano Schlieffen fosse riuscito e Parigi fosse caduta a settembre 1914...",
        reality: "La Francia avrebbe dovuto capitolare in poche settimane, la Russia sarebbe rimasta isolata a est e la guerra si sarebbe conclusa entro l'inverno del 1914 con una completa egemonia tedesca sull'Europa continentale, evitando la mostruosa guerra di trincea."
      }
    ]
  },

  // =========================================================================
  // ARCHIVIO DELLE FONTI STORICHE E LETTERARIE (BE AMBITIOUS)
  // =========================================================================
  historicalSources: {
    title: "Archivio delle Fonti Storiche, Letterarie e Fotografiche",
    subtitle: "Esplora i documenti originali, le poesie dal fronte e le lettere dei soldati come un vero storico",
    categories: [
      {
        id: "primarie",
        name: "📜 Fonti Storiche Primarie (Documenti Ufficiali)",
        documents: [
          {
            title: "Il Telegramma dell'Ultimatum Austriaco alla Serbia",
            date: "23 Luglio 1914",
            origin: "Ministero degli Esteri Imperiale, Vienna",
            summary: "Il documento che accese la miccia della guerra: 10 richieste perentorie tra cui la censura di ogni giornale serbo e l'intervento di giudici austriaci a Belgrado.",
            quote: `«Il Governo Reale Serbo si impegnerà a sopprimere qualsiasi pubblicazione che inciti all'odio e al disprezzo della Monarchia austro-ungarica... e ad accettare la collaborazione in Serbia di organi delegati del Governo I. e R. per la soppressione del movimento sovversivo... Risposta entro le ore 18 di sabato 25 luglio.»`,
            didacticNote: "L'Austria formulò l'ultimatum appositamente per renderlo inaccettabile a uno stato sovrano, cercando la scusa per dichiarare guerra."
          },
          {
            title: "Il Patto Segreto di Londra",
            date: "26 Aprile 1915",
            origin: "Firmato a Londra da Italia, Gran Bretagna, Francia e Russia",
            summary: "L'accordo segreto che decise il destino dell'Italia: in cambio dell'entrata in guerra contro Vienna entro 30 giorni, all'Italia venivano garantiti ampi territori.",
            quote: `«Art. 4: Nel trattato di pace l'Italia otterrà il Trentino, il Tirolo cisalpino con la sua frontiera geografica e naturale (la frontiera del Brennero), nonché Trieste, le contee di Gorizia e Gradisca, l'intera Istria fino al Quarnaro... e parte della Dalmazia.»`,
            didacticNote: "Il patto fu tenuto segreto al popolo e alla maggioranza del Parlamento italiano. Fu reso pubblico solo dai bolscevichi russi nel 1917 dopo la rivoluzione."
          },
          {
            title: "Il Bando di Decimazione del Generale Luigi Cadorna",
            date: "1 Novembre 1916",
            origin: "Comando Supremo del Regio Esercito",
            summary: "L'ordine del comandante supremo che imponeva la fucilazione sommaria per i reparti che esitavano davanti al fuoco nemico.",
            quote: `«Il superiore ha il sacro dovere di passare immediatamente per le armi i recalcitranti e i vili... Chiunque tenti di retrocedere o non dimostri sufficiente aggressività sarà senz'altro fucilato. Ricordo che per i reparti che si siano macchiati di viltà è sancita la decimazione.»`,
            didacticNote: "Durante il comando di Cadorna furono condannati a morte circa 750 soldati italiani e centinaia furono passati per le armi senza processo mediante decimazione (estrazione a sorte di un soldato ogni dieci)."
          },
          {
            title: "Il Bollettino della Vittoria (Bollettino n. 1268)",
            date: "4 Novembre 1918",
            origin: "Firmato dal Generale Armando Diaz, Villa Giusti",
            summary: "Il proclama ufficiale che annunciò alla nazione italiana e al mondo la vittoria finale e la fine delle ostilità.",
            quote: `«La guerra contro l'Austria-Ungheria che, sotto l'alta guida di S.M. il Re, duce supremo, l'Esercito Italiano, inferiore per numero e per mezzi, iniziò il 24 maggio 1915 e con fede incrollabile condusse per 41 mesi, è vinta... I resti di quello che fu uno dei più potenti eserciti del mondo risalgono in disordine e senza speranza le valli che avevano disceso con orgogliosa sicurezza.»`,
            didacticNote: "Il testo fu affisso in tutte le piazze d'Italia e inciso su lastre di bronzo (fuse con il metallo dei cannoni austriaci catturati) in ogni municipio del Paese."
          }
        ]
      },
      {
        id: "letterarie",
        name: "✍️ Fonti Letterarie e Poetiche dal Fronte",
        documents: [
          {
            title: "«Veglia» - Giuseppe Ungaretti",
            date: "Cima Quattro, 23 Dicembre 1915",
            author: "Giuseppe Ungaretti (Fante del 19° Reggimento Fanteria)",
            summary: "Scritta in una trincea del Carso durante una notte passata accanto a un compagno ucciso dai cecchini.",
            quote: `«Un'intera nottata / buttato vicino / a un compagno / massacrato / con la sua bocca / digrignata / volta al plenilunio / con la congestione / delle sue mani / penetrata / nel mio silenzio / ho scritto / lettere piene d'amore. // Non sono mai stato / tanto / attaccato alla vita.»`,
            didacticNote: "Ungaretti rivoluziona la poesia: versi brevissimi ed essenziali. Di fronte alla morte brutale del compagno, il poeta riscopre un disperato e potente attaccamento alla vita."
          },
          {
            title: "«San Martino del Carso» - Giuseppe Ungaretti",
            date: "Valloncello dell'Albero Isolato, 27 Agosto 1916",
            author: "Giuseppe Ungaretti",
            summary: "La distruzione fisica di un paese del Carso trasformata in simbolo del dolore interiore per la perdita di tanti compagni.",
            quote: `«Di queste case / non è rimasto / che qualche / brandello di muro // Di tanti / che mi corrispondevano / non è rimasto / neppure tanto // Ma nel cuore / nessuna croce manca // È il mio cuore / il paese più straziato.»`,
            didacticNote: "Il villaggio di San Martino fu raso al suolo dai proiettili d'artiglieria; ma per il fante il cimitero vero è la propria memoria, dove custodisce una croce per ciascun amico caduto."
          },
          {
            title: "«Soldati» - Giuseppe Ungaretti",
            date: "Bosco di Courton, Luglio 1918",
            author: "Giuseppe Ungaretti",
            summary: "La più celebre poesia sulla condizione umana del soldato nella storia della letteratura mondiale.",
            quote: `«Si sta come / d'autunno / sugli alberi / le foglie.»`,
            didacticNote: "Appena quattro versi che riassumono la fragilità totale del fante: basta un colpo di vento (una pallottola, una scheggia) per cadere per terra senza vita."
          },
          {
            title: "«Un anno sull'Altipiano» - Emilio Lussu",
            date: "Estate 1916 (Altopiano di Asiago)",
            author: "Emilio Lussu (Ufficiale della Brigata Sassari)",
            summary: "Il celebre episodio in cui l'ufficiale decide di non sparare a un nemico inerme che beve una tazza di caffè.",
            quote: `«Un ufficiale austriaco venne verso di noi, accese una sigaretta e prese a sorseggiare una tazza di caffè... Avevo il fucile puntato sul suo petto. Ero lì per sparare, era il mio dovere di guerra. Ma mi accorsi che non potevo. Quell'uomo beveva il caffè come me la mattina; era un uomo come me. Ucciderlo così a sangue freddo mi parve un assassinio.»`,
            didacticNote: "Lussu dimostra come, al di là dell'odio propagandato dai comandi, tra i fanti semplici riaffiorasse la comune condizione umana."
          },
          {
            title: "«Dulce et Decorum Est» - Wilfred Owen",
            date: "Fronte Occidentale, 1917",
            author: "Wilfred Owen (Sottotenente britannico, caduto nel 1918)",
            summary: "La cruda descrizione di un soldato che non riesce a indossare la maschera antigas in tempo e annega nella nube tossica.",
            quote: `«Gas! Gas! Veloci, ragazzi! — Un brancolare frenetico per infilare i goffi elmetti appena in tempo... Se anche tu potessi vedere i suoi occhi bianchi contorcersi nel viso... amico mio, non racconteresti con tanta enfasi ai bambini desiderosi di gloria la vecchia menzogna: Dulce et decorum est pro patria mori.»`,
            didacticNote: "Owen smentisce il motto latino di Orazio: morire soffocati dal gas tossico nel fango non ha nulla di 'dolce e decoroso'; è solo un orrore."
          }
        ]
      },
      {
        id: "lettere",
        name: "✉️ Lettere Autentiche dei Soldati alla Famiglia",
        documents: [
          {
            title: "Lettera del Fante Adalgiso alla Madre",
            date: "Fronte dell'Isonzo, Ottobre 1916",
            author: "Adalgiso Rovai (21 anni, contadino toscano)",
            summary: "Scritta a matita su un foglio di quaderno bagnato dalla pioggia, sfuggita alle forbici della censura militare.",
            quote: `«Cara mamma, ti scrivo da dentro un fosso dove la terra trema giorno e notte per le cannonate. Qui piove sempre e abbiamo il fango fin sopra le ginocchia. I topi camminano sopra le coperte mentre dormiamo se si può chiamare dormire. Mamma mia prega per me, che se torno a casa ti prometto che non mi lamento più di niente nella vita.»`,
            didacticNote: "Molti fanti erano analfabeti o semi-analfabeti e si facevano scrivere le lettere dai compagni più istruiti o dai cappellani militari."
          },
          {
            title: "Il Testamento Spirituale del Sottotenente Adolfo Ferrero",
            date: "Monte Ortigara, 18 Giugno 1917",
            author: "Adolfo Ferrero (20 anni, alpino torinese)",
            summary: "Lettera d'addio infilata nel taschino della giubba prima dell'assalto mortale sull'Ortigara, ritrovata intatta nel 1958.",
            quote: `«Mamma adorata, quando riceverai questa mia lettera, io non sarò più. Ho fatto il mio dovere di soldato e di italiano. Non piangete per me: muoio sereno a vent'anni, col vostro nome sulle labbra e l'Italia nel cuore. Bacia per me papà e i miei fratelli. Arrivederci in Paradiso.»`,
            didacticNote: "La battaglia dell'Ortigara fu definita il 'calvario degli Alpini': in dieci giorni caddero oltre 25.000 soldati per conquistare una cima sterile poi ripersa subito."
          },
          {
            title: "Lettera di Franz, Fante Ungherese sul Carso",
            date: "Cima del Monte San Michele, Novembre 1915",
            author: "Franz Janos (22 anni, esercito austro-ungarico)",
            summary: "Ritrovata nelle tasche di un soldato nemico caduto: dimostra gli stessi identici sentimenti al di là della divisa.",
            quote: `«Mia dolce Ilona, qui sulle rocce del Carso non c'è una goccia d'acqua e i sassi volano come proiettili quando scoppiano le granate degli italiani. Di notte sentiamo i loro lamenti a pochi metri da noi: chiamano la mamma nella loro lingua, esattamente come facciamo noi. Mi chiedo perché dobbiamo ammazzarci tra poveri cristi che vorrebbero solo tornare a zappare la propria terra.»`,
            didacticNote: "Le lettere dei nemici rivelano che fanti italiani e austriaci condividevano la medesima sorte di sofferenza e disperazione."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // DENTRO LA TRINCEA: ANATOMIA DELL'INFERNO (GOD'S EYE VIEW SECTION)
  // =========================================================================
  trenchInteractive: {
    title: "Dentro la Trincea: Anatomia di un Sistema di Posizione",
    subtitle: "Esplora lo spaccato di un fossato di prima linea e scopri come vivevano i soldati",
    elements: [
      {
        id: "terra-nessuno",
        name: "1. La Terra di Nessuno (No Man's Land)",
        icon: "💀",
        depth: "Da 50 metri a 1 km di distanza tra i due fronti",
        description: "Lo spazio spettrale che separava le trincee nemiche. Terreno devastato da milioni di crateri d'artiglieria ricolmi d'acqua putrida, tronchi d'albero carbonizzati e grovigli di reticolati.",
        danger: "Uscire allo scoperto di giorno significava morte certa per il tiro dei cecchini; di notte vi si avventuravano le pattuglie di perlustrazione.",
        didacticCuriosity: "Spesso i cadaveri dei caduti durante gli assalti non potevano essere recuperati e rimanevano lì per mesi sotto gli occhi dei compagni."
      },
      {
        id: "reticolati",
        name: "2. I Reticolati di Filo Spinato",
        icon: "⛓️",
        depth: "Fasce larghe da 5 a 15 metri",
        description: "Matasse fitte e robuste di filo di ferro con aculei d'acciaio, montate su paletti di legno o 'a coda di porco' avvitati nel terreno.",
        danger: "Era il primo ostacolo che bloccava i fanti all'assalto, rendendoli facili bersagli per le mitragliatrici.",
        didacticCuriosity: "I guastatori dovevano strisciare di notte con cesoie giganti o lanciare tubi esplosivi per aprire piccoli varchi prima dell'attacco."
      },
      {
        id: "parapetto",
        name: "3. Il Parapetto con Sacchi di Sabbia",
        icon: "🧱",
        depth: "Altezza: 40 - 60 cm sopra il ciglio del fosso",
        description: "Muro di protezione realizzato con sacchi di iuta riempiti di terra e pietre, progettato per assorbire le pallottole e le schegge.",
        danger: "Se una granata d'artiglieria colpiva il parapetto, i sassi volavano come schegge mortali moltiplicando le ferite.",
        didacticCuriosity: "Nei parapetti venivano inserite feritoie d'acciaio con sportellino richiudibile per consentire alle vedette di osservare senza esporsi."
      },
      {
        id: "gradino-tiro",
        name: "4. Il Gradino di Fuoco (Banquette)",
        icon: "🪜",
        depth: "Rialzo di terra alto 40 cm",
        description: "Un gradino continuo scavato lungo la parete anteriore della trincea. I soldati vi salivano per fare la guardia o sparare con il fucile.",
        danger: "All'ordine di 'Fuori tutti!' dato dal fischietto dell'ufficiale, i fanti poggiavano il piede sul gradino per scavalcare il parapetto e lanciarsi all'assalto.",
        didacticCuriosity: "I soldati usavano periscopi a specchio inclinati per sbirciare oltre il parapetto senza sollevare la testa sopra la trincea."
      },
      {
        id: "passerelle-fango",
        name: "5. Il Camminamento e le Passerelle (Duckboards)",
        icon: "🪵",
        depth: "Profondità trincea: circa 2 metri",
        description: "Il fondo del fossato era una palude perenne di fango melmoso. Per potersi muovere venivano posate passerelle di assi di legno a griglia.",
        danger: "Il fango continuo provocava il terribile 'piede da trincea' (cancrena da umidità e freddo) che portava spesso all'amputazione.",
        didacticCuriosity: "Le trincee non erano mai scavate in linea retta, ma sempre a zig-zag: se una granata cadeva dentro, le schegge non potevano percorrere più di pochi metri."
      },
      {
        id: "ricovero-caverna",
        name: "6. Il Ricovero Sotterraneo (Dugout)",
        icon: "🕳️",
        depth: "Da 3 a 10 metri sotto terra",
        description: "Bunker buio e umido scavato nel fianco della trincea o nella roccia viva, foderato di tronchi e travi d'acciaio.",
        danger: "Offriva riparo dai colpi d'artiglieria leggera, ma un colpo diretto di grosso calibro poteva seppellire vivi tutti gli occupanti.",
        didacticCuriosity: "L'aria nei ricoveri era irrespirabile: fumo di candele, puzza di muffa, sudore e milioni di pulci e pidocchi che non davano tregua."
      },
      {
        id: "trincea-comunicazione",
        name: "7. I Camminamenti di Collegamento",
        icon: "↔️",
        depth: "Centinaia di metri di fossati di raccordo",
        description: "Trincee secondarie trasversali che collegavano la prima linea con le retrovie, i depositi di munizioni e i posti di medicazione.",
        danger: "Vi transitavano a fatica i barellieri con i feriti gravi e i fanti carichi di marmitte pesanti con il rancio freddo.",
        didacticCuriosity: "Erano così strette e tortuose che per orientarsi i soldati assegnavano loro nomi di vie cittadine ('Corso Roma', 'Via del Paradiso')."
      },
      {
        id: "mitragliatrice",
        name: "8. La Piazzola della Mitragliatrice",
        icon: "🎯",
        depth: "Nido blindato corazzato",
        description: "Postazione fortificata mimetizzata che ospitava l'arma regina della Grande Guerra (Maxim, Schwarzlose o Fiat-Revelli).",
        danger: "Una singola mitragliatrice sparava 500-600 colpi al minuto, falciando un'intera compagnia d'assalto in pochi istanti.",
        didacticCuriosity: "Le canne delle mitragliatrici si surriscaldavano così tanto da richiedere manicotti pieni d'acqua bollente: a volte i soldati vi cuocevano il tè!"
      }
    ]
  },

  // =========================================================================
  // NELLO ZAINO DEL FANTE E LE GRANDI MARCE
  // =========================================================================
  marchAndKit: {
    title: "Nello Zaino del Fante: 35 kg di Sofferenza e le Grandi Marce",
    subtitle: "Scopri cosa portava sulle spalle un fante della Grande Guerra e la fatica delle marce alpine",
    backpackWeightKg: 35,
    items: [
      {
        name: "Fucile Carcano Modello 91 con Baionetta",
        weight: "4,3 kg",
        weightNum: 4.3,
        description: "Il fucile d'ordinanza della fanteria italiana: calibro 6,5 mm con otturatore girevole-scorrevole e caricatore da 6 colpi. La baionetta a sciabola era lunga 30 cm.",
        icon: "🗡️"
      },
      {
        name: "Giberne in cuoio con 90 Cartucce",
        weight: "2,5 kg",
        weightNum: 2.5,
        description: "Due borse di cuoio grigioverde agganciate al cinturone contenenti i caricatori di scorta per il combattimento.",
        icon: "🎒"
      },
      {
        name: "Zaino in cuoio e pelo con Telaio",
        weight: "12,0 kg",
        weightNum: 12.0,
        description: "Pesante zaino contenente la coperta di lana ruvida, il telo-tenda individuale da unire a quello dei compagni, picchetti, biancheria di ricambio e lettere da casa.",
        icon: "📦"
      },
      {
        name: "Gavetta d'Alluminio e Razione K",
        weight: "3,5 kg",
        weightNum: 3.5,
        description: "La gavetta per il rancio, la tazza di metallo, due scatolette di 'carne simmenthal' o montone congelato e gallette secche dure come sassi.",
        icon: "🥫"
      },
      {
        name: "Vanghetta Individuale da Fanteria",
        weight: "1,5 kg",
        weightNum: 1.5,
        description: "Piccola vanga d'acciaio infilata a lato dello zaino: vitale per scavarsi una buca nella terra entro pochi minuti sotto il tiro dell'artiglieria.",
        icon: "⛏️"
      },
      {
        name: "Maschera Antigas Polivalente con Custodia",
        weight: "1,8 kg",
        weightNum: 1.8,
        description: "Maschera in gomma e tessuto con filtro a carboni attivi. Indossarla toglieva il respiro e appannava la vista, ma salvava la vita dal fosgene e dall'iprite.",
        icon: "🤿"
      },
      {
        name: "Fiaschetta d'Acqua e Fiaschetta di Grappa",
        weight: "2,2 kg",
        weightNum: 2.2,
        description: "Una borraccia d'acqua (preziosissima sul Carso carsico privo di sorgenti) e una fiaschetta con distillato ad alta gradazione distribuito prima dell'assalto.",
        icon: "🍶"
      },
      {
        name: "Scarponi Chiodati e Fasce Mollettiere",
        weight: "2,4 kg",
        weightNum: 2.4,
        description: "Pesanti scarponi di cuoio rigido con suole piene di chiodi di ferro per fare presa sulle rocce, con strisce di panno di lana lunghe 2 metri avvolte attorno ai polpacci.",
        icon: "🥾"
      }
    ],
    forcedMarchesInfo: {
      distance: "Da 30 a 45 chilometri a piedi in una sola notte",
      conditions: "Sotto piogge battenti, fango fino alle caviglie o tormente di neve nelle Alpi",
      tactics: "Marce rigorosamente notturne: era severamente vietato accendere sigarette o fiammiferi per non essere avvistati dai ricognitori aerei nemici.",
      alpineFront: "Sulle mulattiere delle Dolomiti e del Monte Pasubio (come la celebre Strada delle 52 Gallerie), i soldati e gli alpini dovevano trasportare a braccia pezzi di cannone da centinaia di chili lungo cenge a picco sui burroni.",
      quote: "«Si camminava come sonnambuli, uno dietro l'altro con gli occhi semichiusi, aggrappati allo zaino di chi stava davanti per non cadere nei fossi» (Memorie di un fante della Brigata Catanzaro)."
    }
  },

  // =========================================================================
  // LA NOTTE DI NATALE E LA GUERRA COME FATTO UMANO
  // =========================================================================
  christmasTruceAndHumanity: {
    title: "La Notte di Natale e il Fatto Umano: Quando i Soldati si Scoprono Fratelli",
    subtitle: "Dalla tregua di Natale 1914 alle fraternizzazioni sul Carso: l'umanità che resiste alla guerra",
    westernFrontChristmas: {
      year: "24-25 Dicembre 1914",
      place: "Fronte Occidentale (Fiandre e Francia)",
      title: "La Notte in cui tacquero i Cannoni",
      story: `La vigilia di Natale del 1914 scende una fitta brina sulle Fiandre. Improvvisamente i colpi di fucile si diradano fino a cessare del tutto.
      Nelle trincee tedesche si accendono decine di piccole candele e spuntano piccoli alberi di Natale. I soldati bavaresi e sassoni iniziano a cantare **«Stille Nacht, heilige Nacht»**. Dalle trincee britanniche, sbalorditi, i soldati scozzesi rispondono intonando **«The First Noel»**.
      Un fante tedesco si alza disarmato oltre il parapetto gridando in inglese: *«You no fight, we no fight!»* (Se voi non sparate, noi non spariamo).
      In poche ore migliaia di soldati nemici si incontrano nella terra di nessuno: si stringono la mano, si mostrano le fotografie di mogli e figli, si scambiano bottoni delle giubbe, sigarette, barrette di cioccolato e marmellata.
      Tra i crateri di bomba viene persino improvvisata una partita di calcio con una palla di stracci. La mattina di Natale i cappellani celebrano una sepoltura comune per i compagni caduti, leggendo insieme il Salmo 23.`,
      commandReaction: `I generali di entrambi gli schieramenti rimasero terrorizzati da questa tregua: se i soldati fraternizzavano, chi avrebbe più combattuto? Negli anni successivi furono emanati ordini severissimi: qualunque tentativo di tregua sarebbe stato punito con il bombardamento delle proprie stesse trincee e la condanna a morte immediata per alto tradimento.`
    },
    italianFrontFraternization: {
      year: "Natale 1915 e Pasqua 1916",
      place: "Fronte Italiano (Fiume Isonzo, Monte San Michele e Carso)",
      title: "«Fratello nemico, butta la pagnotta!»",
      story: `Anche sul fronte italo-austriaco si verificarono commoventi episodi di tregua spontanea. Sul Carso e lungo le rive sassose dell'Isonzo le trincee erano così vicine che i soldati potevano sentirsi respirare e parlare.
      Molti soldati dell'esercito asburgico erano sloveni, croati o ungheresi che conoscevano parole d'italiano o dialetti veneti. Nelle notti di Natale e durante le feste religiose, da una feritoia all'altra partivano grida: *«Taliano! Oggi è festa, non sparare! Venite a bere un goccio di grappa!»*.
      I fanti lanciavano pietre legate con pacchetti di tabacco, pagnotte di pane bianco o fiaschette di distillato oltre i reticolati. In alcuni settori del Trentino soldati italiani e kaiserjäger austriaci concordarono taciti 'orari di tregua' per consentire a entrambi di andare a prendere l'acqua alla fontana senza essere bersagliati.`,
      commandReaction: `Il generale Luigi Cadorna reagì con pugno di ferro spietato: emanò circolari che imponevano di aprire immediatamente il fuoco d'artiglieria se il nemico accennava a gesti amichevoli, ordinando inchieste e processi sommari contro interi battaglioni sospettati di 'intelligenza col nemico'.`
    },
    shellShock: {
      title: "Lo 'Scemo di Guerra' (Shell Shock): Il Trauma Invisibile",
      description: `Sottoposti per settimane al rombo ininterrotto dei bombardamenti d'artiglieria e alla vista di corpi dilaniati, decine di migliaia di fanti persero l'equilibrio mentale.
      Manifestavano tremori incontrollabili del corpo, cecità o sordità isterica, perdita della parola e sguardi vitrei persi nel vuoto.
      All'epoca la medicina militare ignorava il trauma psicologico da stress post-traumatico: i comandi consideravano questi giovani distrutti come 'simulatori', 'codardi' o 'imbecilli' (da cui l'espressione popolare 'scemo di guerra') e li punivano con torture, elettroshock dolorosissimi nei manicomi militari o perfino con la fucilazione al petto.`,
      humanLesson: "La Grande Guerra ha dimostrato che le ferite della mente sono profonde e devastanti quanto quelle provocate dal piombo e dalle granate."
    },
    soldierDiaryInteractive: [
      {
        chapter: "Capitolo 1: La Partenza (Maggio 1915)",
        date: "24 Maggio 1915",
        text: "Ho 19 anni e faccio il contadino a Vicenza. Ci hanno caricati sui vagoni bestiame gridando 'Viva l'Italia, si va a Trento!'. La gente nelle stazioni ci gettava fiori e pane. Io non sono mai uscito dal mio paese e ho paura, ma tutti dicono che torneremo a casa vincitori prima della vendemmia."
      },
      {
        chapter: "Capitolo 2: Il Battesimo del Fuoco sul Carso (Ottobre 1915)",
        date: "12 Ottobre 1915",
        text: "Non c'è niente di bello qui, solo pietre e fango. Oggi abbiamo dato l'assalto a una collina difesa dalle mitragliatrici. Il tenente ha fischiato e siamo corsi fuori urlando 'Savoia!'. In cinque secondi la metà della mia compagnia era a terra insanguinata. Non siamo arrivati nemmeno ai reticolati. Ho visto Luigi morire a un metro da me senza potergli chiudere gli occhi."
      },
      {
        chapter: "Capitolo 3: La Notte di Natale nelle Caverne (Dicembre 1916)",
        date: "25 Dicembre 1916",
        text: "Oggi è Natale. Mamma mi ha mandato una scatola con un po' di fichi secchi e una sciarpa di lana. Abbiamo diviso i fichi in quattro dentro la buca. Dall'altra parte gli austriaci cantavano una canzone che sembrava una ninna nanna. Per oggi nessuno ha sparato. Per qualche ora ci siamo ricordati che siamo tutti figli di donne che piangono a casa."
      },
      {
        chapter: "Capitolo 4: Il Fiume Sacro e i Ragazzi del '99 (Novembre 1917)",
        date: "15 Novembre 1917",
        text: "Dopo Caporetto abbiamo marciato per giorni senza dormire, lasciando zaini e cannoni sulle strade del Friuli. Ci siamo attestati sul Piave. Ieri sono arrivati i rinforzi: ragazzi del 1899, hanno appena 18 anni, hanno la faccia dei miei fratellini minori. Eppure tengono la posizione come vecchi lupi. Non faremo passare il nemico, costi quello che costi."
      },
      {
        chapter: "Capitolo 5: Il Silenzio della Pace (4 Novembre 1918)",
        date: "4 Novembre 1918, ore 15:00",
        text: "Alle tre del pomeriggio è scesa una quiete strana, totale. I cannoni non sparano più. Siamo usciti dalla trincea e ci siamo guardati l'un l'altro senza dire una parola, impolverati e distrutti. Abbiamo vinto, dicono. Ma chi mi ridarà Luigi, chi mi ridarà gli amici del paese? Ora voglio solo tornare a guardare i campi e la terra che cresce."
      }
    ]
  },

  // =========================================================================
  // I QUADERNI DELLA GRANDE GUERRA (APPROFONDIMENTI DIDATTICI TEMATICI)
  // =========================================================================
  notebooks: [
    {
      id: "trincea",
      title: "La Vita nel Fango delle Trincee",
      subtitle: "Come vivevano i soldati nei fossati della terra",
      image: "assets/foto_trincea.jpg",
      caption: "Fotografia d'archivio: fanti italiani nella trincea di fango durante un turno in prima linea",
      content: `La trincea era una stretta fossa scavata nel terreno, profonda circa due metri e protetta verso il nemico da sacchi di sabbia e grovigli di filo spinato.
      I soldati vivevano lì dentro per settimane consecutive, esposti alla pioggia, alla neve e al gelo. Il fango era pervasivo: spesso arrivava alle ginocchia, provocando il doloroso **«piede da trincea»** (un congelamento e cancrena causato dall'umidità costante).
      L'igiene era inesistente: i fanti convivevano con milioni di pidocchi e topi grandi come gatti ("i topi di trincea") che si nutrivano dei resti di cibo e dei cadaveri abbandonati nella "terra di nessuno".
      La vita quotidiana era scandita da lunghi periodi di noia straziante, interrotti all'improvviso dal terrore dei bombardamenti d'artiglieria (il *bombardamento a tamburo*), che potevano durare giorni interi facendo impazzire gli uomini per lo shock da granata (*shell shock*).`
    },
    {
      id: "marce-fante",
      title: "Nello Zaino del Fante & Le Grandi Marce",
      subtitle: "35 chili sulle spalle e le salite tra le rocce",
      image: "assets/foto_zaino_marce.jpg",
      caption: "Fotografia d'archivio: colonna di fanti con zaino d'affardellamento da 35 kg in marcia alpina forzata",
      content: `Il soldato della Prima Guerra Mondiale non era un eroe invulnerabile, ma un giovane contadino gravato da un peso enorme.
      L'**affardellamento** completo raggiungeva i 30-38 chilogrammi:
      - Il fucile Carcano '91 (pesante 4,3 kg con baionetta inastata);
      - Lo zaino di cuoio con coperta di lana, telo-tenda, picchetti e vestiti di ricambio;
      - La gavetta di alluminio con le gallette dure e le scatolette di 'carne simmenthal';
      - La vanghetta individuale per scavarsi un rifugio d'urgenza;
      - La maschera antigas nella sua custodia cilindrica di metallo.
      Con questo carico i fanti affrontavano marce notturne forzate di 35-40 chilometri, senza fiammiferi né lanterne per non farsi scoprire dagli aerei. Sulle Alpi e sulle Dolomiti salivano mulattiere a strapiombo per portare cannoni e munizioni alle postazioni a 3.000 metri di quota.`
    },
    {
      id: "tregua-natale-notebook",
      title: "La Notte di Natale & Il Fatto Umano",
      subtitle: "La tregua spontanea tra nemici e la fratellanza al fronte",
      image: "assets/foto_tregua_natale_1914.jpg",
      caption: "Fotografia d'archivio (Fiandre, 1914): soldati britannici e tedeschi insieme nella Terra di Nessuno durante la Tregua di Natale",
      content: `La Prima Guerra Mondiale fu un massacro industriale, ma anche il luogo dove si manifestò l'umanità più pura.
      La celebre **Tregua di Natale del 1914** nelle Fiandre vide fanti britannici e tedeschi uscire dalle trincee, accendere candele, scambiarsi sigarette e giocare a pallone nella terra di nessuno.
      Sul fronte italo-austriaco dell'Isonzo e del Carso, soldati contadini delle due parti si gridavano dai parapetti, lanciavano pagnotte e fiasche di grappa e concordavano brevi cessate il fuoco per raccogliere l'acqua alle sorgenti.
      Questi gesti dimostrano che i popoli non volevano odiarsi: erano le élite e la propaganda a spingerli al massacro, mentre gli uomini semplici sentivano profondamente la comune fratellanza umana.`
    },
    {
      id: "armi",
      title: "Le Nuove Armi della Tecnologia",
      subtitle: "La prima guerra industriale e scientifica della storia",
      image: "assets/foto_armi_tecnologia.jpg",
      caption: "Fotografia d'archivio: postazione di mitragliatrice pesante Fiat-Revelli e fanti con maschera antigas",
      content: `La Grande Guerra fu il primo conflitto combattuto con le armi dell'industria moderna:
      - **La Mitragliatrice**: L'arma regina della difesa. Poteva sparare 500-600 colpi al minuto, falciando intere compagnie in pochi secondi.
      - **I Gas Asfissianti**: Usati per la prima volta a Ypres nel 1915 (cloro, fosgene e poi iprite). Bruciavano i polmoni, la pelle e gli occhi.
      - **I Carri Armati (Tank)**: Introdotti dagli inglesi sulla Somme nel 1916 per superare il fango e schiacciare i reticolati di filo spinato.
      - **L'Aviazione**: Gli aerei passarono da semplici ricognitori a micidiali caccia armati di mitragliatrici sincronizzate con le eliche.
      - **I Sommergibili (U-Boot)**: Usati dalla Germania per bloccare i rifornimenti all'Inghilterra attaccando nell'Atlantico.`
    },
    {
      id: "ragazzi99",
      title: "I Ragazzi del '99 e il Fiume Sacro",
      subtitle: "I giovanissimi diciottenni che salvarono l'Italia",
      image: "assets/foto_piave_grappa.jpg",
      caption: "Fotografia d'archivio: I giovanissimi coscritti del 1899 al fronte sul Fiume Piave e Monte Grappa",
      content: `Nell'autunno del 1917, dopo il crollo di Caporetto, l'esercito italiano aveva perso 300.000 uomini tra prigionieri e dispersi. Per fermare gli austro-tedeschi a un passo da Venezia, il governo italiano chiamò alle armi i coscritti nati nel **1899**: ragazzi di appena **18 anni**.
      Spediti al fronte senza quasi addestramento, con zaini più grandi di loro, questi adolescenti dimostrarono un coraggio leggendario. Sul massiccio del **Monte Grappa** e lungo gli argini del **Fiume Piave**, respinsero ogni assalto nemico a costo della vita.
      Il generale Armando Diaz scrisse nel bollettino: *«Li ho visti i Ragazzi del '99. Andavano in prima linea cantando. Hanno salvato la Patria.»*
      Il Piave fu proclamato 'Fiume Sacro alla Patria' e la loro memoria è ancora oggi celebrata in tutta Italia.`
    },
    {
      id: "donne",
      title: "Le Donne e il Fronte Interno",
      subtitle: "Il contributo fondamentale femminile alla società",
      image: "assets/foto_donne_fronte_interno.jpg",
      caption: "Fotografia d'archivio: Le Portatrici Carniche con le gerle sulle Alpi e le crocerossine del fronte interno",
      content: `Con milioni di uomini chiamati al fronte nelle trincee, le nazioni avrebbero smesso di funzionare senza le donne.
      Le donne sostituirono gli uomini in ogni settore della società:
      - Nei campi, guidando aratri e garantendo i raccolti per sfamare la popolazione.
      - Nelle fabbriche di armi e munizioni (*munitionettes*), maneggiando polvere pirica e sostanze chimiche pericolosissime.
      - Negli ospedali da campo come crocerossine e infermiere sotto il tiro dell'artiglieria.
      - Nelle Alpi, celebri le **Portatrici Carniche**: donne friulane che salivano a piedi per ore scalando pareti di roccia con pesanti gerle piene di munizioni e viveri per gli alpini sulle vette.
      Questa massiccia partecipazione fu un passaggio epocale per l'emancipazione femminile, aprendo la strada alla futura conquista del diritto di voto.`
    }
  ],

  // =========================================================================
  // GLOSSARIO DIDATTICO DELLA GRANDE GUERRA
  // =========================================================================
  glossary: [
    { term: "Trincea", def: "Fossato scavato nella terra profondo circa 2 metri, protetto da parapetti di sacchi di sabbia e reticolati, dove i fanti vivevano e si difendevano." },
    { term: "Terra di Nessuno", def: "La striscia di terreno devastato da crateri e filo spinato compresa tra le trincee nemiche contrapposte." },
    { term: "Guerra di Posizione", def: "Tipo di conflitto in cui gli eserciti rimangono bloccati sui propri fronti fortificati, contrapposta alla 'guerra di movimento'." },
    { term: "Patto di Londra", def: "Accordo segreto firmato il 26 aprile 1915 tra Italia e Intesa, con cui Roma promise di entrare in guerra in cambio di Trentino, Trieste, Istria e Dalmazia." },
    { term: "Neutralisti", def: "Coloro che nel 1914-1915 volevano che l'Italia restasse neutrale (la maggioranza: cattolici, socialisti, giolittiani)." },
    { term: "Interventisti", def: "Coloro che volevano l'ingresso dell'Italia in guerra contro l'Austria (nazionalisti, irredentisti, democratici, futuristi)." },
    { term: "Strafexpedition", def: "Spedizione punitiva lanciata dall'Austria nel maggio 1916 in Trentino per punire l'Italia per il presunto tradimento della Triplice Alleanza." },
    { term: "Iprite", def: "Gas mostarda asfissiante e vescicante usato per la prima volta a Ypres nel 1917, capace di corrodere pelle e polmoni." },
    { term: "Ragazzi del '99", def: "I giovanissimi coscritti italiani nati nel 1899, chiamati al fronte a soli 18 anni dopo la rotta di Caporetto per difendere il Piave." },
    { term: "Vittoria Mutilata", def: "Motto coniato da Gabriele d'Annunzio per denunciare il mancato rispetto del Patto di Londra alla conferenza di pace di Parigi riguardo a Fiume e alla Dalmazia." },
    { term: "Decimazione", def: "Pratica punitiva di giustizia militare d'ispirazione romana, adottata da Cadorna: l'uccisione per fucilazione di un soldato ogni dieci estratto a sorte in reparti accusati di codardia." },
    { term: "Guerra Bianca", def: "I combattimenti svoltisi oltre i 2.000-3.000 metri di quota sui ghiacciai dell'Ortles-Cevedale, dell'Adamello e della Marmolada tra Alpini italiani e Kaiserjäger austriaci." },
    { term: "Tregua di Natale", def: "Serie di cessate il fuoco spontanei e non ufficiali verificatisi a Natale 1914 tra soldati britannici e tedeschi nelle Fiandre, e poi anche sull'Isonzo nel 1915." },
    { term: "Shell Shock", def: "Trauma da esplosione o nevrosi di guerra: disturbo psicologico gravissimo causato dall'esposizione continua ai bombardamenti d'artiglieria pesante." },
    { term: "Portatrici Carniche", def: "Donne friulane e carniche che rifornirono di viveri e proiettili gli alpini sulle vette portando sulle spalle gerle pesanti fino a 40 kg per ripidi sentieri montani." }
  ],

  // =========================================================================
  // GAUNTLET LOOP: LA SFIDA DELLO STORICO (3 LIVELLI PROGRESSIVI)
  // =========================================================================
  quizGauntlet: [
    // LIVELLO 1: RECLUTA DELLA STORIA (Basi, date, cause, schieramenti)
    {
      level: 1,
      levelLabel: "Livello 1: Recluta della Storia",
      q: "Quale evento del 28 giugno 1914 fu la scintilla occasionale che fece esplodere la Prima Guerra Mondiale?",
      options: [
        "L'invasione tedesca del Belgio neutrale",
        "L'assassinio dell'arciduca Francesco Ferdinando a Sarajevo",
        "L'affondamento del transatlantico Lusitania",
        "L'attacco a sorpresa alla fortezza di Verdun"
      ],
      correct: 1,
      explanation: "L'attentato di Sarajevo per mano dello studente serbo Gavrilo Princip contro l'erede asburgico fu la scintilla che fece scattare il domino delle alleanze europee."
    },
    {
      level: 1,
      levelLabel: "Livello 1: Recluta della Storia",
      q: "Quali imperi formavano la Triplice Alleanza prima dello scoppio della guerra nel 1914?",
      options: [
        "Francia, Regno Unito e Russia",
        "Germania, Austria-Ungheria e Regno d'Italia",
        "Stati Uniti, Giappone e Gran Bretagna",
        "Germania, Russia e Impero Ottomano"
      ],
      correct: 1,
      explanation: "La Triplice Alleanza fu siglata nel 1882 tra Germania, Austria-Ungheria e Italia (anche se l'Italia mantenne riserve per le terre irredente di Trento e Trieste)."
    },
    {
      level: 1,
      levelLabel: "Livello 1: Recluta della Storia",
      q: "Perché nell'agosto 1914 il Regno d'Italia decise inizialmente di proclamare la propria neutralità?",
      options: [
        "Perché l'esercito italiano era già impegnato in Asia",
        "Perché il trattato era solo difensivo, mentre l'Austria aveva attaccato per prima senza consultare Roma",
        "Perché il Re d'Italia era cugino dell'imperatore di Francia",
        "Perché il Parlamento aveva firmato un trattato di pace con tutti i paesi"
      ],
      correct: 1,
      explanation: "Il governo italiano dichiarò la neutralità sottolineando che il patto della Triplice Alleanza vincolava a intervenire solo in caso di aggressione subita da un alleato."
    },
    {
      level: 1,
      levelLabel: "Livello 1: Recluta della Storia",
      q: "Cosa accadde nella celebre notte di Natale del 1914 sul fronte occidentale?",
      options: [
        "I tedeschi lanciarono per la prima volta i gas asfissianti",
        "I soldati nemici uscirono disarmati dai fossati, si scambiarono doni e giocarono a calcio",
        "Gli Alleati conquistarono Berlino con una carica di cavalleria",
        "Tutti i governi firmarono il trattato di pace definitivo a Londra"
      ],
      correct: 1,
      explanation: "La Tregua di Natale del 1914 fu un commovente miracolo umano: i soldati nemici smisero di sparare spontaneamente e si ritrovarono nella terra di nessuno come fratelli."
    },
    {
      level: 1,
      levelLabel: "Livello 1: Recluta della Storia",
      q: "Quale fiume bloccò la 'guerra lampo' tedesca nel settembre 1914, trasformando il conflitto in guerra di trincea?",
      options: [
        "Il Fiume Marna (Francia)",
        "Il Fiume Danubio (Austria)",
        "Il Fiume Volga (Russia)",
        "Il Fiume Tamigi (Gran Bretagna)"
      ],
      correct: 0,
      explanation: "La Prima Battaglia della Marna arrestò l'avanzata tedesca a 40 km da Parigi, sancendo il fallimento del Piano Schlieffen e l'inizio dello stallo nei fossati."
    },

    // LIVELLO 2: SERGENTE ESPLORATORE (Battaglie, tecnologie, fronte italiano)
    {
      level: 2,
      levelLabel: "Livello 2: Sergente Esploratore",
      q: "Cosa stabiliva il Patto Segreto di Londra firmato dall'Italia il 26 aprile 1915?",
      options: [
        "L'alleanza dell'Italia con la Germania contro la Russia",
        "L'ingresso dell'Italia a fianco dell'Intesa in cambio di Trentino, Alto Adige, Trieste, Gorizia e Istria",
        "La cessione della Sardegna alla Gran Bretagna in cambio di navi",
        "La pace immediata tra Austria e Serbia"
      ],
      correct: 1,
      explanation: "Il Patto segreto di Londra promise all'Italia il completamento dell'unità nazionale con le terre irredente in cambio dell'entrata in guerra entro un mese."
    },
    {
      level: 2,
      levelLabel: "Livello 2: Sergente Esploratore",
      q: "A quanto ammontava mediamente il peso dell'affardellamento (zaino, armi, gavetta) portato da un fante durante le marce?",
      options: [
        "Circa 5 - 8 kg",
        "Circa 30 - 38 kg",
        "Oltre 80 kg",
        "Meno di 2 kg"
      ],
      correct: 1,
      explanation: "I fanti portavano un carico massacrante tra i 30 e i 38 kg, affrontando marce notturne di 40 km o salendo sentieri montani a strapiombo."
    },
    {
      level: 2,
      levelLabel: "Livello 2: Sergente Esploratore",
      q: "Chi erano i cosiddetti «Ragazzi del '99» celebrati nella storia d'Italia?",
      options: [
        "I veterani che avevano combattuto nelle guerre risorgimentali del 1848",
        "I giovanissimi coscritti nati nel 1899 chiamati a 18 anni dopo Caporetto che salvarono il Piave",
        "I volontari americani giunti in Italia con la Croce Rossa",
        "Un gruppo di 99 generali promossi da Diaz dopo la vittoria"
      ],
      correct: 1,
      explanation: "I Ragazzi del '99 erano adolescenti appena maggiorenni che con indomito coraggio sbarrarono il passo agli invasori sul Grappa e sul Piave."
    },
    {
      level: 2,
      levelLabel: "Livello 2: Sergente Esploratore",
      q: "Quale micidiale novità bellica debuttò nella Seconda Battaglia di Ypres nel 1915?",
      options: [
        "I radar satellitari",
        "I gas asfissianti tossici al cloro",
        "La bomba atomica",
        "I missili teleguidati"
      ],
      correct: 1,
      explanation: "Il 22 aprile 1915 a Ypres i tedeschi aprirono 6.000 bombole di cloro, inaugurando l'orrore delle armi chimiche nella guerra moderna."
    },
    {
      level: 2,
      levelLabel: "Livello 2: Sergente Esploratore",
      q: "Cosa fu la 'Strafexpedition' lanciata dall'Austria contro l'Italia nel maggio 1916?",
      options: [
        "Una spedizione navale per cannoneggiare Ancona",
        "Una 'spedizione punitiva' in Trentino verso l'Altopiano di Asiago per castigare il presunto tradimento italiano",
        "Una festa militare per celebrare l'imperatore Francesco Giuseppe",
        "Un trattato commerciale per la vendita di legname"
      ],
      correct: 1,
      explanation: "L'Austria considerava l'Italia una traditrice della Triplice Alleanza e lanciò la spedizione punitiva fermata dagli italiani sul Pasubio e sul Monte Cengio."
    },

    // LIVELLO 3: STORICO RICERCATORE (Fonti letterarie, de-costruzione, conseguenze)
    {
      level: 3,
      levelLabel: "Livello 3: Storico Ricercatore",
      q: "Nei versi «Si sta come / d'autunno / sugli alberi / le foglie», cosa intende esprimere il poeta-soldato Giuseppe Ungaretti?",
      options: [
        "La bellezza della natura nei boschi francesi",
        "La totale precarietà e fragilità della vita del soldato in trincea, esposto alla morte a ogni istante",
        "Il desiderio di raccogliere la legna per scaldarsi durante l'inverno",
        "La certezza che la guerra sarebbe finita in autunno"
      ],
      correct: 1,
      explanation: "La poesia 'Soldati' usa la metafora delle foglie autunnali per descrivere la vita del fante: basta un colpo di fucile o una scheggia per cadere nel fango."
    },
    {
      level: 3,
      levelLabel: "Livello 3: Storico Ricercatore",
      q: "Nel libro 'Un anno sull'Altipiano', perché Emilio Lussu decide di non sparare all'ufficiale austriaco che beve il caffè?",
      options: [
        "Perché aveva finito i colpi nel fucile",
        "Perché riconosce in quel nemico un essere umano uguale a lui, rendendo l'uccisione un omicidio a sangue freddo",
        "Perché l'ufficiale austriaco gli aveva promesso del denaro",
        "Perché il generale Leone gli aveva ordinato di non fare rumore"
      ],
      correct: 1,
      explanation: "Lussu sperimenta il trionfo della coscienza umana sulla disciplina militare: quel gesto quotidiano di bere il caffè disarma l'odio di guerra."
    },
    {
      level: 3,
      levelLabel: "Livello 3: Storico Ricercatore",
      q: "Quale fu il ruolo fondamentale svolto dalle 'Portatrici Carniche' sul fronte alpino?",
      options: [
        "Scrivevano i bollettini di guerra per i giornali di Roma",
        "Salivano per ore ripidi sentieri montani con gerle da 30-40 kg piene di viveri e proiettili per gli alpini sulle vette",
        "Guidavano i treni carichi di soldati verso Caporetto",
        "Erano spie incaricate di oltrepassare i confini nemici"
      ],
      correct: 1,
      explanation: "Le Portatrici Carniche furono donne straordinarie che rifornirono le prime linee alpine sotto il fuoco nemico, tra cui Maria Plozner Mentil, decorata con medaglia d'oro."
    },
    {
      level: 3,
      levelLabel: "Livello 3: Storico Ricercatore",
      q: "Cosa definiva Papa Benedetto XV nel suo celebre appello del 1° agosto 1917 ai governi belligeranti?",
      options: [
        "Una 'crociata sacra per la fede'",
        "Una «inutile strage» che stava distruggendo la gioventù d'Europa",
        "Una necessaria purificazione delle nazioni peccatrici",
        "Un grande progresso per la scienza e l'industria"
      ],
      correct: 1,
      explanation: "L'espressione papale «inutile strage» fu la più autorevole e coraggiosa condanna morale della Prima Guerra Mondiale pronunciata durante il conflitto."
    },
    {
      level: 3,
      levelLabel: "Livello 3: Storico Ricercatore",
      q: "Cosa si intendeva in Italia con l'espressione «Vittoria Mutilata» dopo i trattati di pace del 1919?",
      options: [
        "Il gran numero di soldati rimasti invalidi durante la guerra",
        "La delusione per il mancato rispetto del Patto di Londra riguardo all'annessione di Fiume e della Dalmazia",
        "La distruzione delle statue e dei monumenti a Trento",
        "La sconfitta navale subita dall'Italia nell'Adriatico"
      ],
      correct: 1,
      explanation: "Coniato da D'Annunzio, il mito della 'vittoria mutilata' alimentò il risentimento nazionalista e fu una delle cause decisive della crisi dello stato liberale e dell'ascesa del fascismo."
    }
  ]
};

// Esporta per l'ambiente browser
if (typeof window !== "undefined") {
  window.WW1_DATA = WW1_DATA;
}
