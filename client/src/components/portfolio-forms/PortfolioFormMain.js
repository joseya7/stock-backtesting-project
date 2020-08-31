import React, { Fragment } from 'react'
import PortfolioFormHeader from './PortfolioFormHeader'
import PortfolioForm from './PortfolioForm'

const PortfolioFormMain = () => {
  return (
    <Fragment>
      <PortfolioFormHeader />
      {/* Time, Amount Form */}
      <PortfolioForm />
    </Fragment>
  )
}

export default PortfolioFormMain
