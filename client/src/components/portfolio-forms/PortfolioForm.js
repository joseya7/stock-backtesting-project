import React, { Fragment, useState } from 'react'

import { Alert } from 'reactstrap'

import { connect } from 'react-redux'
import { temp } from '../../actions/portfolioActions'

import { yearsData } from '../../fixtures/years'
import { tableFormItem } from '../../fixtures/tableFormItem'
import { calculateTotal } from './helper'

import DefaultForm from './DefaultForm'
import YearForm from './YearForm'
import InitCapFrom from './InitCapForm'
import TableRowForm from './TableRowForm'
import TableHeader from './TableHeader'
import TableAggregate from './TableAggregate'
import FormButton from './FormButton'
import './PortfolioForm.css'

const PortfolioForm = ({ temp }) => {
  const [formData, setFormData] = useState({
    startYear: '1985',
    endYear: '2020',
    initialAmount: '1000000',
  })

  const [portfolioData, setPortfolioData] = useState({})

  const [percentage1, setPercentage1] = useState({})

  const [percentage2, setPercentage2] = useState({})

  const [percentage3, setPercentage3] = useState({})

  const [alertToggle, setAlertToggle] = useState(false)

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAssetChange = (e, newInputValue) => {
    const name = e.target.id.slice(0, 6)

    if (newInputValue === null) {
      return
    }

    const newValues = {
      ...portfolioData,
      [name]: newInputValue.code,
    }
    console.log(newValues)
    setPortfolioData(newValues)
  }

  const handlePercentageChange = (e) => {
    const { value, name } = e.target

    const parsedValue = value === '' ? '' : parseFloat(value)
    const selector = name[15]

    if (selector === '1') {
      setPercentage1((prevState) => {
        const updatedNumbers = {
          ...prevState.percentage1,
          [name]: parsedValue,
        }
        const newTotal = calculateTotal(updatedNumbers)
        return {
          percentage1: updatedNumbers,
          agg1: newTotal,
        }
      })
    } else if (selector === '2') {
      setPercentage2((prevState) => {
        const updatedNumbers = {
          ...prevState.percentage2,
          [name]: parsedValue,
        }
        const newTotal = calculateTotal(updatedNumbers)
        return {
          percentage2: updatedNumbers,
          agg2: newTotal,
        }
      })
    } else {
      setPercentage3((prevState) => {
        const updatedNumbers = {
          ...prevState.percentage3,
          [name]: parsedValue,
        }
        const newTotal = calculateTotal(updatedNumbers)
        return {
          percentage3: updatedNumbers,
          agg3: newTotal,
        }
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const myList = [percentage1.agg1, percentage2.agg2, percentage3.agg3]
    const result = myList.some((i) => i === 100 || i === 0 || i === false)
    if (!result) {
      setAlertToggle(true)
      setTimeout(() => setAlertToggle(false), 3000)
      window.scrollTo(0, 0)
    } else {
      console.log(portfolioData)
      temp(formData, portfolioData, percentage1, percentage2, percentage3)
    }
  }

  return (
    <Fragment>
      <Alert color="primary" className="text-center" isOpen={alertToggle}>
        각각의 포트폴리오 자산할당의 합은 100%이여야 합니다.
      </Alert>
      <form class="form" autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <section id="period-form bg-white" class="mt-4">
          <div class="container">
            {/* <!--기초 Form --> */}
            <DefaultForm text="연간 / 월간" options={['연간', '월간']} />

            <YearForm
              text="시작년도"
              options={yearsData}
              onChange={(e) => handleFormChange(e)}
            />

            <YearForm
              text="끝 년도"
              options={yearsData}
              onChange={(e) => handleFormChange(e)}
              end
            />

            <InitCapFrom
              text="초기 자본"
              onChange={(e) => handleFormChange(e)}
            />
          </div>
        </section>

        {/* <!-- 포트폴리오 Form --> */}
        <section id="table" class="mt-4">
          <div class="container">
            <TableHeader />

            {tableFormItem.map((item) => (
              <TableRowForm
                key={item.id}
                id={item.id}
                rowText={item.rowText}
                acId={item.acId}
                onChangeAsset={handleAssetChange}
                onChangePercentage={handlePercentageChange}
                portNameFirst={item.portNameFirst}
                portNameSecond={item.portNameSecond}
                portNameThird={item.portNameThird}
                odd
              />
            ))}
            <TableAggregate
              percentage1={percentage1.agg1}
              percentage2={percentage2.agg2}
              percentage3={percentage3.agg3}
            />
          </div>
        </section>

        {/* <!-- Button --> */}
        <FormButton text="포트폴리오 분석" />
      </form>
    </Fragment>
  )
}

export default connect(null, { temp })(PortfolioForm)
