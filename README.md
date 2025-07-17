# 🌿 Baštouille – Application de suivi de récoltes

**Baštouille** est une application web mobile-first conçue pour suivre les cultures et récoltes d’un potager personnel.  
Elle fonctionne en local sur macOS, est accessible depuis un iPhone via le réseau Wi-Fi domestique, et s’installe comme une app web (PWA-like).

---

## 📊 Suivi des User Stories

Ce tableau présente l’état d’avancement des US fonctionnelles et techniques de l’application **Baštouille**.

| Catégorie      | ID    | Intitulé                                     | Version   | Statut          |
|----------------|-------|-----------------------------------------------|-----------|------------------|
| 📘 Cultures    | US01  | Créer une fiche culture                       | MVP       | ✅ Terminée  |
|                | → US20  | Définir le modèle `Culture`                  | MVP       | ✅ Terminée |
|                | → US21  | GET /api/cultures                            | MVP       | ✅ Terminée |
|                | → US22  | POST /api/cultures                           | MVP       | ✅ Terminée |
|                | → US29  | GET /api/cultures/:id                     | MVP       | ✅ Terminée |
|                | US02  | Différencier cultures annuelles / arbres      | MVP       | 🔴 Non démarrée  |
|                | US03  | Modifier ou supprimer une culture             | MVP       | ✅ Terminée  |
|                | → US23  | PUT /api/cultures/:id                        | MVP       | ✅ Terminée |
|                | → US24  | DELETE /api/cultures/:id                     | MVP       | ✅ Terminée |
| 🧺 Récoltes    | US06  | Ajouter une nouvelle récolte                  | MVP       | 🔴 Non démarrée  |
|                | → US25  | Définir le modèle `Récolte`                  | MVP       | 🔴 Non démarrée  |
|                | → US26  | POST /api/recoltes                           | MVP       | 🔴 Non démarrée  |
|                | → US27  | GET /api/recoltes?cultureId=...              | MVP       | 🔴 Non démarrée  |
|                | → US28  | GET /api/stats/recoltes                      | MVP       | 🔴 Non démarrée  |
|                | US07  | Enregistrer la quantité récoltée             | MVP       | 🔴 Non démarrée  |
|                | US08  | Consulter l’historique des récoltes          | MVP       | 🔴 Non démarrée  |
| 📱 Mobile UI   | US16  | Interface fluide sur iPhone                  | MVP       | 🔴 Non démarrée  |
|                | US17  | Installation en PWA                          | MVP       | 🔴 Non démarrée  |
| 🗄️ Stockage    | US18  | Persistance locale en fichiers JSON          | MVP       | 🔴 Non démarrée  |

| 🚧 À venir     |       |                                               |           |                  |
|----------------|-------|-----------------------------------------------|-----------|------------------|
| 🌱 Cultures    | US04  | Enregistrer les étapes clés (semis, etc.)     | V2        | 🔴 Non démarrée  |
|                | US05  | Visualiser les dates importantes              | V2        | 🔴 Non démarrée  |
| ☁️ Météo       | US09  | Associer des données météo à une récolte      | V2        | 🔴 Non démarrée  |
|                | US10  | Récupération automatique des infos météo      | V2        | 🔴 Non démarrée  |
| 📊 Stats       | US11  | Voir les cumuls par culture et par saison     | V2        | 🔴 Non démarrée  |
|                | US12  | Comparer les récoltes entre saisons/années    | V2        | 🔴 Non démarrée  |
|                | US13  | Graphique de progression des récoltes         | V2        | 🔴 Non démarrée  |
| 👥 Partage     | US14  | Partage local entre 2 utilisateurs             | Ultérieur | 🔴 Non démarrée  |
|                | US15  | Ajout de récolte sans authentification        | Ultérieur | 🔴 Non démarrée  |
| ⚙️ Technique   | US19  | Migration vers base de données                | Ultérieur | 🔴 Non démarrée  |

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
