import React from 'react'

function Stopwatch() {
  return (
    <div style={{textAlign: 'center'}}>
      <label
        style={{
          fontSize: '5em',
          display: 'block'
        }}
      >
        0ms
      </label>
      <button style={buttonStyles}>Start</button>
      <button style={buttonStyles}>Clear</button>
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
