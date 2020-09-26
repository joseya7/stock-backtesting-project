import React from 'react'
// import './YearForm.css'

const YearForm = ({ text, options, onChange, end }) => {
  return (
    <div class="form-group row">
      <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">
        <strong>{text}</strong>
      </label>
      <div class="col-sm-4">
        <select
          class="form-control"
          onChange={(event) => onChange(event)}
          name={end ? 'endYear' : 'startYear'}
          selected="2020"
        >
          {options.map((option) => (
            <option value={option} selected={end && '2020'}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default YearForm
