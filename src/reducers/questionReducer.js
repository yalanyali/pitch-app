const defaultState = {
  'notes': ['e', 'f', 'f#'],
  'answer': 'e'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_QUESTION':
      return {
        payload: action.payload
      }
    default:
      return state
  }
}
