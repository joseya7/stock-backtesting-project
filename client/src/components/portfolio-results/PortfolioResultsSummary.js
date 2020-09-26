import React, { Fragment } from 'react'

import PortfolioResultsSummaryAllocations from './PortfolioResultsSummaryAllocations'
import PortfolioResultsSummaryStats from './PortfolioResultsSummaryStats'
import PortfolioResultsSummaryAnnual from './PortfolioResultsSummaryAnnual'
import PortfolioResultsSummaryMonthly from './PortfolioResultsSummaryMonthly'
const PortfolioResultsSummary = ({ portfolios }) => {
  return (
    <Fragment>
      <div role="tabpanel" class="tab-pane active" id="summary">
        {/* <!-- Allocation and Circle Graph --> */}

        <PortfolioResultsSummaryAllocations portfolios={portfolios} />

        {/* <!-- Portfolio Returns --> */}
        <PortfolioResultsSummaryStats portfolios={portfolios} />

        {/* <!-- Annual Returns --> */}
        <PortfolioResultsSummaryAnnual portfolios={portfolios} />

        {/* Monthly Monthly */}
        <PortfolioResultsSummaryMonthly portfolios={portfolios} />
      </div>
    </Fragment>
  )
}

// const mapStateToProps = (state) => ({
//   portfolios: state.portfolio,
// })

export default PortfolioResultsSummary
