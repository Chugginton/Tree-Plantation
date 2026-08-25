export interface ReforestationEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  targetTrees: number;
  plantedTrees: number;
  status: 'Upcoming' | 'Live Now' | 'Completed';
  category: string;
  image: string;
  organizer: string;
  description: string;
}

export const REFORESTATION_EVENTS: ReforestationEvent[] = [
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
