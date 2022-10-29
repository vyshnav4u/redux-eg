import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 20,
    count: 0
  }

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.count += 1
      },
      decrement: (state) => {
        state.count -= 1
      },
      double: (state, action) => {
        state.count += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const actions = counterSlice.actions
  export const counterReducer = counterSlice.reducer;