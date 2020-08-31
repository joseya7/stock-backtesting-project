import React, { Fragment } from 'react'

import { connect } from 'react-redux'

import PortfolioResultsSummaryAllocations from './PortfolioResultsSummaryAllocations'
import PortfolioResultsSummaryReturns from './PortfolioResultsSummaryReturns'
import PortfolioResultsSummaryAnnual from './PortfolioResultsSummaryAnnual'
import PortfolioResultsSummaryBalance from './PortfolioResultsSummaryBalance'
const PortfolioResultsSummary = ({ portfolios }) => {
  return (
    <Fragment>
      <div role="tabpanel" class="tab-pane active" id="summary">
        {/* <!-- Allocation and Circle Graph --> */}

        <PortfolioResultsSummaryAllocations portfolios={portfolios} />

        {/* <!-- Portfolio Returns --> */}
        <PortfolioResultsSummaryReturns portfolios={portfolios} />

        {/* <!-- Annual Returns --> */}
        <PortfolioResultsSummaryAnnual portfolios={portfolios} />

        {/* Monthly Balance */}
        <PortfolioResultsSummaryBalance portfolios={portfolios} />
      </div>
    </Fragment>
  )
}

// const mapStateToProps = (state) => ({
//   portfolios: state.portfolio,
// })

export default PortfolioResultsSummary
