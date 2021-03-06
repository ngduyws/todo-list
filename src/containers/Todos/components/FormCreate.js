import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { trim, isEmpty } from 'lodash'

import { prioritiyOptions } from 'utils/constants/enums'
import { validateTaskInput } from 'validations/todos'
import { errorsSelector, taskInputSelector } from 'store/todos/selectors'
import {
  changeTaskInput,
  setTaskInput,
  setErrors,
  resetErrors,
  createNewTask
} from 'store/todos/slice'
import { Card, Button, Datepicker, Select } from 'components/primitive'
import { FormGroup } from 'components/compound'

function FormCreate() {
  const { t } = useTranslation()
  const getLabel = (key) => t(`todos.formSetting.${key}`)
  const taskInput = useSelector(taskInputSelector)
  const errors = useSelector(errorsSelector)
  const dispatch = useDispatch()
  const { title, description, dueDate, priority } = taskInput

  const prioritiyOptionsConverted = Object.keys(prioritiyOptions).map(key => ({
    label: t(`todos.prioritiyOptions.${key}`),
    value: key
  }))

  function handleChange(payload) {
    dispatch(changeTaskInput(payload))
  }

  function handleSubmit() {
    dispatch(resetErrors())

    const dataTrimed = {
      dueDate,
      priority,
      title: trim(title),
      description: trim(description)
    }

    dispatch(setTaskInput(dataTrimed))

    const errors = validateTaskInput(dataTrimed)

    if (!isEmpty(errors)) {
      dispatch(setErrors(errors))
    } else {
      dispatch(createNewTask(dataTrimed))
    }
  }

  return (
    <Card
      title={getLabel('titleNewTask')}
    >
      <FormGroup
        placeholder={getLabel('taskNamePlaceholder')}
        name="title"
        value={title}
        onChange={handleChange}
        errorMessage={errors.title}
      />

      <FormGroup
        type="textarea"
        label={getLabel('descriptionLabel')}
        name="description"
        value={description}
        onChange={handleChange}
        errorMessage={errors.description}
      />

      <div className="row">
        <div className="col-6">
          <Datepicker
            label={getLabel('dueDateLabel')}
            name="dueDate"
            date={dueDate}
            onChange={handleChange}
            errorMessage={errors.dueDate}
          />
        </div>

        <div className="col-6">
          <Select
            label={getLabel('priorityLabel')}
            options={prioritiyOptionsConverted}
            name="priority"
            value={priority}
            onChange={handleChange}
            errorMessage={errors.priority}
          />
        </div>
      </div>

      <div className="text-center">
        <Button
          label={t('commons.button.add')}
          color="success"
          className="w-100"
          onClick={handleSubmit}
        />
      </div>
    </Card>
  )
}

export default FormCreate
