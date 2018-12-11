import React, { useEffect, useReducer, useRef } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'CLEAR':
      return {
        ...state,
        lapse: 0,
        running: false
      }
    case 'LAPSE': 
      return {
        ...state,
        lapse: action.now - action.startTime
      }
    case 'TOGGLE_RUNNING':
      return {
        ...state,
        running: !state.running
      }
    default:
      return state
  }
}

function Stopwatch() {
  const [{ running, lapse }, dispatch] = useReducer(reducer, {
    lapse: 0,
    running: false
  })
  const intervalRef = useRef(null)

  // Make sure that the callback function is only run one time and that it returns the cleanup function
  useEffect(() => () => clearInterval(intervalRef.current), [])

  function handleRunClick() {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        dispatch({ now: Date.now(), startTime, type: 'LAPSE' })
      }, 0)
    }
    dispatch({ type: 'TOGGLE_RUNNING' })
  }

  function handleClearClick() {
    clearInterval(intervalRef.current)
    dispatch({ type: 'CLEAR' })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <label
        style={{
          fontFamily: 'monospace',
          fontSize: '5em',
          display: 'block'
        }}
      >
        {lapse}ms
      </label>
      <button onClick={handleRunClick} style={buttonStyles}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleClearClick} style={buttonStyles}>Clear</button>
    </div>
  )
}

export default Stopwatch

const buttonStyles = {
  background: 'none',
  border: '2px solid grey',
  cursor: 'pointer',
  display: 'block',
  fontSize: '3em',
  margin: '16px',
  padding: '16px',
  width: '200px'
}
