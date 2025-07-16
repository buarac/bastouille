# 🧱 Architecture Technique – Baštouille

## 🎯 Objectifs

- Application mobile-first pour le suivi des récoltes
- Hébergement local sur macOS, accessible sur iPhone via le réseau local
- Utilisation de Node.js (backend) et de technologies modernes pour le frontend
- Stockage local en fichiers JSON (base de données optionnelle en V2)
- Rendu fluide et installable comme une PWA (Progressive Web App)


## 📦 Structure du projet

```
📦 Baštouille/
├── client/             # Frontend React (source)
├── server/             # Backend Node.js + Express
│   ├── data/           # JSON files
│   ├── routes/         # API endpoints
│   ├── public/         # Fichiers statiques (build React)
│   └── index.js        # Serveur principal
├── package.json        # Script commun
```

## 🔧 Technologies utilisées

### 📱 Frontend
- **React + Vite** (démarrage rapide, simple à maintenir)
- **Tailwind CSS** (UI responsive, adaptée au mobile)
- **PWA-ready** (installable sur iPhone)
- Communication avec le backend via `fetch`

### 🔙 Backend
- **Node.js + Express**
- Architecture REST simple
- Persistance via des fichiers `.json` stockés localement dans `backend/data/`
- Accès autorisé depuis réseau local (CORS activé)


## 🚀 Évolutivité
- Backend migrable vers base de données (ex : SQLite, PostgreSQL)
- Frontend déployable séparément comme app statique
- API exposable sur un serveur (NAS, Raspberry Pi, ou cloud)