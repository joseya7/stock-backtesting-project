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
              <h1 class="text-center">How can I do this?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ex commodi itaque unde ratione quia quae iusto totam
                nam adipisci? Maxime, illo quae. Molestiae quos laboriosam ad
                voluptatibus neque modi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PortfolioFormHeader
