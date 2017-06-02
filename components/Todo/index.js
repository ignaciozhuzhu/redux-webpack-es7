import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './components/App'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

window.log = window.console.log;

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )
  //store.dispatch()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)