import { combineReducers } from 'redux'
import levelReducer from './levelReducer'
import questionReducer from './questionReducer'

export default combineReducers({
  levelReducer,
  questionReducer
})
