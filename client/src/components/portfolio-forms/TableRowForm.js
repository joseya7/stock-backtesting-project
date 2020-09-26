import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { tickerNameData } from '../../fixtures/ticker-name'

const TableRowForm = ({
  key,
  id,
  rowText,
  onChangeAsset,
  acId,
  onChangePercentage,
  portNameFirst,
  portNameSecond,
  portNameThird,
}) => {
  return (
    <div
      class={`row my-2 py-2 align-items-center ${
        [2, 4, 6, 8, 10].includes(id) ? 'bg-light' : ''
      }`}
    >
      <div class="col-sm-2">{rowText}</div>
      <div class="col-sm-3 input-group input-group-sm">
        <Autocomplete
          id={acId}
          options={tickerNameData}
          onChange={onChangeAsset}
          getOptionLabel={(option) => option.name}
          size="small"
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              className="inputRounded"
              {...params}
              variant="outlined"
            />
          )}
        />
      </div>
      <div class="col-sm-2 input-group input-group-sm">
        <input
          type="text"
          class="form-control"
          onChange={(event) => onChangePercentage(event)}
          name={portNameFirst}
        />
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <div class="col-sm-2 input-group input-group-sm">
        <input
          type="text"
          class="form-control"
          onChange={(event) => onChangePercentage(event)}
          name={portNameSecond}
        />
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <div class="col-sm-2 input-group input-group-sm">
        <input
          type="text"
          class="form-control"
          onChange={(event) => onChangePercentage(event)}
          name={portNameThird}
        />
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>
    </div>
  )
}

export default TableRowForm
