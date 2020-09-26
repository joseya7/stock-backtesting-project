import React, { Fragment } from 'react'
import PortfolioAllocationItem from './PortfolioAllocationItem'

const PortfolioResultsSummaryAllocations = ({ portfolios }) => {
  const { portfolioWrapper } = portfolios

  const myData = portfolioWrapper.filter((item) => {
    return item.portfolio[0].assetPercentage !== undefined
  })

  return (
    <Fragment>
      <h3 class="my-3">포트폴리오 할당</h3>
      {myData.map((data) => (
        <PortfolioAllocationItem data={data} />
      ))}

      {/* d3 Pie Chart */}
      {/* 
      {portfolioData.map((portfolio) => (
        <PortfolioResultsPieChart portfolio={portfolio} />
      ))} */}
    </Fragment>
  )
}

export default PortfolioResultsSummaryAllocations
