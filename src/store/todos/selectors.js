import { createSelector } from '@reduxjs/toolkit';
import { orderBy } from 'lodash';

export const todosMasterSelector = (state) => state.todos

export const taskInputSelector = createSelector(
  [todosMasterSelector],
  (state) => state.taskInput
)

export const errorsSelector = createSelector(
  [todosMasterSelector],
  (state) => state.errors
)

export const todosSelector = createSelector(
  [todosMasterSelector],
  (state) => state.todos
)

export const todosSortedSelector = createSelector(
  [todosSelector],
  (todos) => orderBy(
    todos,
    [(item) => new Date(item.dueDate).getTime()],
    ['asc']
  )
)

export const todosSearchTextSelector = createSelector(
  [todosMasterSelector],
  (state) => state.todosSearchText
)

export const todosFilteredSelector = createSelector(
  [todosSortedSelector, todosSearchTextSelector],
  (todos, todosSearchText) => todos.filter((item) => !todosSearchText || item.title.includes(todosSearchText))
)

export const todosSelectedSelector = createSelector(
  [todosMasterSelector],
  (state) => state.todosSelected
)