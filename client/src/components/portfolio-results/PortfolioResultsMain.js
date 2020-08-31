import React, { Fragment, useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import PortfolioResultsSummary from './PortfolioResultsSummary'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import { getPortfolio } from '../../actions/portfolioActions'

const PortfolioResultsMain = ({ portfolio: { portfolios, loading } }) => {
  const [key, setKey] = useState('summary')
  if (loading || portfolios === null) {
    return <h3></h3>
  }
  const endMonth = portfolios.endYear === '2020' ? '07' : '12'
  console.log(portfolios.endYear)
  console.log(endMonth)

  return (
    <Fragment>
      <section id="portfolioReseults" class="my-5">
        <div class="container">
          <h2>
            포트폴리오 분석 결과
            <span class="resultRange">
              ( {portfolios.startYear}-01 ~ {portfolios.endYear}-{endMonth} )
            </span>
          </h2>
          <Alert color="primary" className="text-center" isOpen={true}>
            가장 짧은 주식기간을 가진 '{portfolios.trimmedOf}'의 기간 '
            {portfolios.startYear}년 ~ {portfolios.endYear}'년에 맞춰 나머지
            주식종목 기간을 맞춥니다.
          </Alert>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="summary" title="요약">
              <PortfolioResultsSummary
                key={portfolios.id}
                portfolios={portfolios}
              />
            </Tab>
            <Tab eventKey="노출" title="노출">
              {/* <PortfolioResultsExposures /> */}
            </Tab>
            <Tab eventKey="메트릭" title="메트릭"></Tab>
            <Tab eventKey="연간수익" title="연간수익"></Tab>
            <Tab eventKey="분기수익" title="분기수익"></Tab>
          </Tabs>

          {/* <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          href="#summary"
          class="nav-link active"
          role="tab"
          data-toggle="tab"
        >
          Summary
        </a>
      </li>

      <li class="nav-item">
        <a href="#exposures" class="nav-link" role="tab" data-toggle="tab">
          Exposures
        </a>
      </li>

      <li class="nav-item">
        <a href="#metrics" class="nav-link" role="tab" data-toggle="tab">
          Metrics
        </a>
      </li>

      <li class="nav-item">
        <a
          href="#annual-returns"
          class="nav-link"
          role="tab"
          data-toggle="tab"
        >
          Annual Returns
        </a>
      </li>

      <li class="nav-item">
        <a
          href="#monthly-returns"
          class="nav-link"
          role="tab"
          data-toggle="tab"
        >
          Monthly Returns
        </a>
      </li>
    </ul> */}
        </div>
      </section>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
})

export default connect(mapStateToProps, { getPortfolio })(PortfolioResultsMain)
