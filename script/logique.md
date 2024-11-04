# Création de Compte - Interface Utilisateur

Ce projet propose une interface d'inscription et de suivi de profil, de santé, et de finances, permettant aux utilisateurs d'entrer des informations personnelles pour calculer divers indicateurs.

## Structure du Projet

### HTML

Le fichier HTML est divisé en deux sections principales :

1. **Formulaire d'inscription** : Permet aux utilisateurs de renseigner leurs informations de base (nom, prénom, date de naissance, taille) et des données variables (poids, revenus, dépenses).
2. **Interface principale** : Une fois le formulaire soumis, l'interface principale affiche les données calculées (profil, santé, finances) et propose une navigation entre les différentes sections.

---

### JavaScript

Le fichier JavaScript contient les principales fonctionnalités, regroupées par sections :

---

- 🟢 **Initialisation et Gestion de l'Interface Principale** : 
  - Fonction `showMainInterface()`: Cette fonction s'active au clic sur le bouton d'inscription, récupère les données du formulaire, effectue les calculs, et affiche les résultats dans l'interface principale.

- ⚫ **Navigation entre Sections** :
  - `showSection()`: Gère la navigation entre les sections "Profil", "Santé", et "Finances".

- 🟠 **Fonctions de Calcul** : 
  - `calculateAge()`: Calcule l'âge de l'utilisateur en fonction de la date de naissance.
  - `calculateIMC()`: Calcule l'IMC (Indice de Masse Corporelle) de l'utilisateur.
  - `calculateIdealWeight()`: Calcule le poids idéal selon la formule de Lorentz.
  - `calculateCalories()`: Calcule les besoins caloriques journaliers de l'utilisateur (formule de Harris-Benedict).
  - `calculateExpenseRatio()`: Calcule le pourcentage de dépenses par rapport aux revenus.

- 🟡 **Fonctions d'Affichage** :
  - `displayUserInfo()`: Met à jour le DOM pour afficher les informations de l'utilisateur dans les sections appropriées de l'interface principale.

- 🔵 **Fonctions de Graphique** :
  - `drawFinanceChart()`: Utilise Chart.js pour afficher un graphique en camembert des finances (dépenses vs restant).


