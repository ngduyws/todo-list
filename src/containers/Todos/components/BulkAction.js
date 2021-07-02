import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import { todosSelectedSelector } from 'store/todos/selectors'
import { removeTodos } from 'store/todos/slice'
import { Button } from 'components/primitive'

function BulkAction() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const todosSelected = useSelector(todosSelectedSelector)

  function handleRemoveMultipleTodos() {
    const confirm = window.confirm(t('todos.list.messages.confirmRemoveMultipleTodos'))

    if (confirm) {
      dispatch(removeTodos())
    }
  }

  if (!todosSelected.length) return null

  return (
    <div className="bulk-action">
      <span className="title">{t('todos.list.bulkActionTitle')}</span>

      <div className="group-buttons">
        <Button
          label={t('commons.button.done')}
          color="primary"
        />
        <Button
          label={t('commons.button.remove')}
          color="danger"
          onClick={handleRemoveMultipleTodos}
        />
      </div>
    </div>
  )
}

export default BulkAction
