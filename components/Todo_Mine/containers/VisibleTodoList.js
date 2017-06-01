import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
//import getVisibleTodos from '../reducers/getVisibleTodos'

const mapStateToProps = function(state) {
  //debugger
  log(state)
  return {
    todos: state.todos
      // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

/*const mapDispatchToProps = () => ({
  onTodoClick: toggleTodo
})*/

const VisibleTodoList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(TodoList)

export default VisibleTodoList