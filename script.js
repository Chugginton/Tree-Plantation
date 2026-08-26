/* ==========================================================================
   ARBORIA - Pure JavaScript Application Logic
   ========================================================================== */

// --- Data Sets ---
const TREE_SPECIES = [
  {
    id: 'oak',
    name: 'English Oak',
    scientificName: 'Quercus robur',
    category: 'Deciduous Monarch',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    co2Absorption: '22.6 kg/yr',
    lifespan: '500+ Years',
    height: '40 Meters',
    survivalRate: 94,
    description: 'The ancient backbone of temperate forests. Supports over 2,300 species of flora, fauna, and fungi.',
    ecologicalBenefit: 'High biodiversity shelter & soil erosion prevention.',
    badge: 'High Carbon Sink'
  },
  {
    id: 'banyan',
    name: 'Sacred Banyan',
    scientificName: 'Ficus benghalensis',
    category: 'Tropical Canopy',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    co2Absorption: '34.2 kg/yr',
    lifespan: '200+ Years',
    height: '25 Meters',
    survivalRate: 98,
    description: 'Generates sprawling prop aerial roots forming massive continuous mini-canopies.',
    ecologicalBenefit: 'Microclimate temperature regulation & avian habitat.',
    badge: 'Keystone Species'
  },
  {
    id: 'redwood',
    name: 'Coast Redwood',
    scientificName: 'Sequoia sempervirens',
    category: 'Coniferous Titan',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    co2Absorption: '45.0 kg/yr',
    lifespan: '1,500+ Years',
    height: '115 Meters',
    survivalRate: 91,
    description: 'Earth’s tallest living trees. Absorbs dense coastal fog and captures unprecedented atmospheric carbon.',
    ecologicalBenefit: 'Unmatched long-term carbon sequestration.',
    badge: 'Super Carbon Vault'
  },
  {
    id: 'neem',
    name: 'Indian Neem',
    scientificName: 'Azadirachta indica',
    category: 'Medicinal Evergreen',
    image: 'https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=800&q=80',
    co2Absorption: '28.0 kg/yr',
    lifespan: '150-200 Years',
    height: '20 Meters',
    survivalRate: 96,
    description: 'Thrives in harsh drought-prone climates while acting as a natural air purifier and organic pesticide source.',
    ecologicalBenefit: 'Air filtration & drought resistance resilience.',
    badge: 'Air Purifier'
  },
  {
    id: 'cherry',
    name: 'Wild Cherry',
    scientificName: 'Prunus avium',
    category: 'Flowering Woodland',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80',
    co2Absorption: '18.4 kg/yr',
    lifespan: '80-100 Years',
    height: '18 Meters',
    survivalRate: 89,
    description: 'Stunning spring blooms attract vital pollinator bees and migratory birds across seasonal cycles.',
    ecologicalBenefit: 'Pollinator sanctuary & wildlife food web boost.',
    badge: 'Biodiversity Magnet'
  },
  {
    id: 'baobab',
    name: 'African Baobab',
    scientificName: 'Adansonia digitata',
    category: 'Succulent Giant',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    co2Absorption: '38.5 kg/yr',
    lifespan: '1,000+ Years',
    height: '25 Meters',
    survivalRate: 95,
    description: 'The "Tree of Life" capable of storing up to 120,000 liters of water inside its trunk to withstand severe droughts.',
    ecologicalBenefit: 'Water table preservation & savanna ecosystem hub.',
    badge: 'Water Reservoir'
  }
];

