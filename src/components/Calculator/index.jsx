import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import {
  divide,
  multi,
  minusNum,
  sum,
  reset
} from '../../features/calculatorSlice'

const Calculator = () => {
  const [number, setNumber] = useState('')
  const [number2, setNumber2] = useState('')
  const result = useSelector(state => state.calculator.resultValue)

  const dispatch = useDispatch()
  const handleChangeFirst = e => {
    setNumber(e.target.value)
  }

  const handleChangeSecond = e => {
    setNumber2(e.target.value)
  }

  const handleSumDispatch = () => {
    dispatch(
      sum({
        value1: parseInt(number),
        value2: parseInt(number2)
      })
    )
  }

  const handleDivideDispatch = () => {
    if (number2 !== 0) {
      dispatch(
        divide({
          value1: parseInt(number),
          value2: parseInt(number2)
        })
      )
    } else {
      alert('0 ue bolunmur')
    }
  }

  const handleMultiDispatch = () => {
    dispatch(
      multi({
        value1: parseInt(number),
        value2: parseInt(number2)
      })
    )
  }

  const handleMinusDispatch = () => {
    dispatch(
      minusNum({
        value1: parseInt(number),
        value2: parseInt(number2)
      })
    )
  }

  const resetInputs = () => {
    dispatch(reset())
    clearInputs()
  }
  const clearInputs = () => {
    setNumber('')
    setNumber2('')
  }
  return (
    <div className='calculator'>
      <div className='number'>
        <div className='input-box'>
          <input
            type='number'
            value={number}
            onChange={e => handleChangeFirst(e)}
          />
        </div>
        <div className='input-box'>
          <input
            type='number'
            value={number2}
            onChange={e => handleChangeSecond(e)}
          />
        </div>
      </div>
      <div className='actions'>
        <div>
          <button className='btn' onClick={handleSumDispatch}>
            +
          </button>
        </div>
        <div>
          <button className='btn' onClick={handleMinusDispatch}>
            -
          </button>
        </div>
        <div>
          <button className='btn' onClick={handleMultiDispatch}>
            *
          </button>
        </div>
        <div>
          <button className='btn' onClick={handleDivideDispatch}>
            /
          </button>
        </div>
        <div>
          <button className='btn' onClick={resetInputs}>
            C
          </button>
        </div>
      </div>
      <div className='result'>{result.toFixed(2)}</div>
    </div>
  )
}

export default Calculator
