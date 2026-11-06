// Main Application Logic
document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentSoftwareCategory = "all";
  let softwareSearchQuery = "";

  let currentHardwareCategory = "all";
  let hardwareSearchQuery = "";

  let favorites = JSON.parse(localStorage.getItem("pioneer_favs") || "[]");

  // DOM Elements - Common
  const quoteDisplay = document.getElementById("quote-display");
  const quoteAuthor = document.getElementById("quote-author");
  const randomQuoteBtn = document.getElementById("random-quote-btn");

  const totalCountSoftwareEl = document.getElementById("total-count-software");
  const totalCountHardwareEl = document.getElementById("total-count-hardware");

  // DOM Elements - Software
  const softwareCardsContainer = document.getElementById("cards-container");
  const softwareSearchInput = document.getElementById("search-input");
  const clearSoftwareSearchBtn = document.getElementById("clear-search-btn");
  const softwareCategoryFilters = document.getElementById("category-filters");
  const softwareResultsCount = document.getElementById("results-count");

  // DOM Elements - Hardware
  const hardwareCardsContainer = document.getElementById("hardware-cards-container");
  const hardwareSearchInput = document.getElementById("hardware-search-input");
  const clearHardwareSearchBtn = document.getElementById("clear-hardware-search-btn");
  const hardwareCategoryFilters = document.getElementById("hardware-category-filters");
  const hardwareResultsCount = document.getElementById("hardware-results-count");

  // Modal Elements
  const modalOverlay = document.getElementById("modal-overlay");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalDataContainer = document.getElementById("modal-data");

  // Set total counts
  if (totalCountSoftwareEl) totalCountSoftwareEl.textContent = PIONEERS_DATA.length;
  if (totalCountHardwareEl) totalCountHardwareEl.textContent = HARDWARE_PIONEERS_DATA.length;

  // Unified quote list (Software + Hardware)
  const allPioneers = [...PIONEERS_DATA, ...HARDWARE_PIONEERS_DATA];

  // Random quote generator
  function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * allPioneers.length);
    const pioneer = allPioneers[randomIndex];
    if (quoteDisplay && quoteAuthor) {
      quoteDisplay.textContent = `"${pioneer.quote}"`;
      quoteAuthor.textContent = `— ${pioneer.name} (${pioneer.title})`;
    }
  }
  setRandomQuote();
  if (randomQuoteBtn) {
    randomQuoteBtn.addEventListener("click", () => {
      setRandomQuote();
      if (window.lucide) lucide.createIcons();
    });
  }

  // ==========================================
  // 1. SOFTWARE PIONEERS LOGIC
  // ==========================================
  function getFilteredSoftwarePioneers() {
    const query = softwareSearchQuery.toLowerCase().trim();
    return PIONEERS_DATA.filter((p) => {
      const matchesCategory =
        currentSoftwareCategory === "all" || p.category === currentSoftwareCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      const inName = p.name.toLowerCase().includes(query);
      const inTitle = p.title.toLowerCase().includes(query);
      const inDesc = p.shortDescription.toLowerCase().includes(query);
      const inTags = p.tags.some((t) => t.toLowerCase().includes(query));
      const inQuote = p.quote.toLowerCase().includes(query);

      return inName || inTitle || inDesc || inTags || inQuote;
    });
  }

  function renderSoftwareCards() {
    if (!softwareCardsContainer) return;
    const filtered = getFilteredSoftwarePioneers();
    if (softwareResultsCount) {
      softwareResultsCount.textContent = `${filtered.length} de ${PIONEERS_DATA.length}`;
    }

    if (filtered.length === 0) {
      softwareCardsContainer.innerHTML = `
        <div class="col-span-full py-14 text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-800/80 text-slate-400 mb-3 border border-slate-700">
            <i data-lucide="search-x" class="w-7 h-7"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-200">No encontramos resultados en software</h3>
          <p class="text-slate-400 mt-1 max-w-md mx-auto text-xs sm:text-sm">
            Sin coincidencias para "<span class="text-indigo-400">${escapeHtml(softwareSearchQuery)}</span>". Prueba con 'Unix', 'C', 'Lovelace', 'Apolo' o 'Web'.
          </p>
          <button id="reset-software-filter-btn" class="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-2">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Restablecer filtros
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-software-filter-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          softwareSearchQuery = "";
          currentSoftwareCategory = "all";
          if (softwareSearchInput) softwareSearchInput.value = "";
          if (clearSoftwareSearchBtn) clearSoftwareSearchBtn.classList.add("hidden");
          updateSoftwareFilterButtons();
          renderSoftwareCards();
        });
      }
      if (window.lucide) lucide.createIcons();
      return;
    }

    softwareCardsContainer.innerHTML = filtered
      .map((p) => {
        const isFav = favorites.includes(p.id);
        return `
        <div class="glass-card rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden" data-id="${p.id}">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent} opacity-80 group-hover:opacity-100 transition-opacity"></div>
          
          <div>
            <!-- Header with Category & Fav -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full border ${p.badgeColor} uppercase tracking-wider font-mono">
                ${getSoftwareCategoryName(p.category)}
              </span>
              <button class="fav-btn p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 transition-colors" data-id="${p.id}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
                <i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}"></i>
              </button>
            </div>

            <!-- Avatar & Main Info -->
            <div class="flex items-start gap-4 mb-4">
              ${p.image ? `
                <div class="w-14 h-14 rounded-xl overflow-hidden shadow-lg shrink-0 group-hover:scale-105 transition-transform border border-indigo-500/40 bg-slate-800">
                  <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover object-top" />
                </div>
              ` : `
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                  <i data-lucide="${p.icon || 'user'}" class="w-7 h-7"></i>
                </div>
              `}
              <div>
                <h3 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  ${p.name}
                </h3>
                <p class="text-xs text-indigo-400 font-mono font-medium">${p.years}</p>
                <p class="text-xs text-slate-300 font-medium mt-0.5 line-clamp-1">${p.title}</p>
              </div>
            </div>

            <!-- Short Description -->
            <p class="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
              ${p.shortDescription}
            </p>

            <!-- Quote Snippet -->
            <div class="bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 mb-4">
              <p class="text-xs text-slate-400 italic line-clamp-2">
                "${p.quote}"
              </p>
            </div>
          </div>

          <!-- Footer & Action -->
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${p.tags.slice(0, 3).map(tag => `
                <span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  #${tag}
                </span>
              `).join('')}
              ${p.tags.length > 3 ? `<span class="text-[10px] text-slate-500 self-center">+${p.tags.length - 3}</span>` : ''}
            </div>

            <button class="open-modal-btn w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/80 hover:border-indigo-500 font-medium text-xs flex items-center justify-center gap-2 transition-all" data-id="${p.id}">
              <span>Ver biografía y aportes</span>
              <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      `;
      })
      .join("");

    attachModalAndFavListeners();
    if (window.lucide) lucide.createIcons();
  }

  function getSoftwareCategoryName(cat) {
    const map = {
      teoria: "Teoría & Algoritmos",
      lenguajes: "Lenguajes & Compiladores",
      sistemas: "Sistemas & Arquitectura",
      redes: "Redes & Web",
    };
    return map[cat] || cat;
  }

  function updateSoftwareFilterButtons() {
    if (!softwareCategoryFilters) return;
    const buttons = softwareCategoryFilters.querySelectorAll("button");
    buttons.forEach((btn) => {
      const cat = btn.getAttribute("data-category");
      if (cat === currentSoftwareCategory) {
        btn.className =
          "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all border border-indigo-500";
      } else {
        btn.className =
          "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all";
      }
    });
  }

  // ==========================================
  // 2. HARDWARE PIONEERS LOGIC (Computadoras)
  // ==========================================
  function getFilteredHardwarePioneers() {
    const query = hardwareSearchQuery.toLowerCase().trim();
    return HARDWARE_PIONEERS_DATA.filter((p) => {
      const matchesCategory =
        currentHardwareCategory === "all" || p.category === currentHardwareCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      const inName = p.name.toLowerCase().includes(query);
      const inTitle = p.title.toLowerCase().includes(query);
      const inMachine = (p.machine || "").toLowerCase().includes(query);
      const inDesc = p.shortDescription.toLowerCase().includes(query);
      const inTags = p.tags.some((t) => t.toLowerCase().includes(query));
      const inQuote = p.quote.toLowerCase().includes(query);

      return inName || inTitle || inMachine || inDesc || inTags || inQuote;
    });
  }

  function renderHardwareCards() {
    if (!hardwareCardsContainer) return;
    const filtered = getFilteredHardwarePioneers();
    if (hardwareResultsCount) {
      hardwareResultsCount.textContent = `${filtered.length} de ${HARDWARE_PIONEERS_DATA.length}`;
    }

    if (filtered.length === 0) {
      hardwareCardsContainer.innerHTML = `
        <div class="col-span-full py-14 text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-800/80 text-amber-400 mb-3 border border-slate-700">
            <i data-lucide="cpu" class="w-7 h-7"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-200">No encontramos resultados en computadoras</h3>
          <p class="text-slate-400 mt-1 max-w-md mx-auto text-xs sm:text-sm">
            Sin coincidencias para "<span class="text-amber-400">${escapeHtml(hardwareSearchQuery)}</span>". Prueba con 'ENIAC', 'Intel', 'Apple', 'Mouse', 'Cray' o 'Babbage'.
          </p>
          <button id="reset-hardware-filter-btn" class="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-2">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Restablecer filtros
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-hardware-filter-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          hardwareSearchQuery = "";
          currentHardwareCategory = "all";
          if (hardwareSearchInput) hardwareSearchInput.value = "";
          if (clearHardwareSearchBtn) clearHardwareSearchBtn.classList.add("hidden");
          updateHardwareFilterButtons();
          renderHardwareCards();
        });
      }
      if (window.lucide) lucide.createIcons();
      return;
    }

    hardwareCardsContainer.innerHTML = filtered
      .map((p) => {
        const isFav = favorites.includes(p.id);
        return `
        <div class="glass-card rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden border-amber-500/10 hover:border-amber-500/40" data-id="${p.id}">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent} opacity-80 group-hover:opacity-100 transition-opacity"></div>
          
          <div>
            <!-- Header with Category & Fav -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full border ${p.badgeColor} uppercase tracking-wider font-mono">
                ${getHardwareCategoryName(p.category)}
              </span>
              <button class="fav-btn p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 transition-colors" data-id="${p.id}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
                <i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}"></i>
              </button>
            </div>

            <!-- Avatar & Main Info -->
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                <i data-lucide="${p.icon || 'cpu'}" class="w-7 h-7"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  ${p.name}
                </h3>
                <p class="text-xs text-amber-400 font-mono font-medium">${p.years}</p>
                <p class="text-xs text-slate-300 font-medium mt-0.5 line-clamp-1">${p.title}</p>
              </div>
            </div>

            <!-- Machine / Hardware Badge -->
            <div class="mb-3.5 px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center gap-2">
              <i data-lucide="hard-drive" class="w-3.5 h-3.5 text-amber-400 shrink-0"></i>
              <span class="text-xs font-mono text-amber-200 truncate"><strong>Máquinas:</strong> ${p.machine}</span>
            </div>

            <!-- Short Description -->
            <p class="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
              ${p.shortDescription}
            </p>

            <!-- Quote Snippet -->
            <div class="bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 mb-4">
              <p class="text-xs text-slate-400 italic line-clamp-2">
                "${p.quote}"
              </p>
            </div>
          </div>

          <!-- Footer & Action -->
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${p.tags.slice(0, 3).map(tag => `
                <span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  #${tag}
                </span>
              `).join('')}
              ${p.tags.length > 3 ? `<span class="text-[10px] text-slate-500 self-center">+${p.tags.length - 3}</span>` : ''}
            </div>

            <button class="open-modal-btn w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-amber-600 text-slate-200 hover:text-white border border-slate-700/80 hover:border-amber-500 font-medium text-xs flex items-center justify-center gap-2 transition-all" data-id="${p.id}">
              <span>Ver arquitectura e impacto</span>
              <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      `;
      })
      .join("");

    attachModalAndFavListeners();
    if (window.lucide) lucide.createIcons();
  }

  function getHardwareCategoryName(cat) {
    const map = {
      "mecanica-valvulas": "Mecánica & Válvulas",
      "microchips": "Microchips & Silicio",
      "pc-revolution": "Revolución PC & GUI",
      "supercomputacion": "Supercomputación",
    };
    return map[cat] || cat;
  }

  function updateHardwareFilterButtons() {
    if (!hardwareCategoryFilters) return;
    const buttons = hardwareCategoryFilters.querySelectorAll("button");
    buttons.forEach((btn) => {
      const cat = btn.getAttribute("data-category");
      if (cat === currentHardwareCategory) {
        btn.className =
          "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-600 text-white shadow-lg shadow-amber-600/30 transition-all border border-amber-500";
      } else {
        btn.className =
          "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all";
      }
    });
  }

  // ==========================================
  // 3. COMMON INTERACTION LOGIC (Modal & Favs)
  // ==========================================
  function attachModalAndFavListeners() {
    // Open modal buttons
    document.querySelectorAll(".open-modal-btn").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-id");
        openModal(id);
      };
    });

    // Favorite buttons
    document.querySelectorAll(".fav-btn").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        toggleFavorite(id);
      };
    });
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter((favId) => favId !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("pioneer_favs", JSON.stringify(favorites));
    renderSoftwareCards();
    renderHardwareCards();
  }

  // Open Pioneer Modal (Works for both software & hardware)
  function openModal(id) {
    const pioneer = allPioneers.find((p) => p.id === id);
    if (!pioneer) return;

    const isHardware = !!pioneer.machine;
    const categoryName = isHardware
      ? getHardwareCategoryName(pioneer.category)
      : getSoftwareCategoryName(pioneer.category);

    modalDataContainer.innerHTML = `
      <div class="relative">
        <div class="h-3 bg-gradient-to-r ${pioneer.accent} -mx-6 -mt-6 mb-6"></div>

        <div class="flex flex-col md:flex-row items-start gap-5 pb-6 border-b border-slate-800">
          ${pioneer.image ? `
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-2xl shrink-0 border-2 border-indigo-500/50 bg-slate-800 relative group">
              <img src="${pioneer.image}" alt="${pioneer.name}" class="w-full h-full object-cover object-top" />
              <div class="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs text-[9px] font-mono text-center text-slate-300 py-0.5">Retrato</div>
            </div>
          ` : `
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br ${pioneer.accent} flex items-center justify-center text-white shadow-xl shrink-0">
              <i data-lucide="${pioneer.icon || 'user'}" class="w-10 h-10"></i>
            </div>
          `}
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border ${pioneer.badgeColor} font-mono uppercase tracking-wider">
                ${categoryName}
              </span>
              <span class="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                ${pioneer.years}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              ${pioneer.name}
            </h2>
            <p class="text-sm font-medium ${isHardware ? 'text-amber-400' : 'text-indigo-400'} mt-1">
              ${pioneer.title}
            </p>
          </div>
        </div>

        ${isHardware ? `
        <!-- Machine / System Info Bar -->
        <div class="my-4 p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 flex items-center gap-3">
          <i data-lucide="hard-drive" class="w-5 h-5 text-amber-400 shrink-0"></i>
          <div>
            <div class="text-[11px] font-mono text-amber-300 uppercase tracking-wider font-bold">Máquinas y Arquitecturas Creadas</div>
            <div class="text-xs sm:text-sm text-slate-200 font-medium">${pioneer.machine}</div>
          </div>
        </div>
        ` : ''}

        <!-- Quote Block -->
        <div class="my-5 p-4 rounded-xl bg-gradient-to-r from-slate-900 ${isHardware ? 'to-amber-950/30 border-amber-500' : 'to-indigo-950/40 border-indigo-500'} border-l-4 border-y border-r border-slate-800">
          <p class="text-slate-300 italic text-sm md:text-base leading-relaxed">
            "${pioneer.quote}"
          </p>
        </div>

        <!-- Full Biography Section -->
        <div class="mb-5">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-2">
            <i data-lucide="book-open" class="w-4 h-4 ${isHardware ? 'text-amber-400' : 'text-indigo-400'}"></i> Trayectoria y Biografía
          </h4>
          <p class="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
            ${pioneer.fullBio}
          </p>
        </div>

        <!-- Key Contributions -->
        <div class="mb-5">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-2">
            <i data-lucide="award" class="w-4 h-4 text-amber-400"></i> Hitos y Contribuciones Trascendentales
          </h4>
          <ul class="space-y-2">
            ${pioneer.keyContributions.map(c => `
              <li class="flex items-start gap-3 text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${c}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Modern Impact -->
        <div class="mb-5 p-4 rounded-xl ${isHardware ? 'bg-amber-950/20 border-amber-500/20' : 'bg-indigo-950/30 border-indigo-500/20'} border">
          <h4 class="text-xs uppercase tracking-wider font-bold ${isHardware ? 'text-amber-300' : 'text-indigo-300'} mb-1 flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 ${isHardware ? 'text-amber-400' : 'text-indigo-400'}"></i> ¿Por qué importa hoy?
          </h4>
          <p class="text-xs sm:text-sm ${isHardware ? 'text-amber-200/90' : 'text-indigo-200/90'} leading-relaxed">
            ${pioneer.modernImpact}
          </p>
        </div>

        <!-- Tags -->
        <div>
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Palabras clave</h4>
          <div class="flex flex-wrap gap-2">
            ${pioneer.tags.map(t => `
              <span class="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                #${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function closeModal() {
    modalOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  if (modalCloseBtn) modalCloseBtn.onclick = closeModal;
  if (modalOverlay) {
    modalOverlay.onclick = (e) => {
      if (e.target === modalOverlay) closeModal();
    };
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
      closeModal();
    }
  });

  // ==========================================
  // 4. EVENT LISTENERS SETUP
  // ==========================================

  // Software Search Listeners
  if (softwareSearchInput) {
    softwareSearchInput.addEventListener("input", (e) => {
      softwareSearchQuery = e.target.value;
      if (clearSoftwareSearchBtn) {
        if (softwareSearchQuery.length > 0) {
          clearSoftwareSearchBtn.classList.remove("hidden");
        } else {
          clearSoftwareSearchBtn.classList.add("hidden");
        }
      }
      renderSoftwareCards();
    });
  }

  if (clearSoftwareSearchBtn) {
    clearSoftwareSearchBtn.addEventListener("click", () => {
      if (softwareSearchInput) {
        softwareSearchInput.value = "";
        softwareSearchQuery = "";
        clearSoftwareSearchBtn.classList.add("hidden");
        renderSoftwareCards();
        softwareSearchInput.focus();
      }
    });
  }

  if (softwareCategoryFilters) {
    softwareCategoryFilters.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      currentSoftwareCategory = btn.getAttribute("data-category") || "all";
      updateSoftwareFilterButtons();
      renderSoftwareCards();
    });
  }

  // Hardware Search Listeners
  if (hardwareSearchInput) {
    hardwareSearchInput.addEventListener("input", (e) => {
      hardwareSearchQuery = e.target.value;
      if (clearHardwareSearchBtn) {
        if (hardwareSearchQuery.length > 0) {
          clearHardwareSearchBtn.classList.remove("hidden");
        } else {
          clearHardwareSearchBtn.classList.add("hidden");
        }
      }
      renderHardwareCards();
    });
  }

  if (clearHardwareSearchBtn) {
    clearHardwareSearchBtn.addEventListener("click", () => {
      if (hardwareSearchInput) {
        hardwareSearchInput.value = "";
        hardwareSearchQuery = "";
        clearHardwareSearchBtn.classList.add("hidden");
        renderHardwareCards();
        hardwareSearchInput.focus();
      }
    });
  }

  if (hardwareCategoryFilters) {
    hardwareCategoryFilters.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      currentHardwareCategory = btn.getAttribute("data-category") || "all";
      updateHardwareFilterButtons();
      renderHardwareCards();
    });
  }

  // ==========================================
  // 5. COMPONENTS EVOLUTION LOGIC (RAM, Motherboard, GPU)
  // ==========================================
  let currentComponentTab = "ram";
  const componentContentEl = document.getElementById("component-content");
  const componentTabsContainer = document.getElementById("component-tabs");

  function updateComponentTabButtons(activeTab) {
    if (!componentTabsContainer) return;
    const buttons = componentTabsContainer.querySelectorAll(".component-tab-btn");
    buttons.forEach((btn) => {
      const tab = btn.getAttribute("data-tab");
      if (tab === activeTab) {
        if (tab === "ram") {
          btn.className = "component-tab-btn px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all border border-emerald-500/50 bg-emerald-950/60 text-emerald-300 shadow-lg shadow-emerald-950/50 scale-[1.02]";
        } else if (tab === "motherboard") {
          btn.className = "component-tab-btn px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all border border-blue-500/50 bg-blue-950/60 text-blue-300 shadow-lg shadow-blue-950/50 scale-[1.02]";
        } else {
          btn.className = "component-tab-btn px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all border border-purple-500/50 bg-purple-950/60 text-purple-300 shadow-lg shadow-purple-950/50 scale-[1.02]";
        }
      } else {
        btn.className = "component-tab-btn px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800";
      }
    });
  }

  function renderComponentContent(tabId) {
    const compData = (typeof COMPONENTS_EVOLUTION_DATA !== "undefined") ? COMPONENTS_EVOLUTION_DATA : (window.COMPONENTS_EVOLUTION_DATA || null);
    if (!componentContentEl || !compData) return;
    const comp = compData[tabId];
    if (!comp) return;

    componentContentEl.innerHTML = `
      <div class="space-y-8 animate-fadeIn">
        <!-- Component Main Hero Card -->
        <div class="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${comp.accent}"></div>
          
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${comp.accent} flex items-center justify-center text-white shadow-xl shrink-0">
                <i data-lucide="${comp.icon || 'layers'}" class="w-8 h-8"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border ${comp.badgeColor} font-mono uppercase tracking-wider">
                    ${comp.badgeText}
                  </span>
                  <span class="text-xs text-slate-400 font-mono">
                    ${comp.generations.length} Generaciones Documentadas
                  </span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                  ${comp.name}
                </h3>
                <p class="text-xs sm:text-sm text-slate-400 mt-0.5">
                  ${comp.subtitle}
                </p>
              </div>
            </div>
          </div>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed mt-6 bg-slate-900/50 p-4 sm:p-5 rounded-xl border border-slate-800/80">
            ${comp.summary}
          </p>
        </div>

        ${comp.image ? `
        <!-- Component Visual Illustration & Anatomy Showcase -->
        <div class="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-800">
          <div class="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
            <i data-lucide="eye" class="w-5 h-5 text-indigo-400"></i>
            <h4 class="text-base sm:text-lg font-bold text-white">
              Inspección Visual y Anatomía de ${comp.name}
            </h4>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Image Frame -->
            <div class="lg:col-span-7 bg-slate-950/80 rounded-2xl p-4 sm:p-6 border border-slate-800/90 shadow-2xl relative group flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
              <div class="absolute inset-0 bg-gradient-to-tr ${comp.accent} opacity-5 rounded-2xl pointer-events-none"></div>
              <img 
                src="${comp.image}" 
                alt="${comp.name}" 
                class="w-full max-h-[320px] object-contain mx-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <!-- Anatomy Callout Points -->
            <div class="lg:col-span-5 flex flex-col justify-between space-y-3">
              <p class="text-xs text-slate-400 italic mb-2">
                ${comp.imageCaption || ''}
              </p>
              
              <div class="space-y-2.5">
                ${(comp.anatomy || []).map((pt, i) => `
                  <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-colors">
                    <div class="flex items-center gap-2 text-xs font-bold text-white">
                      <span class="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                        ${i + 1}
                      </span>
                      <span>${pt.part}</span>
                    </div>
                    <p class="text-[11px] text-slate-400 mt-1 pl-7 leading-relaxed">
                      ${pt.desc}
                    </p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        ${comp.comparisonTable ? `
        <!-- Comparative Evolution Table -->
        <div class="glass-card rounded-2xl p-6 relative overflow-hidden border border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2.5">
              <i data-lucide="table" class="w-5 h-5 text-indigo-400"></i>
              <h4 class="text-base sm:text-lg font-bold text-white">
                Tabla Comparativa de la Evolución Técnica
              </h4>
            </div>
            <span class="text-[11px] font-mono text-slate-400 hidden sm:inline">Desliza horizontalmente si es necesario →</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="border-b border-slate-800 bg-slate-900/80 text-slate-300 font-mono text-[11px] uppercase">
                  ${comp.comparisonTable.headers.map(h => `<th class="py-3 px-3.5 font-bold">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 font-mono">
                ${comp.comparisonTable.rows.map((row, idx) => `
                  <tr class="hover:bg-slate-800/40 transition-colors ${idx % 2 === 0 ? 'bg-slate-950/20' : ''}">
                    <td class="py-3 px-3.5 font-bold text-white font-sans">${row[0]}</td>
                    <td class="py-3 px-3.5 text-indigo-400 font-medium">${row[1]}</td>
                    <td class="py-3 px-3.5 text-emerald-400 font-semibold">${row[2]}</td>
                    <td class="py-3 px-3.5 text-slate-300">${row[3]}</td>
                    <td class="py-3 px-3.5 text-amber-300">${row[4]}</td>
                    <td class="py-3 px-3.5 text-slate-300 font-sans text-xs">${row[5]}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        ` : ''}

        <!-- Generational Progression Timeline -->
        <div>
          <div class="flex items-center gap-2.5 mb-6">
            <i data-lucide="git-branch" class="w-5 h-5 text-indigo-400"></i>
            <h4 class="text-lg sm:text-xl font-bold text-white">
              Línea Temporal: Historia y Saltos Generacionales
            </h4>
          </div>

          <div class="grid grid-cols-1 gap-6">
            ${comp.generations.map((gen, index) => {
              return `
              <div class="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden border border-slate-800/80 hover:border-slate-700 transition-all">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/60">
                  <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-300 border border-slate-700">
                      ${index + 1}
                    </span>
                    <div>
                      <span class="text-xs font-mono text-indigo-400 font-semibold block">${gen.era}</span>
                      <h5 class="text-base sm:text-lg font-bold text-white">${gen.name}</h5>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700 self-start sm:self-center">
                    ${gen.tech}
                  </span>
                </div>

                <!-- Specs Pills Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  ${gen.speed ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Velocidad / Frecuencia</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.speed}</div>
                    </div>
                  ` : ''}

                  ${gen.capacity ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Capacidad Típica</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.capacity}</div>
                    </div>
                  ` : ''}

                  ${gen.voltage ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Voltaje de Alimentación</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.voltage}</div>
                    </div>
                  ` : ''}

                  ${gen.formFactor ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Factor de Forma / Medidas</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.formFactor}</div>
                    </div>
                  ` : ''}

                  ${gen.resolution ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Resolución & Colores</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.resolution}</div>
                    </div>
                  ` : ''}

                  ${gen.memory ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Memoria de Video (VRAM)</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.memory}</div>
                    </div>
                  ` : ''}

                  ${gen.interface ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Interfaz / Bus de Conexión</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.interface}</div>
                    </div>
                  ` : ''}

                  ${gen.features ? `
                    <div class="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div class="text-[10px] uppercase font-mono text-slate-400">Características Principales</div>
                      <div class="text-xs font-bold text-slate-200 mt-0.5 truncate">${gen.features}</div>
                    </div>
                  ` : ''}
                </div>

                <!-- Description -->
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  ${gen.description}
                </p>

                <!-- Breakthrough Callout -->
                <div class="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex items-start gap-2.5">
                  <i data-lucide="sparkles" class="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"></i>
                  <div class="text-xs text-indigo-200/90 leading-relaxed">
                    <strong class="text-indigo-300 font-semibold">Salto Tecnológico Clave:</strong> ${gen.breakthrough}
                  </div>
                </div>
              </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Curiosities & Facts Box -->
        <div class="glass-card rounded-2xl p-6 border border-amber-500/20 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900">
          <div class="flex items-center gap-2 mb-4 text-amber-400 font-bold text-sm">
            <i data-lucide="lightbulb" class="w-5 h-5"></i>
            <span>Curiosidades Históricas sobre ${comp.name}</span>
          </div>
          <ul class="space-y-3">
            ${comp.curiosities.map(c => `
              <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <i data-lucide="check" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span>${c}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  if (componentTabsContainer) {
    componentTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".component-tab-btn");
      if (!btn) return;
      const tab = btn.getAttribute("data-tab");
      if (tab && tab !== currentComponentTab) {
        currentComponentTab = tab;
        updateComponentTabButtons(tab);
        renderComponentContent(tab);
      }
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Initial renders
  updateSoftwareFilterButtons();
  renderSoftwareCards();

  updateHardwareFilterButtons();
  renderHardwareCards();

  updateComponentTabButtons("ram");
  renderComponentContent("ram");
});

