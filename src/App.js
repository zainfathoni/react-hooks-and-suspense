import React, { Component } from 'react'
import Tilt from './exercises/tilt'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="tilt">
          <Tilt />
        </div>
      </div>
    )
  }
}

export default App
