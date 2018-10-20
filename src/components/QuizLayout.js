import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'

import { setLevelAction, setCurrentNotes } from '../actions/actions'

class QuizLayout extends Component {
  render () {
    return (
      <div className='quiz-layout'>
        <QuizCard
          level={this.props.levelReducer.level}
          question={this.props.questionReducer}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLevelAction,
    setCurrentNotes
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizLayout)
