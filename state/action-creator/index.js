export const Addbook = (value) => {
  console.log('value sending---------------------------------', value)
  return (dispatch) => {
    dispatch({
      type: 'Add',
      payload: value,
    })
  }
}
