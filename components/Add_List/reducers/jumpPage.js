const jumpPage = (state = [], action = {}) => {
  // debugger
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      {
        return action.current
      }
    case 'ADD_TODO':
      {
        //debugger
        return action.page
      }
    default:
      return 1
  }
}
export default jumpPage