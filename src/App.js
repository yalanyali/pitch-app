import React, { Component } from 'react'

import './App.css'
import TopBar from './components/TopBar'
import QuizLayout from './components/QuizLayout'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TopBar />
        <QuizLayout />
      </div>
    )
  }
}

export default App
