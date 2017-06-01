import React from 'react'
import Footer from './Footer'
import Footer2 from './Footer2'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterLink2 from '../containers/FilterLink2'

class App extends React.Component {
  state = {
    current: 3,
  };
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return (
      <div>
		   {/* onChange={this.onChange} current={this.state.current}*/}
		   {/* <Footer2 />
		    <Footer />*/}
		    <Footer />
		    <AddTodo />
		    <VisibleTodoList />
	    </div>
    )
  }
}

export default App