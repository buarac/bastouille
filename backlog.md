# 🧺 Backlog Produit – Application de Suivi des Récoltes

## 🎯 Vision Produit

- **Nom de l'application** : `Baštouille`

Application de suivi des récoltes dans un jardin/potager personnel, utilisée principalement sur iPhone et hébergée localement sur macOS.  
L’objectif est de remplacer un fichier Excel par une application intuitive, permettant de suivre les cultures, d’ajouter des récoltes, de consulter des statistiques et d’intégrer des données météo.

Usage privé, principalement par moi-même et éventuellement partagé avec mon épouse.  
Version initiale : locale, hébergée sur mon réseau domestique.  
Techno : Node.js, persistance préférée en JSON, rendu mobile proche d’une app native.

---

## 🌟 MVP – Fonctionnalités essentielles

### 📘 Épic : Gestion des cultures
- [ ] **US01** – Créer une fiche pour chaque fruit/légume
- [ ] **US02** – Différencier les cultures annuelles des arbres fruitiers

### 🧺 Épic : Récoltes
- [ ] **US06** – Ajouter une nouvelle récolte
- [ ] **US07** – Enregistrer la quantité récoltée
- [ ] **US08** – Consulter l’historique des récoltes

### 📱 Épic : Expérience mobile
- [ ] **US16** – Interface fluide sur iPhone
- [ ] **US17** – Installation comme web app (PWA)

### 🗄️ Épic : Stockage des données
- [ ] **US18** – Stockage local en fichiers JSON

---

## 🟡 Fonctionnalités à planifier après le MVP (V2+)

### 🌱 Épic : Suivi du cycle de culture
- [ ] **US04** – Enregistrer les étapes clés (semis, repiquage, plantation, récolte)
- [ ] **US05** – Visualiser les dates importantes

### ☁️ Épic : Météo lors de la récolte
- [ ] **US09** – Associer des données météo à une récolte
- [ ] **US10** – Récupération automatique des infos météo

### 📊 Épic : Statistiques et comparaisons
- [ ] **US11** – Voir les cumuls de récolte par culture et par saison
- [ ] **US12** – Comparer les récoltes entre différentes saisons/années
- [ ] **US13** – Voir un graphique de progression des récoltes

### 👥 Épic : Multi-utilisateur léger
- [ ] **US14** – Partage local avec un autre utilisateur
- [ ] **US15** – Ajout de récoltes sans authentification complexe

### 🗄️ Épic : Architecture évolutive
- [ ] **US19** – Migration possible vers une base de données

---

## 📌 Notes

- Version initiale prévue : usage local uniquement, sans authentification complexe
- Déploiement envisagé sur macOS, accessible depuis iPhone
- Possibilité d’évolution vers une version cloud dans le futur