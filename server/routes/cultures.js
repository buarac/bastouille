const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_FILE = path.join(__dirname, '../data/cultures.json');

// GET /api/cultures/:id – US29
router.get('/:id', (req, res) => {
  const cultureId = req.params.id;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture fichier' });

    let cultures = [];
    try {
      cultures = JSON.parse(data);
    } catch {
      return res.status(500).json({ error: 'Fichier JSON invalide' });
    }

    const culture = cultures.find(c => c.id === cultureId);
    if (!culture) {
      return res.status(404).json({ error: 'Culture non trouvée' });
    }

    res.json(culture);
  });
});

// GET /api/cultures – US21
router.get('/', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lecture cultures.json :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    try {
      const cultures = JSON.parse(data);
      res.json(cultures);
    } catch (parseErr) {
      console.error('Erreur parsing JSON :', parseErr);
      res.status(500).json({ error: 'Fichier JSON invalide' });
    }
  });
});

// POST /api/cultures – US22
router.post('/', (req, res) => {
  const fs = require('fs');
  const { v4: uuidv4 } = require('uuid');
  const DATA_FILE = path.join(__dirname, '../data/cultures.json');

  const newCulture = {
    id: uuidv4(),
    date_creation: new Date().toISOString().split('T')[0],
    ...req.body
  };

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture fichier' });

    let cultures = [];
    try {
      cultures = JSON.parse(data);
    } catch {
      return res.status(500).json({ error: 'Fichier JSON invalide' });
    }

    cultures.push(newCulture);

    fs.writeFile(DATA_FILE, JSON.stringify(cultures, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Erreur écriture fichier' });
      res.status(201).json(newCulture);
    });
  });
});

// PUT /api/cultures/:id – US23
router.put('/:id', (req, res) => {
  const cultureId = req.params.id;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture fichier' });

    let cultures = [];
    try {
      cultures = JSON.parse(data);
    } catch {
      return res.status(500).json({ error: 'Fichier JSON invalide' });
    }

    const index = cultures.findIndex(c => c.id === cultureId);
    if (index === -1) {
      return res.status(404).json({ error: 'Culture non trouvée' });
    }

    // Préserver id et date_creation
    cultures[index] = {
      ...cultures[index],
      ...req.body,
      id: cultures[index].id,
      date_creation: cultures[index].date_creation
    };

    fs.writeFile(DATA_FILE, JSON.stringify(cultures, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Erreur écriture fichier' });
      res.json(cultures[index]);
    });
  });
});

// DELETE /api/cultures/:id – US24
router.delete('/:id', (req, res) => {
  const cultureId = req.params.id;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture fichier' });

    let cultures = [];
    try {
      cultures = JSON.parse(data);
    } catch {
      return res.status(500).json({ error: 'Fichier JSON invalide' });
    }

    const index = cultures.findIndex(c => c.id === cultureId);
    if (index === -1) {
      return res.status(404).json({ error: 'Culture non trouvée' });
    }

    const deleted = cultures.splice(index, 1)[0];

    fs.writeFile(DATA_FILE, JSON.stringify(cultures, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Erreur écriture fichier' });
      res.json(deleted);
    });
  });
});

module.exports = router;
