import React from 'react'

import { Main } from 'components/layout'
import FormCreate from './components/FormCreate'

function Todos() {
  return (
    <Main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <FormCreate />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Todos
