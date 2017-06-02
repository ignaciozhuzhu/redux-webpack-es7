const jumpPage = (state = [], action = {}) => {
  //debugger
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      {
        return action.current
      }
    default:
      return 1
  }
}
export default jumpPage