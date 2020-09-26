import React from 'react'

const DefaultForm = ({ text, options }) => {
  return (
    <div class="form-group row">
      <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">
        <strong>{text}</strong>
      </label>
      <div class="col-sm-4">
        <select class="form-control">
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DefaultForm