const REFORESTATION_EVENTS = [
  {
    id: 'event-1',
    title: 'Monsoon Canopy Rally 2026',
    date: 'SEP 15, 2026',
    time: '08:00 AM - 02:00 PM',
    location: 'Western Ghats Biodiversity Belt',
    targetTrees: 10000,
    plantedTrees: 4200,
    status: 'Live Now',
    category: 'Community Planting',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    organizer: 'Arboria Eco Alliance',
    description: 'Join over 500 volunteers planting indigenous saplings along deforested river banks to stabilize soil and rebuild wildlife corridors.'
  },
  {
    id: 'event-2',
    title: 'Urban Forest Hackathon & Sapling Blitz',
    date: 'OCT 04, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'Metropolitan Green Park Corridor',
    targetTrees: 5000,
    plantedTrees: 0,
    status: 'Upcoming',
    category: 'Urban Reforestation',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    organizer: 'Green City Initiative',
    description: 'Transform vacant urban lots into dense Miyawaki micro-forests. Lunch, gloves, tools, and saplings provided.'
  },
  {
    id: 'event-3',
    title: 'Coastal Mangrove Restoration Drive',
    date: 'NOV 12, 2026',
    time: '07:30 AM - 01:00 PM',
    location: 'Estuary Wetlands Sanctuary',
    targetTrees: 15000,
    plantedTrees: 0,
    status: 'Upcoming',
    category: 'Coastal Defense',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    organizer: 'Ocean Canopy Trust',
    description: 'Planting mangrove prop-root saplings to shield coastal communities against storm surges and absorb immense carbon.'
  },
  {
    id: 'event-4',
    title: 'Spring Oak & Pine Replanting',
    date: 'AUG 10, 2026',
    time: 'Completed',
    location: 'Bavarian Foothills Reserve',
    targetTrees: 8000,
    plantedTrees: 8450,
    status: 'Completed',
    category: 'Forest Recovery',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    organizer: 'EuroForest Regeneration',
    description: 'Successfully restored 15 hectares of fire-damaged pine woods with mixed native deciduous species.'
  }
];

// Application State
let currentTreesCount = 142850;
let currentCo2Kg = 3571250;
let currentTreeIndex = 0;
let isAudioPlaying = false;
let currentFilter = 'All';

// Audio Tracks
const PLAYLIST = [
  { title: "Canopy Rainfall & Wind", src: "https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg" },
  { title: "Morning Bird Sanctuary", src: "https://actions.google.com/sounds/v1/environments/woodland_birds.ogg" },
  { title: "Deep Forest Stream Flow", src: "https://actions.google.com/sounds/v1/water/river_stream.ogg" }
];

// --- 1. Custom Glowing Cursor Orb ---
document.addEventListener('DOMContentLoaded', () => {
  const orb = document.getElementById('cursor-orb');

  window.addEventListener('mousemove', (e) => {
    if (orb) {
      orb.style.left = `${e.clientX}px`;
      orb.style.top = `${e.clientY}px`;
    }
  });

  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.thumb-card')) {
      orb?.classList.add('hovered');
    } else {
      orb?.classList.remove('hovered');
    }
  });

  // --- Initial Render ---
  renderCarouselSpotlight();
  renderThumbnails();
  renderEvents();
  triggerPixelTransition();
});

// --- 2. RunRobRun Style Pixel Transition ---
function triggerPixelTransition() {
  const overlay = document.getElementById('pixel-transition');
  if (!overlay) return;

  overlay.innerHTML = '';
  overlay.classList.add('active');

  const cols = 10;
  const rows = 6;
  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const cell = document.createElement('div');
    cell.className = 'pixel-cell';
    const col = i % cols;
    const row = Math.floor(i / cols);
    const delay = col * 0.04 + row * 0.03;
    cell.style.animationDelay = `${delay}s`;
    overlay.appendChild(cell);
  }

  setTimeout(() => {
    overlay.classList.remove('active');
  }, 900);
}

// --- 3. Ambient Audio Player Logic ---
function toggleAudio() {
  const audio = document.getElementById('nature-audio');
  const player = document.querySelector('.audio-player');
  const discIcon = document.getElementById('audio-disc-icon');

  if (!audio) return;

  if (isAudioPlaying) {
    audio.pause();
    isAudioPlaying = false;
    player?.classList.remove('playing');
  } else {
    audio.play().then(() => {
      isAudioPlaying = true;
      player?.classList.add('playing');
    }).catch((err) => {
      console.log("User interaction required for audio", err);
    });
  }
}

function togglePlaylistMenu() {
  const menu = document.getElementById('playlist-menu');
  menu?.classList.toggle('hidden');
}

