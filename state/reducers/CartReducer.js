const reducer = (state = [], action) => {
  switch (action.type) {
    case 'Add':
      return [...state, action.payload]
    case 'Empty':
      return (state = action.payload)
    case 'Delete':
      state.splice(action.payload, 1)
    default:
      return state
  }
}
export default reducer
