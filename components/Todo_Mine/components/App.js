import React from 'react'
import AddTodo from '../containers/AddTodo'
//import Footer from './Footer'
//import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
   <AddTodo />
   <VisibleTodoList />
{/*    <Footer />
   
    <VisibleTodoList />*/}
  </div>
)

export default App