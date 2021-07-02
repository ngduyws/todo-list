import React from 'react'
import PropTypes from 'prop-types';

function Button({ label, className, onClick, color }) {
  return (
    <button
      className={`btn ${className} ${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['success', 'primary', 'danger', 'turquoise'])
}

Button.defaultProps = {
  onClick: () => {},
  color: 'primary'
}

export default Button
