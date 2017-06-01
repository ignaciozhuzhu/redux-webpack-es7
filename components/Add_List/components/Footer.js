import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      全部
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      黑
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      红
    </FilterLink>
  </p>
)

export default Footer