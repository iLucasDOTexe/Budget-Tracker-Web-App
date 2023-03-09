const ctx = document.getElementById('bar-chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Januar 22', 'Februar 22', 'März 22', 'April 22', 'Mai 22', 'Juni 22', 'Juli 22', 'August 22', 'September 22', 'Oktober 22', 'November 22', 'Dezember 22', 'Januar 23'],
    datasets: [{
      label: 'Einnahmen pro Monat',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
