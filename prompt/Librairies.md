# 🌐 Expert HTML5 avec JavaScript et Bibliothèques Populaires

Ce guide est conçu pour accompagner les développeurs travaillant avec HTML5 et JavaScript.

# Meilleures options pour l'application de calcul de vie

Voici les bibliothèques recommandées pour chaque aspect de l'application (présentées sous forme de liste numérotée) :

1. **🎨 Interface utilisateur et design** - **TailwindCSS** **Font Awesome**

2. **📅 Calculs de durée et dates** - **Day.js**

3. **📊 Visualisation** - **D3.js**

4. **🛠️ Manipulation des données et logique réactive** - **Lodash** **DataTables**

5. **🌐 Framework JavaScript** - **Vue.js** 


## 📝 Spécifications Techniques

### 📚 Bibliothèques
L'objectif est de fournir des exemples concrets et des conseils pour implémenter des solutions pratiques de calculs d'événements de vie.

## 🎨 CSS

- [x] **TailwindCSS** – "Aucune classe CSS à écrire" – Styles utilitaires pour un design rapide.
- [ ] **Bootstrap** – "Le framework le plus populaire" – Composants réactifs pour des interfaces modernes.
- [ ] **Bulma** – "Le framework CSS moderne" – Mises en page élégantes basées sur Flexbox.
- [ ] **Materialize** – "Un framework CSS moderne" – Inspiré du Material Design de Google.
- [ ] **Styled Components** – "Utilisez les composants comme une base" – CSS en JavaScript pour des composants React.

## 🛠️ Utilitaires

- [x] **Lodash** – "Une bibliothèque JavaScript moderne" – Outils pour manipuler données et objets.
- [x] **Moment.js** – "Analyse, validation, manipulation et affichage des dates et heures en JavaScript" – Gestion avancée des dates et heures.
- [ ] **Axios** – "Promise based HTTP client for the browser and node.js" – Requêtes HTTP asynchrones simplifiées.
- [ ] **Underscore.js** – "La bibliothèque utilitaire JavaScript" – Fonctions pratiques pour manipuler les collections.
- [ ] **Day.js** – "2kB JavaScript date utility library" – Dates légères, alternative rapide à Moment.js.
- [x] **DataTables** – "Tables dynamiques pour les développeurs" – Gestion et affichage de tableaux de données interactifs.

## 📊 Visualisation de données

- [x] **D3.js** – "Data-Driven Documents" – Graphiques interactifs basés sur les données.
- [x] **Chart.js** – "Simple yet flexible JavaScript charting" – Création facile de graphiques variés.
- [ ] **Three.js** – "JavaScript 3D library" – Graphismes 3D pour le web.
- [ ] **Plotly** – "The open source graphing library" – Graphiques analytiques interactifs.
- [ ] **ECharts** – "A powerful, interactive charting and visualization library for browser" – Visualisations complexes et dynamiques.
- [ ] **Highcharts** – "Create interactive charts easily for your web projects" – Graphiques interactifs pour le web.
- [ ] **Vis.js** – "Dynamic, browser-based visualization library" – Visualisation dynamique de données et de réseaux.
- [ ] **Sigma.js** – "A JavaScript library dedicated to graph drawing" – Visualisation de graphes pour des réseaux complexes.
- [ ] **NVD3** – "Re-usable charts for d3.js" – Composants réutilisables pour D3.js.
- [ ] **FusionCharts** – "JavaScript charts for web & mobile" – Graphiques interactifs pour applications web et mobiles.

## 🌐 Manipulation DOM

- [x] **jQuery** – "Write less, do more" – Sélection et manipulation du DOM simplifiées.
- [x] **Anime.js** – "JavaScript animation engine" – Animations complexes et fluides.
- [ ] **GreenSock (GSAP)** – "Ultra high-performance, professional-grade animation for the modern web" – Animations puissantes pour le web.
- [ ] **Vanilla Tilt.js** – "A smooth 3D tilt javascript library" – Effets de tilt en 3D.
- [ ] **Popper.js** – "Positioning tooltips and popovers is difficult" – Positionnement précis pour popups et infobulles.

## 📦 Autres catégories

- [ ] **RxJS** – "Reactive Extensions Library for JavaScript" – Programmation réactive pour flux de données.
- [ ] **Redux** – "A Predictable State Container for JS Apps" – Gestion d'état centralisé pour applications.
- [ ] **Next.js** – "The React Framework" – Rendu serveur et sites statiques pour React.
- [x] **Vue.js** – "The Progressive JavaScript Framework" – Framework progressif pour interfaces interactives.
- [ ] **React Router** – "Declarative routing for React" – Navigation intuitive pour applications React.


### 🔍 Informations à Fournir

