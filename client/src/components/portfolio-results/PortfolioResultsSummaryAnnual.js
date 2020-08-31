import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'
import { portfolioDescCalculator } from '../../utils/dataPreprocessing'

const PortfolioResultsSummaryAnnual = ({ portfolios }) => {
  const { startYear, endYear, portfolioWrapper, initialAmount } = portfolios

  const labelList = []
  for (let i = +startYear + 1; i < +endYear; i++) {
    labelList.push(i)
  }

  const temp2 = portfolioDescCalculator(portfolioWrapper, initialAmount)

  const data1 = Array.from(temp2[0].yearlySummary.annualGrowthRate, (x) => +x)
  const data2 = Array.from(temp2[1].yearlySummary.annualGrowthRate, (x) => +x)
  const data3 = Array.from(temp2[2].yearlySummary.annualGrowthRate, (x) => +x)

  let datasets = [
    {
      label: 'Portfolio 1',
      backgroundColor: '#7B68EE',
      yAxisID: 'y-axis-1',
      data: data1,
    },
    {
      label: 'Portfolio 2',
      backgroundColor: '#FF0000',
      yAxisID: 'y-axis-1',
      data: data2,
    },
    {
      label: 'Portfolio 3',
      backgroundColor: '#FFA500',
      yAxisID: 'y-axis-1',
      data: data3,
    },
  ]

  datasets = datasets.filter((item) => {
    return !isNaN(item.data[0])
  })

  const multiAxisData = {
    labels: labelList,
    datasets,
  }

  const multiAxisOptions = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: true,
      callbacks: {
        label: function (tooltipItem, data) {
          const caption = data.datasets[tooltipItem.datasetIndex].label
          const tooltipValue =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          return caption + '  :  ' + tooltipValue + '%'
        },
      },
    },
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
            callback: function (value, index, values) {
              return value + '%'
            },
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
          gridLines: {
            drawOnChartArea: false,
            color: '#ebedef',
          },
          ticks: {
            fontColor: '#495057',
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

  return (
    <Fragment>
      <h3 className="text-center">
        <strong>연간 수익률</strong>
      </h3>
      <div className="card">
        <Bar data={multiAxisData} options={multiAxisOptions} />
      </div>
    </Fragment>
  )
}

export default PortfolioResultsSummaryAnnual
