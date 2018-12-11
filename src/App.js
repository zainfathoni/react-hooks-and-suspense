import React, { Component } from 'react'
import './App.css'
import ToggledTilt from './exercises/toggled-tilt'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="tilt">
          <ToggledTilt />
        </div>
      </div>
    )
  }
}

export default App
