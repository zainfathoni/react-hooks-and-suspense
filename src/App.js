import React, { Component } from 'react'
import './App.css'
import Name from './exercises/name'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="name">
          <Name />
        </div>
      </div>
    )
  }
}

export default App
