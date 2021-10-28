const initialstate = []
const reducer = (state = initialstate, action) => {
  console.log('action----------------------', action)
  console.log('initial state--------------', initialstate)
  switch (action.type) {
    case 'Add':
      return [...state, action.payload]
    default:
      return state
  }
}
export default reducer
