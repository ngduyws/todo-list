import React from 'react'

import PropTyes from 'prop-types'

function Card({ className, children, title }) {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card__title">{title}</h3>}
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTyes.string,
  children: PropTyes.node.isRequired,
  title: PropTyes.string
}

Card.defaultProps = {
  className: '',
  title: ''
}

export default Card
