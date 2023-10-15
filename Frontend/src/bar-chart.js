const ctx = document.getElementById('bar-chart');

new Chart(ctx, {
    type: 'bar',
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    },
    data: {
        labels: ['Januar 22', 'Februar 22', 'März 22', 'April 22', 'Mai 22', 'Juni 22', 'Juli 22', 'August 22', 'September 22', 'Oktober 22', 'November 22', 'Dezember 22', 'Januar 23'],
        datasets: [{
            label: 'Mobilität',
            data: [10,20,10,20,10,20,10,20,10,20,11,12,13]
        },
        {
            label: 'Freizeit & Unterhaltung',
            data: [10,4,10,4,4,4,10,4,10,4,11,12,4]
        },
        {
            label: 'Lebensmittel',
            data: [10,5,10,5,10,5,10,5,10,5,11,12,13]
        }]
    }
});