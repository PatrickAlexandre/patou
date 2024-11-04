# Formules 🧮 Argent et Santé en JavaScript, grâce à la recherche internet

# 📚 Bibliothèques CSS et JavaScript Recommandées

Pour améliorer et simplifier le développement de cette calculatrice, il est conseillé d'utiliser les bibliothèques suivantes :

### 🎨 Bibliothèques CSS

- [x] **Font Awesome** : Fournit des icônes vectorielles faciles à utiliser pour embellir l'interface utilisateur avec des icônes conviviales et standardisées.
- [x] **Tailwind CSS** : Une bibliothèque de classes utilitaires qui permet de créer rapidement des interfaces réactives et stylées, en utilisant des classes prêtes à l'emploi et des styles personnalisables.
- [x] **Bootstrap** : Offre un système de grille et des composants préfabriqués pour créer rapidement une interface utilisateur cohérente et réactive.

### 📦 Bibliothèques JavaScript

- [x] **jQuery** : Facilite la manipulation du DOM, la gestion des événements et les requêtes AJAX.
- [x] **Moment.js** : Utile pour la manipulation et le formatage des dates, par exemple pour calculer l'âge et les jours restants avant l'anniversaire.
- [x] **Lodash** : Fournit des fonctions utilitaires pour des tâches de programmation courantes, comme la manipulation de tableaux et d'objets.
- [ ] **Parsley.js** : Permet de valider facilement les formulaires côté client, en s'assurant que les utilisateurs saisissent des données correctes avant soumission.
- [x] **Chart.js** : Si des visualisations graphiques sont souhaitées, Chart.js est une bibliothèque flexible pour créer des graphiques interactifs.

---

Ces bibliothèques combinées offrent une base solide pour créer une calculatrice web esthétique, réactive et performante.
L'intégration de ces bibliothèques peut améliorer l'efficacité, la maintenabilité et l'expérience utilisateur de votre application.

---

# Formulaire de Profil Personnel

Ce formulaire permet de recueillir les data utilisateur [sauvegardées et chargées dans le formulaire, de façon autonome avec localStorage] nécessaires pour effectuer des calculs de santé et de finances.

## `<form>` `<input>`

| Champ                               | Type d'entrée        | Type                    | Attributs HTML                             | Description                                   |
|-------------------------------------|----------------------|-------------------------|--------------------------------------------|-----------------------------------------------|
| **Nom**                             | `<input>`           | `text`                  | `name="nom" placeholder="Entrez votre nom"` | Nom de famille de l'utilisateur               |
| **Prénom**                          | `<input>`           | `text`                  | `name="prenom" placeholder="Entrez votre prénom"` | Prénom de l'utilisateur                       |
| **Date de Naissance**               | `<input>`           | `date`                  | `name="date_naissance" min="1900-01-01" max="today"` | Date de naissance au format AAAA-MM-JJ        |
| **Taille (cm)**                     | `<input>`           | `number`                | `name="taille" min="50" max="250" placeholder="En cm"` | Taille de l'utilisateur en centimètres        |
| **Poids (kg)**                      | `<input>`           | `number` (décimal)           | `name="poids" min="30" max="200" placeholder="En kg"` | Poids actuel de l'utilisateur en kilogrammes  |
| **Niveau d'Activité Physique (NAP)**| `<input>`           | `range`       | `name="nap" min="1" max="2.5" placeholder="Niveau d'activité physique"` | Niveau d'activité physique (1.2 à 2.5)       |
| **Revenus Mensuels (€)**            | `<input>`           | `number`                | `name="revenus" min="0" step="50" placeholder="En €"` | Revenus mensuels de l'utilisateur en euros    |
| **Dépenses Mensuelles (€)**         | `<input>`           | `number`                | `name="depenses" min="0" step="50" placeholder="En €"` | Dépenses mensuelles de l'utilisateur en euros |

---

##### Les données Insérées par l'Utilisateur sont [calculées grâce à la logique JavaScript, puis sauvegardées dans localStorage et] affichées sous forme d'icones avec le résultat.

---

## Résultats en gras avec icones Font Awesome à partir des entrées `<form>` `<input>`