function selectTrack(index) {
  const audio = document.getElementById('nature-audio');
  const trackTitle = document.getElementById('current-track-title');
  const player = document.querySelector('.audio-player');
  const menu = document.getElementById('playlist-menu');

  if (!audio || !PLAYLIST[index]) return;

  audio.src = PLAYLIST[index].src;
  if (trackTitle) trackTitle.textContent = PLAYLIST[index].title;

  document.querySelectorAll('.playlist-item').forEach((item, idx) => {
    item.classList.toggle('active', idx === index);
  });

  menu?.classList.add('hidden');

  audio.play().then(() => {
    isAudioPlaying = true;
    player?.classList.add('playing');
  }).catch(() => {});
}

// --- 4. 3D Canopy Carousel Logic ---
function renderCarouselSpotlight() {
  const tree = TREE_SPECIES[currentTreeIndex];
  if (!tree) return;

  document.getElementById('tree-img').src = tree.image;
  document.getElementById('tree-badge').textContent = tree.badge;
  document.getElementById('tree-scientific').textContent = tree.scientificName;
  document.getElementById('tree-category').textContent = tree.category;
  document.getElementById('tree-name').textContent = tree.name;
  document.getElementById('tree-desc').textContent = tree.description;
  document.getElementById('tree-co2').textContent = tree.co2Absorption;
  document.getElementById('tree-lifespan').textContent = tree.lifespan;
  document.getElementById('tree-survival').textContent = `${tree.survivalRate}%`;
  document.getElementById('tree-height').textContent = tree.height;
  document.getElementById('tree-eco').textContent = tree.ecologicalBenefit;
  document.getElementById('plant-btn-text').textContent = `Plant ${tree.name} Sapling`;
  document.getElementById('carousel-counter').textContent = `0${currentTreeIndex + 1} / 0${TREE_SPECIES.length}`;

  updateThumbnailsActiveState();
}

function renderThumbnails() {
  const ribbon = document.getElementById('thumbnail-ribbon');
  if (!ribbon) return;

  ribbon.innerHTML = '';
  TREE_SPECIES.forEach((tree, idx) => {
    const card = document.createElement('button');
    card.className = `thumb-card ${idx === currentTreeIndex ? 'active' : ''}`;
    card.onclick = () => {
      currentTreeIndex = idx;
      renderCarouselSpotlight();
    };

    card.innerHTML = `
      <div class="thumb-img"><img src="${tree.image}" alt="${tree.name}"></div>
      <p class="thumb-name">${tree.name}</p>
      <p class="thumb-sub">${tree.co2Absorption}</p>
    `;
    ribbon.appendChild(card);
  });
}

function updateThumbnailsActiveState() {
  const cards = document.querySelectorAll('.thumb-card');
  cards.forEach((card, idx) => {
    card.classList.toggle('active', idx === currentTreeIndex);
  });
}

function prevTree() {
  currentTreeIndex = currentTreeIndex === 0 ? TREE_SPECIES.length - 1 : currentTreeIndex - 1;
  renderCarouselSpotlight();
}

function nextTree() {
  currentTreeIndex = currentTreeIndex === TREE_SPECIES.length - 1 ? 0 : currentTreeIndex + 1;
  renderCarouselSpotlight();
}

function plantCurrentTree() {
  const tree = TREE_SPECIES[currentTreeIndex];
  openPlantModal(tree.name);
}

// --- 5. Reforestation Events Logic ---
function filterEvents(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.textContent.trim() === category);
  });
  renderEvents();
}

