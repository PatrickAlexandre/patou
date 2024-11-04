// Resultats.js


// Affiche les métriques de santé
function displayHealthMetrics(data) {
    const age = calculateAge(data.dateNaissance);
    const imc = calculateIMC(data.taille, data.poids);
    const poidsIdeal = calculateIdealWeight(data.taille);
    const besoinsCaloriques = calculateCaloricNeeds(age, data.poids);

    document.getElementById("ageResult").textContent = age;
    document.getElementById("imcResult").textContent = imc.toFixed(2);
    document.getElementById("poidsIdealResult").textContent = poidsIdeal.toFixed(2);
    document.getElementById("caloriesResult").textContent = besoinsCaloriques;
}

// Affiche les métriques financières
function displayFinanceMetrics(data) {
    const ratio = calculateRatio(data.revenus, data.depenses);
    const restant = data.revenus - data.depenses;
    const epargneAnnuelle = restant * 12;

    document.getElementById("ratioResult").textContent = ratio.toFixed(2);
    document.getElementById("restantResult").textContent = restant.toFixed(2);
    document.getElementById("epargneResult").textContent = epargneAnnuelle.toFixed(2);

    displayFinanceChart(data.revenus, data.depenses, restant);
}