| Calcul                                   | Formule                                                              | Description                                                                                 |
|------------------------------------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Âge**                                  | `2024 - année(date_naissance)`                                       | Âge de l'utilisateur en années, calculé à partir de l'année de naissance                   |
| **Indice de Masse Corporelle (IMC)**     | `poids / (taille / 100)^2`                                          | Calcul de l'IMC (kg/m²) pour évaluer la corpulence de l'utilisateur                        |
| **Poids Idéal (Devine's Formula)**       | `50 + 0.91 * (taille - 152)` (homme) ou `45.5 + 0.91 * (taille - 152)` (femme) | Poids idéal approximatif basé sur la formule de Devine en fonction de la taille            |
| **Besoins Caloriques Journaliers**       | `poids * 24 * nap`                                                  | Estimation des besoins énergétiques journaliers basés sur le poids et le niveau d'activité physique (NAP) |
| **Dépenses/Rapport de Revenus (%)**      | `(dépenses / revenus) * 100`                                        | Pourcentage des revenus mensuels consacrés aux dépenses                                    |
| **Dépenses Mensuelles Restantes (€)**    | `revenus - dépenses`                                                | Montant restant après déduction des dépenses des revenus                                   |
| **Épargne Potentielle Annuelle (€)**     | `(revenus - dépenses) * 12`                                         | Épargne potentielle sur une base annuelle                                                   |

### Légende des Formules

- `année(date_naissance)`: Extrait l'année de la date de naissance.
- `taille`: Taille de l'utilisateur en centimètres.
- `poids`: Poids de l'utilisateur en kilogrammes.
- `nap`: Niveau d'Activité Physique (de 1.2 à 2.5).
- `revenus`: Revenus mensuels de l'utilisateur en euros.
- `dépenses`: Dépenses mensuelles de l'utilisateur en euros.

---

## Calculs 🧮 JavaScript

Les calculs suivants sont effectués à partir des informations fournies par l'utilisateur dans le formulaire.

```javascript
// Récupération des valeurs de l'utilisateur
const dateNaissance = new Date(document.getElementById("date_naissance").value);
const taille = parseFloat(document.getElementById("taille").value);
const poids = parseFloat(document.getElementById("poids").value);
const nap = parseFloat(document.getElementById("nap").value);
const revenusMensuels = parseFloat(document.getElementById("revenus").value);
const depensesMensuelles = parseFloat(document.getElementById("depenses").value);

// Calculs Santé
const age = new Date().getFullYear() - dateNaissance.getFullYear();
const prochainAnniversaire = new Date(dateNaissance.setFullYear(new Date().getFullYear() + 1));
const joursAvantAnniversaire = Math.ceil((prochainAnniversaire - new Date()) / (1000 * 60 * 60 * 24));

const bmr = 10 * poids + 6.25 * taille - 5 * age + 5; // Calcul du BMR pour un homme
const tdee = bmr * nap;

const poidsIdeal = 22.5 * Math.pow(taille / 100, 2);
const objectifPoids = poidsIdeal - poids;
const imc = poids / Math.pow(taille / 100, 2);
const vieRestante = ((100 - age) / 100) * 100;

// Calculs Financiers
const soldeMensuel = revenusMensuels - depensesMensuelles;

// Affichage des résultats
document.getElementById("age").innerText = age;
document.getElementById("jours_anniversaire").innerText = joursAvantAnniversaire;
document.getElementById("tdee").innerText = tdee.toFixed(2) + " kcal";
document.getElementById("bmr").innerText = bmr.toFixed(2) + " kcal";
document.getElementById("poids_ideal").innerText = poidsIdeal.toFixed(2) + " kg";
document.getElementById("objectif_poids").innerText = objectifPoids.toFixed(2) + " kg";
document.getElementById("imc").innerText = imc.toFixed(2) + " (Poids normal)";
document.getElementById("vie_restante").innerText = vieRestante.toFixed(2) + "%";
document.getElementById("solde_mensuel").innerText = soldeMensuel.toFixed(2) + " €";

```

---

## Rédige le code complet et fonctionnel, en un seul bloc de code;