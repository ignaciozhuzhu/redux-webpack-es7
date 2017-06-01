import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

import Link from '../components/Footer2'
//import Pagination from 'rc-pagination'
//import 'rc-pagination/assets/index.css';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink