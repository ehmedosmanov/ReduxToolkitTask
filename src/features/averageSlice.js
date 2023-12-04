import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value1: 0,
  value2: 0,
  totalValue: 0
}

export const sumTotal = createSlice({
  name: 'sumTotal',
  initialState,
  reducers: {
    setValues: (state, action) => {
      console.log(action)
      state.value1 = action.payload.value1
      state.value2 = action.payload.value2
    },
    calcSubTotal: state => {
      state.totalValue = (state.value1 + state.value2) / 2
    }
  }
})

export const { setValues, calcSubTotal } = sumTotal.actions
export default sumTotal.reducer
