import { findIndex } from "lodash"
import { addNewTask } from "helpers/todos"
import { TODOS } from "utils/constants/defaultValues"
import { initTaskInput } from "./constants"

export default {
  changeTaskInput: (state, action) => {
    const { name, value } = action.payload
    state.taskInput[name] = value
  },
  setTaskInput: (state, action) => {
    state.taskInput = {
      ...state.taskInput,
      ...action.payload
    }
  },
  setErrors: (state, action) => {
    state.errors = action.payload
  },
  resetErrors: (state) => {
    state.errors = {}
  },
  createNewTask: (state, action) => {
    const newTodos = addNewTask(action.payload)
    state.todos = newTodos
    state.taskInput = initTaskInput()
  },
  setTodos: (state, action) => {
    state.todos = action.payload
  },
  changeTodosSearchText: (state, action) => {
    state.todosSearchText = action.payload
  },
  updateTodo: (state, action) => {
    const todo = action.payload
    const index = findIndex(state.todos, (item) => item.id === todo.id)
    if (index !== -1) {
      const newTodos = [...state.todos]
      newTodos[index] = todo
      localStorage.setItem(TODOS, JSON.stringify(newTodos))
      state.todos = newTodos
    }
  },
  removeTodo: (state, action) => {
    const id = action.payload
    const index = findIndex(state.todos, (item) => item.id === id)
    if (index !== -1) {
      const newTodos = [...state.todos]
      newTodos.splice(index, 1)
      localStorage.setItem(TODOS, JSON.stringify(newTodos))
      state.todos = newTodos
    }
  },
  setTodosSelected: (state, action) => {
    const id = action.payload
    const index = findIndex(state.todosSelected, (item) => item === id)
    if (index !== -1) {
      state.todosSelected.splice(index, 1)
    } else {
      state.todosSelected.push(id)
    }
  },
  removeTodos: (state) => {
    const newTodos = state.todos.filter((item) => !state.todosSelected.includes(item.id))
    localStorage.setItem(TODOS, JSON.stringify(newTodos))
    state.todos = newTodos
    state.todosSelected = []
  }
}
