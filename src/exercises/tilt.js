import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  const tiltRef = useRef()
  useEffect(
    () => {
      VanillaTilt.init(tiltRef.current, {
        'max-glare': 0.5,
        glare: true,
        max: 25,
        speed: 400
      })
      // Return a cleanup function which will be run when the component is unmounted
      return () => tiltRef.current.vanillaTilt.destroy()
    },
    // It will only run one time when the component is initially mounted
    []
  )
  return (
    <div className="tilt-root" ref={tiltRef}>
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
