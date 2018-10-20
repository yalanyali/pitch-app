export const setLevelAction = (payload) => dispatch => {
  dispatch({
    type: 'SET_LEVEL',
    payload: payload
  })
}

export const setCurrentNotes = (payload) => dispatch => {
  dispatch({
    type: 'SET_CURRENT_NOTES',
    payload: payload
  })
}
