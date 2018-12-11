import React, { Component } from 'react'
import './App.css'
import Stopwatch from './exercises/stopwatch'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="stopwatch">
          <Stopwatch />
        </div>
      </div>
    )
  }
}

export default App
