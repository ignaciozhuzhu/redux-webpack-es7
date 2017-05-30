import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  //debugger
  //console.log('active:' + active + '|children:' + children) //+ '|onClick:' + onClick)
  if (active) {
    return <span>{children}</span>
  }

  return (
    <span>
     <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
     >
      {children}
     </a>
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link