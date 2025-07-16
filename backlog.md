# 🧺 Backlog Produit – Application de Suivi des Récoltes

## 🎯 Vision Produit

**Nom de l'application** : `Baštouille`

Application de suivi des récoltes dans un jardin/potager personnel, utilisée principalement sur iPhone et hébergée localement sur macOS.  
L’objectif est de remplacer un fichier Excel par une application intuitive, permettant de suivre les cultures, d’ajouter des récoltes, de consulter des statistiques et d’intégrer des données météo.

Usage privé, principalement par moi-même et éventuellement partagé avec mon épouse.  
Version initiale : locale, hébergée sur mon réseau domestique.  
Techno : Node.js, persistance préférée en JSON, rendu mobile proche d’une app native.

---

## 📘 Épic : Gestion des cultures

- **US01** – En tant qu’utilisateur, je veux **créer une fiche pour chaque fruit/légume** afin de gérer mes cultures.  
- **US02** – En tant qu’utilisateur, je veux **différencier les cultures annuelles des arbres fruitiers**.  
- **US03** – En tant qu’utilisateur, je veux **éditer ou supprimer une culture** pour maintenir ma liste à jour.  

---

## 🌱 Épic : Suivi du cycle de culture

- **US04** – En tant qu’utilisateur, je veux **enregistrer les étapes clés d’une culture** (semis, repiquage, plantation, récolte).  
- **US05** – En tant qu’utilisateur, je veux **visualiser les dates importantes de chaque étape** pour suivre l’évolution d’une culture.  

---

## 🧺 Épic : Récoltes

- **US06** – En tant qu’utilisateur, je veux **ajouter une nouvelle récolte** associée à une culture.  
- **US07** – En tant qu’utilisateur, je veux **enregistrer la quantité récoltée (poids ou unité)**.  
- **US08** – En tant qu’utilisateur, je veux **consulter l’historique des récoltes par culture**.  

---

## ☁️ Épic : Météo lors de la récolte

- **US09** – En tant qu’utilisateur, je veux **associer les données météo à une récolte** pour pouvoir les consulter plus tard.  
- **US10** – En tant qu’utilisateur, je veux que les **informations météo soient automatiquement récupérées** selon la date et ma localisation.  

---

## 📊 Épic : Statistiques et comparaisons

- **US11** – En tant qu’utilisateur, je veux **voir les cumuls de récolte par culture et par saison**.  
- **US12** – En tant qu’utilisateur, je veux **comparer les récoltes entre différentes années/saisons**.  
- **US13** – En tant qu’utilisateur, je veux **voir un graphique de progression des récoltes au fil du temps**.  

---

## 👥 Épic : Multi-utilisateur léger

- **US14** – En tant qu’utilisateur, je veux **partager l'application avec un autre utilisateur de mon réseau local** (par exemple mon épouse).  
- **US15** – En tant qu’utilisateur, je veux que **chaque utilisateur puisse enregistrer des récoltes sans authentification complexe**.  

---

## 📱 Épic : Accessibilité et expérience mobile

- **US16** – En tant qu’utilisateur, je veux **utiliser l’application depuis mon iPhone avec une interface fluide**.  
- **US17** – En tant qu’utilisateur, je veux **installer l’application comme une web app** sur mon écran d’accueil, avec un rendu proche d’une app native.  

---

## 🗄️ Épic : Stockage des données

- **US18** – En tant que développeur, je veux que les **données soient stockées localement dans des fichiers JSON**, pour une gestion simple et transparente.  
- **US19** – En tant que développeur, je veux **pouvoir migrer vers une base de données** si les besoins évoluent.  

---

## 📌 Notes

- Version initiale prévue : usage local uniquement, sans authentification complexe
- Déploiement envisagé sur macOS, accessible depuis iPhone
- Possibilité d’évolution vers une version cloud dans le futur