export const Addbook = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'Add',
      payload: value,
    })
  }
}
export const emptyCart = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'Empty',
      payload: value,
    })
  }
}
export const Deleteindex = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'Delete',
      payload: value,
    })
  }
}
