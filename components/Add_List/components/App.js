import React from 'react'
//import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Pager from '../containers/FilterLink'

class App extends React.Component {
  render() {
    return (
      <div>
		    <Pager />
		    <AddTodo />
		    <VisibleTodoList />
	    </div>
    )
  }
}


export default App