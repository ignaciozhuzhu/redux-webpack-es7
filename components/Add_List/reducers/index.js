import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import junmpmy from './junmpmy'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  junmpmy
})

export default todoApp