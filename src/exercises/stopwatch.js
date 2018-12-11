import React, { useEffect, useReducer, useRef } from 'react'

function reducer(currentState, newState) {
  return {...currentState, ...newState}
}

function useStopwatch() {
  const [{ running, lapse }, setState] = useReducer(reducer, {
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
        setState({ lapse: Date.now() - startTime })
      }, 0)
    }
    setState({ running: !running })
  }

  function handleClearClick() {
    clearInterval(intervalRef.current)
    setState({ lapse: 0, running: false })
  }

  return {handleClearClick, handleRunClick, lapse, running}
}

function Stopwatch() {
  const stopwatchOne = useStopwatch()
  const stopwatchTwo = useStopwatch()

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <label
          style={{
            fontFamily: 'monospace',
            fontSize: '5em',
            display: 'block'
          }}
        >
          {stopwatchOne.lapse}ms
        </label>
        <button onClick={stopwatchOne.handleRunClick} style={buttonStyles}>{stopwatchOne.running ? 'Stop' : 'Start'}</button>
        <button onClick={stopwatchOne.handleClearClick} style={buttonStyles}>Clear</button>
      </div>
      <hr />
      <strong>Lapse Difference:</strong>
      <span>{stopwatchOne.lapse - stopwatchTwo.lapse}ms</span>
      <hr />
      <div style={{textAlign: 'center'}}>
        <label
          style={{
            fontFamily: 'monospace',
            fontSize: '5em',
            display: 'block'
          }}
        >
          {stopwatchTwo.lapse}ms
        </label>
        <button onClick={stopwatchTwo.handleRunClick} style={buttonStyles}>{stopwatchTwo.running ? 'Stop' : 'Start'}</button>
        <button onClick={stopwatchTwo.handleClearClick} style={buttonStyles}>Clear</button>
      </div>
    </>
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
