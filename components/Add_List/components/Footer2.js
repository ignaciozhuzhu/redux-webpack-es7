/*import React from 'react'
import FilterLink from '../containers/FilterLink2'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      全部
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      黑的
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      红的
    </FilterLink>
  </p>
)

export default Footer*/

import React from 'react'
import PropTypes from 'prop-types'

import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css';

const Link = ({ active, onClick }) => {
  /*  if (active) {
      return <span>{children}</span>
    }*/

  /*  return (
      <Pagination onChange={onClick} filter="SHOW_ALL" current={1} total={25} />
    )*/
  return (
    <b><a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      123
    </a></b>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link