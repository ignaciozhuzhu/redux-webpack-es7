let nextTodoId = 0
export const addTodo = (text) => {
  //console.log(nextTodoId);
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

import shop from '../api/shop'
//import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: 'GET_DATA',
  data: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    //debugger
    dispatch(receiveProducts(products))
      // dispatch(receiveProducts(products))
  })
}