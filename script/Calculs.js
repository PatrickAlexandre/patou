// Calculs.js

// Calcul de l'âge
function calculateAge(dateNaissance) {
    const birthDate = moment(dateNaissance);
    return moment().diff(birthDate, 'years');
}

// Calcul de l'IMC
function calculateIMC(taille, poids) {
    const tailleEnMetres = taille / 100;
    return poids / (tailleEnMetres ** 2);
}

// Calcul du poids idéal (Formule de Devine)
function calculateIdealWeight(taille) {
    return 50 + 0.9 * (taille - 152);
}

// Calcul des besoins caloriques
function calculateCaloricNeeds(age, poids) {
    return 10 * poids + 6.25 * 170 - 5 * age + 5; // Ex. pour hommes, formule Harris-Benedict
}

// Calcul du ratio dépenses/revenus
function calculateRatio(revenus, depenses) {
    return (depenses / revenus) * 100;
}
