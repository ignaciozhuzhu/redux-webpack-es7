import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { pageSize } from '../conf.js'

let AddTodo = ({ dispatch, page }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        //debugger
        dispatch(addTodo(input.value, page))
        input.value = ''
      }}>
        <input ref={node => {
          //debugger
          if(node){
            node.focus()
            input = node
          }
        }} />
        <button type="submit">
          添加
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  //debugger
  return {
    page: parseInt(state.todos.length / pageSize) + 1
  }
}

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo