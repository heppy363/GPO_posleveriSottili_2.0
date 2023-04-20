const polveri = document.getElementById('polveriSottili');

const DATA_COUNT1 = 7;
const NUMBER_CFG1 = {count: DATA_COUNT1, min: -100, max: 100};

const labels1 = Samples.utils.months({count: DATA_COUNT1});

const data1 = {
  labels: labels1,
  datasets: [
    {
      label: 'Polveri sottili 1',
      data: Samples.utils.numbers(NUMBER_CFG1),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: Samples.utils.transparentize('rgb(255, 99, 132)', 0.5),
      tension: 0.4,
    },
    {
      label: 'Polveri sottili 2',
      data: Samples.utils.numbers(NUMBER_CFG1),
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: Samples.utils.transparentize('rgb(54, 162, 235)', 0.5),
      tension: 0.2,
    }
  ]
};


new Chart(polveri, {
    type: 'line',
    data: data1,
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

