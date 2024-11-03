Je souhaite créer une interface de jeu HTML utilisant Bootstrap, Font Awesome et jQuery. Voici les étapes et exigences :


Création d'un formulaire initial d'entrée d'informations personnelles :
Titre : "Bienvenue ! Entrez vos informations"
Champs de formulaire :


Nom
Date de naissance (au format jj/mm/aaaa)
Sexe (choix entre "Homme" et "Femme")
Taille
Poids
Niveau d'activité physique (sélection parmi "Sédentaire", "Léger", "Modéré", "Intense")
Bouton : "Commencer"


Le formulaire doit être stylisé avec Bootstrap et facilement compréhensible.
Affichage de l'interface de personnage (après soumission du formulaire) :
Section cachée initialement et affichée seulement après avoir cliqué sur "Démarrer".
Affichage des données calculées de l'utilisateur, y compris :


Nom, niveau (en années et jours)
Barre d'Espérance de vie restante (avec API World Banks, selon sexe) montrant un pourcentage restant (valeur d'exemple 22 / 80 (70%))
Dépense énergétique journalière (TDEE) calculée en fonction du niveau d'activité
IMC (calculé avec un poids et une taille d'exemple, par exemple 70 kg et 1,75 m)
Poids idéal (Formule Devine)
Formule Harris-Benedict







Styling et mise en page :

Utiliser Bootstrap pour la mise en page et la gestion des composants.
Utiliser des icônes Font Awesome pour représenter les résultats importants (ex : âge, sexe, années restantes, taille, poids, niveau d'activité, physique).
Fond sombre (#2c2f33) des coins arrondis et une barre de progression pour la "Vie Restante" et "Calories".








Fonctionnalités JavaScript :

Utiliser jQuery pour gérer les événements du formulaire.
Calculer dynamiquement l’âge en années et jours à partir de la date de naissance fournie.


Inclure des fonctions pour :

Calcul de l'IMC (BMI) : poids / (taille * taille)
Calcul de la TDEE basé sur l'IMC et un multiplicateur d'activité.

Masquer le formulaire une fois les données soumises et afficher l'interface de personnage avec les données calculées.

Exigences techniques
Le code doit inclure un lien vers Bootstrap, Font Awesome, jQuery.
Afficher des tooltips Bootstrap pour chaque buff avec des indications comme "Âge", "Sexe", "Niveau d'Activité Physique", "Taille", "Objectif Poids".
S'assurer que le code soit fonctionnel et complet, prêt à être testé dans un navigateur.