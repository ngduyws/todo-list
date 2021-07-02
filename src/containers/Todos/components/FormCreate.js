import React from 'react'
import { useTranslation } from 'react-i18next'

import { Card, Button } from 'components/primitive'
import { FormGroup } from 'components/compound'

function FormCreate() {
  const { t } = useTranslation()
  const getLabel = (key) => t(`todos.formCreate.${key}`)

  return (
    <Card title={getLabel('title')}>
      <FormGroup
        placeholder={getLabel('taskNamePlaceholder')}
        name="name"
      />

      <FormGroup
        type="textarea"
        label={getLabel('descriptionLabel')}
        name="description"
      />

      <div className="text-center">
        <Button
          label="Add new"
          color="success"
        />
      </div>
    </Card>
  )
}

export default FormCreate
