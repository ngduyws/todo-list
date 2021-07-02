import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers';

const initialState = {
}

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount
} = slice.actions

export default slice.reducer
