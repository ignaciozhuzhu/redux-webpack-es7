let nextTodoId = 0
export const addTodo = (text, page) => {
  //console.log(nextTodoId);
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    page: page
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

const receiveProducts1Page = products => ({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_PAGE',
  current: 1
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    //debugger
    dispatch(receiveProducts(products))
      // dispatch(receiveProducts(products))
  })
}