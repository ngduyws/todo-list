import { createSlice } from '@reduxjs/toolkit'

import reducers from './reducers';
import { initTaskInput } from './constants'

const initialState = {
  taskInput: initTaskInput(),
  errors: {},
  todosSearchText: '',
  todosSelected: []
}

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers
})

export const {
  changeTaskInput,
  setTaskInput,
  setErrors,
  resetErrors,
  createNewTask,
  setTodos,
  changeTodosSearchText,
  updateTodo,
  removeTodo,
  setTodosSelected,
  removeTodos
} = slice.actions

export default slice.reducer
