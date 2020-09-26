import React from 'react'

const InitCapForm = ({ text, onChange }) => {
  return (
    <div class="form-group row">
      <label for="timePeriod" class="col-sm-4 col-form-label">
        <strong>{text}</strong>
      </label>
      <div class="col-sm-4 input-group">
        <input
          type="number"
          class="form-control"
          name="initialAmount"
          defaultValue="1000000"
          onChange={(event) => onChange(event)}
        />
        <div class="input-group-append">
          <span class="input-group-text">￦</span>
        </div>
      </div>
    </div>
  )
}

export default InitCapForm
