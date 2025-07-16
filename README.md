# 🌿 Baštouille – Application de suivi de récoltes

**Baštouille** est une application web mobile-first conçue pour suivre les cultures et récoltes d’un potager personnel.  
Elle fonctionne en local sur macOS, est accessible depuis un iPhone via le réseau Wi-Fi domestique, et s’installe comme une app web (PWA-like).

---

## 🚀 Lancer l'application (version unifiée)

### 📦 Prérequis
- Node.js (v18 ou supérieur recommandé)
- Terminal (macOS)

---

### 🧪 Étapes de démarrage

1. **Installer toutes les dépendances**
   ```bash
   npm install
   ```

2. **Builder le frontend React et copier le build vers le backend**
   ```bash
   npm run prepare
   ```

3. **Lancer le serveur Express (API + interface React)**
   ```bash
   npm start
   ```

4. **Accéder à l'application**
   → [http://localhost:3000](http://localhost:3000)  
   Fonctionne aussi sur iPhone connecté au même réseau local.

---

### 🔁 Modifier le frontend

À chaque modification du code React :
```bash
npm run prepare
```
Puis redémarrer le serveur si besoin :
```bash
npm start
```

---

## 🧰 Scripts disponibles

```json
"scripts": {
  "dev": "npm --workspace client run dev",
  "build": "npm --workspace client run build",
  "prepare": "npm --workspace client run build && cp -r client/dist server/public",
  "start": "npm --workspace server start"
}
```

- `npm run prepare` : build du frontend + copie dans le backend
- `npm start` : démarre le serveur Express (API + UI)

---

## 🧱 Architecture du projet

### 🎯 Objectifs

- Suivi simple des cultures et récoltes
- Stockage en JSON local (pas de base de données pour l’instant)
- Application mobile-first, installable comme une PWA
- Fonctionnement unifié (1 seul serveur Node.js)

---

### 📦 Structure des dossiers

```
Baštouille/

├── client/               → Frontend React (Vite)
│   ├── src/              → Code source de l’interface
│   │   └── main.jsx
│   ├── index.html        → Entrée HTML principale
│   ├── dist/             → Build frontend (généré avec npm run build)
│   └── package.json      → Dépendances et scripts frontend
│
├── server/               → Backend Node.js + Express
│   ├── index.js          → Serveur principal (API + rendu du frontend)
│   ├── data/             → Stockage des données au format JSON
│   ├── routes/           → Endpoints API (à créer)
│   ├── public/           → Contiendra le build React (copié depuis client/dist)
│   └── package.json      → Dépendances et scripts backend
│
├── package.json          → Déclaration des workspaces et scripts globaux
├── .gitignore            → Fichiers ignorés par Git
└── README.md             → Documentation du projet
```

---

## 🔄 Évolution possible

- Ajout d’authentification légère pour multi-utilisateur local
- Intégration d’une base de données (SQLite, PostgreSQL…)
- Déploiement distant (cloud, Raspberry Pi, NAS, etc.)
- Données météo automatisées, graphiques, export CSV

---

## 📖 Licence

Projet personnel privé, non distribué publiquement à ce stade.
