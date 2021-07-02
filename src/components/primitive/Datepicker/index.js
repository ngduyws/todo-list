import React from 'react'
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker'
import { format } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css"
import CustomInput from './CustomInput'

function Datepicker({ label, required, date, name, onChange, errorMessage }) {
  function handleChange(value) {
    onChange({ name, value: format(value, 'MM/dd/yyyy') })
  }

  return (
    <div className={`form-group datepicker-group ${errorMessage ? 'error' : ''}`}>
      {label && <label className={`form-label ${required ? 'required' : ''}`}>{label}</label>}

      <DatePicker
        selected={date ? new Date(date) : ''}
        dateFormat="MM/dd/yyyy"
        onChange={handleChange}
        customInput={<CustomInput />}
        minDate={new Date()}
      />

      {errorMessage && <p className="form-description error">{errorMessage}</p>}
    </div>
  )
}

Datepicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
}

Datepicker.defaultProps = {
  label: '',
  required: true,
  date: '',
  name: '',
  errorMessage: ''
}

export default Datepicker
