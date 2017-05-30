import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Counter, TickTock } from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('counter')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)