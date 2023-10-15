const ctx = document.getElementById('pie-chart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Mobilität', 'Freizeit & Unterhaltung', 'Lebensmittel', 'Ausgehen', 'Blue', 'Lila'],
        datasets: [{
            label: 'Ausgaben in Kateogrien',
            data: [10, 20, 30, 30, 10, 20]
        }]
    }
});