import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import { TODOS } from 'utils/constants/defaultValues'
import { todosSearchTextSelector, todosFilteredSelector, todosSelectedSelector } from 'store/todos/selectors'
import { changeTodosSearchText, setTodos } from 'store/todos/slice'
import { Card } from 'components/primitive'
import { FormGroup } from 'components/compound'
import Todo from './Todo'

function List() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const todosFiltered = useSelector(todosFilteredSelector)
  const todosSearchText = useSelector(todosSearchTextSelector)
  const todosSelected = useSelector(todosSelectedSelector)

  useEffect(() => {
    function initTodos() {
      const todos = localStorage.getItem(TODOS)
      if (todos) {
        dispatch(setTodos(JSON.parse(todos)))
      }
    }

    initTodos()

    document.addEventListener('storage', initTodos)

    return document.removeEventListener('storage', initTodos)
  }, [])

  function handleChangeSearch({ value }) {
    dispatch(changeTodosSearchText(value))
  }

  return (
    <Card title={t('todos.list.title')}>
      <FormGroup
        placeholder={t('todos.list.searchPlaceholder')}
        value={todosSearchText}
        onChange={handleChangeSearch}
      />

      <div className="list-todos">
        {todosFiltered.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            checked={todosSelected.includes(todo.id)}
          />
        ))}
      </div>
    </Card>
  )
}

export default List
