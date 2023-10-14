const ctx = document.getElementById('line-chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar 22', 'Februar 22', 'März 22', 'April 22', 'Mai 22', 'Juni 22', 'Juli 22', 'August 22', 'September 22', 'Oktober 22', 'November 22', 'Dezember 22', 'Januar 23'],
        datasets: [{
            label: 'Income',
            data: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500],
            borderColor: '#00a300',
            fill: {
                target: 1,
                above: '#4cfe4f',
                below: '#fe4f4c'
            }
        },
        {
            label: 'Spendings',
            data: [650, 590, 800, 810, 560, 550, 400, 405, 600, 1200, 3840, 500, 610],
            borderColor: '#f92f0b'
        }]
    }
});