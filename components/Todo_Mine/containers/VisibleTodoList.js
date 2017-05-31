import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import getVisibleTodos from '../reducers/getVisibleTodos'

const mapStateToProps = function(state) {
  debugger
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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