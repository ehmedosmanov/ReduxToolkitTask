import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './features/calculatorSlice'
import todoReducer from './features/todoSlice'
import averageReducer from './features/averageSlice'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    todoApp: todoReducer,
    sumTotal: averageReducer
  }
})
