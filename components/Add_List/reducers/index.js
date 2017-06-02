import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import jumpPage from './jumpPage'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  jumpPage
})

export default todoApp