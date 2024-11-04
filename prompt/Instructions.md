Crée une page Web en HTML pour un "Tableau de Bord Assistant" destiné à calculer et afficher divers indicateurs de santé, notamment des métriques personnelles et des informations financières, temporelles et professionnelles. Voici les principales fonctionnalités à inclure :

En-tête et Style Global :

Utilise Bootstrap pour la mise en forme et Font Awesome pour les icônes.
Prévois des styles personnalisés pour la barre de progression, avec des couleurs verte, jaune et rouge selon les niveaux de progression.
Menu de Navigation :

Crée une barre de navigation sous forme de groupe de boutons pour accéder aux différentes sections : "Travail", "Santé", "Temps", "Argent", et "Espace" (profil).
Chaque bouton doit être accompagné d'une icône.
Section Profil :

Construit un formulaire pour collecter les données de profil de l'utilisateur, comprenant le nom, la date de naissance, le sexe, la taille, le poids et le niveau d'activité physique (NAP).
Ajoute un bouton "Sauvegarder le Profil" pour enregistrer les informations.
Section Santé :

Affiche des indicateurs de santé calculés : espérance de vie, dépense énergétique journalière (TDEE), métabolisme de base (BMR), poids idéal, différence de poids, et IMC.
Utilise une barre de progression pour visualiser la portion de vie restante en pourcentage.
Affiche les données de profil de l'utilisateur (nom et âge) dans cette section.
Sections supplémentaires :

Ajoute des sections pour "Argent", "Travail" et "Temps", indiquant que celles-ci sont "en construction".
Prévois que seules les sections activées par l’utilisateur soient visibles.
Scripts :

Inclut les librairies jQuery et Bootstrap pour les interactions dynamiques.
Charge un fichier JavaScript externe nommé calcul.js pour les calculs de santé.
Conçois la page avec une structure responsive, et assure-toi que chaque section s’affiche de manière dynamique lorsque l’utilisateur clique sur le bouton correspondant. 