import React, { Fragment } from 'react'

const PortfolioFormHeader = () => {
  return (
    <Fragment>
      {/* Header */}
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 m-auto text-center align-items-center">
              <div>
                <h1>Backtest Portfolio</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Explaining */}
      <section id="about" class="py-3 bg-light">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="text-center">어떻게 하나요?!</h1>
              <p>
                1.시작년도, 끝년도, 초기자본을 설정해주세요!
                (예 : 1985, 2020, 1000000)
                <br/>
                2.원하는 주식종목을 골라서 포트폴리오를 구성하세요
                <br/>
                3.주식종목의 총합은 100%가 되어야 합니다!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PortfolioFormHeader