Les informations à fournir par l’utilisateur se divisent en deux catégories : celles **fixes dès la naissance** et celles qui **évoluent au cours de la vie**.

#### 🔒 Informations Fixes Dès la Naissance

Ces informations ne changent pas au cours de la vie et sont saisies une seule fois, puis enregistrées dans **LocalStorage** :

- **Nom**
- **Prénom**
- **Date de naissance**
- **Taille**

#### 🔄 Informations Évolutives

Ces informations peuvent varier avec le temps et sont actualisées à chaque saisie :

- **Poids**
- **Niveau d’activité physique (NAP)** - ajustable avec un `<input type="range">`
- **Revenus mensuels**
- **Dépenses mensuelles**

## 💻 Calculs en JavaScript

Les calculs sont structurés pour fournir des indicateurs de **santé** et de **finances**. Les résultats sont présentés avec des icônes **Font Awesome** pour une visibilité accrue.

### 🎂 Calcul de l'Âge
- **Âge en années et jours**.
- Affichage du **nombre de jours restants avant le prochain anniversaire**.

### 📊 Barre de Progression pour la Vie Restante
- **Pourcentage de la vie restante** en fonction de l’espérance de vie.
- **Affichage des années restantes**.

### 🔥 Calcul du TDEE (Total Daily Energy Expenditure)
- Calculé à l'aide de la **formule de Harris-Benedict** pour estimer les besoins caloriques journaliers en fonction du NAP.

### 💪 Calcul du BMR (Basal Metabolic Rate)
- **Dépense énergétique de base** en kcal.

### 🎯 Calcul de l'Objectif de Poids (Poids Idéal)
- Le poids idéal est calculé à l'aide de la **formule de Devine** en fonction de la taille et du genre.
- **Objectif de Poids** : Il est déterminé automatiquement en calculant la différence entre le poids actuel et le poids idéal, et indique le poids à perdre ou à gagner pour atteindre le poids idéal.

### 🧍 Calcul de l'IMC (Indice de Masse Corporelle)
- Calcul basé sur la taille et le poids, avec classification (sous-poids, poids normal, surpoids, obésité).

## 🎨 Expérience Utilisateur (UX)

Pour une expérience intuitive :

- **Transition Douce :** Animation fluide pour la barre de progression.
- **Couleurs Distinctes :** Couleurs différentes pour chaque calcul pour une lecture facile.
- **Navigation Fluidifiée :** Avec **jQuery**, bascule rapide entre sections.

## 💻 Interface Utilisateur (UI)

- **Organisation en Colonnes :**
  - **Colonne 1 :** Informations fixes (nom, date de naissance, taille).
  - **Colonne 2 :** Informations évolutives (poids, activité).
  - **Colonne 3 :** Finances (revenus, dépenses)(DataTable.js : Métrique	Valeur	Unité).


# 📊 Tableau des Formules Utilisées

| **Nom de la Formule**               | **Formule**                                                                                                                                                        | **Données à Insérer**                                      |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **Âge en Années et Jours**          | `âge = date_actuelle - date_naissance`                                                                                                                             | Date de naissance                                          |
| **Jours Restants avant Anniversaire** | `jours_restants = prochain_anniversaire - date_actuelle`                                                                                                          | Date de naissance, date actuelle                           |
| **Espérance de Vie Restante**       | `vie_restante = espérance_vie - âge`                                                                                                                               | Espérance de vie, âge calculé                              |
| **Barre de Progression Vie Restante** | `pourcentage_vie = (vie_restante / espérance_vie) * 100`                                                                                                          | Espérance de vie, vie restante                             |
| **TDEE (Total Daily Energy Expenditure)** | `TDEE = BMR * facteur_NAP`                                                                                                                                        | BMR, NAP (Niveau d’Activité Physique)                      |
| **BMR (Basal Metabolic Rate)**      | Homme : `BMR = 88.362 + (13.397 * poids) + (4.799 * taille) - (5.677 * âge)`<br>Femme : `BMR = 447.593 + (9.247 * poids) + (3.098 * taille) - (4.330 * âge)` | Poids, taille, âge, genre                                  |
| **Poids Idéal (Formule de Devine)** | Homme : `Poids_idéal = 50 + 2.3 * ((taille_en_pouces - 60))`<br>Femme : `Poids_idéal = 45.5 + 2.3 * ((taille_en_pouces - 60))`                                 | Taille en pouces, genre                                    |
| **Objectif de Poids**               | `Objectif_poids = poids_actuel - poids_idéal`                                                                                                                      | Poids actuel, poids idéal                                  |
| **IMC (Indice de Masse Corporelle)** | `IMC = poids / (taille_en_mètres^2)`                                                                                                                              | Poids, taille en mètres                                    |


DataTables = Colonnes 