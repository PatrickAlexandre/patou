// healthCalculations.js

// 📊 CALCUL DES INDICATEURS

/**
 * Calcule l'Indice de Masse Corporelle (IMC).
 * @param {number} weight - Poids en kilogrammes.
 * @param {number} heightM - Taille en mètres.
 * @returns {string} - IMC arrondi à deux décimales.
 */
function calculateBMI(weight, heightM) { // 🧮 IMC
	return (weight / (heightM * heightM)).toFixed(2);
}

/**
 * Calcule le poids idéal selon la taille et le sexe.
 * @param {number} heightM - Taille en mètres.
 * @param {string} sex - Sexe de la personne ('male' ou 'female').
 * @returns {string} - Poids idéal arrondi à deux décimales.
 */
function calculateIdealWeight(heightM, sex) { // 🎯 POIDS IDÉAL
	return ((sex === "male" ? 22 : 21) * (heightM * heightM)).toFixed(2);
}

/**
 * Calcule le métabolisme de base (BMR).
 * @param {number} weight - Poids en kilogrammes.
 * @param {number} height - Taille en centimètres.
 * @param {number} age - Âge en années.
 * @param {string} sex - Sexe de la personne ('male' ou 'female').
 * @returns {string} - BMR arrondi à deux décimales.
 */
function calculateBMR(weight, height, age, sex) { // 🔥 MÉTABOLISME DE BASE
	return sex === "male" 
		? (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
		: (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2);
}

/**
 * Calcule la Dépense Énergétique Totale (TDEE) en utilisant le BMR.
 * @param {number} bmr - Métabolisme de base.
 * @returns {string} - TDEE arrondi à deux décimales.
 */
function calculateTDEE(bmr) { // 🌡️ DÉPENSE ÉNERGÉTIQUE
	return (bmr * 1.2).toFixed(2);
}

export { calculateBMI, calculateIdealWeight, calculateBMR, calculateTDEE };
