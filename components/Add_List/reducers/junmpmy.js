const junmpmy = (state = [], action = {}) => {
  //debugger
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      {
        // debugger
        return action.current
      }
    default:
      return 1
  }
}
export default junmpmy