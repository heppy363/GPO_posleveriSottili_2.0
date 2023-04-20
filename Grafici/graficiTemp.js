const ctx = document.getElementById('temperatura');

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Samples.utils.months({count: DATA_COUNT});

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temp odierna',
      data: Samples.utils.numbers(NUMBER_CFG),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: Samples.utils.transparentize('rgb(255, 99, 132)', 0.5),
      tension: 0.4,
    },
    {
      label: 'Temp precedente',
      data: Samples.utils.numbers(NUMBER_CFG),
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: Samples.utils.transparentize('rgb(54, 162, 235)', 0.5),
      tension: 0.2,
    }
  ]
};


new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
      hoverRadius: 12,
      hoverBackgroundColor: 'yellow',
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
    }
});

