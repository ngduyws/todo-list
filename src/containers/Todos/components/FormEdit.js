import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { trim, isEmpty } from 'lodash'

import { prioritiyOptions } from 'utils/constants/enums'
import { validateTaskInput } from 'validations/todos'
import { Card, Button, Datepicker, Select } from 'components/primitive'
import { FormGroup } from 'components/compound'
import { updateTodo } from 'store/todos/slice'

function FormEdit({ open, todo, toggleCollapse }) {
  const { t } = useTranslation()
  const getLabel = (key) => t(`todos.formSetting.${key}`)
  const dispatch = useDispatch()
  const initTodo = () => ({
    title: todo.title,
    description: todo.description,
    dueDate: todo.dueDate,
    priority: todo.priority
  })
  const [newTodo, setNewTodo] = useState(initTodo())
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!open) {
      setNewTodo(initTodo())
    }
  }, [open])

  const prioritiyOptionsConverted = Object.keys(prioritiyOptions).map(key => ({
    label: t(`todos.prioritiyOptions.${key}`),
    value: key
  }))

  function handleChange({ name, value }) {
    setNewTodo({
      ...newTodo,
      [name]: value
    })
  }

  function handleSubmit() {
    const validTodo = {
      ...newTodo,
      title: trim(newTodo.title)
    }
    setNewTodo(validTodo)
    const errors = validateTaskInput(validTodo)

    if (!isEmpty(errors)) {
      setErrors(errors)
    } else {
      dispatch(updateTodo({ ...validTodo, id: todo.id }))
      setNewTodo(initTodo())
      toggleCollapse()
    }
  }

  return (
    <Card
      className="px-0 py-0 border-0"
    >
      <FormGroup
        name="title"
        value={newTodo.title}
        onChange={handleChange}
        errorMessage={errors.title}
      />

      <FormGroup
        type="textarea"
        label={getLabel('descriptionLabel')}
        name="description"
        value={newTodo.description}
        onChange={handleChange}
        errorMessage={errors.description}
      />

      <div className="row">
        <div className="col-6">
          <Datepicker
            label={getLabel('dueDateLabel')}
            name="dueDate"
            date={newTodo.dueDate}
            onChange={handleChange}
            errorMessage={errors.dueDate}
          />
        </div>

        <div className="col-6">
          <Select
            label={getLabel('priorityLabel')}
            options={prioritiyOptionsConverted}
            name="priority"
            value={newTodo.priority}
            onChange={handleChange}
            errorMessage={errors.priority}
          />
        </div>
      </div>

      <div className="text-center">
        <Button
          label={t('commons.button.update')}
          color="success"
          className="w-100"
          onClick={handleSubmit}
        />
      </div>
    </Card>
  )
}

export default FormEdit
