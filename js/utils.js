// utils.js

// 🚀 UTILITAIRES

/**
 * Calcule l'âge en années et jours à partir d'une date de naissance.
 * @param {string} birthdate - Date de naissance au format 'YYYY-MM-DD'.
 * @returns {Object} - Objet contenant l'âge en années et jours.
 */
function calculateAge(birthdate) { // 👶 ÂGE CALCUL
	const birth = new Date(birthdate);
	const today = new Date();
	const diffTime = today - birth;
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const years = Math.floor(diffDays / 365);
	const days = diffDays % 365;
	return { years, days };
}

/**
 * Récupère l'espérance de vie moyenne en fonction du sexe et du pays.
 * @param {string} sex - Sexe de la personne ('male' ou 'female').
 * @param {string} country - Code pays ISO (par défaut 'FRA' pour France).
 * @returns {Promise<number>} - Espérance de vie moyenne.
 */
function fetchLifeExpectancy(sex, country = "FRA") {
	const indicator = sex === 'male' ? 'SP.DYN.LE00.MA.IN' : 'SP.DYN.LE00.FE.IN';
	const apiUrl = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&date=2022`;

	return $.getJSON(apiUrl).then(data => {
		if (data && data[1] && data[1][0] && data[1][0].value) {
			return data[1][0].value;
		} else {
			console.error("❌ Erreur lors de la récupération de l'espérance de vie depuis l'API.");
			return sex === "male" ? 79 : 85; // 🚨 valeurs par défaut
		}
	});
}

export { calculateAge, fetchLifeExpectancy };
