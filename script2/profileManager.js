// profileManager.js

import { fetchLifeExpectancy } from './utils.js';
import { updateHealthMetrics } from './uiUpdater.js';

/**
 * Sauvegarde le profil utilisateur dans le stockage local.
 */
async function saveProfile() { // 💾 SAUVEGARDE DU PROFIL
	const profile = {
		name: $('#name').val(),
		birthdate: $('#birthdate').val(),
		sex: $('#sex').val(),
		height: parseFloat($('#height').val()),
		weight: parseFloat($('#weight').val())
	};
	profile.lifeExpectancy = await fetchLifeExpectancy(profile.sex);
	localStorage.setItem('profile', JSON.stringify(profile));
	updateHealthMetrics(profile);
}

/**
 * Charge le profil utilisateur depuis le stockage local.
 */
function loadProfile() { // 📂 CHARGEMENT DU PROFIL
	const profile = JSON.parse(localStorage.getItem('profile'));
	if (profile) {
		$('#name').val(profile.name);
		$('#birthdate').val(profile.birthdate);
		$('#sex').val(profile.sex);
		$('#height').val(profile.height);
		$('#weight').val(profile.weight);
		updateHealthMetrics(profile);
	}
}

export { saveProfile, loadProfile };
