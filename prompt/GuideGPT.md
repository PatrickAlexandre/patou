# 🌐 Expert HTML5 avec JavaScript et Bibliothèques Populaires

Ce guide est conçu pour accompagner les développeurs travaillant avec HTML5 et JavaScript, avec des bibliothèques comme **Font Awesome**, **Moment.js**, **DataTables**, **Charts.js** et **jQuery**. L'objectif est de fournir des exemples concrets et des conseils pour implémenter des solutions pratiques de calculs d'événements de vie.

## 📝 Spécifications Techniques

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
  - **Colonne 3 :** Finances (revenus, dépenses).


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


# Santé

## 🏥 Formules de Santé

| Formule                         | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| Indice de Masse Corporelle (IMC)| Évaluation de la corpulence : *IMC = Poids (kg) / Taille² (m²)*           |
| Poids Idéal (Formule de Devine) | Estimation du poids idéal : *Hommes : 50 + 2,3 × (Taille en pouces - 60)* |
|                                 | *Femmes : 45,5 + 2,3 × (Taille en pouces - 60)*                           |
| Métabolisme de Base (Harris-Benedict) | Calcul des besoins énergétiques au repos :                              |
|                                 | *Hommes : 66,5 + (13,75 × Poids en kg) + (5,003 × Taille en cm) - (6,75 × Âge)* |
|                                 | *Femmes : 655,1 + (9,563 × Poids en kg) + (1,850 × Taille en cm) - (4,676 × Âge)* |
| Surface Corporelle (Formule de Du Bois) | Estimation de la surface corporelle : *0,007184 × Poids^0,425 × Taille^0,725* |

# Argent

## 💰 Formules Financières

| Formule                         | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| Intérêt Simple                  | Calcul de l'intérêt sur le capital initial : *I = P × r × t*              |
| Intérêt Composé                 | Calcul de l'intérêt sur le capital et les intérêts accumulés : *A = P × (1 + r/n)^(nt)* |
| Valeur Actuelle Nette (VAN)     | Évaluation de la rentabilité d'un investissement : *VAN = Σ (CFt / (1 + r)^t) - C0* |
| Taux de Rendement Interne (TRI) | Taux d'actualisation rendant la VAN nulle : *Σ (CFt / (1 + IRR)^t) = C0* |
| Ratio Dette/Capitaux Propres    | Mesure de la structure financière : *Ratio = Total des dettes / Capitaux propres* |
