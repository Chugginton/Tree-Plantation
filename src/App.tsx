import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactStats } from './components/ImpactStats';
import { TreeCarousel } from './components/TreeCarousel';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { PlantModal } from './components/PlantModal';
import { Footer } from './components/Footer';
import { CursorOrb } from './components/CursorOrb';
import { PixelTransition } from './components/PixelTransition';
import { TreeSpecies } from './data/treeSpecies';
import { ReforestationEvent } from './data/events';

export function App() {
  const [stats, setStats] = useState({
    treesPlanted: 142850,
    co2OffsetKg: 3571250,
    hectaresRestored: 420,
    volunteers: 8940,
    recentPlantings: [
      { id: 1, name: "Sarah M.", tree: "Giant Redwood", location: "Pacific Coast", timestamp: "2 mins ago" },
      { id: 2, name: "Liam K.", tree: "Sacred Banyan", location: "Western Ghats", timestamp: "12 mins ago" },
      { id: 3, name: "Elena R.", tree: "English Oak", location: "Bavarian Reserve", timestamp: "25 mins ago" }
    ]
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTree, setSelectedTree] = useState<TreeSpecies | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ReforestationEvent | null>(null);
  const [pixelActive, setPixelActive] = useState(true);

  // Fetch live stats from local Express backend
  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      // Backend optional fallback
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenPlantModal = (tree?: TreeSpecies, event?: ReforestationEvent) => {
    setSelectedTree(tree || null);
    setSelectedEvent(event || null);
    setIsModalOpen(true);
  };

  const handleSuccessPlanting = (count: number, name: string, species: string) => {
    setStats((prev) => ({
      ...prev,
      treesPlanted: prev.treesPlanted + count,
      co2OffsetKg: prev.co2OffsetKg + count * 25,
      recentPlantings: [
        { id: Date.now(), name, tree: species, location: "Global Zone", timestamp: "Just now" },
        ...prev.recentPlantings.slice(0, 4)
      ]
    }));
  };

  return (
    <div className="relative min-h-screen bg-forest-950 text-emerald-100 font-body selection:bg-emerald-500 selection:text-forest-950">
      {/* Custom Glowing Cursor Orb */}
      <CursorOrb />

      {/* Pixel Grid Entrance Transition */}
      <PixelTransition active={pixelActive} onComplete={() => setPixelActive(false)} />

      {/* Navigation Header */}
      <Navbar
        treesCount={stats.treesPlanted}
        onOpenPlantModal={() => handleOpenPlantModal()}
      />

      {/* Main Page Content */}
      <main>
        {/* Kinetic Hero Section with Audio Player */}
        <HeroSection
          treesCount={stats.treesPlanted}
          onOpenPlantModal={() => handleOpenPlantModal()}
        />

        {/* Impact Statistics & Live Activity */}
        <ImpactStats stats={stats} />

        {/* 3D Tree Species Card Carousel */}
        <TreeCarousel
          onSelectTree={(tree) => handleOpenPlantModal(tree)}
        />

        {/* On-The-Ground Events Showcase */}
        <EventsSection
          onRegisterEvent={(event) => handleOpenPlantModal(undefined, event)}
        />

        {/* Formspree Powered Contact Section */}
        <ContactSection />
      </main>

      {/* Interactive Plant A Tree Modal */}
      <PlantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTree={selectedTree}
        selectedEvent={selectedEvent}
        onSuccessPlanting={handleSuccessPlanting}
      />

      {/* Eco Footer */}
      <Footer />
    </div>
  );
}

export default App;
