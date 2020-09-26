import React from 'react'

const FormButton = ({ text }) => {
  return (
    <div>
      <section id="form-button" class="my-3">
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-6">
              <input
                type="submit"
                value={text}
                className="btn btn-info btn-sm text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormButton
