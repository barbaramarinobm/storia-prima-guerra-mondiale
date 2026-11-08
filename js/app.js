/**
 * LOGICA APPLICATIVA DIDATTICA MULTIMEDIALE - LA PRIMA GUERRA MONDIALE (1914 - 1918)
 * Conforme alle metodologie per la Scuola Secondaria di Primo Grado:
 * - Ispirato da "God's Eye View" (geospazialità, HUD, altimetria, livelli tematici)
 * - Ispirato da "Be Ambitious" (fonti primarie, lettere non censurate, poesie di Ungaretti e Lussu)
 * - Ispirato da "Gauntlet Loop" (quiz a 3 livelli progressivi con feedback e patentino dello storico)
 * - Ispirato da "Reverse Engineer Anything - REA" (de-costruzione delle cause e domino del luglio 1914)
 */

function startApp() {
  const data = window.WW1_DATA;
  if (!data) {
    console.error("Dati storici non trovati!");
    return;
  }

  const state = {
    currentPhaseIndex: 0,
    isPlaying: false,
    playInterval: null,
    isVoiceEnabled: false, // Default OFF: l'ascolto è a richiesta per non disturbare l'aula
    voiceRate: 0.88,       // Ritmo sereno, calmo e scandito, ideale per scuola media e DSA
    isLimMode: false,
    activeTheater: "all",
    quiz: {
      currentIndex: 0,
      score: 0,
      answered: false,
      userLevel: 1
    },
    backpackItems: [0, 1, 2, 3, 4, 5, 6, 7], // indici di default attivi
    activeDiaryChapter: 0,
    currentDominoStep: 1
  };

  // Inizializza il Gestore della Mappa Vettoriale "God's Eye View"
  const mapManager = new WW1MapManager("map-container");

  // Riferimenti DOM Principali
  const timelineContainer = document.getElementById("timeline-steps-container");
  const btnPrev = document.getElementById("btn-prev-year");
  const btnNext = document.getElementById("btn-next-year");
  const btnPlay = document.getElementById("btn-play-timeline");
  const playIcon = document.getElementById("play-icon");
  const playLabel = document.getElementById("play-label");
  const btnReadAloud = document.getElementById("btn-read-aloud");
  const btnToggleVoice = document.getElementById("btn-toggle-voice");
  const btnToggleLim = document.getElementById("btn-toggle-lim");
  const storyPanel = document.getElementById("story-panel");
  const btnTogglePanel = document.getElementById("btn-toggle-panel");

  // Elementi del Pannello Story
  const panelTitle = document.getElementById("panel-phase-title");
  const panelPeriod = document.getElementById("panel-phase-period");
  const panelNarrative = document.getElementById("panel-general-narrative");
  const panelItalian = document.getElementById("panel-italian-perspective");
  const panelCuriosity = document.getElementById("panel-curiosity");
  const panelAlliances = document.getElementById("panel-alliances-grid");
  const panelBattles = document.getElementById("panel-battles-list");
  const heroEl = document.getElementById("panel-hero-illustration");

  // Riferimenti Modali
  const modalBattle = document.getElementById("modal-battle");
  const modalCausesLab = document.getElementById("modal-causes-lab");
  const modalSources = document.getElementById("modal-sources");
  const modalTrench = document.getElementById("modal-trench");
  const modalBackpack = document.getElementById("modal-backpack");
  const modalHumanity = document.getElementById("modal-humanity");
  const modalComparison = document.getElementById("modal-comparison");
  const modalNotebooks = document.getElementById("modal-notebooks");
  const modalGlossary = document.getElementById("modal-glossary");
  const modalQuiz = document.getElementById("modal-quiz");

  // ==========================================
  // 1. INIZIALIZZAZIONE DELLA TIMELINE CRONOLOGICA
  // ==========================================
  function initTimeline() {
    timelineContainer.innerHTML = "";
    data.phases.forEach((phase, index) => {
      const stepBtn = document.createElement("button");
      stepBtn.className = `timeline-step-btn ${index === 0 ? "active" : ""}`;
      stepBtn.dataset.index = index;
      
      const shortDesc = phase.id === "origini-1880-1914" ? "Cause" : phase.tagline.split(" ")[0];
      stepBtn.innerHTML = `
        <span class="year">${phase.year}</span>
        <span class="step-desc">${shortDesc}...</span>
      `;
      stepBtn.addEventListener("click", () => {
        pauseTimeline();
        selectPhase(index);
      });
      timelineContainer.appendChild(stepBtn);
    });
  }

  function selectPhase(index) {
    if (index < 0 || index >= data.phases.length) return;
    
    // Ferma eventuali narrazioni in corso al cambio di fase
    stopSpeaking();

    state.currentPhaseIndex = index;
    const phase = data.phases[index];

    // Aggiorna bottoni timeline
    const buttons = timelineContainer.querySelectorAll(".timeline-step-btn");
    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    btnPrev.disabled = index === 0;
    btnNext.disabled = index === data.phases.length - 1;

    // Aggiorna il Pannello Laterale della Storia
    updateStoryPanel(phase);

    // Aggiorna la Mappa Vettoriale
    mapManager.setPhase(phase);

    // Lettura automatica vocale SOLO se sia il viaggio continuo che la voce sono esplicitamente attivi
    if (state.isPlaying && state.isVoiceEnabled) {
      speakText(`${phase.title}. ${phase.tagline}.`);
    }
  }

  function updateStoryPanel(phase) {
    panelTitle.textContent = phase.title;
    panelPeriod.textContent = phase.period;

    // Foto / Illustrazione d'epoca nel pannello
    if (heroEl) {
      let imgSrc = "assets/foto_piave_grappa.jpg";
      let imgCap = "I Ragazzi del '99 e la difesa sul Piave";

      if (phase.id === "origini-1880-1914") {
        imgSrc = "assets/carta_europa_1914_italiano.jpg";
        imgCap = "🗺️ L'Europa di Fine '800: Triplice Alleanza vs Triplice Intesa";
      } else if (phase.id === "1914") {
        imgSrc = "assets/carta_europa_1914_italiano.jpg";
        imgCap = "🗺️ Gli Imperi d'Europa nel 1914 alla vigilia del conflitto";
      } else if (phase.id === "1915") {
        imgSrc = "assets/carta_fronte_italiano.jpg";
        imgCap = "🇮🇹 La Zona di Guerra del Regio Esercito Italiano sull'Isonzo";
      } else if (phase.id === "1916") {
        imgSrc = "assets/carta_trincea_didattica.jpg";
        imgCap = "🕳️ La Vita nelle Trincee di Fango della Grande Guerra";
      } else if (phase.id === "1917") {
        imgSrc = "assets/foto_piave_grappa.jpg";
        imgCap = "🎖️ La Riscossa sul Monte Grappa e sul Piave (1917)";
      } else if (phase.id === "1918") {
        imgSrc = "assets/foto_piave_grappa.jpg";
        imgCap = "🇮🇹 La Battaglia del Solstizio e la Vittoria di Vittorio Veneto";
      } else if (phase.id === "1919") {
        imgSrc = "assets/carta_europa_1919.jpg";
        imgCap = "🗺️ I Nuovi Confini d'Europa dopo il Trattato di Versailles";
      }

      heroEl.innerHTML = `
        <div class="panel-hero-box">
          <img src="${imgSrc}" alt="${phase.title}" class="panel-hero-img" />
          <div class="panel-hero-caption">${imgCap}</div>
        </div>
      `;
    }

    panelNarrative.innerHTML = phase.narrative.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    panelItalian.innerHTML = phase.italianPerspective.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    panelCuriosity.innerHTML = phase.curiosity.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Schieramenti Bellici
    panelAlliances.innerHTML = `
      <div class="alliance-col allies">
        <strong>✦ Intesa & Alleati</strong>
        <div>${phase.alliances.allies.join(", ")}</div>
      </div>
      <div class="alliance-col central">
        <strong>✦ Imperi Centrali</strong>
        <div>${phase.alliances.central.join(", ")}</div>
      </div>
    `;

    // Lista Battaglie Salienti
    panelBattles.innerHTML = "";
    if (phase.battles && phase.battles.length > 0) {
      phase.battles.forEach(battle => {
        const item = document.createElement("div");
        item.className = "panel-battle-item";
        item.innerHTML = `
          <div style="font-weight: 700; color: #1e3a8a;">⚔️ ${battle.name}</div>
          <div style="font-size: 0.78rem; color: #64748b; font-weight: 600;">📅 ${battle.date}</div>
          <p style="font-size: 0.8rem; color: #334155; margin-top: 0.2rem; line-height: 1.35;">${battle.summary.substring(0, 95)}...</p>
        `;
        item.addEventListener("click", () => {
          showBattleModal(battle);
        });
        panelBattles.appendChild(item);
      });
    } else {
      panelBattles.innerHTML = `<div style="font-size: 0.85rem; color: #64748b;">Nessuna battaglia campale registrata in questa fase (periodo di trattative o pace).</div>`;
    }
  }

  // ==========================================
  // 2. RIPRODUZIONE AUTOMATICA E SINTESI VOCALE
  // ==========================================
  function playTimeline() {
    state.isPlaying = true;
    playIcon.textContent = "⏸";
    playLabel.textContent = "Pausa Viaggio";
    btnPlay.classList.add("playing");

    state.playInterval = setInterval(() => {
      let nextIndex = state.currentPhaseIndex + 1;
      if (nextIndex >= data.phases.length) {
        nextIndex = 0; // ricomincia
      }
      selectPhase(nextIndex);
    }, 9000);
  }

  function pauseTimeline() {
    state.isPlaying = false;
    playIcon.textContent = "▶";
    playLabel.textContent = "Avvia Viaggio nel Tempo";
    btnPlay.classList.remove("playing");
    if (state.playInterval) {
      clearInterval(state.playInterval);
      state.playInterval = null;
    }
  }

  // ==========================================
  // 2. MOTORE DI LETTURA VOCALE NATURALE DIDATTICA
  // - Divisione in frasi (sentence-by-sentence) con pause respiratorie umane da 160ms
  // - Scelta automatica di Microsoft Elsa Online (Natural), Elsa o Google Italiano
  // - Tasto "Ferma Voce" IMMEDIATO e GARANTITO (nessun loop, nessuna ripartenza)
  // - Cadenza rilassata (0.88x) per comprensione ottimale scuola secondaria e DSA
  // ==========================================
  const voiceEngine = {
    selectedVoice: null,
    isSpeaking: false,
    activeButton: null,
    activeDefaultHtml: "",
    rate: 0.88,
    pitch: 1.0,
    sentenceQueue: [],
    queueTimer: null,

    init() {
      if (!('speechSynthesis' in window)) return;
      const load = () => {
        this.selectedVoice = this.pickBestVoice();
        this.updateHeaderVoiceBadge();
      };
      load();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = load;
      }
    },

    pickBestVoice() {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices() || [];
      if (voices.length === 0) return null;

      const itVoices = voices.filter(v => 
        v.lang && (v.lang.toLowerCase().startsWith("it") || v.lang.toLowerCase() === "it-it" || v.lang.toLowerCase() === "it_it")
      );
      if (itVoices.length === 0) return null;

      // 1. Voci Edge Natural Cloud (Elsa Natural, Diego Natural, Isabella Natural)
      const natural = itVoices.find(v => /natural/i.test(v.name));
      if (natural) return natural;

      // 2. Voci Microsoft Elsa (Windows) o Google italiano (Chrome)
      const premium = itVoices.find(v => /elsa/i.test(v.name) || /google/i.test(v.name) || /federica|alice/i.test(v.name));
      if (premium) return premium;

      // 3. Qualunque voce italiana diversa dal vecchio Cosimo meccanico
      const nonCosimo = itVoices.find(v => !/cosimo/i.test(v.name));
      if (nonCosimo) return nonCosimo;

      return itVoices[0];
    },

    updateHeaderVoiceBadge() {
      const v = this.pickBestVoice();
      if (v && btnToggleVoice) {
        const vClean = v.name.replace(/Microsoft |Online |\(Natural\) |Italian \(Italy\)/gi, '').trim() || "Naturale";
        btnToggleVoice.title = `Assistente vocale: ${v.name}. Clicca per attivare/disattivare.`;
        if (state.isVoiceEnabled) {
          btnToggleVoice.querySelector(".label").textContent = `Voce: ON (${vClean})`;
        }
      }
    },

    normalizeText(raw) {
      if (!raw) return "";
      let t = raw;
      t = t.replace(/<[^>]+>/g, ' ');
      t = t.replace(/[*_#`~>«»]/g, ' ');
      // Espansione abbreviazioni per naturalezza e chiarezza didattica
      t = t.replace(/\bkm²\b/gi, ' chilometri quadrati ');
      t = t.replace(/\bkm\b/gi, ' chilometri ');
      t = t.replace(/\bkg\b/gi, ' chilogrammi ');
      t = t.replace(/\bm\b/gi, ' metri ');
      t = t.replace(/\bca\.\b/gi, ' circa ');
      t = t.replace(/\bvs\.?\b/gi, ' contro ');
      t = t.replace(/\bN\.\b/gi, ' numero ');
      t = t.replace(/\bn\.\b/gi, ' numero ');
      t = t.replace(/\bart\.\b/gi, ' articolo ');
      t = t.replace(/\bcap\.\b/gi, ' capitolo ');
      t = t.replace(/\bgen\.\b/gi, ' generale ');
      t = t.replace(/\bcol\.\b/gi, ' colonnello ');
      t = t.replace(/\bten\.\b/gi, ' tenente ');
      t = t.replace(/\becc\.\b/gi, ' eccetera ');
      t = t.replace(/\s*[-–—]\s*/g, ', ');
      t = t.replace(/\s*\/\s*/g, ', ');
      t = t.replace(/\.{2,}/g, '.');
      return t.replace(/\s+/g, ' ').trim();
    },

    splitSentences(text) {
      const cleaned = this.normalizeText(text);
      if (!cleaned) return [];
      // Dividi sulle pause naturali (. ? ! ; :)
      const rawSentences = cleaned.split(/(?<=[.?!;:])\s+/);
      return rawSentences.map(s => s.trim()).filter(s => s.length > 0);
    },

    speak(text, onStart, onEnd) {
      if (!('speechSynthesis' in window)) return;
      this.stop();

      const sentences = this.splitSentences(text);
      if (sentences.length === 0) return;

      this.isSpeaking = true;
      this.sentenceQueue = sentences;
      this.selectedVoice = this.pickBestVoice();

      let currentIdx = 0;

      const playNextSentence = () => {
        if (!this.isSpeaking || currentIdx >= this.sentenceQueue.length) {
          this.stop();
          if (onEnd) onEnd();
          return;
        }

        const sentenceText = this.sentenceQueue[currentIdx];
        currentIdx++;

        const utterance = new SpeechSynthesisUtterance(sentenceText);
        utterance.lang = "it-IT";
        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }
        utterance.rate = this.rate;
        utterance.pitch = this.pitch;

        utterance.onend = () => {
          if (!this.isSpeaking) return;
          // Pausa fisiologica umana di 160ms tra le frasi
          this.queueTimer = setTimeout(() => {
            playNextSentence();
          }, 160);
        };

        utterance.onerror = (e) => {
          if (e.error === 'interrupted' || e.error === 'canceled' || !this.isSpeaking) {
            this.stop();
            return;
          }
          playNextSentence();
        };

        try {
          window.speechSynthesis.speak(utterance);
        } catch (err) {
          console.warn("Speech error:", err);
          this.stop();
        }
      };

      if (onStart) onStart();
      playNextSentence();
    },

    stop() {
      this.isSpeaking = false;
      this.sentenceQueue = [];
      if (this.queueTimer) {
        clearTimeout(this.queueTimer);
        this.queueTimer = null;
      }
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
      this.resetButtons();
    },

    resetButtons() {
      document.querySelectorAll(".btn-voice-playing").forEach(btn => {
        btn.classList.remove("btn-voice-playing");
        const defaultLbl = btn.dataset.defaultLabel;
        if (defaultLbl) {
          btn.innerHTML = `<span class="icon">📢</span> <span class="label">${defaultLbl}</span>`;
        }
      });
      if (this.activeButton && this.activeDefaultHtml) {
        this.activeButton.innerHTML = this.activeDefaultHtml;
        this.activeButton.classList.remove("btn-voice-playing");
      }
      this.activeButton = null;
      this.activeDefaultHtml = "";
    }
  };

  // Inizializza subito il motore vocale
  voiceEngine.init();

  function toggleAudioPlay(btnEl, text, defaultLabel, playingLabel) {
    // 1. SE LA VOCE STA GIA' PARLANDO: FERMALA ISTANTANEAMENTE ED ESCI!
    if (voiceEngine.isSpeaking || ('speechSynthesis' in window && (window.speechSynthesis.speaking || window.speechSynthesis.pending))) {
      voiceEngine.stop();
      return; // STOP ASSOLUTO: non fa ripartire nulla!
    }

    voiceEngine.stop();

    if (!btnEl) {
      voiceEngine.speak(text);
      return;
    }

    voiceEngine.activeButton = btnEl;
    voiceEngine.activeDefaultHtml = btnEl.innerHTML;
    btnEl.dataset.defaultLabel = defaultLabel || "Ascolta";

    // Aggiorna immediatamente il pulsante allo stato attivo "Ferma Voce"
    btnEl.classList.add("btn-voice-playing");
    btnEl.innerHTML = `<span class="icon">⏹</span> <span class="label">${playingLabel || "Ferma Voce"}</span>`;

    voiceEngine.speak(
      text,
      null,
      () => {
        // Al completamento naturale
        voiceEngine.stop();
      }
    );
  }

  function stopSpeaking() {
    voiceEngine.stop();
  }

  function speakText(text) {
    voiceEngine.speak(text);
  }

  // ==========================================
  // 3. GESTORE MODALE BATTAGLIE
  // ==========================================
  window.showBattleModal = function(battle) {
    document.getElementById("modal-battle-title").textContent = `⚔️ ${battle.name}`;
    document.getElementById("modal-battle-date").textContent = `📅 Data: ${battle.date} | Teatro: ${battle.theater.toUpperCase()}`;
    document.getElementById("modal-battle-summary").textContent = battle.summary;
    document.getElementById("modal-battle-significance").textContent = battle.significance;
    document.getElementById("modal-battle-curiosity").textContent = battle.curiosityFact;

    const mediaEl = document.getElementById("modal-battle-media");
    mediaEl.innerHTML = "";

    const btnRead = document.getElementById("btn-read-battle");
    btnRead.innerHTML = `<span class="icon">📢</span> <span class="label">Ascolta Battaglia</span>`;
    btnRead.classList.remove("btn-voice-playing");
    btnRead.onclick = () => {
      const textToRead = `${battle.name}. ${battle.summary}. Perché è stata decisiva: ${battle.significance}. Curiosità: ${battle.curiosityFact}`;
      toggleAudioPlay(btnRead, textToRead, "Ascolta Battaglia", "Ferma Voce");
    };

    openModal(modalBattle);
    // Nessun avvio automatico all'apertura: rispetto dell'autonomia e dell'attenzione dello studente
  };

  // ==========================================
  // 4. MODALE LABORATORIO CAUSE & DOMINO (REA)
  // ==========================================
  function initCausesLabModal() {
    const causesData = data.causesLab;
    const tabsContainer = document.getElementById("causes-tabs-container");
    const contentEl = document.getElementById("causes-tab-content");

    function renderCausesTab(tabKey) {
      if (tabKey === "gears") {
        contentEl.innerHTML = `
          <div class="causes-intro">
            <h4>${causesData.title}</h4>
            <p>${causesData.subtitle}</p>
          </div>
          <div class="gears-grid">
            ${causesData.gears.map(g => `
              <div class="gear-card">
                <div class="gear-header">
                  <span class="gear-icon">${g.icon}</span>
                  <div>
                    <h5 class="gear-title">${g.title}</h5>
                    <span class="gear-badge">${g.badge}</span>
                  </div>
                </div>
                <p class="gear-desc">${g.description}</p>
                <div class="gear-qa">
                  <strong>❓ ${g.question}</strong>
                  <p>💡 ${g.answer}</p>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      } else if (tabKey === "domino") {
        contentEl.innerHTML = `
          <div class="causes-intro">
            <h4>🎲 Il Domino del Luglio 1914: Dalla Scintilla alla Guerra Mondiale</h4>
            <p>Clicca sui passaggi per osservare la reazione a catena automatica delle mobilitazioni:</p>
          </div>
          <div class="domino-stepper-controls">
            ${causesData.dominoSteps.map(s => `
              <button class="domino-step-btn ${s.step === state.currentDominoStep ? 'active' : ''}" data-step="${s.step}">
                <span>${s.flag}</span> Passo ${s.step}
              </button>
            `).join("")}
          </div>
          <div class="domino-card-display" id="domino-active-card"></div>
        `;

        renderDominoActiveCard(state.currentDominoStep);

        contentEl.querySelectorAll(".domino-step-btn").forEach(b => {
          b.addEventListener("click", (e) => {
            const step = parseInt(e.currentTarget.dataset.step, 10);
            state.currentDominoStep = step;
            contentEl.querySelectorAll(".domino-step-btn").forEach(btn => btn.classList.toggle("active", parseInt(btn.dataset.step, 10) === step));
            renderDominoActiveCard(step);
          });
        });
      } else if (tabKey === "whatif") {
        contentEl.innerHTML = `
          <div class="causes-intro">
            <h4>🔮 «Cosa Sarebbe Successo Se...?» (Controfattuali Didattici)</h4>
            <p>Imparare a pensare criticamente la storia esplorando le svolte mancate:</p>
          </div>
          <div class="whatif-grid">
            ${causesData.whatIfScenarios.map(w => `
              <div class="whatif-card">
                <h5>${w.title}</h5>
                <div class="whatif-hypo"><strong>Ipotesi:</strong> ${w.hypothesis}</div>
                <div class="whatif-reality"><strong>Risposta dello Storico:</strong> ${w.reality}</div>
              </div>
            `).join("")}
          </div>
        `;
      }
    }

    function renderDominoActiveCard(stepNum) {
      const cardEl = document.getElementById("domino-active-card");
      if (!cardEl) return;
      const s = causesData.dominoSteps.find(st => st.step === stepNum) || causesData.dominoSteps[0];
      cardEl.innerHTML = `
        <div class="domino-box">
          <div class="domino-top-bar">
            <span class="domino-actor">${s.flag} ${s.actor}</span>
            <span class="domino-date">📅 ${s.date}</span>
          </div>
          <h4 class="domino-title">${s.title}</h4>
          <p class="domino-text">${s.text}</p>
          <div class="domino-impact">
            <strong>💥 Effetto a Catena:</strong> ${s.impact}
          </div>
          <div style="margin-top: 1rem; display: flex; justify-content: space-between;">
            <button class="btn btn-light" id="btn-domino-prev" ${stepNum === 1 ? 'disabled' : ''}>◀ Passo Precedente</button>
            <button class="btn btn-rea" id="btn-domino-next" ${stepNum === causesData.dominoSteps.length ? 'disabled' : ''}>Passo Successivo ▶</button>
          </div>
        </div>
      `;

      const bPrev = document.getElementById("btn-domino-prev");
      const bNext = document.getElementById("btn-domino-next");
      if (bPrev) {
        bPrev.onclick = () => {
          if (state.currentDominoStep > 1) {
            state.currentDominoStep--;
            renderCausesTab("domino");
          }
        };
      }
      if (bNext) {
        bNext.onclick = () => {
          if (state.currentDominoStep < causesData.dominoSteps.length) {
            state.currentDominoStep++;
            renderCausesTab("domino");
          }
        };
      }
    }

    tabsContainer.querySelectorAll(".sub-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        tabsContainer.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCausesTab(btn.dataset.tab);
      });
    });

    renderCausesTab("gears");
  }

  // ==========================================
  // 5. MODALE ARCHIVIO FONTI, LETTERE & POESIA (BE AMBITIOUS)
  // ==========================================
  function initSourcesModal() {
    const srcData = data.historicalSources;
    const tabsContainer = document.getElementById("sources-tabs-container");
    const contentEl = document.getElementById("sources-tab-content");

    function renderSourcesTab(tabKey) {
      const cat = srcData.categories.find(c => c.id === tabKey) || srcData.categories[0];
      contentEl.innerHTML = `
        <div class="sources-intro">
          <h4>${cat.name}</h4>
          <p>Leggi i documenti autentici e scopri come lavora uno storico per decifrare il passato:</p>
        </div>
        <div class="sources-list">
          ${cat.documents.map((doc, idx) => `
            <div class="source-document-card">
              <div class="doc-header">
                <div>
                  <h5 class="doc-title">${doc.title}</h5>
                  <span class="doc-meta">📅 ${doc.date} &bull; ${doc.author || doc.origin}</span>
                </div>
                <button class="btn btn-outline-dark btn-speak-doc" data-doc-idx="${idx}">📢 Ascolta</button>
              </div>
              <p class="doc-summary">${doc.summary}</p>
              <div class="doc-quote-parchment">
                ${doc.quote.replace(/\n/g, '<br>')}
              </div>
              <div class="doc-didactic-note">
                <strong>🔍 Spiegazione Didattica per lo Studente:</strong> ${doc.didacticNote}
              </div>
            </div>
          `).join("")}
        </div>
      `;

      contentEl.querySelectorAll(".btn-speak-doc").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const idx = parseInt(e.currentTarget.dataset.docIdx, 10);
          const doc = cat.documents[idx];
          const textToRead = `${doc.title}. ${doc.summary}. Testo originale: ${doc.quote}. Spiegazione didattica: ${doc.didacticNote}`;
          toggleAudioPlay(e.currentTarget, textToRead, "Ascolta", "Ferma");
        });
      });
    }

    tabsContainer.querySelectorAll(".sub-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        tabsContainer.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderSourcesTab(btn.dataset.tab);
      });
    });

    renderSourcesTab("primarie");
  }

  // ==========================================
  // 6. MODALE DENTRO LA TRINCEA (SPACCATO 3D ANATOMICO)
  // ==========================================
  function initTrenchModal() {
    const trenchData = data.trenchInteractive;
    const bodyEl = document.getElementById("trench-modal-body");

    let activeZoneId = trenchData.elements[0].id;

    function renderTrench() {
      const activeEl = trenchData.elements.find(e => e.id === activeZoneId) || trenchData.elements[0];

      bodyEl.innerHTML = `
        <div class="trench-modal-layout">
          <!-- Colonna Sinistra: Diagramma SVG Interattivo -->
          <div class="trench-diagram-col">
            <div class="trench-svg-wrap">
              <svg viewBox="0 0 700 380" class="trench-cross-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="mudGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#78350f" />
                    <stop offset="100%" stop-color="#451a03" />
                  </linearGradient>
                  <linearGradient id="skyTrench" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#94a3b8" />
                    <stop offset="100%" stop-color="#cbd5e1" />
                  </linearGradient>
                </defs>

                <!-- Cielo cupo di guerra -->
                <rect width="700" height="150" fill="url(#skyTrench)" />
                <!-- Fumo e bagliori lontani -->
                <circle cx="200" cy="110" r="45" fill="#f97316" opacity="0.3" />
                <circle cx="500" cy="90" r="55" fill="#eab308" opacity="0.25" />

                <!-- Suolo e Spaccato Trincea -->
                <!-- 1. Terra di Nessuno (sinistra) -->
                <path d="M 0 150 Q 80 165 140 150 Q 180 140 210 150 L 210 380 L 0 380 Z" fill="url(#mudGrad)" />
                <!-- Cratere di bomba -->
                <ellipse cx="100" cy="155" rx="35" ry="12" fill="#1e293b" opacity="0.8" />
                <text x="100" y="158" fill="#94a3b8" font-size="9" text-anchor="middle">Acqua Melmosa</text>

                <!-- Reticolati su pali a coda di porco -->
                <line x1="130" y1="120" x2="130" y2="152" stroke="#0f172a" stroke-width="2.5" />
                <line x1="170" y1="115" x2="170" y2="148" stroke="#0f172a" stroke-width="2.5" />
                <path d="M 115 125 L 185 140 M 115 140 L 185 125" stroke="#475569" stroke-width="2" stroke-dasharray="3,3" />

                <!-- 2. Parapetto con Sacchi di Sabbia -->
                <rect x="200" y="130" width="45" height="25" rx="4" fill="#d97706" stroke="#b45309" stroke-width="1.5" />
                <rect x="210" y="115" width="40" height="20" rx="4" fill="#b45309" stroke="#78350f" stroke-width="1.5" />
                <!-- Feritoia metallica -->
                <rect x="225" y="125" width="12" height="6" fill="#0f172a" />

                <!-- 3. Profilo Trincea (Gradino, Camminamento, Ricovero) -->
                <!-- Gradino di fuoco -->
                <polygon points="250,150 250,210 280,210 280,270 360,270 360,150 390,150 390,380 250,380" fill="url(#mudGrad)" />

                <!-- Passerella in legno (duckboards) sul fondo del fango -->
                <rect x="280" y="260" width="80" height="12" fill="#b45309" stroke="#78350f" stroke-width="1.5" />
                <line x1="295" y1="260" x2="295" y2="272" stroke="#451a03" stroke-width="2" />
                <line x1="315" y1="260" x2="315" y2="272" stroke="#451a03" stroke-width="2" />
                <line x1="335" y1="260" x2="335" y2="272" stroke="#451a03" stroke-width="2" />

                <!-- 4. Caverna / Ricovero Sotterraneo (Dugout) -->
                <rect x="400" y="220" width="130" height="110" rx="6" fill="#1c1917" stroke="#78350f" stroke-width="3" />
                <text x="465" y="250" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">RICOVERO SOTTERRANEO</text>
                <text x="465" y="270" fill="#d6d3d1" font-size="8.5" text-anchor="middle">(Topi, Brandine, Muffa)</text>
                <!-- Candela accesa -->
                <circle cx="430" cy="285" r="4" fill="#facc15" />

                <!-- 5. Trincea di comunicazione (dietro) -->
                <rect x="540" y="170" width="70" height="90" fill="#78350f" stroke="#451a03" stroke-width="2" />
                <text x="575" y="215" fill="#fde047" font-size="8.5" font-weight="bold" text-anchor="middle">CAMMINAMENTO</text>

                <!-- 6. Nido Mitragliatrice Corazzato -->
                <rect x="620" y="140" width="60" height="40" rx="4" fill="#334155" stroke="#0f172a" stroke-width="2" />
                <line x1="620" y1="155" x2="600" y2="155" stroke="#0f172a" stroke-width="4" />
                <text x="650" y="165" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">MITRAGLIATRICE</text>

                <!-- Punti Hotspot Cliccabili Numerati da 1 a 8 -->
                ${renderTrenchHotspots()}
              </svg>
            </div>
            <div style="font-size: 0.78rem; color: #64748b; text-align: center; margin-top: 0.4rem;">
              👆 Clicca sui numeri da 1 a 8 sul disegno per esplorare ciascun elemento della trincea
            </div>
          </div>

          <!-- Colonna Destra: Scheda Dettagliata Selezionata -->
          <div class="trench-detail-col">
            <div class="trench-card-header">
              <span class="trench-icon">${activeEl.icon}</span>
              <div>
                <h4>${activeEl.name}</h4>
                <span class="trench-depth-badge">📏 Quota/Profondità: ${activeEl.depth}</span>
              </div>
            </div>

            <div class="trench-card-body">
              <div style="margin-bottom: 0.75rem;">
                <strong style="color: #0f172a; font-size: 0.88rem;">📖 A cosa serviva:</strong>
                <p style="font-size: 0.85rem; color: #334155; line-height: 1.5; margin-top: 0.2rem;">${activeEl.description}</p>
              </div>

              <div style="background: #fef2f2; border-left: 3.5px solid #dc2626; padding: 0.65rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
                <strong style="color: #991b1b; font-size: 0.85rem;">⚠️ Il Pericolo per i Soldati:</strong>
                <p style="font-size: 0.82rem; color: #7f1d1d; margin-top: 0.2rem;">${activeEl.danger}</p>
              </div>

              <div style="background: #f0fdf4; border-left: 3.5px solid #16a34a; padding: 0.65rem 0.85rem; border-radius: 4px;">
                <strong style="color: #166534; font-size: 0.85rem;">💡 Curiosità di Trincea:</strong>
                <p style="font-size: 0.82rem; color: #14532d; margin-top: 0.2rem;">${activeEl.didacticCuriosity}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      // Event listener sugli hotspot svg
      bodyEl.querySelectorAll(".svg-trench-pin").forEach(pin => {
        pin.addEventListener("click", (e) => {
          activeZoneId = e.currentTarget.dataset.id;
          renderTrench();
        });
      });
    }

    function renderTrenchHotspots() {
      const hotspots = [
        { id: "terra-nessuno", num: 1, x: 90, y: 140 },
        { id: "reticolati", num: 2, x: 155, y: 125 },
        { id: "parapetto", num: 3, x: 225, y: 110 },
        { id: "gradino-tiro", num: 4, x: 265, y: 185 },
        { id: "passerelle-fango", num: 5, x: 320, y: 250 },
        { id: "ricovero-caverna", num: 6, x: 465, y: 295 },
        { id: "trincea-comunicazione", num: 7, x: 575, y: 190 },
        { id: "mitragliatrice", num: 8, x: 650, y: 135 }
      ];

      return hotspots.map(h => `
        <g class="svg-trench-pin ${h.id === activeZoneId ? 'active-pin' : ''}" data-id="${h.id}" transform="translate(${h.x}, ${h.y})" cursor="pointer">
          <circle cx="0" cy="0" r="14" fill="${h.id === activeZoneId ? '#15803d' : '#b91c1c'}" stroke="#ffffff" stroke-width="2" />
          <text x="0" y="4" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${h.num}</text>
        </g>
      `).join("");
    }

    renderTrench();
  }

  // ==========================================
  // 7. MODALE NELLO ZAINO DEL FANTE & LE MARCE
  // ==========================================
  function initBackpackModal() {
    const kitData = data.marchAndKit;
    const bodyEl = document.getElementById("backpack-modal-body");

    function renderBackpack() {
      // Calcola peso totale sommando gli elementi selezionati
      let totalKg = 0;
      state.backpackItems.forEach(idx => {
        if (kitData.items[idx]) {
          totalKg += kitData.items[idx].weightNum;
        }
      });
      totalKg = Math.round(totalKg * 10) / 10;

      bodyEl.innerHTML = `
        <div class="backpack-layout">
          <div class="backpack-calculator-col">
            <div class="weight-meter-card">
              <div class="weight-meter-header">
                <span style="font-size: 1.8rem;">🎒</span>
                <div>
                  <h4 style="font-size: 1.1rem; color: #0f172a; margin: 0;">Calcolatore Affardellamento del Fante</h4>
                  <span style="font-size: 0.8rem; color: #475569;">Seleziona gli oggetti per calcolare il peso trasportato:</span>
                </div>
              </div>
              <div class="weight-meter-display">
                <span class="weight-value ${totalKg > 28 ? 'danger-weight' : ''}">${totalKg} kg</span>
                <span class="weight-label">${totalKg > 28 ? '⚠️ CARICO MASSACRANTE SULLE SPALLE' : 'Carico Parziale'}</span>
              </div>
            </div>

            <div class="items-checklist">
              ${kitData.items.map((item, idx) => {
                const isChecked = state.backpackItems.includes(idx);
                return `
                  <div class="kit-item-row ${isChecked ? 'item-active' : ''}">
                    <label class="kit-item-label">
                      <input type="checkbox" class="kit-checkbox" data-idx="${idx}" ${isChecked ? 'checked' : ''}>
                      <span class="kit-icon">${item.icon}</span>
                      <div class="kit-desc-wrap">
                        <strong>${item.name}</strong>
                        <span class="kit-sub">${item.description}</span>
                      </div>
                      <span class="kit-weight-badge">${item.weight}</span>
                    </label>
                  </div>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Colonna Destra: Le Grandi Marce Alpine -->
          <div class="backpack-marches-col">
            <div class="marches-info-card">
              <h4 style="color: #15803d; font-size: 1.05rem; margin-bottom: 0.65rem;">🥾 Le Marce Forzate Notturne</h4>
              <div style="font-size: 0.85rem; color: #334155; line-height: 1.55;">
                <p><strong>Distanza coperta:</strong> ${kitData.forcedMarchesInfo.distance}</p>
                <p style="margin-top: 0.4rem;"><strong>Condizioni:</strong> ${kitData.forcedMarchesInfo.conditions}</p>
                <p style="margin-top: 0.4rem;"><strong>Disciplina del buio:</strong> ${kitData.forcedMarchesInfo.tactics}</p>
                <p style="margin-top: 0.4rem;"><strong>Sulle Alpi:</strong> ${kitData.forcedMarchesInfo.alpineFront}</p>
              </div>

              <div class="march-quote-box">
                <p>${kitData.forcedMarchesInfo.quote}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      bodyEl.querySelectorAll(".kit-checkbox").forEach(chk => {
        chk.addEventListener("change", (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          if (e.target.checked) {
            if (!state.backpackItems.includes(idx)) state.backpackItems.push(idx);
          } else {
            state.backpackItems = state.backpackItems.filter(i => i !== idx);
          }
          renderBackpack();
        });
      });
    }

    renderBackpack();
  }

  // ==========================================
  // 8. MODALE NATALE, FRATERNIZZAZIONE & IL FATTO UMANO
  // ==========================================
  function initHumanityModal() {
    const humData = data.christmasTruceAndHumanity;
    const tabsContainer = document.getElementById("humanity-tabs-container");
    const contentEl = document.getElementById("humanity-tab-content");

    function renderHumanityTab(tabKey) {
      if (tabKey === "truce-west") {
        const tw = humData.westernFrontChristmas;
        contentEl.innerHTML = `
          <div class="humanity-banner western-christmas">
            <div class="candle-glow">🕯️</div>
            <div>
              <h3>${tw.title}</h3>
              <span>📅 ${tw.year} &bull; ${tw.place}</span>
            </div>
          </div>
          <div class="humanity-body-text">
            ${tw.story.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br><br>')}
          </div>
          <div class="humanity-alert-box">
            <strong>⚠️ La Reazione dei Comandi Supremi:</strong>
            <p>${tw.commandReaction}</p>
          </div>
        `;
      } else if (tabKey === "fraternization-italy") {
        const ti = humData.italianFrontFraternization;
        contentEl.innerHTML = `
          <div class="humanity-banner italian-christmas">
            <span style="font-size: 2rem;">🇮🇹</span>
            <div>
              <h3>${ti.title}</h3>
              <span>📅 ${ti.year} &bull; ${ti.place}</span>
            </div>
          </div>
          <div class="humanity-body-text">
            ${ti.story.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br><br>')}
          </div>
          <div class="humanity-alert-box">
            <strong>⚖️ La Mano di Ferro di Cadorna:</strong>
            <p>${ti.commandReaction}</p>
          </div>
        `;
      } else if (tabKey === "shell-shock") {
        const sh = humData.shellShock;
        contentEl.innerHTML = `
          <div class="humanity-banner shell-shock-banner">
            <span style="font-size: 2rem;">🧠</span>
            <div>
              <h3>${sh.title}</h3>
              <span>Il Trauma Silenzioso dei Fanti</span>
            </div>
          </div>
          <div class="humanity-body-text">
            ${sh.description.replace(/\n/g, '<br><br>')}
          </div>
          <div class="humanity-lesson-box">
            <strong>🕊️ La Lezione Umana:</strong>
            <p>${sh.humanLesson}</p>
          </div>
        `;
      } else if (tabKey === "diary") {
        const diary = humData.soldierDiaryInteractive;
        const currentCap = diary[state.activeDiaryChapter] || diary[0];

        contentEl.innerHTML = `
          <div class="diary-wrapper">
            <div class="diary-book-header">
              <h4>📖 Il Diario del Fante Giovanni (19 Anni, Contadino Veneto)</h4>
              <span class="diary-page-indicator">Pagina ${state.activeDiaryChapter + 1} di ${diary.length}</span>
            </div>

            <div class="diary-page-parchment">
              <div class="diary-chapter-title">${currentCap.chapter}</div>
              <div class="diary-date">📅 ${currentCap.date}</div>
              <p class="diary-text">${currentCap.text}</p>
            </div>

            <div class="diary-nav-buttons">
              <button class="btn btn-light" id="btn-diary-prev" ${state.activeDiaryChapter === 0 ? 'disabled' : ''}>◀ Pagina Precedente</button>
              <button class="btn btn-italy" id="btn-diary-next" ${state.activeDiaryChapter === diary.length - 1 ? 'disabled' : ''}>Pagina Successiva ▶</button>
            </div>
          </div>
        `;

        const bPrev = document.getElementById("btn-diary-prev");
        const bNext = document.getElementById("btn-diary-next");
        if (bPrev) {
          bPrev.onclick = () => {
            if (state.activeDiaryChapter > 0) {
              state.activeDiaryChapter--;
              renderHumanityTab("diary");
            }
          };
        }
        if (bNext) {
          bNext.onclick = () => {
            if (state.activeDiaryChapter < diary.length - 1) {
              state.activeDiaryChapter++;
              renderHumanityTab("diary");
            }
          };
        }
      }
    }

    tabsContainer.querySelectorAll(".sub-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        tabsContainer.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderHumanityTab(btn.dataset.tab);
      });
    });

    renderHumanityTab("truce-west");
  }

  // ==========================================
  // 9. MODALE SDOPPIATORE CONFINI (1914 VS 1919)
  // ==========================================
  function initComparisonModal() {
    const container = document.getElementById("comparison-cards-container");
    if (!container) return;

    container.innerHTML = `
      <div class="comparison-grid-layout">
        <div class="comp-col comp-1914">
          <div class="comp-header-badge badge-1914">🏰 1914: L'Europa dei Grandi Imperi</div>
          <div class="comp-img-wrap" title="🔍 Clicca per ingrandire la carta del 1914 a schermo intero">
            <img src="assets/carta_europa_1914_italiano.jpg" alt="Europa 1914: Gli Imperi Centrali e l'Intesa" />
          </div>
          <ul class="comp-list">
            <li><strong>Impero Austro-Ungarico:</strong> Dominava su Austria, Ungheria, Repubblica Ceca, Slovacchia, Slovenia, Croazia, Bosnia e parte di Polonia e Ucraina.</li>
            <li><strong>Impero Tedesco:</strong> Esteso dalla Francia alla Russia, possedeva l'Alsazia-Lorena e la Prussia Orientale.</li>
            <li><strong>Impero Russo:</strong> Comprendeva Finlandia, Polonia, Paesi Baltici e Ucraina.</li>
            <li><strong>Regno d'Italia:</strong> Privo di Trento, Trieste, Gorizia, Istria e Alto Adige.</li>
          </ul>
        </div>

        <div class="comp-col comp-1919">
          <div class="comp-header-badge badge-1919">🕊️ 1919: I Trattati di Pace (Versailles)</div>
          <div class="comp-img-wrap" title="🔍 Clicca per ingrandire la carta del 1919 a schermo intero">
            <img src="assets/carta_europa_1919.jpg" alt="Europa 1919: I Nuovi Confini dei Trattati di Pace" />
          </div>
          <ul class="comp-list">
            <li><strong>Nascita di Nuovi Stati:</strong> Polonia, Cecoslovacchia, Regno dei Serbi Croati e Sloveni (futura Jugoslavia), Finlandia, Estonia, Lettonia, Lituania.</li>
            <li><strong>Crollo degli Imperi:</strong> L'Austria e l'Ungheria diventano due piccole repubbliche separate.</li>
            <li><strong>Regno d'Italia:</strong> Annessione del Trentino, Alto Adige (fino al Brennero), Trieste, Gorizia e Istria.</li>
            <li><strong>Semi della discordia:</strong> La Germania è umiliata da enormi sanzioni; l'Italia lamenta la "vittoria mutilata" per Fiume e Dalmazia.</li>
          </ul>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 10. MODALE I QUADERNI DELLA STORIA
  // ==========================================
  function initNotebooksModal() {
    const notebooks = data.notebooks;
    const tabsContainer = document.getElementById("notebooks-tabs-container");
    const contentEl = document.getElementById("notebook-content-body");

    function renderNotebook(id) {
      const nb = notebooks.find(n => n.id === id) || notebooks[0];
      contentEl.innerHTML = `
        <div class="notebook-render-box">
          <div class="notebook-top">
            <h4 class="notebook-title">${nb.title}</h4>
            <span class="notebook-sub">${nb.subtitle}</span>
          </div>
          <div class="notebook-media">
            <img src="${nb.image}" alt="${nb.title}" class="notebook-img" title="🔍 Clicca per ingrandire a schermo intero" />
            <div class="notebook-caption">🔍 <em>Clicca sull'immagine per ingrandire a tutto schermo</em> &bull; ${nb.caption}</div>
          </div>
          <div class="notebook-text">
            ${nb.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br><br>')}
          </div>
          <div style="margin-top: 1.25rem;">
            <button class="btn btn-italy" id="btn-read-notebook">📢 Ascolta il Quaderno</button>
          </div>
        </div>
      `;

      const btnRead = document.getElementById("btn-read-notebook");
      if (btnRead) {
        btnRead.onclick = () => {
          const textToRead = `${nb.title}. ${nb.subtitle}. ${nb.content}`;
          toggleAudioPlay(btnRead, textToRead, "Ascolta il Quaderno", "Ferma Voce");
        };
      }
    }

    tabsContainer.innerHTML = "";
    notebooks.forEach((nb, index) => {
      const btn = document.createElement("button");
      btn.className = `btn btn-light ${index === 0 ? 'active' : ''}`;
      btn.textContent = nb.title.split(" ")[0] + "...";
      btn.addEventListener("click", () => {
        tabsContainer.querySelectorAll(".btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderNotebook(nb.id);
      });
      tabsContainer.appendChild(btn);
    });

    renderNotebook(notebooks[0].id);
  }

  // ==========================================
  // 11. MODALE GLOSSARIO DIDATTICO
  // ==========================================
  function initGlossaryModal() {
    const listEl = document.getElementById("glossary-list-container");
    const searchInput = document.getElementById("glossary-search-input");
    if (!listEl) return;

    function renderGlossary(filterText = "") {
      const query = filterText.toLowerCase().trim();
      const filtered = data.glossary.filter(item => 
        item.term.toLowerCase().includes(query) || item.def.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        listEl.innerHTML = `<p style="padding: 1rem; color: #64748b; text-align: center;">Nessun termine trovato per "${filterText}".</p>`;
        return;
      }

      listEl.innerHTML = filtered.map(item => `
        <div class="glossary-card">
          <strong class="glossary-term">📖 ${item.term}</strong>
          <p class="glossary-def">${item.def}</p>
        </div>
      `).join("");
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        renderGlossary(e.target.value);
      });
    }

    renderGlossary();
  }

  // ==========================================
  // 12. GAUNTLET LOOP: LA SFIDA DELLO STORICO (3 LIVELLI PROGRESSIVI)
  // ==========================================
  function initQuizModal() {
    const quizList = data.quizGauntlet;
    const bodyEl = document.getElementById("quiz-modal-body");

    function renderQuizQuestion() {
      const q = quizList[state.quiz.currentIndex];

      if (!q) {
        // Schermata finale e rilascio Diploma dello Storico
        renderQuizDiploma();
        return;
      }

      bodyEl.innerHTML = `
        <div class="quiz-step-card">
          <div class="quiz-top-info">
            <span class="quiz-level-badge level-${q.level}">${q.levelLabel}</span>
            <span class="quiz-counter">Domanda ${state.quiz.currentIndex + 1} di ${quizList.length}</span>
            <span class="quiz-score-badge">Punteggio: ${state.quiz.score} pt</span>
          </div>

          <h4 class="quiz-question-text">${q.q}</h4>

          <div class="quiz-options-list" id="quiz-options-container">
            ${q.options.map((opt, i) => `
              <button class="quiz-option-btn" data-index="${i}">
                <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join("")}
          </div>

          <div id="quiz-feedback-box" class="quiz-feedback-box" style="display: none;"></div>

          <div style="margin-top: 1.25rem; display: flex; justify-content: flex-end;">
            <button id="btn-next-question" class="btn btn-amber" style="display: none;">Prossima Domanda ▶</button>
          </div>
        </div>
      `;

      state.quiz.answered = false;

      const optionBtns = bodyEl.querySelectorAll(".quiz-option-btn");
      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (state.quiz.answered) return;
          state.quiz.answered = true;

          const selectedIdx = parseInt(btn.dataset.index, 10);
          const isCorrect = selectedIdx === q.correct;
          const feedbackEl = document.getElementById("quiz-feedback-box");
          const nextBtn = document.getElementById("btn-next-question");

          optionBtns.forEach((b, i) => {
            if (i === q.correct) b.classList.add("correct");
            if (i === selectedIdx && !isCorrect) b.classList.add("wrong");
          });

          if (isCorrect) {
            state.quiz.score += 10;
            feedbackEl.className = "quiz-feedback-box feedback-correct";
            feedbackEl.innerHTML = `
              <strong>🎉 Esatto! Risposta Corretta!</strong>
              <p>${q.explanation}</p>
            `;
          } else {
            feedbackEl.className = "quiz-feedback-box feedback-wrong";
            feedbackEl.innerHTML = `
              <strong>❌ Non è corretto.</strong>
              <p>${q.explanation}</p>
            `;
          }

          feedbackEl.style.display = "block";
          nextBtn.style.display = "inline-block";
        });
      });

      const nextBtn = document.getElementById("btn-next-question");
      nextBtn.addEventListener("click", () => {
        state.quiz.currentIndex++;
        renderQuizQuestion();
      });
    }

    function renderQuizDiploma() {
      const maxScore = quizList.length * 10;
      const pct = Math.round((state.quiz.score / maxScore) * 100);
      let grade = "Recluta della Storia";
      if (pct >= 85) grade = "🎖️ Maestro Storico della Grande Guerra (Medaglia d'Oro)";
      else if (pct >= 65) grade = "🥈 Ufficiale Esploratore della Storia (Medaglia d'Argento)";
      else grade = "🥉 Recluta di Fanteria (Continua a Studiare!)";

      bodyEl.innerHTML = `
        <div class="diploma-card">
          <div class="diploma-border">
            <span class="diploma-seal">🎖️</span>
            <h3 class="diploma-title">PATENTINO DELLO STORICO</h3>
            <p class="diploma-sub">Scuola Secondaria di Primo Grado &bull; Progetto Grande Guerra</p>
            
            <div class="diploma-score-row">
              <div class="score-circle">
                <span class="score-num">${state.quiz.score}</span>
                <span class="score-den">/${maxScore} pt (${pct}%)</span>
              </div>
              <div class="diploma-grade">${grade}</div>
            </div>

            <div style="margin: 1.25rem 0;">
              <label style="font-size: 0.85rem; font-weight: 700; color: #475569;">Nome dello Studente / Classe:</label>
              <input type="text" id="diploma-student-name" placeholder="Inserisci il tuo nome..." style="width: 100%; max-width: 320px; padding: 0.5rem 0.85rem; border: 1.5px solid #cbd5e1; border-radius: 6px; font-weight: bold; margin-top: 0.35rem; text-align: center;">
            </div>

            <p style="font-size: 0.82rem; color: #475569; max-width: 480px; margin: 0 auto;">
              Hai completato il Gauntlet Loop della Grande Guerra comprendendo le cause di fine '800, la vita disumana nelle trincee, le grandi marce e la fratellanza della Notte di Natale.
            </p>

            <div style="margin-top: 1.5rem; display: flex; gap: 0.65rem; justify-content: center;">
              <button class="btn btn-amber" id="btn-restart-quiz">🔄 Riprova la Sfida</button>
              <button class="btn btn-italy" onclick="window.print()">🖨️ Stampa il Diploma</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById("btn-restart-quiz").addEventListener("click", () => {
        state.quiz.currentIndex = 0;
        state.quiz.score = 0;
        renderQuizQuestion();
      });
    }

    renderQuizQuestion();
  }

  // ==========================================
  // GESTIONE APERTURA/CHIUSURA MODALI
  // ==========================================
  function openModal(modalEl, triggeringBtn) {
    if (!modalEl) {
      console.warn("openModal: elemento modale non trovato!");
      return;
    }

    // Chiudi tutte le altre modali eventualmente aperte
    document.querySelectorAll(".modal-backdrop").forEach(m => {
      m.classList.remove("open", "active");
      m.style.display = "none";
      m.style.opacity = "0";
      m.style.pointerEvents = "none";
    });

    // Rimuovi classe active-modal-tab dai pulsanti header
    document.querySelectorAll(".header-actions .btn").forEach(b => b.classList.remove("active-modal-tab"));

    if (triggeringBtn) {
      triggeringBtn.classList.add("active-modal-tab");
    }

    modalEl.classList.add("open");
    modalEl.classList.add("active");
    modalEl.style.display = "flex";
    modalEl.style.opacity = "1";
    modalEl.style.pointerEvents = "auto";
    modalEl.style.zIndex = "99999";
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    stopSpeaking(); // Interrompe ogni narrazione vocale aperta nel modale
    modalEl.classList.remove("open");
    modalEl.classList.remove("active");
    modalEl.style.display = "none";
    modalEl.style.opacity = "0";
    modalEl.style.pointerEvents = "none";
    document.querySelectorAll(".header-actions .btn").forEach(b => b.classList.remove("active-modal-tab"));
  }

  // Event Listeners Bottoni Header Principale (Laboratori Didattici e Strumenti)
  const headerBtnConfigs = [
    { id: "btn-open-causes", init: initCausesLabModal, modal: modalCausesLab },
    { id: "btn-open-sources", init: initSourcesModal, modal: modalSources },
    { id: "btn-open-trench", init: initTrenchModal, modal: modalTrench },
    { id: "btn-open-backpack", init: initBackpackModal, modal: modalBackpack },
    { id: "btn-open-humanity", init: initHumanityModal, modal: modalHumanity },
    { id: "btn-open-comparison", init: initComparisonModal, modal: modalComparison },
    { id: "btn-open-notebooks", init: initNotebooksModal, modal: modalNotebooks },
    { id: "btn-open-glossary", init: initGlossaryModal, modal: modalGlossary },
    { id: "btn-open-quiz", init: initQuizModal, modal: modalQuiz }
  ];

  headerBtnConfigs.forEach(cfg => {
    const btn = document.getElementById(cfg.id);
    if (btn) {
      btn.addEventListener("click", () => {
        cfg.init();
        openModal(cfg.modal, btn);
      });
    }
  });

  // Tasti chiusura modali e click sfondo
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });

    const closeBtn = backdrop.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => closeModal(backdrop));
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.active").forEach(m => closeModal(m));
    }
  });

  // Controlli Timeline
  btnPlay.addEventListener("click", () => {
    if (state.isPlaying) pauseTimeline();
    else playTimeline();
  });

  btnPrev.addEventListener("click", () => {
    pauseTimeline();
    selectPhase(state.currentPhaseIndex - 1);
  });

  btnNext.addEventListener("click", () => {
    pauseTimeline();
    selectPhase(state.currentPhaseIndex + 1);
  });

  btnReadAloud.addEventListener("click", () => {
    const phase = data.phases[state.currentPhaseIndex];
    const textToRead = `${phase.title}. ${phase.narrative}. Prospettiva per l'Italia: ${phase.italianPerspective}`;
    toggleAudioPlay(btnReadAloud, textToRead, "Ascolta la Fase", "Ferma Narrazione");
  });

  btnToggleVoice.addEventListener("click", () => {
    state.isVoiceEnabled = !state.isVoiceEnabled;
    btnToggleVoice.classList.toggle("active", state.isVoiceEnabled);
    const vName = voiceEngine.selectedVoice ? voiceEngine.selectedVoice.name.replace(/Microsoft |Online |\(Natural\) |Italian \(Italy\)/gi, '').trim() : "Naturale";
    btnToggleVoice.querySelector(".icon").textContent = state.isVoiceEnabled ? "🔊" : "🔇";
    btnToggleVoice.querySelector(".label").textContent = state.isVoiceEnabled ? `Voce: ON (${vName})` : "Voce: OFF";
    if (!state.isVoiceEnabled) {
      stopSpeaking();
    }
  });

  btnToggleLim.addEventListener("click", () => {
    state.isLimMode = !state.isLimMode;
    document.body.classList.toggle("lim-mode", state.isLimMode);
    btnToggleLim.classList.toggle("active", state.isLimMode);
    mapManager.setMapMode(state.isLimMode ? "lim" : "parchment");
  });

  btnTogglePanel.addEventListener("click", () => {
    storyPanel.classList.toggle("collapsed");
    btnTogglePanel.textContent = storyPanel.classList.contains("collapsed") ? "▶" : "◀";
  });

  // Selettore Carte Storiche Autentiche
  document.querySelectorAll(".theater-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".theater-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const mapKey = e.currentTarget.dataset.map;
      if (mapKey) {
        mapManager.setMap(mapKey);
      }
    });
  });

  // ==========================================
  // 12. GESTORE LIGHTBOX INGRANDIMENTO IMMAGINI
  // ==========================================
  function initLightbox() {
    const lightboxModal = document.getElementById("image-lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

    function openLightbox(src, caption) {
      if (!lightboxModal || !lightboxImg) return;
      lightboxImg.src = src;
      if (lightboxCaption) {
        lightboxCaption.textContent = caption || "Documento Storico d'Archivio";
      }
      lightboxModal.classList.add("active");
    }

    function closeLightbox() {
      if (!lightboxModal) return;
      lightboxModal.classList.remove("active");
    }

    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener("click", closeLightbox);
    }
    if (lightboxModal) {
      lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal || e.target === lightboxCloseBtn) {
          closeLightbox();
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("active")) {
        closeLightbox();
      }
    });

    document.addEventListener("click", (e) => {
      const imgTarget = e.target.closest(".notebook-img, .comp-img-wrap img, .panel-hero-img");
      if (imgTarget && imgTarget.src) {
        let cap = imgTarget.alt;
        const captionEl = imgTarget.parentElement.querySelector(".notebook-caption, .panel-hero-caption") ||
                          imgTarget.closest(".comp-col")?.querySelector(".comp-header-badge");
        if (captionEl) {
          cap = captionEl.textContent.replace(/🔍|Clicca sull'immagine per ingrandire a tutto schermo|•/gi, "").trim();
        }
        openLightbox(imgTarget.src, cap);
      }
    });
  }

  // ==========================================
  // AVVIO INIZIALE
  // ==========================================
  initLightbox();
  initTimeline();
  selectPhase(0);
}

// Avvia non appena il DOM è pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
