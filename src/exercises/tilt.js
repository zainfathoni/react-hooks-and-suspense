import React from 'react'
// import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  return (
    <div className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}

function Usage() {
  return (
    <div className="totally-centered">
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  )
}

export default Usage
