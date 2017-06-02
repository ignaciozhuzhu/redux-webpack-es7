import React from 'react'
import PropTypes from 'prop-types'
//import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  // debugger
  //if (todos.length > 0)
  return (<ul>

     
    { 
       todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
      )
    }
  </ul>)
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    important: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

const Todo = ({ onClick, important, text }) => {
  return (
    <li onClick={onClick} style={{ color: important ? 'red' : 'black' }}  >
      {text}
    </li>)
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  important: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoList