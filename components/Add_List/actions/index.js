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

const serviceurl = "http://localhost:8080/api/"
import { fetch_get } from '../../../lib/common.js';
import 'whatwg-fetch'
var login2 = {
  "mobile": "13569453581",
  "password": "123456",
  "role": "3",
};
var login = function() {
  fetch(serviceurl + "site/userLogin", {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login2)
    }).then(response => response.json())
    .then(dt => {
      console.log("login" + JSON.stringify(dt));
      if (dt.status == "success") {
        //debugger
      } else if (dt.status == "error") {
        toast.show(dt.message);
        return;
      }
    })
    .catch(xhr => toast.show(xhr.responseJSON ? xhr.responseJSON : xhr.message))
}
login();

let data = {
  currentPage: 1
}
fetch_get(serviceurl + "patient/listHosPatientByPage", data).then(response => response.json())
  .then(dt => {
    console.table(dt)
  })
  .catch(xhr => toast.show(xhr.responseJSON ? xhr.responseJSON : xhr.message))
  //url: serviceurl + "patient/listHosPatientByPage",

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