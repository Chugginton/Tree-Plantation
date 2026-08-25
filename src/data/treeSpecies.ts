export interface TreeSpecies {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  image: string;
  co2Absorption: string; // e.g. '48 lbs/yr'
  lifespan: string;
  height: string;
  survivalRate: number; // percentage
  soilType: string;
  description: string;
  ecologicalBenefit: string;
  badge: string;
}

export const TREE_SPECIES: TreeSpecies[] = [
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
    soilType: 'Deep Clay & Loam',
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
    soilType: 'Adaptable Tropical Soil',
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
    soilType: 'Rich Moist Coastal',
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
    soilType: 'Arid & Sandy Soil',
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
    soilType: 'Fertile Well-Drained',
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
    soilType: 'Dry Savanna Sand',
    description: 'The "Tree of Life" capable of storing up to 120,000 liters of water inside its trunk to withstand severe droughts.',
    ecologicalBenefit: 'Water table preservation & savanna ecosystem hub.',
    badge: 'Water Reservoir'
  }
];
