import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { pageSize } from '../conf.js'

const Pager = (total) => (
  <PaginationF filter="SHOW_PAGE" />
)

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    current: state.jumpPage,
    total: state.todos.length
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (current) => {
      dispatch(setVisibilityFilter(current, ownProps.filter))
    }
  }
}
const setVisibilityFilter = (current, filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
  current
})

let PaginationF = function({ onClick, current, total }) {
  return (
    <Pagination onChange={onClick.bind()} current={current} total={total} pageSize={pageSize} />
  )
}

PaginationF = connect(mapStateToProps, mapDispatchToProps)(PaginationF)

export default Pager