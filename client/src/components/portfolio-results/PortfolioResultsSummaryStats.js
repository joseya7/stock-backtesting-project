import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getStocks } from '../../actions/portfolioActions'
import {
  finalBalanceCalculator,
  CAGRCalculator,
  portfolioDescCalculator,
} from '../../utils/dataPreprocessing'
import { numberWithCommas } from '../../utils/formUtils'

const PortfolioResultsSummaryStats = ({ portfolios }) => {
  const { startYear, endYear, portfolioWrapper, initialAmount } = portfolios

  const temp = finalBalanceCalculator(portfolioWrapper, initialAmount)
  const temp1 = CAGRCalculator(portfolioWrapper, startYear, endYear)
  const temp2 = portfolioDescCalculator(portfolioWrapper, initialAmount)

  // const temp4 = Wrapper(temp, temp1, temp2)

  let finalData = [
    {
      portfolioName: 'Portfolio1',
      initialAmount,
      finalBalance: temp[0],
      CAGR: temp1[0],
      annualGrowthRate: temp2[0].yearlySummary.annualGrowthRate,
      avg: temp2[0].yearlySummary.avg,
      max: temp2[0].yearlySummary.max,
      min: temp2[0].yearlySummary.min,
      std: temp2[0].yearlySummary.std,
    },
    {
      portfolioName: 'Portfolio2',
      initialAmount,
      finalBalance: temp[1],
      CAGR: temp1[1],
      annualGrowthRate: temp2[1].yearlySummary.annualGrowthRate,
      avg: temp2[1].yearlySummary.avg,
      max: temp2[1].yearlySummary.max,
      min: temp2[1].yearlySummary.min,
      std: temp2[1].yearlySummary.std,
    },
    {
      portfolioName: 'Portfolio3',
      initialAmount,
      finalBalance: temp[2],
      CAGR: temp1[2],
      annualGrowthRate: temp2[2].yearlySummary.annualGrowthRate,
      avg: temp2[2].yearlySummary.avg,
      max: temp2[2].yearlySummary.max,
      min: temp2[2].yearlySummary.min,
      std: temp2[2].yearlySummary.std,
    },
  ]

  finalData = finalData.filter((item) => {
    return !isNaN(item.avg)
  })

  return (
    <Fragment>
      <h3 class="my-3 text-center">
        <strong>포트폴리오 수익</strong>
      </h3>
      <Fragment>
        <div class="row">
          <div class="col">
            <table class="table table-striped table-condensed">
              <caption class="sr-only">
                Portfolio performance statistics
              </caption>
              <thead>
                <tr>
                  <th>포트폴리오</th>
                  <th class="numberCell">초기 자본</th>
                  <th class="numberCell">최종 수익 </th>
                  <th class="numberCell">CAGR</th>
                  <th class="numberCell">표준편차</th>
                  <th class="numberCell">최고수익률</th>
                  <th class="numberCell">최저수익률</th>
                </tr>
              </thead>
              <tbody>
                {finalData.map((value) => {
                  return (
                    <tr>
                      <td class="text-nowrap">{value.portfolioName}</td>
                      <td class="numberCell">
                        {numberWithCommas(value.initialAmount)}￦
                      </td>
                      <td class="numberCell">
                        {numberWithCommas(value.finalBalance)}￦
                      </td>
                      <td class="numberCell">{value.avg}%</td>
                      <td class="numberCell">{value.std}%</td>
                      <td class="numberCell">{value.max}%</td>
                      <td class="numberCell">{value.min}%</td>{' '}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  stocks: state.portfolio.stocks,
  loading: state.portfolio.loading,
})

export default connect(mapStateToProps, { getStocks })(
  PortfolioResultsSummaryStats
)
