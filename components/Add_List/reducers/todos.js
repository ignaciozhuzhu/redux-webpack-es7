const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      //  debugger
      return {
        id: action.id,
        text: action.text,
        important: action.important || false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        important: !state.important
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'GET_DATA':
      return action.data
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos