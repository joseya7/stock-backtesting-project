export const monthlyChartOptions = {
  tooltips: {
    // Disable the on-canvas tooltip
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (t, d) {
        var xLabel = d.datasets[t.datasetIndex].label
        var yLabel = t.yLabel
        return xLabel + ': ' + yLabel + '%'
      },
    },
  },
  responsive: true,
  hoverMode: 'index',
  stacked: false,
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: '#495057',
        },
        gridLines: {
          color: '#ebedef',
        },
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        ticks: {
          fontColor: '#495057',
        },
        gridLines: {
          color: '#ebedef',
        },
      },
      {
        type: 'linear',
        display: false,
        position: 'right',
        id: 'y-axis-2',
        ticks: {
          fontColor: '#495057',
        },
        gridLines: {
          drawOnChartArea: false,
          color: '#ebedef',
        },
      },
    ],
  },
  legend: {
    labels: {
      fontColor: '#495057',
    },
  },
}
