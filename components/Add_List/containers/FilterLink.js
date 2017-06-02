import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const Pager = (total) => (
  <div>
    Show:
    {" "}
    <PaginationF filter="SHOW_PAGE" />
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    current: state.jumpPage
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

let PaginationF = function({ onClick, current }) {
  return (
    <Pagination onChange={onClick.bind()} current={current} total={25} />
  )
}

PaginationF = connect(mapStateToProps, mapDispatchToProps)(PaginationF)

export default Pager