import React, { Fragment } from 'react'
import { Pie } from 'react-chartjs-2'
import { dataMassage, chartDataConverter } from '../../utils/formUtils'
const PortfolioAllocationItem = ({ data }) => {
  const { portfolioName } = data

  // const stock = portfolios.filter((item) => {
  //   return item.assetPercentage !== undefined
  // })
  // cosnsole.log(stock)

  const tickerNameObj = {
    '051900': 'LG생활건강',
    '035420': 'NAVER',
    '000660': 'SK하이닉스',
    '028260': '삼성물산',
    '005930': '삼성전자',
    '068270': '셀트리온',
    '095630': '씨젠',
    '035720': '카카오',
    '003480': '한진중공업홀딩스',
    '005380': '현대차',
  }
  const chartData = chartDataConverter(data.portfolio)
  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var idx = tooltipItem['index']
          var caption = data.labels[idx]
          var captionValue = data['datasets'][0]['data'][idx]
          return caption + ':' + captionValue + '%'
        },
      },
    },
    maintainAspectRatio: false, // Don't maintain w/h ratio
  }

  return (
    <Fragment>
      <div className="row">
        <div class="col-md-7 pl-3">
          <span calss="my-3">
            <strong>{portfolioName}</strong>{' '}
          </span>
          <table class="table table-striped table-condensed">
            <thead>
              <tr>
                <th>코드</th>
                <th>이름</th>
                <th class="numberCell">할당</th>
              </tr>
            </thead>
            <tbody>
              {data.portfolio.map((value) => {
                return (
                  <tr>
                    <td>{value.asset}</td>
                    <td>{value.name}</td>
                    <td>{value.assetPercentage}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div
          className="col-md-5 align-self-center
          "
        >
          <Pie data={chartData} options={options} width={275} height={275} />
        </div>
      </div>
    </Fragment>
  )
}

export default PortfolioAllocationItem
