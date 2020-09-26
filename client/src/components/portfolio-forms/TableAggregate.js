import React from 'react'

const TableAggregate = ({ percentage1, percentage2, percentage3 }) => {
  return (
    <div class="row my-3 align-items-center ">
      <div class="col-sm-5"></div>
      <div class="col-sm-2 input-group input-group-sm">
        <input
          type="number"
          class="form-control"
          name="agg1"
          disabled
          defaultValue={percentage1}
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
          disabled
          defaultValue={percentage2}
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
          disabled
          defaultValue={percentage3}
        />
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>
    </div>
  )
}

export default TableAggregate
