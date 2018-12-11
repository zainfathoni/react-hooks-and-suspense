import React, { Component } from 'react'
import Counter from './exercises/counter'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="counter">
          <Counter />
        </div>
      </div>
    )
  }
}

export default App
