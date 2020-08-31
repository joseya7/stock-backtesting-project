import React, { Fragment } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/layout/Navbar'
import PortfolioFormMain from './components/portfolio-forms/PortfolioFormMain'
import PortfolioResultsMain from './components/portfolio-results/PortfolioResultsMain'
import PortfolioResults from './components/portfolio-results/PortfolioResult'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <PortfolioFormMain />
        <PortfolioResultsMain />
      </Fragment>
    </Provider>
  )
}

export default App
