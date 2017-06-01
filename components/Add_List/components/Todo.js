import React from 'react'
import PropTypes from 'prop-types'

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

export default Todo