import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'data.json');

// Default initial state
const defaultData = {
  treesPlanted: 142850,
  co2OffsetKg: 3571250,
  hectaresRestored: 420,
  volunteers: 8940,
  recentPlantings: [
    { id: 1, name: "Sarah M.", tree: "Giant Redwood", location: "Pacific Coast", timestamp: "2 mins ago" },
    { id: 2, name: "Liam K.", tree: "Sacred Fig (Banyan)", location: "Western Ghats", timestamp: "12 mins ago" },
    { id: 3, name: "Elena R.", tree: "Oak", location: "Bavarian Forest", timestamp: "25 mins ago" }
  ]
};

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("Error reading data file:", err);
  }
  return defaultData;
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error("Error writing data file:", err);
  }
}

// Ensure data file exists
let currentData = readData();
if (!fs.existsSync(DATA_FILE)) {
  writeData(currentData);
}

// GET /api/stats
app.get('/api/stats', (req, res) => {
  res.json(readData());
});

// POST /api/plant
app.post('/api/plant', (req, res) => {
  const { name = 'Anonymous Guardian', species = 'Native Evergreen', count = 1, location = 'Global Canopy' } = req.body;
  
  const data = readData();
  const addedCount = parseInt(count) || 1;
  
  data.treesPlanted += addedCount;
  data.co2OffsetKg += addedCount * 25; // ~25kg per tree average per year
  
  const newEntry = {
    id: Date.now(),
    name,
    tree: species,
    location,
    timestamp: "Just now"
  };

  data.recentPlantings.unshift(newEntry);
  if (data.recentPlantings.length > 10) {
    data.recentPlantings.pop();
  }

  writeData(data);
  res.json({
    success: true,
    message: `Successfully registered ${addedCount} ${species}!`,
    stats: data,
    newEntry
  });
});

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🌲 Tree Plantation API Server running on port ${PORT}`);
});
