import { TODOS } from 'utils/constants/defaultValues'

export function addNewTask(data) {
  const newTodo = {
    id: new Date().getTime(),
    ...data
  }

  const currentTodos = JSON.parse(localStorage.getItem(TODOS))

  let newTodos = currentTodos || []

  newTodos.push(newTodo)

  localStorage.setItem(TODOS, JSON.stringify(newTodos))

  return newTodos
}
