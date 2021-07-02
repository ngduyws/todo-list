import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { removeTodo, setTodosSelected } from 'store/todos/slice'
import { Button } from 'components/primitive'
import FormEdit from './FormEdit'

function Todo({ todo, checked }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { title, id } = todo
  const [open, setOpen] = useState(false)

  function toggleCollapse() {
    setOpen(!open)
  }

  function handleRemove() {
    const confirm = window.confirm(t('todos.list.messages.confirmRemove'))

    if (confirm) {
      dispatch(removeTodo(id))
    }
  }

  function handleChange() {
    dispatch(setTodosSelected(id))
  }

  return (
    <div className="collapse">
      <div className="collapse__header">
        <div className="title">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <p className="todo-title">{title}</p>
        </div>

        <div className="group-buttons">
          <Button
            label={t('commons.button.detail')}
            color="turquoise"
            onClick={toggleCollapse}
          />
          <Button
            label={t('commons.button.remove')}
            color="danger"
            onClick={handleRemove}
          />
        </div>
      </div>

      <div className={`collapse__content ${open ? 'active' : ''}`}>
        <FormEdit open={open} todo={todo} toggleCollapse={toggleCollapse} />
      </div>
    </div>
  )
}

export default Todo
