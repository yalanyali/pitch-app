export default (state = { 'level': 1 }, action) => {
  switch (action.type) {
    case 'SET_LEVEL':
      return {
        payload: action.payload
      }
    default:
      return state
  }
}
