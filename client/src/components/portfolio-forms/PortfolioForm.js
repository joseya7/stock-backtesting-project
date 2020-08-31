import React, { Fragment, useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Alert } from 'reactstrap'

import { connect } from 'react-redux'
import { temp } from '../../actions/portfolioActions'

const PortfolioForm = ({ temp }) => {
  const [formData, setFormData] = useState({
    startYear: '1985',
    endYear: '2020',
    initialAmount: '1000000',
  })

  const [portfolioData, setPortfolioData] = useState({
    asset1: '051900',
    asset2: '035420',
    asset3: '028260',
    asset4: '',
    asset5: '',
    asset6: '',
    asset7: '',
    asset8: '',
    asset9: '',
    asset10: '',
  })
  // asset4: '028260',
  // asset5: '005930',
  // asset6: '068270',
  // asset7: '096530',
  // asset8: '035720',

  const [percentage1, setPercentage1] = useState({
    assetPercentage1_1: '',
    assetPercentage1_2: '',
    assetPercentage1_3: '',
    assetPercentage1_4: '',
    assetPercentage1_5: '',
    assetPercentage1_6: '',
    assetPercentage1_7: '',
    assetPercentage1_8: '',
    assetPercentage1_9: '',
    assetPercentage1_10: '',
  })

  const [percentage2, setPercentage2] = useState({
    assetPercentage2_1: '',
    assetPercentage2_2: '',
    assetPercentage2_3: '',
    assetPercentage2_4: '',
    assetPercentage2_5: '',
    assetPercentage2_6: '',
    assetPercentage2_7: '',
    assetPercentage2_8: '',
    assetPercentage2_9: '',
    assetPercentage2_10: '',
  })

  const [percentage3, setPercentage3] = useState({
    assetPercentage3_1: '',
    assetPercentage3_2: '',
    assetPercentage3_3: '',
    assetPercentage3_4: '',
    assetPercentage3_5: '',
    assetPercentage3_6: '',
    assetPercentage3_7: '',
    assetPercentage3_8: '',
    assetPercentage3_9: '',
    assetPercentage3_10: '',
  })

  const {
    asset1,
    asset2,
    asset3,
    asset4,
    asset5,
    asset6,
    asset7,
    asset8,
    asset9,
    asset10,
  } = portfolioData

  const {
    assetPercentage1_1,
    assetPercentage1_2,
    assetPercentage1_3,
    assetPercentage1_4,
    assetPercentage1_5,
    assetPercentage1_6,
    assetPercentage1_7,
    assetPercentage1_8,
    assetPercentage1_9,
    assetPercentage1_10,
  } = percentage1

  const {
    assetPercentage2_1,
    assetPercentage2_2,
    assetPercentage2_3,
    assetPercentage2_4,
    assetPercentage2_5,
    assetPercentage2_6,
    assetPercentage2_7,
    assetPercentage2_8,
    assetPercentage2_9,
    assetPercentage2_10,
  } = percentage2

  const {
    assetPercentage3_1,
    assetPercentage3_2,
    assetPercentage3_3,
    assetPercentage3_4,
    assetPercentage3_5,
    assetPercentage3_6,
    assetPercentage3_7,
    assetPercentage3_8,
    assetPercentage3_9,
    assetPercentage3_10,
  } = percentage3

  const [agg1, setAgg1] = useState(0)
  const [agg2, setAgg2] = useState(0)
  const [agg3, setAgg3] = useState(0)

  const [alertToggle, setAlertToggle] = useState(false)

  const { startYear, endYear, initialAmount } = formData

  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  // const onPortfolioChange = (e) =>
  //   setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value })

  useEffect(() => {
    setAgg1(percentage1)
    setAgg2(percentage2)
    setAgg3(percentage3)
  })

  const calculateTotal = (numbers) => {
    return Object.entries(numbers).reduce((finalValue, [key, value]) => {
      if (value === '') {
        // if entered value is empty string "", omits it
        return finalValue
      }
      return finalValue + value
    }, 0)
  }
  const handleTotal = (e) => {
    const { value, name } = e.target // gets the name and value from input field
    const parsedValue = value === '' ? '' : parseFloat(value) // parses the value as a number or if empty treats it as empty string ""
    setPercentage1((prevState) => {
      // creates new immutable numbers object, using previous number values and the currently changed input value
      const updatedNumbers = {
        ...prevState.percentage1,
        [name]: parsedValue,
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
      }
      // calculates the new total from updated numbers:
      const newTotal = calculateTotal(updatedNumbers)
      return {
        percentage1: updatedNumbers,
        agg1: newTotal,
      }
    })
  }

  const handleTotal2 = (e) => {
    const { value, name } = e.target // gets the name and value from input field
    const parsedValue = value === '' ? '' : parseFloat(value) // parses the value as a number or if empty treats it as empty string ""
    setPercentage2((prevState) => {
      // creates new immutable numbers object, using previous number values and the currently changed input value
      const updatedNumbers = {
        ...prevState.percentage2,
        [name]: parsedValue,
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
      }
      // calculates the new total from updated numbers:
      const newTotal = calculateTotal(updatedNumbers)
      return {
        percentage2: updatedNumbers,
        agg2: newTotal,
      }
    })
  }

  const handleTotal3 = (e) => {
    const { value, name } = e.target // gets the name and value from input field
    const parsedValue = value === '' ? '' : parseFloat(value) // parses the value as a number or if empty treats it as empty string ""
    setPercentage3((prevState) => {
      // creates new immutable numbers object, using previous number values and the currently changed input value
      const updatedNumbers = {
        ...prevState.percentage3,
        [name]: parsedValue,
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
      }
      // calculates the new total from updated numbers:
      const newTotal = calculateTotal(updatedNumbers)
      return {
        percentage3: updatedNumbers,
        agg3: newTotal,
      }
    })
  }

  const onPortfolioChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    const newValues = {
      ...portfolioData,
      [name]: value,
    }
    setPortfolioData(newValues)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (percentage1.agg1 !== 100) {
      setAlertToggle(true)
      window.scrollTo(0, 0)
    } else {
      temp(formData, portfolioData, percentage1, percentage2, percentage3)
      window.scrollTo(2000, 1000)
    }
  }

  return (
    <Fragment>
      <Alert color="primary" className="text-center" isOpen={alertToggle}>
        각각의 포트폴리오 자산할당의 합은 100%이여야 합니다.
      </Alert>
      <form class="form" onSubmit={(e) => onSubmit(e)}>
        <section id="period-form bg-white" class="mt-4">
          <div class="container">
            {/* <!-- Year, Month --> */}

            <div class="form-group row">
              <label for="timePeriod" class="col-sm-4 col-form-label">
                <strong>매년 / 매달</strong>
              </label>
              <div class="col-sm-4">
                <select
                  type="select"
                  class="form-control"
                  id="time-period"
                  value="year"
                >
                  <option>매년</option>
                </select>
              </div>
              <div class="col-sm-4"></div>
            </div>

            {/* <!-- Start Year --> */}

            <div class="form-group row">
              <label
                for="exampleFormControlSelect1"
                class="col-sm-4 col-form-label"
              >
                <strong>시작년도</strong>
              </label>
              <div class="col-sm-4">
                <select
                  class="form-control"
                  onChange={(e) => onFormChange(e)}
                  value={startYear}
                  name="startYear"
                >
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>

            {/* <!-- End Year--> */}

            <div class="form-group row">
              <label
                for="exampleFormControlSelect1"
                class="col-sm-4 col-form-label"
              >
                <strong>끝 년도</strong>
              </label>
              <div class="col-sm-4">
                <select
                  class="form-control"
                  onChange={(e) => onFormChange(e)}
                  value={endYear}
                  name="endYear"
                >
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020" selected>
                    2020
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="timePeriod" class="col-sm-4 col-form-label">
                <strong>초기 자본</strong>
              </label>
              <div class="col-sm-4 input-group">
                <input
                  type="number"
                  class="form-control"
                  name="initialAmount"
                  value={initialAmount}
                  onChange={(e) => onFormChange(e)}
                />
                <div class="input-group-append">
                  <span class="input-group-text">￦</span>
                </div>
              </div>
            </div>

            {/* <!-- Portfolio Names --> */}
            <div class="form-group row">
              <label for="timePeriod" class="col-sm-4 col-form-label">
                <strong>포트폴리오 이름</strong>
              </label>
              <div class="col-sm-4">
                <select
                  type="select"
                  class="form-control"
                  id="time-period"
                  value="year"
                >
                  <option>Default</option>
                </select>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </div>
        </section>

        {/* <!-- Table Form --> */}
        <section id="table" class="mt-4">
          <div class="container">
            <div class="row bottomBorder">
              <div class="col-sm-5 text-nowrap">
                <b>포트폴리오</b>
              </div>
              <div class="col-sm-2 text-nowrap">
                <b>포트폴리오 #1</b>
              </div>
              <div class="col-sm-2 text-nowrap">
                <b>포트폴리오 #2</b>
              </div>
              <div class="col-sm-2 text-nowrap">
                <b>포트폴리오 #3</b>
              </div>
            </div>

            {/* <!-- 1st row --> */}
            <div class="row bg-light my-4 align-items-center">
              <div class="col-sm-2">항목 1</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset1"
                  value={asset1}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_1"
                  value={assetPercentage1_1}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_1"
                  value={assetPercentage2_1}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_1"
                  value={assetPercentage3_1}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 2nd row --> */}
            <div class="row highlightRow my-4 align-items-center">
              <div class="col-sm-2">항목 2</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset2"
                  value={asset2}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_2"
                  value={assetPercentage1_2}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_2"
                  value={assetPercentage2_2}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_2"
                  value={assetPercentage3_2}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 3rd row --> */}
            <div class="row bg-light my-4 align-items-center">
              <div class="col-sm-2">항목 3</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset3"
                  value={asset3}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_3"
                  value={assetPercentage1_3}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_3"
                  value={assetPercentage2_3}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_3"
                  value={assetPercentage3_3}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 4th row --> */}
            <div class="row highlightRow my-4 align-items-center">
              <div class="col-sm-2">항목 4</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset4"
                  value={asset4}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_4"
                  value={assetPercentage1_4}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_4"
                  value={assetPercentage2_4}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_4"
                  value={assetPercentage3_4}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 5th row --> */}
            <div class="row bg-light my-4 align-items-center">
              <div class="col-sm-2">항목 5</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset5"
                  value={asset5}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_5"
                  value={assetPercentage1_5}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_5"
                  value={assetPercentage2_5}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_5"
                  value={assetPercentage3_5}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 6th row --> */}
            <div class="row my-4 align-items-center">
              <div class="col-sm-2">항목 6</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset6"
                  value={asset6}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_6"
                  value={assetPercentage1_6}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_6"
                  value={assetPercentage2_6}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_6"
                  value={assetPercentage3_6}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 7th row --> */}
            <div class="row bg-light my-4 align-items-center">
              <div class="col-sm-2">항목 7</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset7"
                  value={asset7}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_7"
                  value={assetPercentage1_7}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_7"
                  value={assetPercentage2_7}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_7"
                  value={assetPercentage3_7}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 8th row --> */}
            <div class="row my-4 align-items-center">
              <div class="col-sm-2">항목 8</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset8"
                  value={asset8}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_8"
                  value={assetPercentage1_8}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_8"
                  value={assetPercentage2_8}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_8"
                  value={assetPercentage3_8}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            {/* <!-- 9th row --> */}
            <div class="row bg-light my-4 align-items-center">
              <div class="col-sm-2">항목 9</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset9"
                  value={asset9}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_9"
                  value={assetPercentage1_9}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_9"
                  value={assetPercentage2_9}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_9"
                  value={assetPercentage3_9}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* <!-- 10th row --> */}
            <div class="row align-items-center pb-3 border-bottom border-info">
              <div class="col-sm-2">항목 10</div>
              <div class="col-sm-3 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => onPortfolioChange(e)}
                  name="asset10"
                  value={asset10}
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal}
                  name="assetPercentage1_10"
                  value={assetPercentage1_10}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal2}
                  name="assetPercentage2_10"
                  value={assetPercentage2_10}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  onChange={handleTotal3}
                  name="assetPercentage3_10"
                  value={assetPercentage3_10}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>

            {/* Total Row */}
            <div class="row my-3 align-items-center ">
              <div class="col-sm-5"></div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="number"
                  class="form-control"
                  name="agg1"
                  value={percentage1.agg1}
                  id="total"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="number"
                  class="form-control"
                  name="agg2"
                  value={percentage2.agg2}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-2 input-group input-group-sm">
                <input
                  type="number"
                  class="form-control"
                  name="agg3"
                  value={percentage3.agg3}
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Button --> */}
        <section id="form-button" class="my-3">
          <div class="container">
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-6">
                <input
                  type="submit"
                  value="포트폴리오 분석"
                  className="btn btn-info btn-sm text-white"
                />
              </div>
            </div>
          </div>
        </section>
      </form>
    </Fragment>
  )
}

export default connect(null, { temp })(PortfolioForm)
