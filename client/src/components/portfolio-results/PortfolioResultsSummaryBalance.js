import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Chart, Line } from 'react-chartjs-2'
import { portfolioDescCalculator } from '../../utils/dataPreprocessing'
import { getXaxisMonthly, getYaxisMonthly } from '../../utils/dataPreprocessing'
import { numberWithCommas } from '../../utils/formUtils'

const PortfolioResultsSummaryBalance = ({ portfolios }) => {
  const { startYear, endYear, portfolioWrapper, initialAmount } = portfolios

  const lineStylesData = {
    labels: getXaxisMonthly(portfolioWrapper),
    datasets: getYaxisMonthly(portfolioWrapper, initialAmount),
  }

  const monthlyChartOptions = {
    tooltips: {
      // Disable the on-canvas tooltip
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          const caption = data.datasets[tooltipItem.datasetIndex].label
          const tooltipValue =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          return (
            caption + '  :  ' + parseInt(tooltipValue).toLocaleString() + '원'
          )
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

  return (
    <Fragment>
      <h3 className="mt-5 text-center">
        <strong>월간수익률</strong>
      </h3>
      <div className="card">
        <Line data={lineStylesData} options={monthlyChartOptions} />
      </div>
    </Fragment>
  )
}

export default PortfolioResultsSummaryBalance
