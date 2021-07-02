import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todosReducer from './todos/slice'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
})
