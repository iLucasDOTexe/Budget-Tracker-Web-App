const ctx = document.getElementById('line-chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar 22', 'Februar 22', 'März 22', 'April 22', 'Mai 22', 'Juni 22', 'Juli 22', 'August 22', 'September 22', 'Oktober 22', 'November 22', 'Dezember 22', 'Januar 23'],
        datasets: [{
          label: 'Überschuss pro Monat',
          data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 12, 84, 50, 50],
        }]
      },
});