import React from 'react'

import { Main } from 'components/layout'
import FormCreate from './components/FormCreate'
import List from './components/List'
import BulkAction from './components/BulkAction'

function Todos() {
  return (
    <Main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <FormCreate />
          </div>

          <div className="col-12 col-lg-7">
            <List />
          </div>
        </div>
      </div>

      <BulkAction />
    </Main>
  )
}

export default Todos
