import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    removeTodo: (state, action) => {
      const removeTodoId = action.payload
      state.todoList = state.todoList.filter(x => x.id !== removeTodoId)
    },
    editTodo: (state, action) => {
      const todoEditId = action.payload.todoId
      const updatedText = action.payload.updateText
      const findTodo = state.todoList.find(x => x.id === todoEditId)
      findTodo.todoText = updatedText
    }
  }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
