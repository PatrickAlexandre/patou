// uiUpdater.js

// 💻 MISE À JOUR DU PROFIL ET DE L'UI

import { calculateAge } from './utils.js';
import { calculateBMI, calculateIdealWeight, calculateBMR, calculateTDEE } from './healthCalculations.js';

/**
 * Met à jour les métriques de santé dans l'interface utilisateur.
 * @param {Object} profile - Objet profil contenant les informations de l'utilisateur.
 */
function updateHealthMetrics(profile) { // 🩺 MÉTRIQUES DE SANTÉ
	const heightM = profile.height / 100;
	const age = calculateAge(profile.birthdate);
	const lifeExpectancy = profile.lifeExpectancy;
	const remainingLife = (lifeExpectancy - age.years).toFixed(0);
	const bmi = calculateBMI(profile.weight, heightM);
	const idealWeight = calculateIdealWeight(heightM, profile.sex);
	const bmr = calculateBMR(profile.weight, profile.height, age.years, profile.sex);
	const tdee = calculateTDEE(bmr);
	const weightDifference = (profile.weight - idealWeight).toFixed(1);
	const lifePercentageRemaining = ((remainingLife / lifeExpectancy) * 100).toFixed(1);

	// 📈 MISE À JOUR DES ÉLÉMENTS HTML
	$('#profile-info').text(`${profile.name}, ${age.years} ans et ${age.days} jours`);
	$('#bmi').text(bmi);
	$('#ideal-weight').text(idealWeight);
	$('#weight-difference').text(weightDifference > 0 ? `+${weightDifference} kg excédentaires` : `${Math.abs(weightDifference)} kg manquants`);
	$('#bmr').text(bmr);
	$('#tdee').text(tdee);
	$('#life-expectancy').text(remainingLife);

	// 🕒 Barre de progression
	$('#life-expectancy-progress').css('width', `${lifePercentageRemaining}%`);
	$('#progress-text').text(`${lifePercentageRemaining}%`);
	updateProgressColor(lifePercentageRemaining);
}

/**
 * Met à jour la couleur de la barre de progression en fonction de la vie restante.
 * @param {number} lifePercentageRemaining - Pourcentage de vie restante.
 */
function updateProgressColor(lifePercentageRemaining) { // 🎨 COULEUR DE PROGRESSION
	const progressBar = $('#life-expectancy-progress');
	progressBar.removeClass('bg-green-500 bg-yellow-500 bg-red-600');
	if (lifePercentageRemaining < 25) {
		progressBar.addClass('bg-red-600');
	} else if (lifePercentageRemaining < 50) {
		progressBar.addClass('bg-yellow-500');
	} else {
		progressBar.addClass('bg-green-500');
	}
}

export { updateHealthMetrics, updateProgressColor };
