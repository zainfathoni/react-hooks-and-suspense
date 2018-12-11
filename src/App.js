import React, { Component } from 'react'
import './App.css'
import Pokemon from './exercises/pokemon'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="pokemon">
          <Pokemon />
        </div>
      </div>
    )
  }
}

export default App
