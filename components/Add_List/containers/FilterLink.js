import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
//import Link from '../components/Link'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const Pager = (total) => (
  <div>
    Show:
    {" "}
    <Pagination2 filter="SHOW_PAGE" />
  </div>
)

const mapStateToProps3 = (state, ownProps) => {
  return {
    current: state.junmpmy
  }
}

const mapDispatchToProps3 = (dispatch, ownProps) => {

  return {
    onClick: (aa) => {
      dispatch(setVisibilityFilter44(aa, ownProps.filter))
    }
  }
}
const setVisibilityFilter44 = (current, filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
  current
})

let Pagination2 = function({ onClick, current }) {
  //debugger
  return (
    <Pagination onChange={onClick.bind()} current={current} total={25} />
  )
}
Pagination2 = connect(mapStateToProps3, mapDispatchToProps3)(Pagination2)

export default Pager