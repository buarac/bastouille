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
- [ ] **US03** – Modifier ou supprimer une culture existante
  
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
- [ ] **US14** – Partager local avec un autre utilisateur
- [ ] **US15** – Ajout de récoltes sans authentification complexe

### 🗄️ Épic : Architecture évolutive
- [ ] **US19** – Migration possible vers une base de données

---

## 🔧 Épic : API – Support technique

### 📘 API Cultures
- [ ] **US20** – Définir le modèle `Culture`  
      🔗 Structure les données utilisées dans **US01**, **US02**, **US03**

#### 📦 Proposition de modèle `Culture` (JSON)
```json
{
  "id": "uuid",
  "nom": "Tomate",
  "type": "fruit",
  "variete": "Cœur de bœuf",
  "unite_recolte": "grammes",
  "picto": "🍅",
  "image": null,
  "date_creation": "2025-07-17",
  "notes": "Plantée sous serre mi-avril"
}
```

#### 🔍 Champs détaillés

| Champ           | Type   | Description |
|------------------|--------|-------------|
| `id`             | string | Identifiant unique (UUID ou hash) |
| `nom`            | string | Nom de la plante principale (ex : Tomate) |
| `type`           | string | Catégorie fonctionnelle enrichie (ex : fruit, légume, aromatique, arbre fruitier…) |
| `variete`        | string | Variété optionnelle |
| `unite_recolte`  | string | Unité par défaut : `"grammes"` ou `"unités"` |
| `picto`          | string | Emoji pour l’interface mobile (ex : 🍅) |
| `image`          | string/null | Chemin vers une image personnalisée (optionnelle, V2) |
| `date_creation`  | string | Date d’enregistrement (format ISO) |
| `notes`          | string | Texte libre (commentaires, conseils, etc.) |
- [ ] **US21** – Consulter la liste des cultures (`GET /api/cultures`)  
      🔗 Implémente **US01 – Créer une fiche culture**
- [ ] **US22** – Ajouter une nouvelle culture (`POST /api/cultures`)  
      🔗 Implémente **US01**
- [ ] **US23** – Modifier une culture (`PUT /api/cultures/:id`)  
      🔗 Implémente **US03 – Éditer une culture**
- [ ] **US24** – Supprimer une culture (`DELETE /api/cultures/:id`)  
      🔗 Implémente **US03**

### 🧺 API Récoltes
- [ ] **US25** – Définir le modèle `Récolte`  
      🔗 Structure les données utilisées dans **US06**, **US08**, **US11**
- [ ] **US26** – Ajouter une nouvelle récolte (`POST /api/recoltes`)  
      🔗 Implémente **US06 – Ajouter une récolte**
- [ ] **US27** – Obtenir l’historique des récoltes (`GET /api/recoltes?cultureId=...`)  
      🔗 Implémente **US08 – Historique des récoltes**
- [ ] **US28** – Obtenir les cumuls par culture/saison (`GET /api/stats/recoltes`)  
      🔗 Implémente **US11 – Voir les cumuls de récolte**

---

## 📌 Notes

- Version initiale prévue : usage local uniquement, sans authentification complexe
- Déploiement envisagé sur macOS, accessible depuis iPhone
- Possibilité d’évolution vers une version cloud dans le futur
