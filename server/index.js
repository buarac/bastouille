const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API de test
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bienvenue sur l’API de Baštouille' });
});

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, 'public')));

// Fallback sur index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Baštouille lancé sur http://localhost:${PORT}`);
});
