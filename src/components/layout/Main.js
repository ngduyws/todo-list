import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from 'components/layout'


function Main({ children }) {
  return (
    <React.Fragment>
      <Header />

      <div className="main-container">
        {children}
      </div>

      <Footer />
    </React.Fragment>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
