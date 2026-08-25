# 🌲 ARBORIA — Tree Plantation Network & Climate Ecosystem Engine

**Arboria** is a high-craft, interactive eco-brutalist web application designed to accelerate global reforestation and community-driven tree planting. Taking visual design, kinetic typography, and motion cues from creative portfolios like [Run Rob Run](https://www.runrobrun.com/), Arboria combines artistic frontend motion with real-time carbon tracking, species exploration, and automated form processing.

---

## 🌟 Key Features & Highlights

### 🎨 1. Dynamic Design & Micro-Interactions (RunRobRun Inspired)
- **Pixel Grid Entrance & Transitions**: Custom SVG/CSS grid curtain transition that pixelates onto the screen during section switches and route loads.
- **Custom Glowing Cursor Orb**: Smooth lagging cursor with dynamic scale expansion when hovering over interactive cards, buttons, and links.
- **Hero Ambient Audio Player**: Integrated ambient nature soundscapes (Rainfall, Woodland Birds, River Flow) with animated frequency equalizer bars, play/pause controls, and soundscape dropdown selector.
- **Kinetic Typography & Tickers**: Infinite scrolling marquee tickers displaying real-time impact milestones and mission statements.
- **Eco-Brutalist Noise Canvas**: Custom SVG fractal noise overlay giving a tactile, organic feel over rich forest greens (`#060B08`, `#10B981`).

---

### 🌳 2. Interactive Canopy Species Carousel (Card Carousel)
- **3D Card Showcase**: Drag/touch-enabled spotlight carousel featuring native tree species (English Oak, Sacred Banyan, Coast Redwood, Indian Neem, Wild Cherry, African Baobab).
- **Ecological Metrics**: View CO₂ absorption ratings per year, lifespan, maximum height, soil adaptability, and survival percentages for each species.
- **Thumbnail Quick Selector**: Fast ribbon navigation for quick species swapping.

---

### 📊 3. Real-Time Impact Counters & Community Stream
- **Live Metric Cards**: Animated stats for total saplings planted, estimated tons of CO₂ sequestered, hectares reforested, and active Earth Guardians.
- **Live Activity Feed**: Real-time ticker showing recent community tree adoptions with timestamp, species, and location tags.

---

### 📅 4. Reforestation Events & Drives
- **Filterable Drives**: Filter events by status (`Live Now`, `Upcoming`, `Completed`).
- **Target Progress Indicators**: Visual progress bars showing target saplings vs. planted saplings per drive.
- **Event Registration**: Instant registration modal connected to Formspree and local Express API.

---

### ✉️ 5. Formspree Contact & Plant-A-Tree Backend Integration
- **Formspree Endpoint**: Fully integrated with `https://formspree.io/f/xeajbqdd` for instant contact form submissions and tree adoption registrations.
- **Express API Server (`server/index.js`)**: Node.js Express server managing persistent tree count data (`server/data.json`) via `/api/stats` and `/api/plant` endpoints.
- **Interactive FAQ Accordion**: Expandable answers to common questions about tree survival tracking, corporate CSR drives, and native species selection.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Pixel CSS, Glassmorphism Filters
- **Icons**: Lucide React
- **Backend API**: Node.js, Express, CORS
- **Form Service**: Formspree (`https://formspree.io/f/xeajbqdd`)

---

## 🚀 Quick Start Guide

### 1. Installation
```bash
cd C:\Users\Keval\Desktop\VSCode_Restored_Projects\Users\Keval\.vscode\SIDE-PROJECTS\tree-plantation
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Launch Local Express API Server (Optional)
```bash
npm run server
```
Runs API server on [http://localhost:5000](http://localhost:5000).

---

## 📂 Project Structure

```
tree-plantation/
├── README.md
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── server/
│   ├── index.js             # Express API backend server
│   └── data.json            # Local JSON storage for trees & stats
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css            # Custom animations, pixel grid, noise texture
    ├── data/
    │   ├── treeSpecies.ts   # Tree species dataset with metrics & images
    │   └── events.ts        # Reforestation drives dataset
    └── components/
        ├── CursorOrb.tsx    # Custom glowing cursor
        ├── PixelTransition.tsx # Pixel grid curtain transition
        ├── AudioPlayer.tsx  # Ambient nature sound player
        ├── Navbar.tsx       # Topbar with live count badge & mobile menu
        ├── HeroSection.tsx  # Kinetic hero title & sound control
        ├── ImpactStats.tsx  # Counter cards & live activity stream
        ├── TreeCarousel.tsx # 3D tree species card carousel
        ├── EventsSection.tsx# Filterable plantation drives
        ├── PlantModal.tsx   # Sapling adoption modal (Express + Formspree)
        ├── ContactSection.tsx # Formspree contact form & FAQ accordion
        └── Footer.tsx       # Eco footer & server status indicator
```
