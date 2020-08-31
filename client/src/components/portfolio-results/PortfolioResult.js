import React from 'react'
import { connect } from 'react-redux'

const PortfolioResult = ({ portfolio: { loading, portfolios } }) => {
  if (loading || portfolios === null) {
    return <h3>Hi!</h3>
  }
  return <h3>{portfolios.id}</h3>
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
})

export default connect(mapStateToProps)(PortfolioResult)
