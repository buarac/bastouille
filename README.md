# 🌿 Baštouille – Application de suivi de récoltes

Baštouille est une application web mobile-first pour suivre les cultures et récoltes d’un potager personnel.  
Elle fonctionne en local sur macOS, accessible depuis un iPhone via le réseau local, avec une interface simple et fluide.

---

## 🚀 Lancer l'application Baštouille (version unifiée)

### 📦 Prérequis
- Node.js (v18 ou supérieur recommandé)
- Terminal / Console

---

### 🧪 Étapes de démarrage

1. **Installer toutes les dépendances**
   (pour le frontend et le backend)
   ```bash
   npm install
   ```

2. **Builder le frontend React et copier le résultat dans le backend**
   ```bash
   npm run prepare
   ```

3. **Lancer le serveur Express (qui sert aussi le frontend)**
   ```bash
   npm start
   ```

4. **Ouvrir l'application**
   Accéder à [http://localhost:3000](http://localhost:3000) depuis ton navigateur (ou iPhone sur le même réseau local)

---

### 🔁 Modifier le frontend

Si tu modifies le code React (`client/src`), tu dois reconstruire :
```bash
npm run prepare
```
Puis relancer le serveur si besoin :
```bash
npm start
```

---

## 🧰 Scripts disponibles

- `npm run prepare` → build du frontend + copie vers le backend (`server/public`)
- `npm start` → démarre le serveur Express qui sert l’API + l’interface React

---

## 🗂️ Structure du projet

```
Baštouille/
├── client/           → Frontend React (Vite)
│   ├── src/
│   ├── index.html
│   └── dist/         → Dossier généré après build
│
├── server/           → Backend Express (Node.js)
│   ├── index.js
│   ├── data/         → Stockage JSON
│   ├── routes/       → Endpoints API
│   └── public/       → Contient le frontend compilé
│
├── package.json      → Scripts communs (monorepo)
└── README.md
```
