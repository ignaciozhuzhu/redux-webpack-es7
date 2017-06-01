import React from 'react'
import PropTypes from 'prop-types'

import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css';

const Link = ({ active, children, onClick }) => {
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
      {children}
    </a></b>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link