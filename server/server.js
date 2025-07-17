const express = require('express');
const cors = require('cors');
const path = require('path');
// À ajouter dans server.js (US21)
const culturesRoutes = require('./routes/cultures');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/cultures', culturesRoutes);

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, 'public')));

// Fallback sur index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Baštouille lancé sur http://localhost:${PORT}`);
});
