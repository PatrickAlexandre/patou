
#  <form> 📋 Les <input> <type>

Les champs de saisie suivants permettent à l'utilisateur de renseigner ses informations personnelles nécessaires pour les calculs de santé et de finances. Les valeurs minimales et maximales sont basées sur les records mondiaux actuels, et les valeurs par défaut correspondent aux moyennes pour chaque champ.

| Type                    | name             | Icone   |
|-------------------------|------------------|---------|
| `text`                  | **nom**          | 📝      |
| `text`                  | **prenom**       | 📝      |
| `date`                  | **date_naissance** | 🎂    |
| `number`                | **taille**       | 📏      |
| `number`                | **poids**        | ⚖️      |
| `range`                 | **nap**          | 🏃      |
| `number`                | **revenus**      | 💶      |
| `number`                | **depenses**     | 💸      |
| `range`                 | **epargne**      | 💰      |

---

# 🧮 Formules

Ces formules sont utilisées pour calculer divers indicateurs de santé et financiers à partir des données saisies par l'utilisateur.

| Calcul                                   | Formule                                                              |
|------------------------------------------|----------------------------------------------------------------------|
| **Âge**                                  | `Year - année(date_naissance)`                                       |
| **Indice de Masse Corporelle (IMC)**     | `poids / (taille / 100)^2`                                          |
| **Poids Idéal (Formule de Devine)**      | `50 + 0.91 * (taille - 152)` (homme) ou `45.5 + 0.91 * (taille - 152)` (femme) |
| **Besoins Caloriques Journaliers**       | `bmr * nap`                                                  |
| **Métabolisme de Base (BMR)**       |                                                   |
| **Dépenses/Rapport de Revenus (%)**      | `(dépenses / revenus) * 100`                                        |
| **Dépenses Mensuelles Restantes (€)**    | `revenus - dépenses`                                                |
| **Épargne Annuelle (€)**                 | `(revenus - dépenses) * 12`                                         |

---

# 📊 Résultats

Les résultats suivants sont affichés en gras avec des icônes Font Awesome pour une meilleure visualisation. Ils sont basés sur les données saisies par l'utilisateur.

- **Âge** 🧑‍🎓 : Affiche l'âge en années calculé.
- **Indice de Masse Corporelle (IMC)** 🏋️‍♂️ : Affiche le calcul de l'IMC pour évaluer la corpulence.
- **Poids Idéal** 🏆 : Estimation du poids idéal en fonction de la taille et du sexe.
- **Besoins Caloriques Journaliers** 🍏 : Montre les besoins énergétiques journaliers estimés.
- **Métabolisme de Base (BMR)**
- **Dépenses / Revenus (%)** 💸 : Affiche le pourcentage des revenus dédiés aux dépenses.
- **Dépenses Mensuelles Restantes (€)** 🏦 : Montant restant après dépenses.
- **Épargne Potentielle Annuelle (€)** 💰 : Calcul de l'épargne potentielle annuelle.

Chaque résultat sera affiché dynamiquement en utilisant JavaScript, avec une sauvegarde des données dans `localStorage` pour une expérience utilisateur améliorée.

---

# 📚 Bibliothèques CSS et JavaScript

Pour améliorer et simplifier le développement de cette calculatrice, il est conseillé d'utiliser les bibliothèques cochées :

### 🎨 Bibliothèques CSS

- [x] **Font Awesome** : Fournit des icônes vectorielles faciles à utiliser pour embellir l'interface utilisateur avec des icônes conviviales et standardisées.
- [ ] **Tailwind CSS** : Une bibliothèque de classes utilitaires qui permet de créer rapidement des interfaces réactives et stylées, en utilisant des classes prêtes à l'emploi et des styles personnalisables.
- [ ] **Bootstrap** : Offre un système de grille et des composants préfabriqués pour créer rapidement une interface utilisateur cohérente et réactive.

### 📦 Bibliothèques JavaScript

- [x] **jQuery** : Facilite la manipulation du DOM, la gestion des événements et les requêtes AJAX.
- [x] **Moment.js** : Utile pour la manipulation et le formatage des dates, par exemple pour calculer l'âge et les jours restants avant l'anniversaire.
- [x] **Lodash** : Fournit des fonctions utilitaires pour des tâches de programmation courantes, comme la manipulation de tableaux et d'objets.
- [ ] **Parsley.js** : Permet de valider facilement les formulaires côté client, en s'assurant que les utilisateurs saisissent des données correctes avant soumission.
- [ ] **Chart.js** : Si des visualisations graphiques sont souhaitées, Chart.js est une bibliothèque flexible pour créer des graphiques interactifs.
- [x] **Health.js**
- [x] **Healthcalc**
---

Ces bibliothèques combinées offrent une base solide pour créer une calculatrice web esthétique, réactive et performante.
L'intégration de ces bibliothèques peut améliorer l'efficacité, la maintenabilité et l'expérience utilisateur de votre application.

---

[Rédige le code complet, en un seul bloc de code;]