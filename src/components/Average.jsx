import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValues, calcSubTotal } from '../features/averageSlice'

const Average = () => {
  const count = useSelector(state => state.sumTotal.totalValue)
  const dispatch = useDispatch()
  const [text, setText] = useState(0)
  const [value, setValue] = useState(0)

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleChange2 = e => {
    setValue(e.target.value)
  }

  const handleCalculate = () => {
    dispatch(
      setValues({
        value1: parseInt(text),
        value2: parseInt(value)
      })
    )
    dispatch(calcSubTotal())
  }
  return (
    <div>
      <input type='number' onChange={e => handleChange(e)} />
      <input type='number' onChange={e => handleChange2(e)} />
      <p>${text}</p>
      <p>${value}</p>
      <p>${count}</p>
      <button onClick={handleCalculate}>hesablar</button>
    </div>
  )
}

export default Average