function renderEvents() {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const filtered = REFORESTATION_EVENTS.filter((e) => {
    if (currentFilter === 'All') return true;
    return e.status === currentFilter;
  });

  grid.innerHTML = '';
  filtered.forEach((event) => {
    const progress = Math.min(100, Math.round((event.plantedTrees / event.targetTrees) * 100));
    const card = document.createElement('div');
    card.className = 'glass-card event-card';

    card.innerHTML = `
      <div class="event-banner">
        <img src="${event.image}" alt="${event.title}">
        <span class="event-status-pill ${event.status === 'Live Now' ? 'status-live' : event.status === 'Upcoming' ? 'status-upcoming' : 'status-completed'}">
          ${event.status}
        </span>
        <span class="event-category-pill">${event.category}</span>
      </div>

      <div class="event-body">
        <div>
          <h3 class="event-title">${event.title}</h3>
          <p class="event-desc">${event.description}</p>

          <div class="event-meta">
            <span>📅 ${event.date} • ${event.time}</span>
            <span>📍 ${event.location}</span>
            <span>🤝 ${event.organizer}</span>
          </div>

          <div class="event-progress-wrap">
            <div class="progress-label">
              <span>Saplings Target</span>
              <span>${event.plantedTrees.toLocaleString()} / ${event.targetTrees.toLocaleString()}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>
        </div>

        ${event.status === 'Completed' 
          ? `<div class="btn-secondary w-full text-center">Drive Concluded</div>`
          : `<button class="btn-primary w-full" onclick="openPlantModal('Event: ${event.title}')">
              <span>Register For Event</span>
             </button>`
        }
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

// --- 6. Formspree Contact Form Submission ---
function handleFormspreeContact(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('contact-submit-btn');
  const successMsg = document.getElementById('contact-success-msg');

  if (btn) btn.innerHTML = `<span>Sending Message...</span>`;

  fetch("https://formspree.io/f/xeajbqdd", {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then((res) => {
    form.classList.add('hidden');
    successMsg?.classList.remove('hidden');
    form.reset();
  }).catch((err) => {
    form.classList.add('hidden');
    successMsg?.classList.remove('hidden');
    form.reset();
  }).finally(() => {
    if (btn) btn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i><span>Submit Message</span>`;
    lucide.createIcons();
  });
}

function resetContactForm() {
  document.getElementById('contact-form')?.classList.remove('hidden');
  document.getElementById('contact-success-msg')?.classList.add('hidden');
}

// --- 7. Plant A Tree Modal & Counter Increment ---
function openPlantModal(treeOrEventName = null) {
  const modal = document.getElementById('plant-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalForm = document.getElementById('plant-form');
  const modalSuccess = document.getElementById('modal-success-view');

  if (treeOrEventName) {
    if (modalTitle) modalTitle.textContent = `Plant ${treeOrEventName}`;
  } else {
    if (modalTitle) modalTitle.textContent = `Adopt A Tree Sapling`;
  }

  modalForm?.classList.remove('hidden');
  modalSuccess?.classList.add('hidden');
  modal?.classList.remove('hidden');
}

function closePlantModal() {
  const modal = document.getElementById('plant-modal');
  modal?.classList.add('hidden');
}

function handlePlantSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const countSelect = document.getElementById('modal-count-select');
  const countVal = parseInt(countSelect?.value || '1', 10);
  const btn = document.getElementById('modal-submit-btn');
  const modalForm = document.getElementById('plant-form');
  const modalSuccess = document.getElementById('modal-success-view');

  if (btn) btn.innerHTML = `<span>Registering Saplings...</span>`;

  // Submit to Formspree
  fetch("https://formspree.io/f/xeajbqdd", {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).finally(() => {
    // Increment global counters
    currentTreesCount += countVal;
    currentCo2Kg += countVal * 25;

    // Update UI numbers
    const navCount = document.getElementById('nav-tree-count');
    const heroCount = document.getElementById('hero-planted-count');
    const heroCo2 = document.getElementById('hero-co2-count');

    if (navCount) navCount.textContent = currentTreesCount.toLocaleString();
    if (heroCount) heroCount.textContent = currentTreesCount.toLocaleString();
    if (heroCo2) heroCo2.textContent = `${(currentCo2Kg / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })} Tons`;

    modalForm?.classList.add('hidden');
    modalSuccess?.classList.remove('hidden');
    form.reset();

    if (btn) btn.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4"></i><span>Confirm & Plant Saplings</span>`;
    lucide.createIcons();
  });
}

// --- 8. FAQs Toggle ---
function toggleFaq(index) {
  const answers = document.querySelectorAll('.faq-answer');
  const icons = document.querySelectorAll('.faq-icon');

  answers.forEach((ans, idx) => {
    if (idx === index) {
      ans.classList.toggle('hidden');
    } else {
      ans.classList.add('hidden');
    }
  });
}

// Mobile Menu Drawer Toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  drawer?.classList.toggle('hidden');
}
