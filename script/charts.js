// Affichage du graphique financier
function displayFinanceChart(revenus, depenses, restant) {
    const ctx = document.getElementById("financeChart").getContext("2d");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Revenus", "Dépenses", "Restant"],
            datasets: [{
                data: [revenus, depenses, restant],
                backgroundColor: ["#4A90E2", "#D0021B", "#50E3C2"]
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
                    text: 'Répartition Financière'
                }
            }
        }
    });
}
