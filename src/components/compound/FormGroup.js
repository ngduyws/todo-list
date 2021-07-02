import React from 'react'
import PropTypes from 'prop-types'

function FormGroup({
  label, placeholder, value, onChange, name, type, className
}) {
  function handleChange(e) {
    const { name, value } = e.target
    onChange({ name, value })
  }

  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label">{label}</label>}
      {type === 'textarea' && (
        <textarea
          className="form-control"
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          rows={5}
        />
      )}
      {type === 'text' && (
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
        />
      )}
    </div>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text, textarea']),
  className: PropTypes.string
}

FormGroup.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  value: '',
  type: 'text',
  className: ''
}

export default FormGroup
