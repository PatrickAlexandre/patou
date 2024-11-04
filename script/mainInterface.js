let financeChart;

function showMainInterface() {
  document.getElementById('displayNom').innerText = document.getElementById('nom').value;
  document.getElementById('displayPrenom').innerText = document.getElementById('prenom').value;
  document.getElementById('displayDateNaissance').innerText = document.getElementById('date_naissance').value;
  document.getElementById('displayTaille').innerText = document.getElementById('taille').value;
  document.getElementById('displayPoids').innerText = document.getElementById('poids').value;

  calculate();

  document.getElementById('signupScreen').style.display = 'none';
  document.getElementById('mainInterface').style.display = 'block';
}

function showSection(sectionId) {
  document.getElementById('profileSection').style.display = 'none';
  document.getElementById('healthSection').style.display = 'none';
  document.getElementById('financeSection').style.display = 'none';
  document.getElementById(sectionId).style.display = 'block';
}

function calculate() {
  const poids = parseFloat(document.getElementById('poids').value);
  const taille = parseFloat(document.getElementById('taille').value);
  const date_naissance = document.getElementById('date_naissance').value;
  const revenus = parseFloat(document.getElementById('revenus').value);
  const depenses = parseFloat(document.getElementById('depenses').value);

  const age = moment().diff(moment(date_naissance), 'years');
  document.getElementById('ageResult').innerText = age;

  const imc = (poids / ((taille / 100) ** 2)).toFixed(1);
  document.getElementById('imcResult').innerText = imc;

  const poidsIdeal = 50 + 0.91 * (taille - 152);
  document.getElementById('poidsIdealResult').innerText = poidsIdeal.toFixed(1);

  const calories = (poids * 24 * 1.2).toFixed(0);
  document.getElementById('caloriesResult').innerText = calories;

  const ratio = ((depenses / revenus) * 100).toFixed(2);
  const restant = revenus - depenses;
  const epargneAnnuelle = (restant * 12).toFixed(2);

  document.getElementById('ratioResult').innerText = ratio;
  document.getElementById('restantResult').innerText = restant.toFixed(2);
  document.getElementById('epargneResult').innerText = epargneAnnuelle;

  if (financeChart) financeChart.destroy();

  const ctx = document.getElementById('financeChart').getContext('2d');
  financeChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Dépenses', 'Restant'],
      datasets: [{
        data: [depenses, restant],
        backgroundColor: ['#FF6384', '#36A2EB']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Visualisation des Finances'
        }
      }
    }
  });
}
