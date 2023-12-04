import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, editTodo, removeTodo } from '../../features/todoSlice.js'
import './index..scss'

const TodoList = () => {
  const [text, setText] = useState('')
  const [editId, setEditId] = useState('')
  const [editMode, setEditMode] = useState(false)

  const myTodo = useSelector(state => state.todoApp.todoList)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          todoText: text
        })
      )
      setText('')
    }
  }

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id))
  }

  const handleEditTodo = id => {
    setEditMode(true)
    setEditId(id)
    setText(myTodo.find(item => item.id === id).todoText)
  }

  const handleSaveTodo = () => {
    dispatch(
      editTodo({
        todoId: editId,
        updateText: text
      })
    )
    setEditMode(false)
    setEditId('')
    setText('')
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      if (editMode) {
        handleSaveTodo()
      } else {
        handleAddTodo()
      }
    }
  }
  return (
    <div className='todo'>
      <div className='top-todo'>
        <div className='todo-box'>
          <input
            className='todo-inp'
            type='text'
            placeholder='Enter Todo'
            value={text}
            onKeyDown={handleKeyDown}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className='todo-list'>
        <ul className='list'>
          {myTodo &&
            myTodo.map(item => (
              <li key={item.id}>
                <p>{item.todoText}</p>
                <div className='btns'>
                  <button
                    className='remove-btn'
                    onClick={() => handleRemoveTodo(item.id)}>
                    Remove
                  </button>

                  {editMode && item.id === editId ? (
                    <button className='save-btn' onClick={handleSaveTodo}>
                      Save
                    </button>
                  ) : (
                    <button
                      className='edit-btn'
                      onClick={() => handleEditTodo(item.id)}>
                      Edit
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
