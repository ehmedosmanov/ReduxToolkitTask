import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value1: 0,
  value2: 0,
  resultValue: 0
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    sum: (state, action) => {
      state.resultValue = action.payload.value1 + action.payload.value2
      console.log(state.resultValue)
    },
    divide: (state, action) => {
      state.resultValue = action.payload.value1 / action.payload.value2
    },
    multi: (state, action) => {
      state.resultValue = action.payload.value1 * action.payload.value2
    },
    minusNum: (state, action) => {
      state.resultValue = action.payload.value1 - action.payload.value2
    },
    reset: state => {
      state.resultValue = 0
      state.value1 = 0
      state.value2 = 0
    }
  }
})

export const { sum, divide, multi, minusNum, reset } = calculatorSlice.actions

export default calculatorSlice.reducer
