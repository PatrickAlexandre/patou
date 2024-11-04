# 🚀 Calculatrice Finance & Santé 📈💪

**Bienvenue dans l'avenir des calculs financiers et de santé !** Cette application web fusionne finance et bien-être, vous permettant de surveiller vos finances 💸 et de maintenir une santé optimale 🏋️. C'est comme avoir un conseiller financier et un coach personnel, un livreur à domicile, une diététicienne, une secrétaire dans votre poche ! 🌐

- design moderne optimisé en CSS3
- jQuery, Moment.js, Chart.js, Font Awesome


## 🔥 Technologies Utilisées

---

### 🎨 CSS

- [x] **Tailwind CSS** `https://cdn.jsdelivr.net/npm/tailwindcss@3.4.14/dist/tailwind.min.css` - Le style sans compromis. 🕶️
- [x] **Font Awesome** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` - Les icônes qui ajoutent de la clarté et du fun. 😎

---
### 💻 JavaScript

- #### Manipulation du DOM
  - [x] **jQuery** `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js` - Facilite la manipulation du DOM comme un pro 🎩

- #### Utilitaires de Données
  - [x] **Lodash** `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js` - Simplifie les manipulations de données. C'est comme des super-pouvoirs pour vos calculs ! 🦸

- #### Gestion des Dates
  - [x] **Moment.js** `https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js` - Parce que calculer l'âge, c'est plus compliqué qu'on le pense 🕰️

- #### Calculs de Santé
  - [ ] **Health.js** `https://unpkg.com/health@0.3.0/lib/health.js` - Intègre des fonctionnalités de surveillance de la santé directement dans votre application. 💡
  - [ ] **Healthcalc** `https://cdn.jsdelivr.net/npm/health-calculator@1.0.0/dist/health-calculator.min.js` - Fournit des outils pour calculer divers indicateurs de santé. 🧮

---

## 🛠️ UI

1. **Formulaire de saisie** 📋 : Remplissez quelques détails avec <input> et <type> et les calculs se font automatiquement.
- Les champs de saisie suivants permettent à l'utilisateur de renseigner ses informations personnelles nécessaires pour les calculs de santé et de finances. Les valeurs minimales et maximales sont basées sur les records mondiaux actuels, et les valeurs actuelles correspondent aux moyennes pour chaque champ.

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

2. **Calculs automatiques** 🤖 : Des bibliothèques javascript de calcul pour des résultats précis.
3. **Affichage des résultats** : Deux sections :
   - **Finance** 💰 : Pourcentage des dépenses/revenus, dépenses restantes, épargne annuelle.
   - **Santé** 💪 : Âge, IMC, poids idéal et besoins caloriques quotidiens.

## 🤓 UX

1. **Renseignez le formulaire** : Ajoutez vos informations et laissez les calculs se faire.
2. **Obtenez les résultats en temps réel** : Pas de temps à perdre - tout est mis à jour instantanément.

---

## Scripts

Vue.js : Gère la navigation entre les sections et l'affichage du profil avec jQuery.
Storage.js : Gère les données du formulaire et le stockage dans localStorage.
Calculs.js : Contient les calculs pour les métriques.
Resultats.js : Contient l'affichage des résultats.
charts.js : Contient les graphiques.

---

[Rédige le code complet en un seul bloc maintenant;]

---

## 🔥 Bibliothèques JavaScript Tendances en 2025

| Nom           | Catégorie              | Slogan                                             | Description                                                                                     | Téléchargements |
|---------------|------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------|-----------------|
| **React**     | 🌐 Interface Utilisateur | Construire des interfaces interactives             | Bibliothèque populaire pour créer des interfaces utilisateur dynamiques et réactives.           | 150M/mois       |
| **Vue.js**    | 🌐 Interface Utilisateur | Framework progressif pour interfaces utilisateur   | Utilisé pour développer des applications SPA de manière flexible et performante.               | 80M/mois        |
| **Angular**   | 🌐 Interface Utilisateur | Développer des applications dynamiques             | Framework structuré pour créer des applications web robustes avec TypeScript.                  | 70M/mois        |
| **Svelte**    | 🌐 Interface Utilisateur | Interfaces réactives sans runtime                 | Compilateur pour transformer des composants en code JavaScript optimisé.                       | 30M/mois        |
| **Ember.js**  | 🌐 Interface Utilisateur | Framework pour applications ambitieuses            | Framework MVC pour construire des applications web robustes et ambitieuses.                    | 10M/mois        |
| **Next.js**   | 🌐 Interface Utilisateur | Applications React avec rendu côté serveur         | Framework pour développer des applications React avec rendu côté serveur et fonctionnalités avancées. | 50M/mois |
| **Gatsby**    | 🌐 Interface Utilisateur | Créer des sites web statiques avec React           | Framework pour générer des sites web rapides et sécurisés basés sur React et GraphQL.          | 18M/mois        |
| **Express.js**| 🔧 Backend              | Framework minimaliste pour Node.js                 | Framework léger et rapide pour construire des applications web et APIs avec Node.js.           | 90M/mois        |
| **Meteor.js** | 🔧 Backend              | Applications en temps réel                         | Framework full-stack pour créer des applications réactives avec des fonctionnalités temps réel. | 15M/mois        |
| **Socket.io** | 🔧 Backend              | Applications en temps réel                         | Bibliothèque pour gérer les connexions en temps réel dans les applications web et mobiles.     | 45M/mois        |
| **Electron**  | 🖥️ Desktop              | Applications de bureau avec JavaScript             | Framework pour créer des applications de bureau multiplateformes en utilisant JavaScript.      | 40M/mois        |
| **D3.js**     | 📊 Données              | Manipuler des documents basés sur des données      | Créer des visualisations de données interactives et des graphiques dans le navigateur.         | 25M/mois        |
| **Chart.js**  | 📊 Données              | Création de graphiques interactifs                 | Bibliothèque simple pour créer des graphiques interactifs et intuitifs.                         | 22M/mois        |
| **Redux**     | 📊 Données              | Gestion d'état des applications JavaScript         | Gestion d'état centralisée pour applications JavaScript, souvent utilisée avec React.          | 35M/mois        |
| **Mocha**     | 🧪 Tests                | Framework de test pour JavaScript                  | Outil de test populaire pour les applications JavaScript, avec une syntaxe claire et flexible. | 28M/mois        |
| **Webpack**   | ⚙️ Outils de Build      | Module bundler pour JavaScript moderne             | Outil pour regrouper des modules JavaScript et gérer les dépendances pour des applications modernes. | 50M/mois |
| **TypeScript**| ⚙️ Outils de Build      | JavaScript avec typage statique                    | Superset de JavaScript, ajoute des types pour une meilleure lisibilité et sécurité du code.    | 60M/mois        |
